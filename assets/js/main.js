function calculaIMC() {

    const form = document.querySelector('.form');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const inputAltura = evento.target.querySelector('#altura');
        const inputPeso = evento.target.querySelector('#peso');

        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);

        if (!altura) {
            setResultado('Altura Inválida', false);
            return;
        }

        if (!peso) {
            setResultado('Peso Inválido', false);
            return;
        }

        const imc = getImc(altura, peso);
        const nivelImc = getNivelImc(imc);
        console.log(imc, nivelImc);

        const msg = `Seu IMC é ${imc} (${nivelImc}).`;
        setResultado(msg, true);


    });

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
        'Obesidade grau 1', 'Obesidade grau 1'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function getImc(altura, peso) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function criaParagrafo() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const mensagem = document.querySelector('.output');
        mensagem.innerHTML = '';

        const p = criaParagrafo();

        if (isValid) {
            p.classList.add('output-correct');
        } else {
            p.classList.add('output-incorrect');
        }


        p.innerHTML = msg;
        mensagem.appendChild(p);

    }


}

calculaIMC();