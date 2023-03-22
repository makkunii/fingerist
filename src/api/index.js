export const generateGuessWord = async () => {
    try {
        const response = await fetch('../src/api/words.json')
        const results = await response.json()
        const data = results.data

        const randomIndex = Math.floor(Math.random() * data.length)
        const randomObject = data[randomIndex]

        return randomObject
    } catch (error) {
        console.error(error)
        return error
    }
}

export const generateLetterNumbers = (param) => {
    const letterIndexes = {}

    const splitSentence = param.sentence.split('')

    const filtered = splitSentence.filter((el) => {
        return el !== ' '
    })

    const unique = filtered.filter(
        (value, index, array) => array.indexOf(value) === index,
    )

    unique.map((el, index) => {
        letterIndexes[el] = {
            index: index + 1,
            isFilled: false,
        }
    })

    return letterIndexes
}
