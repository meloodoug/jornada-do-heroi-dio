let name = "Douglas"
let XP = 7000
let patenteHeroi = ""
const patAviso = "A sua Patente de Heroi é:"
    if (XP <= 1000){
        patenteHeroi = "Ferro"
        console.log( patAviso + patenteHeroi, ". Estamos só no inicio da sua jornada, vamos adquirir mais habilidades" )
    }

    else if (XP >= 1001 && XP <=2000){
        patenteHeroi = "Bronze"
        console.log( patAviso + patenteHeroi, ". Você está indo bem, mas ainda precisa melhorar..." )
    }

    else if (XP >= 2001 && XP <=5000){
        patenteHeroi = "Prata"
        console.log( patAviso + patenteHeroi, ". Olha só... Estamos melhorando cada vez mais" )
    }

    else if (XP >= 5001 && XP <=7000){
        patenteHeroi = "Ouro"
        console.log( patAviso + patenteHeroi, ". Ta vendo aquela luz dourada? Isso é um sinal de que estamos no caminho certo, não vamos desistir!" )
    }

    else if (XP >= 7001 && XP <=8000){
        patenteHeroi = "Platina"
        console.log( patAviso + patenteHeroi, ". Estou muito feliz pela sua persistência. Conte comigo!" )
    }

    else if (XP >= 8001 && XP <=9000){
        patenteHeroi = "Ascendente"
        console.log( patAviso + patenteHeroi, ". Estou muito orgulhoso de você " + name )
    }

    else if (XP >= 9001 && XP <=10000){
        patenteHeroi = "Imortal"
        console.log( patAviso + patenteHeroi, ". Cada vez mais próximo do nosso objetivo. Se este fosse o fim de nossa Jornada, com certeza estariamos comemorando, mas ainda falta mais um pouquinho... Não vamos desistir agora né Guerreiro?!." )
    }

    else if (XP >= 10001){
        patenteHeroi = "Radiante"
        console.log(patenteHeroi, ". Parabéns amigo, você é um de nossos maiores nomes que já trilharam essa joranada, seu nome será lembrado pra sempre nas próximas e próximas gerações. Nossa temporada juntos termina aqui, mas em breve nos reencontraremos novamente... Só não posso dizer que estremos no mesmo time, então... Se Prepare " + name,"!" )
    }


    console.log("Nos Veremos em Breve " + name)