//Variaveis globais
let newName = "Tama"
let hunger = 20
let health = 80
let age = 0
let quotes = document.getElementById("tama-quotes")
let hungerNumber = document.getElementById("hunger")
let healthNumber = document.getElementById("health")
let ageNumber = document.getElementById("age")
//Funcao para mudar o nome
function changeName(){
    let nameInput = document.getElementById("nameInput");
    let currentName = document.getElementById("currentName");
    if(nameInput.value.length == 0){
        window.alert("Utilize um nome válido, por favor!.");
    } else {
        newName = nameInput.value;
        currentName.innerHTML = `Nome: ${newName}`;
        nameInput.value = "";
        quotes.innerHTML = `${newName}: Olá! Meu nome é ${newName}!`;
    }
}
//Funcao para dar comida ao bichinho
function feed(){
    if(hunger <= 0){
        quotes.innerHTML = `${newName}: Não estou com fome agora.`
        hunger = 0
        updateStats()
        hunger = 0
    } else {
        hunger -= 20;
        health -= 10;
        updateStats()
    }

    if(hunger >= 100){
        hunger = 100;
        alert("[SISTEMA] Seu bichinho morreu de fome! Reiniciando...")
        setInterval(() => {
            location.reload()
        }, 2000)
    }

    if(health <= 0){
        alert("[SISTEMA] Seu bichinho ficou doente e morreu! Reiniciando...")
        setInterval(() => {
            location.reload()
        }, 1000)
    }
}
//Funcao para dormir
function sleep(){

    if(health >= 100){
        health = 100;
        updateStats();
        quotes.innerHTML = `Já dormi o bastante!`
    } else {
        hunger += 10;
        health += 20;
        updateStats();
    }
    


    if(hunger >= 100){
        hunger = 100;
        alert("[SISTEMA] Seu bichinho morreu de fome! Reiniciando...")
        setInterval(() => {
            location.reload()
        }, 1000)
    }


    if(health <= 0){
        alert("[SISTEMA] Seu bichinho ficou doente e morreu! Reiniciando...")
        setInterval(() => {
            location.reload()
        }, 1000)
    }


}
//Funcao para aniversario
function birthday(){
    age += 1
    hunger += 20
    health -= 10
    quotes.innerHTML = `${newName}: Eeeee. Feliz aniversário!`
    if(hunger >= 100){
        hunger = 100;
        alert("[SISTEMA] Seu bichinho morreu de fome! Reiniciando...")
        setInterval(() => {
            location.reload()
        }, 2000)
    }
    if(health <= 0){
        alert("[SISTEMA] Seu bichinho ficou doente e morreu! Reiniciando...")
        setInterval(() => {
            location.reload()
        }, 1000)
    }
    updateStats()
}
//Funcao que atualiza os status na tela
function updateStats(){
    hungerNumber.innerHTML = `Fome: ${hunger}`;
    healthNumber.innerHTML = `Saúde: ${health}`
    ageNumber.innerHTML = `Idade: ${age}`
}