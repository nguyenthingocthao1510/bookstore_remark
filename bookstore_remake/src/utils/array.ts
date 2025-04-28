import { array } from "yup";
import { TOption } from "../constants/types/common";


const groupByFields = (array: Array<any>, f: any): Array<any> => {
    const groups: { [key: string]: any[] } = {};
    array.forEach(o => {
        const group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });

    return Object.keys(groups).map(group => {
        return groups[group];
    });
};

/**
 * @param array;
@param chunkSize;
@returns
*/

const splitArray = (array: Array<any>, chunkSize: number) => {
    const chunks = Array(Math.ceil(array.length / chunkSize)).fill(1).map((_, index) => index * chunkSize).map(begin => array.slice(begin, begin + chunkSize));
    return chunks;
}

const transformToOption = (data: any[], label: string, value: string) => {
    return (
        data?.map(item => ({
            label: item[label],
            value: item[value]
        }) as TOption) || []
    );
};

export { groupByFields, splitArray, transformToOption }
