const buildSeoKeywords = (texts) => {
  const phrases = [
    "{text} en linea",
    "Mejor precio {text}",
    "Tienda en línea {text}",
  ]
  const keywords = []
  texts.forEach((text) => {
    phrases.forEach((phrase) => {
      keywords.push(phrase.replace("{text}", text))
    })
  })
  return keywords.join(", ")
}

export default buildSeoKeywords
