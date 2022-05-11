class LoginController{
    constructor(){
        this.users = JSON.parse(localStorage.getItem('users'));
        this.addEventBtn();
        this.start();
    }


    compareArrays(arr1,arr2){
        console.log(arr1,arr2)
        if(arr1.length==arr2.length){
            for(let i=0;i<arr1.length;i++){
                if(arr1[i]!=arr2[i]){
                    return false
                }
            }
            return true;
        }else{
            return false
        }
    }

    login(email,pass){
        let cryptoPass = CryptoJS.MD5(pass).words
        let userLogin = Object.values(this.users).filter((v)=>{
            let user = new User(v._id,v._name,v._photo,v._email,v._phone,v._admin,v._password);
            if(user.getEmail() == email && this.compareArrays(cryptoPass,user.getPassword('Senha do Moderador'))){
                return v;
            }
        })
        if(userLogin.length>0){
            sessionStorage.setItem('login',JSON.stringify(userLogin[0]));
            window.location.href='index.html'
        }else{
            document.querySelector('.feedback').innerHTML = 'E-mail ou senha incorretos'
        }
    }

    addEventBtn(){
        document.querySelector('.login-btn').addEventListener('click',(e)=>{
            e.preventDefault();
            let elements = document.querySelector('form.login').elements;
            let email = elements.email.value;
            let password = elements.password.value;
            this.login(email,password)
        })
    }
}