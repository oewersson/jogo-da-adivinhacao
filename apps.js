var resposta = prompt("Deseja participar do jogo de adivinhação? ");


if (resposta === "sim") {
    //Informar a quatidade máxima de tentativas 
    var limiteTentativas = 10;
    alert("Você terá " + limiteTentativas + " tentativas para adivinhar o número!");

    //iniciar o jogo
    //var numeroSecreto = 100;
    var numeroSecreto = parseInt(Math.random() * 1001);
    var chute;
    var tentativas = 0;


    while (chute != numeroSecreto) {
        chute = parseInt(prompt('Digite um número entre  1 e 1000.')); tentativas++;


        //Se o chute for igual ao número secreto
        if (chute == numeroSecreto) {
            alert('Parabéns você acertou o número secreto!')
        }
        else if (chute > numeroSecreto) {
            alert('Errou... o número secreto é menor.');
        } else if (chute < numeroSecreto) {
            alert('Errou... o número secreto é maior.');
        }

        if (tentativas === 1) {
            alert('Você já deu ' + tentativas + ' chute.');
        } else {
            alert('Você já deu ' + tentativas + ' chutes.');
        }


        if (tentativas === limiteTentativas) {
            alert('Você atingiu o limite de tentativas!');
            break;
        }
    }

    if (chute !== numeroSecreto) {
        alert('Suas tentativas acabaram! O número secreto era ' + numeroSecreto);
    }

} else if (resposta === "não") {
    //Exibir uma mensagem de despedida
    alert("Que pena! Quem sabe na próxima vez.");

} else {
    // Resposta inválida 
    alert("Desulpe, não entendi sua resposta. Por favor, digite 'sim' ou 'não'. ");
}