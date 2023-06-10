class Criptografa {
    criptografar(x) {
        var crip = "";
        for (var i = 0; i < x.length; i++) {
            switch (x[i]) {
                case "a":
                    crip += "b";
                    break;
                case "b":
                    crip += "c";
                    break;
                case "c":
                    crip += "d";
                    break;
                case "d":
                    crip += "e";
                    break;
                case "e":
                    crip += "f";
                    break;
                case "f":
                    crip += "g";
                    break;
                case "g":
                    crip += "h";
                    break;
                case "h":
                    crip += "i";
                    break;
                case "i":
                    crip += "j";
                    break;
                case "j":
                    crip += "k";
                    break;
                case "k":
                    crip += "l";
                    break;
                case "l":
                    crip += "m";
                    break;
                case "m":
                    crip += "n";
                    break;
                case "n":
                    crip += "o";
                    break;
                case "o":
                    crip += "p";
                    break;
                case "p":
                    crip += "q";
                    break;
                case "q":
                    crip += "r";
                    break;
                case "r":
                    crip += "s";
                    break;
                case "s":
                    crip += "t";
                    break;
                case "t":
                    crip += "u";
                    break;
                case "u":
                    crip += "v";
                    break;
                case "v":
                    crip += "w";
                    break;
                case "w":
                    crip += "x";
                    break;
                case "x":
                    crip += "y";
                    break;
                case "y":
                    crip += "z";
                    break;
                case "z":
                    crip += "a";
                    break;
                case "0":
                    crip += "1";
                    break;
                case "1":
                    crip += "2";
                    break;
                case "2":
                    crip += "3";
                    break;
                case "3":
                    crip += "4";
                    break;
                case "4":
                    crip += "5";
                    break;
                case "5":
                    crip += "6";
                    break;
                case "6":
                    crip += "7";
                    break;
                case "7":
                    crip += "8";
                    break;
                case "8":
                    crip += "9";
                    break;
                case "9":
                    crip += "0";
                    break;
                default:
                    crip += x[i];
                    break;
            }
        }
        return crip;
    }
    descriptografar(x) {
        var discrip = "";
        for (var i = 0; i < x.length; i++) {
            switch (x[i]) {
                case "a":
                    discrip += "z";
                    break;
                case "b":
                    discrip += "a";
                    break;
                case "c":
                    discrip += "b";
                    break;
                case "d":
                    discrip += "c";
                    break;
                case "e":
                    discrip += "d";
                    break;
                case "f":
                    discrip += "e";
                    break;
                case "g":
                    discrip += "f";
                    break;
                case "h":
                    discrip += "g";
                    break;
                case "i":
                    discrip += "h";
                    break;
                case "j":
                    discrip += "i";
                    break;
                case "k":
                    discrip += "j";
                    break;
                case "l":
                    discrip += "k";
                    break;
                case "m":
                    discrip += "l";
                    break;
                case "n":
                    discrip += "m";
                    break;
                case "o":
                    discrip += "n";
                    break;
                case "p":
                    discrip += "o";
                    break;
                case "q":
                    discrip += "p";
                    break;
                case "r":
                    discrip += "q";
                    break;
                case "s":
                    discrip += "r";
                    break;
                case "t":
                    discrip += "s";
                    break;
                case "u":
                    discrip += "t";
                    break;
                case "v":
                    discrip += "u";
                    break;
                case "w":
                    discrip += "v";
                    break;
                case "x":
                    discrip += "w";
                    break;
                case "y":
                    discrip += "x";
                    break;
                case "z":
                    discrip += "y";
                    break;
                case "0":
                    discrip += "9"
                    break;
                case "1":
                    discrip += "0"
                    break;
                case "2":
                    discrip += "1"
                    break;
                case "3":
                    discrip += "2"
                    break;
                case "4":
                    discrip += "3"
                    break;
                case "5":
                    discrip += "4"
                    break;
                case "6":
                    discrip += "5"
                    break;
                case "7":
                    discrip += "6"
                    break;
                case "8":
                    discrip += "7"
                    break;
                case "9":
                    discrip += "8"
                    break;
                default:
                    discrip += x[i];
                    break;
            }
        }
        return discrip;
    }
}
var senhasDsc = new Array();
var crt = new Criptografa();
try {
    for (var i = 0; i < dados.length; i++) {
        senhasDsc.push(crt.descriptografar(dados[i].senha));
    }
} catch{

}

