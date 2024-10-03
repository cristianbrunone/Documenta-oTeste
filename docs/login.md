A tela de login (LoginScreen) é um componente que permite aos usuários
acessar o aplicativo. Ela herda de StatefulWidget para gerenciar seu
estado interno.

### **Componentes Principais** 

#### **TextFormBase** 

Um widget personalizado projetado para fornecer uma entrada de texto
estilizada e altamente personalizável. Ele encapsula um TextFormField e
adiciona uma camada adicional de personalização e configuração.

**Parâmetros:**

-   controller (obrigatório): Um controlador de texto que controla o
    texto que está sendo editado.

-   inputType: Define o tipo de entrada do teclado para o campo de texto
    (texto, número, e-mail, etc.).

-   inputFormatter: Lista opcional de formatadores de entrada.

-   obscure: Booleano que indica se o texto deve ser obscurecido (útil
    para senhas).

-   visibility: Widget opcional para exibir um ícone que permite
    alternar entre texto visível e obscurecido.

-   labelText: Texto exibido como rótulo acima do campo de texto.

-   width: Largura do campo de texto.

-   validator: Função opcional que valida o valor do campo de texto.

-   autovalidateMode: Define o modo de validação automática do campo de
    texto.

-   paddingTop, paddingRight, paddingBottom, paddingLeft: Parâmetros
    para definir o preenchimento do widget.

**Funcionalidades:**

-   Estilização personalizada: Permite definir estilos personalizados
    para o campo de texto.

-   Suporte a temas: Herda e pode estender os temas definidos no
    aplicativo.

-   Manipulação de entrada: Facilita a manipulação de diferentes tipos
    de entrada.

-   Facilmente integrável: Pode ser incorporado em qualquer layout
    Flutter e personalizado conforme necessário.

<!-- -->

-   

**Funcionalidades:**

-   Estilização personalizada: Permite definir estilos personalizados
    para o campo de texto.

-   Suporte a temas: Herda e pode estender os temas definidos no
    aplicativo.

-   Manipulação de entrada: Facilita a manipulação de diferentes tipos
    de entrada.

-   Facilmente integrável: Pode ser incorporado em qualquer layout
    Flutter e personalizado conforme necessário.

#### **ButtonBase** 

Um botão personalizável projetado para aplicações Flutter, oferecendo
flexibilidade em termos de aparência e preenchimento.

**Parâmetros do Construtor:**

-   **name (obrigatório):** Texto a ser exibido no botão.

-   **onTap (obrigatório):** Função de callback executada quando o botão
    é pressionado.

-   **padding:** Preenchimento em torno do botão (padrão:
    EdgeInsets.all(26.0)).

-   **width:** Largura do botão (padrão: 0, ajustável automaticamente).

-   **height:** Altura do botão (padrão: 45).

-   **color:** Cor de fundo do botão (padrão: Color.fromARGB(255, 0, 53,
    186)).

-   **textColor:** Cor do texto exibido no botão (padrão: Colors.white).

-   **paddingTop, paddingRight, paddingBottom, paddingLeft:**
    Preenchimento específico para cada lado.

### **Métodos e Funcionalidades da Tela de Login**

1.  **Método build(BuildContext context)** Constrói a interface da tela
    de login, incluindo um logotipo, campos de entrada para e-mail e
    senha, link \"Esqueceu a senha?\", e botões de login e registro.

2.  **Método login()** Valida os campos de entrada do formulário:

<!-- -->

1.  Valida o e-mail:

    -   Verifica se o campo está vazio.

    -   Verifica se o e-mail está no formato correto.

2.  Valida a senha:

    -   Verifica se o campo está vazio.

    -   Verifica se a senha possui no mínimo 6 caracteres.

3.  Verifica as credenciais carregadas do arquivo JSON.

    -   Se válidas, navega para a próxima tela de acordo com o tipo de
        usuário.

    -   Caso contrário, exibe uma mensagem de erro.

<!-- -->

3.  

4.  **Método signUp()** Atualmente está vazio, mas é destinado a lidar
    com o cadastro de usuários.

5.  **Método trocarVisibilidade()** Altera a visibilidade da senha,
    alternando entre texto visível e obscurecido.

6.  **Função resetPassword(BuildContext context)** Mostra um diálogo de
    redefinição de senha quando chamada.

### **Variáveis e Estado** 

-   ctrlEmail: Controlador do campo de e-mail.

-   ctrlPass: Controlador do campo de senha.

-   formKey: Chave do formulário para validação.

-   \_obscureText: Booleano que controla a visibilidade do texto da
    senha.

-   usuarios: Lista para armazenar os usuários carregados do arquivo
    JSON.

-   emailError: String para armazenar mensagens de erro relacionadas ao
    e-mail.

-   passwordError: String para armazenar mensagens de erro relacionadas
    à senha.

**Processos Adicionais**

**Carregar Usuários**

**Método carregarUsuarios():**

-   Carrega o conteúdo de um arquivo JSON contendo informações de
    usuários.

-   Decodifica o JSON e armazena a lista de usuários na variável
    usuarios.

**Resetar Senha**

**Método resetPassword(BuildContext context):**

-   Exibe um diálogo para redefinir a senha quando chamado.