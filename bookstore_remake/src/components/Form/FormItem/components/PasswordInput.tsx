import { EyeInvisibleOutlined } from "@ant-design/icons"
import { Input } from "antd"

type Props = {
    value: any,
    size?: 'small' | 'middle' | 'large',
    onChange?: (e: any) => void,
    disabled?: boolean,
    placeholder: string,
    name: string,
}

const PasswordInput = ({
    value,
    size,
    onChange,
    disabled,
    placeholder,
    name
}: Props) => {
    return (
        <>
            <Input.Password
                name={name}
                placeholder={placeholder ?? 'Nhập'}
                size={size}
                onChange={onChange}
                value={value}
                disabled={disabled}
                prefix={<EyeInvisibleOutlined />}
            ></Input.Password>
        </>
    );
};

export default PasswordInput;