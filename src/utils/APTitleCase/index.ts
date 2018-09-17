export default function APTitleCase(headline: string) {
  const stopwords = new Set(['a'])
  return headline
    .split(' ')
    .map(
      word =>
        stopwords.has(word)
          ? word.charAt(0).toLowerCase() + word.slice(1)
          : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ')
}
