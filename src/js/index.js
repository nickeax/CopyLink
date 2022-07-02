document.querySelectorAll('.copy-link').forEach(copyLinkContainer => {
  const inputField = copyLinkContainer.querySelector('.copy-link-input')
  const copyButton = copyLinkContainer.querySelector('.copy-link-button')

  inputField.addEventListener('focus', _ => inputField.select())
  copyButton.addEventListener('click', () => {
    const text = inputField.value

    inputField.select()
    navigator.clipboard.writeText(text)
    inputField.value = 'Copied!'

    setTimeout(() => {
      inputField.value = text
    }, 2000);
  })
})