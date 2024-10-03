## **Tela de Gerenciamento (GerenciarVarzeanosScreen)** {#tela-de-gerenciamento-gerenciarvarzeanosscreen .unnumbered}

A GerenciarVarzeanosScreen é um widget stateful projetado para gerenciar
e exibir uma lista de varzeanos (jogadores) junto com suas
classificações. A tela inclui uma barra de aplicativos personalizada, um
título e uma tabela listando os jogadores com ações para editar suas
informações.

### **Componentes principais** {#componentes-principais-6 .unnumbered}

1.  **Classe GerenciarVarzeanosScreen**

    -   Esta classe estende StatefulWidget, indicando que a interface do
        usuário pode mudar dinamicamente em resposta a interações do
        usuário ou outros eventos.

    -   Ela possui uma classe de estado correspondente,
        \_GerenciarVarzeanosScreenState.

2.  **Classe \_GerenciarVarzeanosScreenState**

    -   Esta é a classe de estado que gerencia os dados e o estado da
        tela.

    -   Contém uma lista de varzeanos, onde cada varzeano é representado
        por um Map\<String, dynamic\> com informações como name, rating
        e edit.

    -   Também possui uma lista de titles que define os títulos das
        colunas da tabela.

3.  **Método build(BuildContext context)**

    -   Retorna a estrutura visual da tela, composta por vários widgets
        do Flutter:

        -   Scaffold: Fornece a estrutura básica da tela.

        -   PreferredSize: Define a altura da AppBar personalizada
            (Myappbar).

        -   SafeArea: Garante que o conteúdo da tela não interfira com
            áreas do sistema como entalhes ou barras de status.

        -   SingleChildScrollView: Permite que a tela seja rolável caso
            o conteúdo exceda a altura disponível.

        -   Column: Organiza os widgets verticalmente.

4.  **Widgets Dentro de Column**

    -   SizedBox(height: 40): Adiciona um espaço vertical de 40 pixels.

    -   Text: Exibe o título \"Gerenciar Varzeano\" com estilo
        personalizado.

    -   SizedBox(height: 20): Adiciona um espaço vertical de 20 pixels.

### **Componente principal** {#componente-principal .unnumbered}

**VarzeanosTable**

O widget VarzeanosTable é um widget personalizado do Flutter que exibe
uma tabela com uma lista de itens, onde cada item é representado por uma
linha na tabela. O widget suporta várias funcionalidades, como exibição
de classificação, botão de edição, status de pagamento, e cópia de chave
PIX.

**Parâmetros:**

-   **varzeanos**: Uma lista de mapas que contém os dados a serem
    exibidos na tabela.

-   **titles**: Uma lista de títulos das colunas da tabela.

-   **myDefaultColumnWidth**: Largura padrão das colunas da tabela
    (opcional).

-   **myFontSize**: Tamanho da fonte dos textos na tabela (opcional).

-   **paddingTop, paddingRight, paddingBottom, paddingLeft**:
    Espaçamento interno da tabela (opcional).

**Métodos:**

-   **\_copyToClipboard(String text)**: Método privado para copiar texto
    para a área de transferência e exibir um toast de confirmação.

**Estrutura:**

O widget consiste em uma tabela (Table) onde cada linha é representada
por um TableRow. Cada célula na linha contém os dados correspondentes do
item da lista varzeanos.

-   A primeira linha da tabela contém os títulos das colunas.

-   As linhas subsequentes representam os itens da lista varzeanos.

-   A tabela é construída dinamicamente com base nos dados fornecidos.

**Funcionalidades:**

1.  **Exibição de Classificação**: Se o mapa de um item na lista
    varzeanos contiver a chave \'rating\', a classificação será exibida
    usando o componente RatingBarIndicator.

2.  **Botão de Edição**: Se o mapa de um item na lista varzeanos
    contiver a chave \'edit\', um ícone de edição será exibido como um
    botão.

3.  **Status de Pagamento**: Se o mapa de um item na lista varzeanos
    contiver a chave \'extra\', o status de pagamento será exibido em
    cores diferentes.

4.  **Chave PIX e Copiar**: Se o mapa de um item na lista varzeanos
    contiver a chave \'pagar\', um botão para mostrar a chave PIX será
    exibido. Quando clicado, abre um modal contendo a chave PIX e um
    botão para copiá-la.