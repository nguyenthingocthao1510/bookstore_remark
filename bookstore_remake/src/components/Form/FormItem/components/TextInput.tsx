import React, { useState } from "react";
import { InputProps } from "..";
import { Button, Input, Space } from "antd";
import { handleFormatChange } from "../../../../utils/validate";

const TextInput = ({
    name,
    onChange,
    onKeyDown,
    value,
    placeholder,
    type,
    addonBefore,
    addonAfter,
    allowClear,
    size,
    className,
    defaultValue,
    disabled,
    suffixIcon,
    prefix,
    showLanguageToggle,
    ...rest
}: InputProps & { showLanguageToggle?: boolean }) => {
    const [isEn, setIsEn] = useState(false);

    const handleLanguageChange = () => {
        setIsEn(!isEn);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onChange) return;

        const newValue = e.target.value;

        if (showLanguageToggle) {
            if (isEn) {
                onChange({
                    target: {
                        name,
                        value: {
                            en: isEn ? newValue : value.en,
                            vn: value.vn,
                        }
                    }
                })
            }
            else {
                onChange({
                    target: {
                        name,
                        value: {
                            vn: !isEn ? newValue : value.vn,
                            en: value.en,
                        }
                    }
                })
            }
        }
        else {
            if (onChange) {
                onChange(e)
            }
        }
    };

    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Input
                    value={showLanguageToggle ? (isEn ? value.en : value.vn) : value}
                    name={name}
                    type={type}
                    size={size}
                    onChange={handleInputChange}
                    onKeyDown={onKeyDown}
                    spellCheck={false}
                    placeholder={placeholder ?? 'Nhập'}
                    addonAfter={addonAfter}
                    addonBefore={addonBefore}
                    allowClear={allowClear}
                    disabled={disabled}
                    className={className}
                    defaultValue={defaultValue}
                    suffix={suffixIcon}
                    prefix={prefix}
                ></Input>
                {showLanguageToggle && (
                    <Button
                        style={{ borderRadius: 'none' }}
                        size='small'
                        onClick={handleLanguageChange}
                    >
                        {isEn ? 'EN' : 'VN'}
                    </Button>
                )}
            </div>
        </Space>
    )
}

export default TextInput;