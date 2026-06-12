function mostrarMensagem() {
    alert(
        "Bem-vindo à Agro Forte!\n\n" +
        "Somos especialistas em soluções para o agronegócio, " +
        "unindo tecnologia, produtividade e sustentabilidade."
    );
}

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Nossa equipe entrará em contato em breve."
    );

    this.reset();
});
