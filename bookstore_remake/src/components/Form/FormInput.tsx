import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { Form, FormGroup, InputGroup } from 'react-bootstrap'
import { Control, FieldErrors } from 'react-hook-form';
import classNames from 'classnames';
import FormItemInput from 'antd/es/form/FormItemInput';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    endIcon?: boolean;
    label?: string;
    type?: string;
    name: string;
    comp?: string;
    placeholder?: string;
    register?: any;
    errors?: FieldErrors;
    control?: Control<any>;
    className?: string;
    labelClassName?: string;
    containerClass?: string;
    textClassName?: string;
    refCallback?: any;
    action?: any;
    rows?: number;
    children?: ReactNode | undefined;
}

const PasswordInput = ({
    name,
    placeholder,
    refCallback,
    errors,
    register,
    className,
    ...otherProps
}: FormInputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <>
            <InputGroup className='mb-0'>
                <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    as='input'
                    ref={(r: HTMLInputElement) => {
                        if (refCallback) refCallback(r)
                    }}
                    className={className}
                    isInvalid={errors && errors[name] ? true : false}
                    {...(register ? register(name) : {})}
                    autoComplete={name}
                    {...otherProps}
                >
                </Form.Control>
                <div className={classNames('input-group-text', 'input-group-password', {
                    'show-password': showPassword,
                })}
                    data-password={showPassword ? true : false}>
                    <span className='password-eye'
                        onClick={() => {
                            setShowPassword(!showPassword)
                        }}></span>
                </div>
            </InputGroup>
            {errors && errors[name] ? (
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors[name]?.['message'] as String}
                </Form.Control.Feedback>
            ) : null}
        </>
    );
};

const TextInput = ({
    type,
    name,
    placeholder,
    endIcon,
    register,
    errors,
    comp,
    rows,
    className,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <>
            {type == 'password' && endIcon ? (
                <>
                    <PasswordInput
                        name={name}
                        placeholder={placeholder}
                        refCallback={refCallback}
                        errors={errors}
                        register={register}
                        className={className}
                        {...otherProps}
                    ></PasswordInput>
                </>
            ) : (
                <>
                    <Form.Control
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        as={comp}
                        id={name}
                        ref={(r: HTMLInputElement) => {
                            if (refCallback) refCallback(r);
                        }}
                        className={className}
                        isInvalid={errors && errors[name] ? true : false}
                        {...(register ? register(name) : {})}
                        rows={rows}
                        {...otherProps}
                    ></Form.Control>

                    {errors && errors[name] ? (
                        <Form.Control.Feedback type='invalid' className='d-block'>
                            {errors[name]?.['message'] as String}
                        </Form.Control.Feedback>
                    ) : null}
                </>
            )}
        </>
    );
};

const CheckInput = ({
    type,
    label,
    name,
    register,
    errors,
    className,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <>
            <Form.Check
                type={type}
                label={label}
                name={name}
                className={className}
                id={name}
                ref={(r: HTMLInputElement) => { if (refCallback) refCallback(r); }}
                isInvalid={errors && errors[name] ? true : false}
                {...(register ? register(name) : {})}
                {...otherProps}
            >
                {errors && errors[name] ? (
                    <Form.Control.Feedback className='d-block' type='invalid'>
                        {errors[name]?.['message'] as String}
                    </Form.Control.Feedback>
                ) : null}
            </Form.Check>
        </>
    )
}

const SelectInput = ({
    type,
    label,
    name,
    register,
    errors,
    className,
    children,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (<>
        <Form.Select
            type={type}
            label={label}
            name={name}
            id={name}
            className={className}
            ref={(r: HTMLInputElement) => { if (refCallback) refCallback(r); }}
            children={children}
            isInvalid={errors && errors[name] ? true : false}
            {...(register ? register(name) : {})}
            {...otherProps}
        ></Form.Select >

        {errors && errors[name] ? (
            <Form.Control.Feedback type='invalid' className='d-block'>
                {errors[name]?.['message'] as String}
            </Form.Control.Feedback>
        ) : null}
    </>)
}

const FormInput = ({
    label,
    name,
    type,
    placeholder,
    endIcon,
    register,
    errors,
    className,
    labelClassName,
    containerClass,
    refCallback,
    children,
    rows,
    ...otherProps
}: FormInputProps) => {
    const comp = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';
    const hasEndIcon = endIcon !== undefined ? endIcon : true;

    return (
        <>
            {type === 'hidden' ? (
                <input
                    type={type}
                    name={name}
                    {...(register ? register(name) : {})}
                    {...otherProps}
                ></input>
            ) : (
                <>
                    {type === 'select' ? (
                        <FormGroup className={containerClass}>
                            {label ? (
                                <Form.Label className={labelClassName}>{label}</Form.Label>
                            ) : null}
                            <SelectInput
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                refCallback={refCallback}
                                errors={errors}
                                register={register}
                                comp={comp}
                                className={className}
                                children={children}
                                {...otherProps}
                            ></SelectInput>
                        </FormGroup>
                    ) : (
                        <>
                            {type === 'checkbox' || type === 'radio' ? (
                                <Form.Group className={containerClass}
                                >
                                    <CheckInput
                                        name={name}
                                        type={type}
                                        label={label}
                                        placeholder={placeholder}
                                        refCallback={refCallback}
                                        errors={errors}
                                        register={register}
                                        comp={comp}
                                        className={className}
                                        rows={rows}
                                        {...otherProps}
                                    ></CheckInput>
                                </Form.Group>
                            ) : (
                                <Form.Group className={containerClass}>
                                    {label ? (
                                        <Form.Label className={labelClassName}>{label}</Form.Label>
                                    ) : null}

                                    <TextInput
                                        name={name}
                                        type={type}
                                        errors={errors}
                                        className={className}
                                        placeholder={placeholder}
                                        endIcon={endIcon}
                                        register={register}
                                        comp={comp}
                                        refCallback={refCallback}
                                        rows={rows}
                                        {...otherProps}
                                    ></TextInput>
                                </Form.Group>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default FormInput;