function order(words) {
    if (words === "") {
        return ""
    } else {
        const separateWords = words.split(" ")
        let orderedWords = separateWords.map((word, index) => {
            return separateWords.find(wordToFind => {
                return wordToFind.includes((index + 1).toString())
            })
        })
        return orderedWords.join(" ")
    }
}