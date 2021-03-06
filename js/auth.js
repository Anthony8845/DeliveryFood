const auth = () => {
    const buttonAuth = document.querySelector('.button-auth');
    const modalAuth = document.querySelector('.modal-auth');
    const buttonOut = document.querySelector('.button-out');
    const userName = document.querySelector('.user-name');
    const closeAuth = document.querySelector('.close-auth');
    const logInForm = document.getElementById('logInForm');
    const inputLogin = document.getElementById('login');
    const inputPassword = document.getElementById('password');
    const buttonCart = document.querySelector('.button-cart')
    const buttonLogin = document.querySelector('.button-login');

    const login = (user) => {
        
        // buttonLogin.addEventListener('click', () => {
        //     if(inputLogin.value == '') {
        //         alert('Введите логин')
                
        //     }
           
        // })
        
        buttonAuth.style.display = 'none'
        buttonCart.style.display = 'flex'
        buttonOut.style.display = 'flex'
        userName.style.display = 'flex'
    
        userName.textContent = user.login;
        modalAuth.style.display = 'none';

    }

    const logout = () => {
        buttonAuth.style.display = 'flex'
        buttonCart.style.display = 'none'
        buttonOut.style.display = 'none'
        userName.style.display = 'none'

        userName.textContent = '';

        localStorage.removeItem('user')
    }

    buttonOut.addEventListener('click', () => {
        logout()
    })

    buttonAuth.addEventListener('click', function () {
            modalAuth.style.display = 'flex';
        })

    closeAuth.addEventListener('click', function () {
            modalAuth.style.display = 'none';
        })

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const user = {
            login: inputLogin.value,
            password: inputPassword.value,
        }


        localStorage.setItem('user', JSON.stringify(user))
        login(user)
        
    })

    if(localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
        
    }
} 

auth()