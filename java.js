//Formato correcto: direccion(puede admitir puntos y guiones bajos)@nombreDominio.RestoDominio.
        //Se trata de un campo obligatorio.
        function esLetra(caracter) {
            return ((caracter.charCodeAt(0) >= "a".charCodeAt(0) && caracter.charCodeAt(0) <= "z".charCodeAt(0)) || (caracter.charCodeAt(0) >= "A".charCodeAt(0) && caracter.charCodeAt(0) <= "Z".charCodeAt(0)));
        }
        function esNumero(caracter) {
            return (caracter.charCodeAt(0) >= "0".charCodeAt(0) && caracter.charCodeAt(0) <= "9".charCodeAt(0));
        }
        function guionPunto(caracter) {
            return (caracter == "_" || caracter == ".");
        }
        function emailValido(email) { //Lo que hay encima del @
            let cont = 0
            for (let i = 0; i < email.length; i++) {
                if (esLetra(email.charAt(i)) || guionPunto(email.charAt(i))) {
                    cont++
                }
            }
            return cont == email.length
        }
        function arrobasPuntos(email, caracter) {
            let cont = 0
            for (let i = 0; i < email.length; i++) {
                if (email[i] == caracter) {
                    cont++
                }
            }
            return email[0] != caracter && cont == 1 && email[email.length - 1] != caracter
        }
        // function soloLetras(cadena){
        //     let cont = 0;
        //     for (const caracter of cadena) {
        //         if(esLetra(caracter)){
        //             cont++
        //         }
        //     }
        //     return cont == cadena.length
        // }
        function soloLetras(cadena) {//ejemplo: cadena=a3sdf
            var resultado = true
            let i = 0
            while (resultado && i < cadena.length) {
                resultado = resultado && esLetra(cadena[i])
                i++
            }
            return resultado
        }
        function validarEmailTotal(emailCompleto) {
            if (arrobasPuntos(emailCompleto, "@")) {//De momento el email es válido, ya que sólo hay una @ y no está al principio ni al final
                let partes = email.split('@');//Ejemplo: davinia_rosa.hernandez@a.com => ['davinia_rosa.hernandez', 'a.com']
                if (emailValido(partes[0])) {//Lo que hay a la izquierda de la @ es válido
                    if (arrobasPuntos(partes[1], '.')) {//Lo que está a la derecha de la  @ tiene un punto que no está ni al principio ni al final
                        let partes1 = partes[1].split('.');//Ejemplo: davinia_rosa.hernandez@auytuy.com => ['auytuy', 'com']
                        if (soloLetras(partes1[0]) && soloLetras(partes1[1])) {
                            alert("valido")
                        } else {
                            alert('Tu email no es válido.')
                        }
                    } else {
                        alert('Tu email no es válido.')
                    }
                } else {
                    alert('Tu email no es válido.')
                }
            } else {
                alert('Tu email no es válido.')
            }
        }