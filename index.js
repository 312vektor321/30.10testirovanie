const getSqare = (num) => {
    const result = `${num}` ** 2;
    return result;
};
export { getSqare };
const isEven = (num) => {
    if (num % 2 === 0) {
        return Boolean(true);
    } else if (num % 2 !== 0) {
        return Boolean(false);
    }
};
export { isEven };
const checkType = (text) => {
    const result = typeof (text);
    return result;
};
export { checkType };

