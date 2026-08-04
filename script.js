console.log("olá mundo")

//Questão 1
let nome = " MaRiA SiLvA ";
let nomeSemEspacos = nome.trim();

console.log(nomeSemEspacos.toLowerCase());
console.log(nomeSemEspacos.toUpperCase());

//Questão 2
let frase = "Eu gosto de Java. Java é muito legal";
let frase1 = frase.replace("Java", "JavaScript");
let frase2 = frase.replaceAll("Java", "JavaScript");

console.log(frase1);
console.log(frase2);

//Questão 3
frase = "Eu gosto de programação";
palavra = "programação";
if(frase.includes(palavra)){
    console.log("A palavra foi encontrada na frase.");
}else{
    console.log("A palavra não foi encontrada na frase.");
}

//Questão 4
frase = "Aprender JavaScript é divertido"; 
palavra = "JavaScript";
indice = frase.indexOf(palavra);

if(indice = -1){
    console.log("A palavra começa no índice 9.");
}else{
    console.log("Palavra não encotrada");
}

//Questão 5
let url = "https://www.google.com";
if(url.startsWith("https://")){
    console.log("O endereço do site começa com https://");
}else{
    console.log("O endereço do site não começa com https://");
}
   

//Questão 6 
let arquivo = "documento.pdf";
if(arquivo.endsWith(".pdf")){
    console.log("O arquivo está em pdf");
}else{
    console.log("O arquivo não está em pdf");
}


//Questão 7 
let nomeCompleto = document.getElementById("nome")
const botaoResposta = document.getElementById("botao")
const resposta = document. getElementById("resposta")

botaoResposta.addEventListener("click", () => {
    let nomeInformado = nomeCompleto.value.trim().replace(/[@*#$:]/g,"").toLowerCase().split(/\s+/)

    for(let i=0;i < nomeInformado.length;i++){
        nomeInformado[i]=
        nomeInformado[i][0].toUpperCase("")+nomeInformado[i].slice(1)

    }

    let nomeFormatado = nomeInformado.join(" ")
    resposta.textContent=nomeFormatado
})

//Questão 8
function limparCPF(){
    const cpfComFormatacao = document.getElementById("cpfInput").value;
    const cpfApenasNumeros = cpfComFormatacao.replace(/\D/g, '');
    document.getElementById("resultado9").innerText = cpfApenasNumeros;

}
