const form = document.querySelector('form')
const input = document.querySelector('form > input');
const error = document.querySelector('.show__error')

const handleSubmit = (e) => {
    e.preventDefault()
    let re = /\S+@\S+\.\S+/;
    if(re.test(input.value)){
        input.value = ''
        return 
    }else{
        error.style.display = 'block'
    }

}

const handleFocus = () => {
    if(error.style.display === 'block'){
        input.value = ''
        error.style.display = 'none'
    }
    return 
}


form.addEventListener('submit', handleSubmit)
input.addEventListener('focus', handleFocus)