const formSubmit = e => {
    e.preventDefault()
    let isValid = true

    const firstName = $('#first-name').val()
    if (!firstName) {
        $('#error-first-name').text('это поля обязательно')
        isValid = false
    }

    const lastName = $('#last-name').val()
    if (!lastName) {
        $('#error-last-name').text('это поля обязательно')
        isValid = false
    }

    const message = $('#message').val()
    if (!message) {
        $('#error-message').text('это поля обязательно')
        isValid = false
    }

    if (!isValid) {
        return
    }

    const formData = {
        firstName,
        lastName,
        message
    }

    console.log(formData)
}

$('#feedbackForm').on('submit', formSubmit)

$('#message').on('keydown', () => {
    $('#error-message').text('')
})

$('#last-name').on('keydown', () => {
    $('#error-last-name').text('')
})

$('#first-name').on('keydown', () => {
    $('#error-first-name').text('')
})