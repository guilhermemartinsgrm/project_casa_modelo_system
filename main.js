document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aqui você pode usar SQLite para verificar as credenciais do usuário
        // Você precisará configurar a conexão com o banco de dados SQLite aqui

        // Exemplo de consulta SQLite:
        // const db = new sqlite3.Database('seu_banco_de_dados.db');
        // db.get('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], function(err, row) {
        //     if (row) {
        //         // Login bem-sucedido
        //         message.textContent = 'Login bem-sucedido!';
        //     } else {
        //         message.textContent = 'Credenciais inválidas. Tente novamente.';
        //     }
        // });

        // Fechar a conexão com o banco de dados quando terminar
        // db.close();
    });
});



