## **Tela de Home Varzeano Screen** {#tela-de-home-varzeano-screen .unnumbered}

### **Descrição Geral** {#descrição-geral-2 .unnumbered}

A HomeVarzeanoScreen é a tela principal de um aplicativo que gerencia
times de futebol amador, oferecendo funcionalidades como visualização de
times, resumo de jogos, envio de mensagens e relatórios financeiros.

### **Arquivos Relacionados** {#arquivos-relacionados-1 .unnumbered}

-   **MyAppbar.dart**

-   **MyCard.dart**

-   **MyDrawerMenu.dart**

-   **MyDropdown.dart**

-   **MyGridView.dart**

-   **TableHome.dart**

-   **TableMensagens.dart**

**Funcionalidades Principais**

-   Seleção de Card: Altera dinamicamente a seção exibida na tela ao
    clicar nos cards correspondentes.

-   Toast Notifications: Exibe notificações toast
    (Fluttertoast.showToast) para informar o usuário sobre seleção de
    times.

-   Compartilhamento: Permite ao usuário compartilhar mensagens
    digitadas através do Share.share.

-   Validação de Formulário: Valida se o campo de mensagem está vazio
    antes de enviar, exibindo uma mensagem de erro se necessário.

### **Componentes Principais** {#componentes-principais-2 .unnumbered}

#### **Barra de Aplicativo Personalizada (MyAppbar)** {#barra-de-aplicativo-personalizada-myappbar .unnumbered}

Localizada no topo da tela, oferece acesso rápido às funcionalidades de
navegação.

#### **Grid de Ações Rápidas** {#grid-de-ações-rápidas .unnumbered}

Oferece opções como criar times, visualizar resumos de jogos, enviar
mensagens e acessar relatórios financeiros.

**Comportamento dos Cards:**

**Card \"Meus Times\"**

**Descrição:\
**Este card permite ao usuário visualizar informações sobre seus times
cadastrados.

**Ação ao Selecionar:\
**Ao ser selecionado, atualiza o estado da tela para exibir os jogos que
vão acontecer. O usuário pode se escalar ao clicar no ícone, um card com
mensagens e um card com o histórico e classificação.

**Componentes Exibidos:**

-   **Título:** \"Meus Times\"

-   **Ícone:** FontAwesomeIcons.personRunning

**Funcionalidade:\
**Exibe um grid (MyGridView) com cards personalizados (MyCard) para cada
time, permitindo ao usuário interagir com cada time selecionado. Os
itens são:

-   **TableHome**

-   **TableMensagens**

-   **Card de Histórico e Classificação**

**Table Home:**

O widget **TableHome** é uma implementação personalizada que exibe uma
tabela de dados utilizando o widget DataTable do Flutter, além de cards
adicionais para itens específicos com base no estado do aplicativo.

**Propriedades:**

-   **varzeanosHome:** Lista de mapas que contém os dados a serem
    exibidos na tabela e nos cards adicionais.

-   **titles:** Lista de títulos das colunas da tabela.

-   **myFontSize:** Tamanho da fonte personalizado para os textos na
    tabela (opcional).

-   **paddingTop, paddingRight, paddingBottom, paddingLeft:**
    Espaçamento interno personalizado para o contêiner principal da
    tabela (opcional).

-   **posicaoController:** Controlador de texto para o campo de posição
    (não utilizado diretamente na tabela).

-   **tipo:** Tipo de informação a ser exibida, neste caso,
    \"Mensalista\".

-   **toggleStatusController:** Controlador para lidar com a
    funcionalidade de alternar o status dos itens na tabela.

**Estado Interno (\_TableHomeState):**

O estado interno do widget mantém um mapa **gameCardExists** que
rastreia quais linhas da tabela possuem cards adicionais visíveis com
base no status dos itens.

**Funcionalidades Principais:**

-   **Inicialização:** No método **initState**, o widget prepara o mapa
    **gameCardExists** com base no status inicial dos itens da lista
    **varzeanosHome**.

-   **Alternância de Status:** O método **\_toggleStatus** permite
    alternar o status de um item na tabela entre \"Escalado\" e \"Não
    escalado\". Isso atualiza dinamicamente a exibição na tabela e
    remove ou adiciona cards adicionais conforme necessário.

**Estrutura Visual:**

O widget é estruturado em uma coluna vertical que contém:

-   Um contêiner principal decorado com uma sombra sutil e um fundo
    branco para a tabela.

-   Dentro desse contêiner, utiliza o widget DataTable para exibir os
    dados em colunas formatadas.

-   Cada linha da tabela é representada por **DataRow**, onde cada
    célula é um **DataCell** contendo os dados específicos formatados.

-   Os ícones de ação em cada linha permitem ao usuário alternar o
    status do item na tabela.

-   Adicionalmente, se houver itens marcados como \"Escalado\", cards
    adicionais são exibidos horizontalmente abaixo da tabela, mostrando
    mais detalhes sobre esses itens.

**Table Mensagens:**

O widget TableMensagens é responsável por exibir uma tabela de mensagens
relacionadas aos jogadores de um time. Ele utiliza o widget DataTable do
Flutter para estruturar os dados de maneira organizada e apresentável.
Cada mensagem é exibida em uma linha da tabela, com ícones indicativos
de leitura e detalhes como data da mensagem.

**Propriedades:**

-   **varzeanosMsg:** Uma lista de mapas contendo informações
    específicas de cada mensagem, como conteúdo e estado de leitura.

-   **mensagens:** Uma lista de strings representando os títulos das
    colunas da tabela de mensagens.

-   **myFontSize:** Um valor opcional que define o tamanho da fonte para
    o texto na tabela.

-   **paddingTop, paddingRight, paddingBottom, paddingLeft:** Valores
    opcionais para definir o espaçamento interno do widget.

**Card Histórico e Classificação:**

É um componente personalizado que proporciona uma apresentação
visualmente agradável e informativa de detalhes importantes sobre o
histórico e a classificação de um time.

**Características:**

-   **title:** Widget que exibe o título principal do card, destacando
    informações cruciais como \"Meu Histórico e Classificação\".

-   **titulo:** Widget que mostra informações específicas, como o número
    de jogos, para enriquecer a visualização dos dados.

**Card \"Resumo Jogos\"**

-   **Descrição**: Este card fornece um resumo dos jogos agendados para
    o time selecionado.

-   **Ação ao Selecionar**: Ao ser selecionado, exibe uma lista de jogos
    agendados com detalhes como data, horário e número de jogadores.

-   **Componentes Exibidos**:

    -   **Título**: \"Resumo Jogos\"

    -   **Ícone**: Icons.sports_soccer

    -   **Funcionalidade**: Lista (ListView.separated) os jogos em um
        formato de lista detalhada, permitindo ao usuário visualizar os
        próximos jogos agendados.

**Card \"Enviar Mensagem\"**

-   **Descrição**: Este card permite ao usuário enviar mensagens para
    outros membros do time.

-   **Ação ao Selecionar**: Ao ser selecionado, exibe um formulário
    (Form) para o usuário digitar sua mensagem e um botão para enviar.

-   **Componentes Exibidos**:

    -   **Título**: \"Enviar Mensagem\"

    -   **Ícone**: FontAwesomeIcons.paperPlane

    -   **Funcionalidade**: Um formulário (Form) com um campo de texto
        (TextFormBase) para a mensagem e um botão (ButtonBase) para
        enviar a mensagem digitada.

**Card \"Relatório Financeiro\"**

-   **Descrição**: Este card oferece acesso ao relatório financeiro do
    time.

-   **Ação ao Selecionar**: Ao ser selecionado, redireciona o usuário
    para uma tela específica de relatório financeiro.

-   **Componentes Exibidos**:

    -   **Título**: \"Relatório Financeiro\"

    -   **Ícone**: FontAwesomeIcons.chartColumn

    -   **Funcionalidade**: Ao ser clicado, navega o usuário para uma
        tela (Navigator.pushNamed) dedicada ao relatório financeiro do
        time.

#### **MyDrawerMenu** {#mydrawermenu .unnumbered}

O MyDrawerMenu é um widget personalizado que implementa um menu lateral
(drawer) para um aplicativo móvel Flutter. Ele inclui informações do
usuário, como foto, nome, posição, quantidade de jogos e avaliação, além
de oferecer diversas opções de navegação e interação, como visualização
de relatórios financeiros, planos de contratação, envio de mensagens e
edição de perfil.

**Propriedades**

-   **fotoUsuario**: Variável que armazena a URL da foto do usuário ou a
    imagem de arquivo local, se disponível.

-   **nomeUsuario**: Nome do usuário atualmente logado no aplicativo.

-   **posicaoUsuario**: Lista de posições do usuário (por exemplo,
    jogador, técnico).

-   **qtdJogosUsuario**: Número de jogos associados ao usuário.

-   **avaliacaoUsuario**: Avaliação do usuário em forma de barra de
    estrelas.

-   **ROUTE_RELATORIO**, **ROUTE_PLANOS**,
    **ROUTE_EDITAR_PERFIL_PESSOAL**: Constantes definindo as rotas para
    o relatório financeiro, planos de contratação e edição de perfil,
    respectivamente.

**Funcionalidades**

-   **Avatar do Usuário**: Exibe a foto do usuário e seu nome,
    juntamente com suas posições e estatísticas de jogos.

-   **Itens de Menu**: Oferece opções como visualização de relatório
    financeiro, planos de contratação, envio de mensagem e edição de
    perfil, cada um com um ícone representativo e texto descritivo.

-   **Logout**: Inclui um item para encerrar a sessão do usuário, que
    abre um diálogo de confirmação ao ser clicado.

**Dependências**

-   **flutter_rating_bar**: Utilizado para exibir a avaliação do usuário
    em forma de barra de estrelas.

-   **font_awesome_flutter**: Fornece ícones personalizados como
    FontAwesomeIcons para itens de menu.

### **Funcionalidades da Tela** {#funcionalidades-da-tela-1 .unnumbered}

1.  **Dropdown de Clubes** Menu suspenso que permite ao usuário
    selecionar entre diferentes clubes associados.

2.  **Classificação Geral** Exibe a classificação geral do usuário em
    forma de estrelas.

3.  **Seção Financeira** Apresenta uma tabela com informações
    financeiras, como valores pendentes e pagos.

4.  **Status de Atividade** Mostra o status da atividade do usuário com
    base nos convites recebidos (Ativo ou Desativado).

5.  **Métodos**

    -   **calcularEstado(List\<Map\> varzeanos):** Calcula o estado
        baseado na quantidade de pagamentos pendentes de uma lista de
        varzeanos. Retorna \"Ativo\" ou \"Desativado\".
