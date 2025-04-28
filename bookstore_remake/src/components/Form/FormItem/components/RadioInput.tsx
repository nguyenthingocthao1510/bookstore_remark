import { Radio } from "antd";
import { TOption } from "../../../../constants/types/common";

type Props = {
    value: any,
    name: string,
    disabled?: boolean,
    options: TOption[],
    onChange?: (e: any) => void,
};

const RadioInput = ({
    value,
    name,
    disabled,
    options,
    onChange
}: Props) => {
    return (
        <>
            <Radio.Group
                value={value}
                name={name}
                disabled={disabled}
                onChange={onChange}
            >
                {options?.map((e: any) => {
                    return (
                        <Radio key={e?.value} value={e?.value}>
                            {e.label}
                        </Radio>
                    )
                })}
                <Radio></Radio>
            </Radio.Group>
        </>
    );
};

export default RadioInput;