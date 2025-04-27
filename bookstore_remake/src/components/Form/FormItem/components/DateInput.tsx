import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { customWeekStarEndFormat, getDateFormat } from "../../../../utils/date";
import { DATE_FORMAT } from "../../../../constants/common/common";

const { RangePicker } = DatePicker;

type NoUndefineRangeValueType<DateType> = [
    start: DateType | null,
    end: DateType | null,
];

type Props = {
    value: any,
    onChange?: (date: Dayjs | null, dateString: string) => void,
    formatDatetime?: string,
    placeholder?: string,
    size?: 'small' | 'middle' | 'large',
    disabled?: boolean,
    showTime?: boolean,
    style: any,
    className?: string,
    suffixIcon?: any,
    allowClear?: boolean,
    name: string,
    disabledDate?: (current: any) => boolean,
}

type RangePickerProps = Omit<Props, 'onChange'> & {
    onChange?: (
        dates: NoUndefineRangeValueType<Dayjs> | null,
        dateStrings: [string, string]
    ) => void;
};

export const DatePickerInput = ({
    name,
    onChange,
    placeholder,
    showTime,
    size,
    style,
    value,
    allowClear,
    className,
    disabled,
    disabledDate,
    formatDatetime,
    suffixIcon
}: Props) => {
    const format = useMemo(() => getDateFormat(value), [value]);
    const [panelDate, setPanelDate] = useState<Dayjs>();

    return (
        <div id={name}>
            <DatePicker
                name={name}
                id={name}
                value={value ? dayjs(value, format) : undefined}
                onChange={(date: Dayjs | null) => {
                    if (!onChange) return;
                    const dateString = date ? dayjs(date).format(DATE_FORMAT.DATE) : '';
                    onChange(date, dateString)
                }}
                size={size}
                format={format}
                className={className}
                showTime={showTime}
                style={{ width: '100%', ...style }}
                disabled={disabled}
                placeholder={placeholder ?? 'Nhập'}
                allowClear={allowClear}
                disabledDate={disabledDate}
                pickerValue={panelDate}
                onPanelChange={date => {
                    setPanelDate(date);
                }}
            ></DatePicker>
        </div >
    )
}

export const RangePickerInput = ({
    name,
    onChange,
    placeholder,
    showTime,
    size,
    style,
    value,
    allowClear,
    className,
    disabled,
    disabledDate,
    formatDatetime,
    suffixIcon
}: RangePickerProps) => {
    return (
        <div id={name}>
            <RangePicker
                className={className}
                suffixIcon={suffixIcon}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                format={formatDatetime ?? DATE_FORMAT.DATE}
                style={{ width: '100%', ...style }}
                size={size}
                allowClear={allowClear}
                disabled={disabled}
                placeholder={['From date', 'To date']}
            ></RangePicker>
        </div >
    )
}


export const WeekPickerInput = ({
    name,
    onChange,
    placeholder,
    size,
    style,
    value,
    disabled,
}: Props) => {
    return (
        <div id={name}>
            <DatePicker
                defaultValue={dayjs()}
                format={customWeekStarEndFormat}
                picker="week"
                name={name}
                value={value}
                disabled={disabled}
                size={size}
                style={{ width: '100%', ...style }}
                placeholder={placeholder ?? 'Nhập'}
                className='date-picker-custom'
                onChange={(date: Dayjs | null) => {
                    if (!onChange) return;
                    const dateString = date ? dayjs(date).format(DATE_FORMAT.DATE) : '';
                    onChange(date, dateString);
                }}
            ></DatePicker>
        </div >
    )
}   