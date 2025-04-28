import { Checkbox, Col, Row } from "antd"
import { TOption } from "../../../../constants/types/common";

type Props = {
    value: any,
    disabled?: boolean;
    options?: TOption[];
    onChange: (e: any) => void;
}

const CheckboxInput = ({ value, disabled, onChange, options }: Props) => {
    return (
        <>
            <Checkbox.Group>
                <Row>
                    {options?.map((item: any, index: any) => (
                        <Col key={index} span={item.span}>
                            <Checkbox
                                value={value}
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
        </>
    )

}