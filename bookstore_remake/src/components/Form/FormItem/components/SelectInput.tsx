import { Select } from "antd";
import { TOption } from "../../../../constants/types/common";

type Props = {
    placeholder?: string;
    className?: string;
    suffixIcon?: any;
    onChange?: (e: any) => void;
    options: TOption[];
    value: any;
    name: string;
    disabled?: boolean;
    size?: 'small' | 'middle' | 'large';
    selectMultiple?: boolean;
    showSearch?: boolean;
    allowClear?: boolean;
    onKeyDown?: (e: any) => void;
    onClick?: (e: any) => void;
    mode?: 'multiple' | undefined;
    disableSearch?: boolean;
}

const stringToArray = (value: string | undefined) => {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        return value
            .slice(1, -1)
            .split(',')
            .map(item => item.trim())
    }
    return [];
}

const SelectInput = ({
    placeholder,
    className,
    suffixIcon,
    onChange,
    options,
    value,
    name,
    mode,
    disabled,
    size,
    ...otherProps
}: Props) => {
    const isMultiple = mode === 'multiple' || otherProps.selectMultiple;
    const arrayValue = isMultiple ? stringToArray(value) : value;

    const defaultValue = isMultiple ? arrayValue : options.find((option: any) => option.value === value)?.value;
    const handleSelectChange = (newValue: string | string[]) => {
        if (isMultiple) {
            const stringValue = Array.isArray(newValue) && newValue.length > 0 ? `{${newValue.join(',')}}` : '';
            onChange?.(stringValue);
        }
        else {
            onChange?.(newValue);
        }
    };

    return (
        <Select
            allowClear={otherProps.allowClear}
            suffixIcon={suffixIcon}
            defaultValue={defaultValue}
            size={size}
            mode={isMultiple ? 'multiple' : undefined}
            options={options ?? []}
            className={className}
            placeholder={placeholder ?? 'Chọn'}
            value={arrayValue}
            onChange={handleSelectChange}
            showSearch={otherProps.showSearch}
            filterOption={
                otherProps.showSearch ? (input, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) : undefined
            }
            onKeyDown={otherProps.onKeyDown}
            onClick={otherProps.onClick}
            popupMatchSelectWidth
            virtual
        ></Select >
    )
}

export default SelectInput;