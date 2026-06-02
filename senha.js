
        function verificarSenha() {
            const senhaCorreta = "marirafa76"; // Defina a senha aqui
            const senhaDigitada = document.getElementById("password-input").value;
            const loginScreen = document.getElementById("login-screen");
            const galleryScreen = document.getElementById("gallery-screen");
            const errorMessage = document.getElementById("error-message");

            if (senhaDigitada === senhaCorreta) {
                // Se a senha estiver certa, esconde o login e mostra a galeria
                loginScreen.style.display = "none";
                galleryScreen.style.display = "block";
                // Muda o alinhamento do body para o topo da página
                document.body.style.alignItems = "flex-start";
            } else {
                // Se estiver errada, mostra mensagem de erro
                errorMessage.style.display = "block";
                document.getElementById("password-input").value = ""; // Limpa o campo
            }
        }

        // Permite apertar "Enter" no teclado para entrar
        document.getElementById("password-input").addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                verificarSenha();
            }
        });
    