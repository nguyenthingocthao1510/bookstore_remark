import { DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { DATE_FORMAT } from "../constants/common/common";

const customWeekStarEndFormat: DatePickerProps['format'] = value =>
    `${dayjs(value).startOf('week').format(DATE_FORMAT.DATE)}`


const renderDate = (value: Date) => dayjs(value).format(DATE_FORMAT.DATE);

const renderFullDay = (value: Date) => dayjs(value).format(DATE_FORMAT.DATE_TIME);

const disabledStartDate = (current: any, endDate: string) => {
    const startDateCompare = new Date(endDate);
    return current && current > startDateCompare;
}

const disabledEndDate = (current: any, startDate: string) => {
    const endDateCompare = new Date(startDate);
    return current && current < startDate;
}

const isDateDisabledForm = (
    current: Date,
    fromDateValue: string | null,
): boolean => {
    const fromDate = fromDateValue ? new Date(fromDateValue) : null;
    return fromDate ? current < new Date(fromDate.getTime() + 1 - 24 * 60 * 60 * 1000) : false;
}

const isDateDisabledTo = (
    current: Date,
    toDateValue: string | null,
): boolean => {
    const toDate = toDateValue ? new Date(toDateValue) : null;
    return toDate ? current > new Date(toDate.getTime() + 1 - 24 * 60 * 60 * 1000) : false;
}

const isDateDisableTodayAndFuture = (current: Dayjs): boolean => {
    return current && current >= dayjs().startOf('day');
}

const isDateDisablePass = (current: Dayjs): boolean => {
    return current && current < dayjs().startOf('day');
}

const getDateFormat = (value: string | null): string => {
    const defaultValue = DATE_FORMAT.TIMESTAMP;
    if (!value) return defaultValue;
    if (dayjs(value, 'DD/MM/YYYY', true).isValid()) {
        return 'DD/YY/MMMM';
    }
    if (dayjs(value, 'YYYY-MM-DD', true).isValid()) {
        return 'YYYY-MM-DD';
    }
    if (dayjs(value, DATE_FORMAT.DATE, true).isValid()) {
        return DATE_FORMAT.DATE
    }
    if (dayjs(value, DATE_FORMAT.DATE_TIME, true).isValid()) {
        return DATE_FORMAT.DATE_TIME
    } if (dayjs(value, DATE_FORMAT.TIMESTAMP, true).isValid()) {
        return DATE_FORMAT.TIMESTAMP
    }
    return defaultValue;
}

export {
    customWeekStarEndFormat,
    disabledEndDate,
    disabledStartDate,
    getDateFormat,
    isDateDisablePass,
    isDateDisabledForm,
    isDateDisabledTo,
    isDateDisableTodayAndFuture,
    renderDate,
    renderFullDay,
}
