var dados;
class Banco{
    constructor(){
        dados=JSON.parse(localStorage.getItem('user'));
    }
    saveUser(obj){
        if(localStorage.getItem('user')==undefined){
            user.push(obj);
            localStorage.setItem('user',JSON.stringify(user));
            dados=JSON.parse(localStorage.getItem('user'));
        }
        else{
            dados.push(obj);
            localStorage.setItem('user',JSON.stringify(dados));
        }
        senhasDsc.push(crt.descriptografar(dados[dados.length-1].senha));
    }
}
var bank=new Banco();
