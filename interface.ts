interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser() {
    return {
        nome:'Jeff',
        email: 'jefferson.mo.oli@gmail.com'
    }
}

function setUser(usuario: Usuario){
    // .....
}