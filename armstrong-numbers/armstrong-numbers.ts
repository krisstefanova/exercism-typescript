class ArmstrongNumbers {
    static isArmstrongNumber_(number: number) {
        const digits = number.toString().length
        let calculation:number = 0

        for (let i of number.toString()) {
            calculation += Math.pow(parseInt(i), digits)
        }

        if (number === calculation) {
            return true
        }

        console.log(`The sum of the digits by the power of the digits is ${calculation} but the number is ${number}`)
        return false
    }

    static isArmstrongNumber(number: number) {
        return number === number
            .toString()
            .split('')
            .reduce(
                (acc, cur, _, arr) => acc + Math.pow(Number(cur), arr.length)
                , 0)
    }
}

export default ArmstrongNumbers