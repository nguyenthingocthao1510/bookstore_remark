import React from "react";
import type { FormProps } from "antd";
import { Col, Form } from "antd";
import classNames from "classnames";
import { FormikProps } from "formik";
import FormItem, { InputProps } from "src/components/Form/FormItem";

type Props = Omit<FormProps, "form"> & {
  inputs: InputProps[];
  form?: FormikProps<any>;
  span?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gutter?: [number, number];
  isHorizontal?: boolean;
  onKeyDown?: (e: any) => void;
  col?: number;
  row?: number;
};

const InputFields: React.FC<Props> = React.memo(
  ({
    inputs,
    form,
    gutter,
    span = { sm: 24, md: 12, lg: 8, xl: 6 },
    isHorizontal = true,
    onKeyDown,
    ...otherProps
  }) => {
    const formLayout = isHorizontal ? "horizontal" : "vertical";

    return (
      <Form
        {...otherProps}
        layout={formLayout}
        className={classNames(otherProps.className, "form-container")}
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        {inputs.map((input, index) => {
          const { key, onChange, onBlur, ...inputProps } = input;
          return (
            <Col
              style={{
                padding: gutter ? `${gutter[0]}px ${gutter[1]}px` : "0",
              }}
              className={input.className}
              key={input.name + index}
              sm={input.span || span.sm}
              md={input.span || span.md}
              lg={input.span || span.lg}
              xl={input.span || span.xl}
            >
              <FormItem
                key={key}
                {...inputProps}
                name={input.name}
                value={form?.values?.[input.name]}
                error={
                  !!form?.touched?.[input.name] && form?.errors?.[input.name]
                    ? (form?.errors?.[input.name] as string)
                    : undefined
                }
                touched={!!form?.touched?.[input.name]}
                onChange={(e: any) => {
                  form?.handleChange(e);
                  onChange?.(e);
                }}
                onBlur={(e: any) => {
                  onBlur?.(e);
                  form?.setFieldTouched(input.name, true);
                  form?.handleBlur(e);
                }}
                onKeyDown={onKeyDown}
              />
            </Col>
          );
        })}
      </Form>
    );
  }
);

export default InputFields;
