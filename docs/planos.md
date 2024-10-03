## **Tela de Planos de Contratação** {#tela-de-planos-de-contratação .unnumbered}

### **Descrição Geral** {#descrição-geral-9 .unnumbered}

Nesta tela, o administrador poderá escolher entre um dos cinco planos de
contratação disponíveis para um de seus times.

### **Utilização** {#utilização-4 .unnumbered}

O administrador do clube deve escolher um dos planos listados para seu
time, tendo como opção: Free, Básico, Intermediário, Avançado e
Personalizado.

## **Tela Home Administrador (Home Clubes)**  {#tela-home-administrador-home-clubes .unnumbered}

### **Descrição Geral** {#descrição-geral-10 .unnumbered}

Nesta tela, o administrador poderá criar novos clubes, ver os clubes que
foram criados, total de varzeanos, quantidade de jogos agendados e ver a
localização dos jogos no google maps.

**Componentes Principais**

**AppBar**

-   Exibe uma barra de navegação superior personalizada (Myappbar) que
    inclui um ícone para abrir um menu lateral (MyDrawerMenu).

**Lista de Clubes**

-   Utiliza o componente ClubesCard para exibir a lista dinâmica de
    clubes cadastrados.

-   Ao selecionar um clube, redireciona para a tela de gerenciamento do
    clube específico utilizando o router definido
    (MyRouters.ROUTE_GERENCIAR_CLUBE).

**Card de Criar Clube**

-   Apresenta um botão centralizado com o título \"Criar Clube\",
    utilizando o componente MyCard.

-   Ao ser pressionado, navega para a tela de planos
    (MyRouters.ROUTE_PLANOS).

**Grid de Estatísticas**

-   Exibe estatísticas gerais em forma de grid (MyGridView):

    -   Clubes Cadastrados: Mostra a quantidade atual de clubes
        cadastrados.

    -   Total de Varzeanos: Apresenta o número total de varzeanos (valor
        estático 0 no exemplo).

    -   Jogos Agendados: Indica a quantidade de jogos agendados (valor
        estático 0 no exemplo).

**Imagem de Mapa**

-   Mostra uma imagem de mapa (Image.asset) dentro de um container
    decorado, simulando um placeholder para localização geográfica.

### **Utilização** {#utilização-5 .unnumbered}

O administrador terá a opção de criar um novo clube e, após a criação,
terá acesso a dados como: quantidade de clubes cadastrados, total de
varzeanos e jogos agendados. Além disso, o administrador poderá
selecionar um de seus clubes por meio de um menu suspenso que, após a
seleção, irá levá-lo para uma tela onde irá gerenciar o seu clube.