const transcription = (dna) => {
    let dnaToRna = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    }
    let result = [...dna].map((char) => {
        return dnaToRna[char]
    })
    return result.join("")
}

console.log(transcription('GCT'))
console.log(transcription('GATC'))
