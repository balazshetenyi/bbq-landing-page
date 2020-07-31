let form = document.getElementById('Email-Collector')

form.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const userName = formData.get('firstName')
    const email = formData.get('email')

    const updatedHTMLContent = `
        <h2>Congratulations ${userName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to: ${email}</p>
    `

    const mainContent = document.getElementById('Main-Content')
    
    mainContent.innerHTML = updatedHTMLContent
})