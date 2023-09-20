export const PRICE = 0.4388;
export const PRECISION = Math.pow(10, 8);
export const toDisplayValue = (value: number) => {
    return (value / PRECISION).toFixed(2).toString()
}