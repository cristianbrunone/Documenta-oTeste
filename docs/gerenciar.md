## **Tela \"Gerenciar Clube Screen\"** 

### **Descrição Geral** {#descrição-geral-1 .unnumbered}

A GerenciarClubeScreen é uma tela de gerenciamento de clubes no
aplicativo Flutter. Esta tela exibe várias opções e informações
relacionadas aos clubes, permitindo a criação de times, cadastro de
tabelas, convites e mais.

### **Atributos** {#atributos .unnumbered}

### opcaoClube: Título do clube que está sendo gerenciado, passado como argumento para o widget.

### quantidadeVarzeanos: Número total de varzeanos.

### quantidadeMensalistas: Número total de mensalistas.

### quantidadeAvulsos: Número total de avulsos.

### **Arquivos Relacionados** {#arquivos-relacionados .unnumbered}

-   MyAppbar.dart

-   MyCard.dart

-   MyGridView.dart

###   {#section-8 .unnumbered}

### **Componentes Principais** 

#### **AppBar Personalizada (MyAppbar)** 

Barra de navegação no topo da tela, contendo uma imagem de logotipo, um
campo de texto para pesquisa e um ícone de perfil dentro de um
CircleAvatar.

**Text:** Exibe o texto do clube que recebe como argumento.

**Parâmetros:**

-   **width (Obrigatório):** Define a largura do dropdown.

-   **placeholderText (Obrigatório):** Texto exibido quando nenhuma
    opção está selecionada.

-   **options (Obrigatório):** Lista de opções a serem exibidas.

#### **Grade de Visualização (MyGridView)** 

Widget que organiza uma coleção de cartões (MyCard) em uma grade com um
número específico de colunas.

**Parâmetros:**

-   **crossAxisCount:** Define o número de colunas na grade.

-   **myCards:** Lista de widgets MyCard exibidos na grade.

#### **MyCard** {#mycard .unnumbered}

Cartão personalizado exibido na grade, contendo informações ou ações
específicas relacionadas aos clubes do usuário.

### **Funcionalidades da Tela** 

1.  **Cartões de Funções**

    -   **Criar Times**: Navega para a tela de criação de times.

    -   **Cadastrar Tabela**: Navega para a tela de cadastro de tabela.

    -   **Convidar Varzeano**: Navega para a tela de convite de
        varzeanos.

    -   **Cadastrar Varzeano**: Navega para a tela de cadastro de
        varzeanos.

    -   **Enviar Mensagem**: Compartilha um link para baixar o
        aplicativo.

    -   **Gerenciar Varzeanos**: Navega para a tela de gerenciamento de
        varzeanos.

    -   **Resumo Jogos**: Futuramente, navegará para a tela de resumo de
        jogos.

    -   **Meus Times**: Navega para a tela de visualização dos times do
        usuário.

    -   **Relatório Financeiro**: Navega para a tela de relatório
        financeiro.

2.  **Widget \_buildPercentageCircle** Cria um círculo dividido em duas
    partes para representar duas porcentagens diferentes.

**Parâmetros:**

-   **title:** Descrição do que as porcentagens representam.

-   **mensalistasPercentage:** Porcentagem dos mensalistas.

-   **avulsosPercentage:** Porcentagem dos avulsos.

-   **mensalistasColor:** Cor usada para representar os mensalistas.

-   **avulsosColor:** Cor usada para representar os avulsos.

3.  **Classe CirclePainter** Desenha um arco em um círculo para
    representar uma porcentagem.

**Parâmetros:**

-   **progress:** Valor entre 0 e 1 que representa a porcentagem.

-   **color:** Cor do arco.

4.  **Variáveis e Estado**

    -   **\_varzeanos:** Lista de jogadores.

    -   **\_titles:** Títulos das colunas da tabela.

    -   **selectedTime:** Time selecionado no dropdown.

    -   **cantidadVarzeanos:** Quantidade total de jogadores.

    -   **cantidadMensalistas:** Quantidade de jogadores mensalistas.

    -   **cantidadAvulsos:** Quantidade de jogadores avulsos.