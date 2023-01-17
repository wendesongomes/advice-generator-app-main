fetch('https://api.adviceslip.com/advice')
    .then(response =>  response.json())
    .then(({slip}) => slip)
    .then(({advice, id}) => {
        document.body.innerHTML = 
        `
        <section>
            <h1>Advice #${id}</h1>
            <p>"${advice}"</p>
            <div></div>
        </section>
        <i class="fa-solid fa-dice-five"></i>
        `
    })