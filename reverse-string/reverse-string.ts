class ReverseString {
    static reverse (text: string) {
        return [...text].reverse().join('')
    }

    static reverse_(text: string): string {
        let result: string = ''
        for (let i = text.length - 1; i >= 0; i--) {
            result += text[i]
        }
        return result
    }
}

export default ReverseString
