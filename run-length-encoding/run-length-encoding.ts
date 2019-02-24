export default class RunLengthEncoding {
    static encode = (s: string) => s.replace(/(.)\1+/g, m => m.length + m[0])

    static encode_(text: string) {
        let result = ''
        let count = 1
        for (let i = 0; i < text.length - 1; i++) {
            if (text[i] === text[i + 1]) {
                count++
            } else {
                result += (count === 1) ? '' : count
                result += text[i]
                count = 1
            }

            if (i === text.length - 2) {
                result += (count === 1) ? text[i + 1] : count + text[i]
            }
        }
        return result
    }

    static decode = (s: string) => s.replace(/(\d+)(.)/g, (_, n, c) => c.repeat(Number(n)))

    static decode_(cypher: string) {
        let result = ''
        let tempNumber

        for (let i = 0; i < cypher.length; i++) {
            if (Number(cypher[i]) && !Number(cypher[i + 1])) {
                result += cypher[i + 1].repeat(Number(tempNumber ? tempNumber : cypher[i]))
                tempNumber = ''
                i++
            } else {
                if (Number(cypher[i])) {
                    tempNumber = cypher[i] + cypher[i + 1]
                    i++
                } else {   
                    result += tempNumber ? cypher[i].repeat(Number(tempNumber)) : cypher[i]
                    tempNumber = ''
                }
            }
        }
        return result
    }
}