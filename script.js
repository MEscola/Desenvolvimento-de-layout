//alert('Este eh um teste de inclusão de arquivos javascript!!!');


    //  busca
    document.addEventListener('DOMContentLoaded', function() {
      const searchButton = document.getElementById('searchButton');
      const searchInput = document.getElementById('searchInput');
      const searchResults = document.getElementById('searchResults');
  
      // Função para executar a busca
      function executeSearch() {
          const searchTerm = searchInput.value.trim();
          
          if (searchTerm) {
              searchResults.innerHTML = `Você buscou por: <strong>"${searchTerm}"</strong>`;
              searchResults.style.display = 'block';
              
              // Esconde após 5 segundos
              setTimeout(() => {
                  searchResults.style.display = 'none';
              }, 5000);
          } else {
              searchResults.innerHTML = 'Por favor, digite algo para buscar';
              searchResults.style.display = 'block';
          }
      }
  
      // Evento de clique na lupa
      document.getElementById("searchButton").addEventListener("click", function () {
        const valorBusca = document.getElementById("searchInput").value;
        const resultados = document.getElementById("searchResults");
    
        if (valorBusca.trim() === "") {
          resultados.innerText = "Digite algo para buscar.";
        } else {
          resultados.innerText = `Você buscou por: "${valorBusca}"`;
        }
    
        resultados.style.display = "block";
      });
      
  
      // Evento de pressionar Enter
      searchInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              executeSearch();
          }
      });
  });