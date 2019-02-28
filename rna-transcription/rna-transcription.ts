type Nucleotide = 'G' | 'C' | 'A' | 'T'

class Transcriptor {
    private translateNucleotide(x: string): string {
        if (x === 'G') return 'C';
        if (x === 'C') return 'G';
        if (x === 'T') return 'A';
        if (x === 'A') return 'U';
        throw 'Invalid input DNA.';
    }

    toRna(dna: string) {
        return dna.split('').map(this.translateNucleotide).join('');
    }

    // another solution

    static dnaToRna: {[index: string] : string} = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    }

    static dnaRegExp = new RegExp(`^[${Object.keys(Transcriptor.dnaToRna).join('')}]+$`)

    toRna_(dna: string) {
        if (!Transcriptor.dnaRegExp.test(dna)) {
            throw 'Invalid input DNA.';
        }
        return dna.split('').map(nuc => Transcriptor.dnaToRna[nuc]).join('');
    }

    // other solution

    toRna__(dna: string) {
        let rna = ''
        let dnaToRna = Transcriptor.dnaToRna
        
        for (let i of dna) {
            if (dnaToRna[i]) {
                rna += dnaToRna[i]
            } else {
                throw Error('Invalid input DNA.')
            }
        }
        return rna
    }

    // another

    toRna___ = ( input: string ): string =>
    input.split('').map(this.translateNucleotide2).join('')

    private translateNucleotide2 = (input: string): string =>
        Transcriptor.dnaToRna[input as Nucleotide] || this.raiseError()

    private raiseError = () => { throw new Error('Invalid input DNA.') }
}

export default Transcriptor

