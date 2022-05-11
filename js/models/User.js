/* recebendo as class's n°,	Ícone,	Nome,	E-mail,	Telefone,	Criado em,	Admin*/


class User{
    constructor(id, name, photo, email, phone, admin, password){
        this._id = id
        this._name = name
        this._photo = photo
        this._email = email
        this._phone = phone
        this._admin = admin
        this._password = password
        let date = new Date()
        this._date = date.toLocaleDateString('pt-BR')+'  '+date.toLocaleTimeString('pt-BR').slice(0,5)
    }


/*criando getters */

/* para fortalecer um pouco mais a segurança do sistema principalmente na criação dessas classes*/
/*E também para cada instância de variável, um método getter retorna seu valor, enquanto um método setter o define ou atualiza ele */

getId(){
    return this._id;
}

getName(){
    return this._name;
}

getPhoto(){
    return this._photo;
}

getEmail(){
    return this._email;
}

getPhone(){
    return this._phone;
}

getAdmin(){
    return this._admin;
}
    
    /*criando verificação para nenhum usuário qualquer efetuar a entrada no sistema e senha sem quaisquer cadastro */

    getPassword(password){
        if(password === 'Senha do Moderador'){
            return this._password;
        }else{
            return 'Senha do Moderador incorreta'
        }
    }

    getDate(){
        return this._date;
    }

    setPhoto(photo){
        this._photo = photo;
    }
}