import * as Yup from 'yup';
import { ChangeEvent } from 'react';

const yubObject = (object: any) => Yup.object().shape(object);
const yubArray = (object: any) => Yup.array().of(object);

const isPhoneNumber = Yup.string().required('Please enter phone number').matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Must be only digits and 10 characters'
).min(0, 'Not valid phone number').max(11, 'Not a valid phone number').nullable();

const isCCCD = Yup.string().required().matches(/^\d{9}$|^\d{12}$/, 'Must be only number').min(9, 'Too short').max(12, 'Too long').nullable();

const textOnly = Yup.string().matches(/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/, 'Must be only text'
);

const numberOnly = Yup.string().matches(/^[0-9]+$/, 'Must only digits number');

// const string

const handleFormatChange = (fieldName: string,
    handleChange: (field: string, value: any) => void,) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/^[0-9]+$/g, '');
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            handleChange(fieldName, value);
        }
    };
};

const formatNumber = (value: string | number) => {
    if (value === '' || value === null || value === undefined) return '';
    return new Intl.NumberFormat('vi-VN').format(Number(value));
}

export {
    formatNumber,
    handleFormatChange,
    isCCCD,
    isPhoneNumber,
    numberOnly,
    textOnly,
    yubArray,
    yubObject
}