const textRevert = (text) => {
  if (!text) return { valid: false, data: { error: 'no text' } }

  const arrayText = text.split('')
  let reverse = ''
  arrayText.reverse().forEach(element => {
    reverse += element
  })

  const palindrome = text.toUpperCase() === reverse.toUpperCase()

  return { valid: true, data: { text: reverse, palindrome } }
}

exports.palindrome = (req, res) => {
  try {
    const result = textRevert(req.query.text)

    if (result.valid) return res.status(200).send(result.data)
    else return res.status(400).send(result.data)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}
