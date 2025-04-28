import React, { ReactNode } from "react";
import { TYPE_FIELD } from "../../../constants/enum/common";
import { Checkbox, Col, Form, Row, theme } from "antd";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import RadioInput from "./components/RadioInput";
import PasswordInput from "./components/PasswordInput";
import { DatePickerInput, RangePickerInput, WeekPickerInput } from "./components/DateInput";
import { DATE_FORMAT } from "../../../constants/common/common";
import AutoCompleteInput from "./components/AutoComplete";
import './style.scss';
import { TOption } from "../../../constants/types/common";

export type InputProps = {
    name: string;
    span?: number;
    key?: string;
    value: any;
    type: (typeof TYPE_FIELD)[keyof typeof TYPE_FIELD];
    icon?: ReactNode;
    buttonType?: any;
    isVisible?: boolean;
    placeholder?: string;
    label?: string;

    require?: boolean;
    disabled?: boolean;
    error?: string;
    touched?: boolean;

    options?: TOption[];
    onChange?: (e: any, dateString?: any) => void;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    onClick?: (e: any) => void;
    onSearch?: (e: any) => void;
    onSelect?: (e: any) => void;

    className?: string;
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;
    size?: 'small' | 'middle' | 'large';
    isMultiple?: boolean;
    showTime?: boolean;
    formatDateTime?: string;
    showCount?: boolean;
    allowClear?: boolean;
    prefix?: any;
    maxLength?: number;
    defaultValue?: string | number;
    suffixIcon?: ReactNode;
    fileSize?: number;
    accept?: string;
    showLanguageToggle?: boolean;
    showModal?: boolean;
    onModalOpen?: (e: any) => void;
    disabledDate?: (current: any) => boolean;
    checked?: boolean;
    style: React.CSSProperties;
    showSearch?: boolean;
    maxCount?: number;
}

const FormItem: React.FC<InputProps> = ({
    defaultValue,
    type,
    options,
    value,
    onChange,
    require,
    formatDateTime,
    placeholder,
    className,
    touched,
    error,
    allowClear,
    size,
    disabled,
    label,
    icon,
    showTime,
    addonAfter,
    addonBefore,
    showCount,
    onSearch,
    onSelect,
    isMultiple,
    name,
    prefix,
    suffixIcon,
    maxLength,
    style,
    onKeyDown,
    onClick,
    maxCount,
    fileSize,
    accept,
    disabledDate,
    showLanguageToggle,
    showModal,
    showSearch,
    checked,
    buttonType,
    ...otherProps
}) => {
    const { token } = theme.useToken();

    const renderItem = () => {
        switch (type) {
            case TYPE_FIELD.TEXT:
                return (
                    <div>
                        <TextInput
                            name={name}
                            style={style}
                            type={type}
                            value={value}
                            showModal={showModal}
                            error={error}
                            onChange={onChange}
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                            touched={touched}
                            placeholder={placeholder}
                            allowClear={allowClear}
                            size={size}
                            defaultValue={defaultValue}
                            disabled={disabled}
                            suffixIcon={suffixIcon}
                            addonAfter={addonAfter}
                            addonBefore={suffixIcon}
                            prefix={prefix}
                            showLanguageToggle={showLanguageToggle}
                        ></TextInput>
                    </div>
                );
            case TYPE_FIELD.SELECT:
                return (
                    <div>
                        <SelectInput
                            disabled={disabled}
                            size={'small'}
                            name={name}
                            mode={isMultiple ? 'multiple' : undefined}
                            options={options || []}
                            className={className}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            showSearch={showSearch}
                            allowClear={allowClear}
                            onKeyDown={onKeyDown}
                            onClick={onClick}
                        ></SelectInput>
                    </div>
                );
            case TYPE_FIELD.RADIO:
                return (
                    <div>
                        <RadioInput
                            name={name}
                            value={value}
                            disabled={disabled}
                            onChange={onChange}
                            options={options ?? []}
                        ></RadioInput>
                    </div>
                );
            case TYPE_FIELD.PASSWORD:
                return (
                    <div>
                        <PasswordInput
                            name={name}
                            onChange={onChange}
                            size='small'
                            placeholder={placeholder ?? 'Nhập'}
                            disabled={disabled}
                            value={value}
                        ></PasswordInput>
                    </div>
                );
            case TYPE_FIELD.DATE_PICKER:
                return (
                    <div>
                        <DatePickerInput
                            name={name}
                            value={value}
                            className={className}
                            onChange={onChange}
                            formatDatetime={formatDateTime || DATE_FORMAT.DATE}
                            style={style}
                            showTime={showTime}
                            disabled={disabled}
                            placeholder={placeholder}
                            disabledDate={disabledDate}
                            size={'small'}
                        ></DatePickerInput>
                    </div>
                );
            case TYPE_FIELD.WEEK_PICKER:
                return (
                    <div>
                        <WeekPickerInput
                            value={value}
                            name={name}
                            onChange={onChange}
                            size={size}
                            placeholder={placeholder} style={style}
                        ></WeekPickerInput>
                    </div>
                );
            case TYPE_FIELD.RANGE_PICKER:
                return (
                    <div>
                        <RangePickerInput
                            name={name}
                            value={value}
                            onChange={onChange}
                            className={className}
                            suffixIcon={suffixIcon}
                            formatDatetime={formatDateTime}
                            style={style}
                            size={size}
                            allowClear={allowClear}
                        ></RangePickerInput>
                    </div>
                );
            case TYPE_FIELD.AUTO_COMPLETE:
                return (
                    <div>
                        <AutoCompleteInput
                            allowClear={allowClear}
                            backfill={true}
                            className={className}
                            disabled={disabled}
                            value={value}
                            size={'small'}
                            placeholder={placeholder || 'Nhập'}
                            onSearch={onSearch}
                            onSelect={onSelect}
                            onChange={onChange}
                            options={options ?? []}
                            onClick={onClick}
                        ></AutoCompleteInput>
                    </div>
                )

            case TYPE_FIELD.CHECKBOX:
                return (
                    <div>
                        {options ? (
                            <Checkbox.Group
                                disabled={disabled}
                                onChange={onChange}
                                name={name}
                                value={value}
                            >
                                <Row>
                                    {options?.map((item: any, index: any) => (
                                        <Col key={index} span={item.span}>
                                            <Checkbox
                                                checked={checked}
                                                value={item.value}
                                                style={{
                                                    width: '100%'
                                                }}
                                            >
                                                {item.label}
                                            </Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        ) : (
                            <Checkbox
                                checked={checked}
                                value={value}
                                onChange={onChange}
                                style={{
                                    width: '100%'
                                }}
                            ></Checkbox>
                        )}
                    </div>
                )
            default:
                break;
        }
    };

    return (
        <Form.Item
            {...otherProps}
            name={name}
            className="form-item-container"
            label={
                label ? (
                    <>
                        {require ? (
                            <>
                                {label}
                                <span style={{ color: '#F25B60', marginLeft: '5px' }}>*</span>
                            </>
                        ) : (
                            label
                        )}
                    </>
                ) : null
            }
            validateStatus={touched && error ? 'error' : ''}
            help={touched && error}
        >
            {renderItem()}
        </Form.Item >
    )
};

export default FormItem;
