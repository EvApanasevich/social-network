export const required = (value: number | string) => {
    if (value) return undefined
    return 'Field is required to enter!'
}

const maxLengthValid = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols!`
    }else{
        return undefined
    }
}
export const maxLength10 = maxLengthValid(10)
export const maxLength100 = maxLengthValid(100)


