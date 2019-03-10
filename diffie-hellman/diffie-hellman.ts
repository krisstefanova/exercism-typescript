export default class DiffieHellman {
    private p: number
    private g: number

    constructor(p: number, g: number) {
        if (p < 1 || g > p) {
            throw "Arguments out of range"
        } else if (!this.isPrime(p) || !this.isPrime(g)) {
            throw "Arguments are not prime"
        }

        this.p = p
        this.g = g
    }

    private isPrime(a: number): boolean {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return false
            }
        }
        return true
    }

    getPublicKeyFromPrivateKey(privateKey: number): number {
        if (privateKey <= 1 || privateKey >= this.p) {
            throw 'Can not be negative or greater or equal to p'
        }
        return Math.pow(this.g, privateKey) % this.p
    }

    getSharedSecret(aPrivateKey: number, bPublicKey: number ): number {
        return Math.pow(bPublicKey, aPrivateKey) % this.p
    }
}
