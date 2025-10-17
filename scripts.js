// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o elemento do cabeçalho
    const header = document.querySelector('.header');

    // Função que será executada quando o usuário rolar a página
    function handleScroll() {
        // Se a posição do scroll vertical for maior que 50 pixels
        if (window.scrollY > 50) {
            // Adiciona a classe 'scrolled' ao header
            header.classList.add('scrolled');
        } else {
            // Remove a classe 'scrolled' do header
            header.classList.remove('scrolled');
        }
    }

    // Adiciona um "escutador" de evento de scroll na janela
    window.addEventListener('scroll', handleScroll);
});