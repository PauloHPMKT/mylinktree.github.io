const btn = document.querySelector('#btn')
let label = document.querySelector('#label')


btn.addEventListener('change', () => {
    let toggleChange = document.body.classList.toggle('white')
    if(toggleChange) {
        label.innerHTML = 'Click here to Blue Theme'
        label.style.color = '#3419ec'
    } else {
        label.innerHTML = 'Click here to White Theme'
        label.style.color = '#fff'
    }
})