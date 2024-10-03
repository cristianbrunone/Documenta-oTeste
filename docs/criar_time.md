## **Tela de Criar Time** {#tela-de-criar-time .unnumbered}

### **Descrição Geral** {#descrição-geral-8 .unnumbered}

Nesta tela, o administrador poderá criar um time para o seu clube.

### **Utilização** {#utilização-3 .unnumbered}

O administrador deve informar o nome do time e automaticamente se cria
uma tabela com o nome do time

> **AppBar**

-   Exibe um app bar personalizado (MyAppbar) com um botão de voltar que
    retorna à tela anterior.

> **Formulário**

-   **Campo de Texto**: Permite ao usuário inserir o nome do novo time.
    O texto inserido é controlado por um TextEditingController chamado
    ctrlTime.

-   **Validação de Entrada**: Antes de permitir a criação do time, o
    sistema valida o campo de texto:

    -   Verifica se o campo está vazio e exibe uma mensagem solicitando
        ao usuário para digitar o nome do time.

    -   Garante que o nome do time tenha pelo menos 2 caracteres.

    -   Usa uma expressão regular para garantir que o nome contenha
        apenas letras, números e espaços.

-   **Exibição de Mensagens de Erro**: Utiliza a classe Messages para
    mostrar mensagens informativas caso a validação não seja
    bem-sucedida, informando ao usuário sobre os requisitos para o nome
    do time.

### **Lista de Times Criados** {#lista-de-times-criados .unnumbered}

-   **Armazenamento de Dados**: Utiliza uma lista (List\<Time\> times)
    para armazenar os times criados. Cada time é representado por um
    objeto da classe Time, que contém apenas um atributo nome.

-   **Exibição em DataTable**: Os times são exibidos em uma tabela
    (DataTable) para organizar e apresentar os dados de forma
    estruturada.

    -   **Colunas**: A tabela possui duas colunas:

        -   Uma coluna para exibir o nome do time.

        -   Uma coluna para um ícone de navegação que permite ao usuário
            acessar uma tela de gerenciamento específica do time.

    -   **Linhas**: Cada linha da tabela corresponde a um time na lista
        times. Cada linha exibe o nome do time e um ícone de seta que,
        quando clicado, navega o usuário para a tela de gerenciamento do
        time usando o sistema de navegação do Flutter.

-   **Estilo e Layout**:

    -   A tabela é estilizada para ter um fundo branco (Colors.white),
        com bordas arredondadas (BorderRadius.circular(10)) e uma sombra
        suave (BoxShadow) para destacá-la na interface.

-   **Scrolling**: Se a lista de times crescer além da altura
    disponível, a tabela é colocada dentro de um SingleChildScrollView
    para permitir a rolagem vertical e garantir que todos os times sejam
    acessíveis ao usuário.

> **Botão \"Criar Time\"**

-   Ao ser clicado, executa a função \_criarTime(), que verifica todas
    as validações de entrada e exibe mensagens informativas em caso de
    erro.