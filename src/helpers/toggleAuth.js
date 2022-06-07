 export const toggleAuth = () => {
    const signUpButton = document.getElementById('SignUp');
    const signInButton = document.getElementById('SignIn');
    const container = document.getElementById('container');


    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
        container.classList.remove('left-panel-active')
    })

     signInButton.addEventListener('click', () => {
         container.classList.add('left-panel-active');
         container.classList.remove('right-panel-active')
     })
}