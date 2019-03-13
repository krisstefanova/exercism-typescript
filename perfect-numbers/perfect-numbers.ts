export default class PerfectNumbers {
    static classify(num: number): string {
        if (num < 1) {
            throw 'Classification is only possible for natural numbers.'
        }

        const factors = this.sumFactors(num)
        const sum = factors.reduce((accumulator, current) => accumulator + current, 0)

        if (sum < num || num === 1) {
            return 'deficient'
        } else if (sum > num) {
            return 'abundant'
        } else {
            return 'perfect'
        }
    }

    static sumFactors(num: number): Array<number> {
        const factors: Array<number> = []
        const half = Math.floor(num/2)
        for (let i = 1; i <= half; i++) {
            if (num % i === 0) {
                factors.push(i)
            }
        }
        return factors
    }
}