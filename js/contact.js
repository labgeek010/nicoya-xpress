
/* ----- form functionality js code--------*/

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#magia')


$form.addEventListener('submit', handleSubmit )

function handleSubmit (event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:info@nicoyaxpress.com?subject=${form.get('subject')}  de parte de: ${form.get('nombre')}&body=${form.get('message')} Puedes contactarme al número: ${form.get('numero')}`)
  $buttonMailto.click()
} 

