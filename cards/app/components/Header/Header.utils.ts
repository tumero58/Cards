import { MAX_NUMBER } from "@/constants/general";

export const checkUnique = (number: number, array: number[]): number | undefined => {
    if (array.includes(number)) {
        const newNumber = Math.floor(Math.random() * MAX_NUMBER);
        return checkUnique(newNumber, array);
    } else {
        return number
    }
};
