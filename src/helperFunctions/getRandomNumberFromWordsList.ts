export function getRandomNumberFromWordsList(wordsList: string[]): string {
  const randomIndex = Math.floor(Math.random() * wordsList.length)
  return wordsList[randomIndex]
}
