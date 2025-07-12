import { AutoComplete } from "antd";
import { TOption } from "../../../../constants/types/common";

type Props = {
  allowClear?: boolean;
  disabled?: boolean;
  options: TOption[];
  placeholder?: string;
  size?: "small" | "middle" | "large";
  value?: any;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onSearch?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onClick?: (e: any) => void;
  onSelect?: (e: any) => void;
  backfill?: boolean;
  className?: string;
  suffixIcon?: any;
  showSearch?: boolean;
  mode?: "multiple" | undefined;
  selectMultiple?: boolean;
  style?: React.CSSProperties;
};

const stringToArray = (value: string | undefined) => {
  if (
    typeof value === "string" &&
    value.startsWith("{") &&
    value.endsWith("}")
  ) {
    return value
      .slice(1, -1)
      .split(/\s|,/)
      .map((item) => item.trim())
      .filter((item) => item != "");
  } else if (typeof value === "string") {
    return value
      .split(/\s|,/)
      .map((item) => item.trim())
      .filter((item) => item != "");
  }
  return [];
};

const AutoCompleteInput = ({
  allowClear,
  disabled,
  onChange,
  onKeyDown,
  onClick,
  onSelect,
  options,
  placeholder,
  size,
  value,
  className,
  mode,
  showSearch,
  selectMultiple,
  suffixIcon,
  style,
  ...otherProps
}: Props) => {
  const isMultiple = mode === "multiple" || selectMultiple;
  const arrayValue = isMultiple ? stringToArray(value) : value;

  const defaultValue = isMultiple
    ? arrayValue
    : options.find((option: any) => option.value === value)?.value;

  const handleSelectedChange = (newValue: string | string[]) => {
    if (isMultiple) {
      const stringValue =
        Array.isArray(newValue) && newValue.length
          ? `{${newValue.join(",")}}`
          : "";
      onChange?.(stringValue);
    } else {
      onChange?.(newValue);
    }
  };
  return (
    <AutoComplete
      allowClear={allowClear || true}
      defaultValue={defaultValue}
      size={size}
      disabled={disabled || false}
      options={options ?? []}
      className={className}
      placeholder={placeholder}
      showSearch={showSearch}
      value={arrayValue}
      onChange={handleSelectedChange}
      filterOption={(input: any, option: any) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      onKeyDown={onKeyDown}
      onClick={onClick}
      popupMatchSelectWidth
      virtual={true}
      onSelect={onSelect}
      suffixIcon={suffixIcon}
      style={style}
    ></AutoComplete>
  );
};

export default AutoCompleteInput;
