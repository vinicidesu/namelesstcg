import React from 'react';
import UserList from './components/userList'; // 1. Importa o componente UserList
// Se você tiver um arquivo CSS global para a aplicação, importe-o aqui
// import './App.css'; 

function App() {
  // O retorno do App é o JSX que define a estrutura principal da sua aplicação
  return (
    <div className="App"> {/* Um container principal para a aplicação */}
      
      {/* Cabeçalho da Aplicação */}
      <header className="App-header" style={{ backgroundColor: '#20232a', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Meu Portal TCG</h1>
      </header>

      {/* Conteúdo Principal da Aplicação */}
      <main style={{ padding: '20px', maxWidth: '900px', margin: '20px auto' }}>
        <p style={{ marginBottom: '20px', textAlign: 'center' }}>
          Bem-vindo! Explore os usuários cadastrados abaixo.
        </p>
        
        {/* 2. Renderiza o componente UserList aqui */}
        <UserList />

        {/* COMENTÁRIO PARA O FUTURO:
          Quando sua aplicação crescer, esta seção <main> provavelmente
          conterá um sistema de rotas (usando react-router-dom, por exemplo)
          para exibir diferentes "páginas" ou componentes com base na URL.
          Exemplo:
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/usuarios" element={<UserList />} />
            <Route path="/meus-decks" element={<MeusDecks />} />
          </Routes>
        */}
      </main>

      {/* Rodapé da Aplicação (Opcional) */}
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', borderTop: '1px solid #eee' }}>
        <p>&copy; {new Date().getFullYear()} NamelessTCG. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

// 3. Exporta o componente App para ser usado no index.js (ou main.jsx)
export default App;