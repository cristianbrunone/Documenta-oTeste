##  **Tela de Relatório Financeiro (RelatorioFinanceiroScreen)** {#tela-de-relatório-financeiro-relatoriofinanceiroscreen .unnumbered}

A Tela RelatorioFinanceiroScreen é responsável por exibir um relatório
financeiro em formato de tabela no aplicativo móvel. Este relatório
apresenta informações sobre os pagamentos de diferentes varzeanos,
incluindo seus nomes, tipo de associação, valores e status de pagamento
permitindo gerar e salvar o PDF localmente e compartilhá-lo.

### **Métodos Principais** {#métodos-principais .unnumbered}

calcularTotal

-   Descrição: Calcula o total dos valores dos varzeanos com base no
    estado (pago ou pendente).

-   Parâmetros:

    -   varzeanos: Lista de varzeanos representados como Map\<String,
        dynamic\>.

    -   estado: Estado dos varzeanos a ser considerado (\'Pago\' ou
        \'Pendente\').

-   Retorno: Uma string formatada com o total calculado no formato
    monetário.

checkPermissions

-   Descrição: Verifica e solicita permissões de armazenamento no
    dispositivo.

-   Funcionamento: Utiliza permission_handler para verificar o status da
    permissão de armazenamento (Permission.storage).

-   Retorno: Future\<void\>.

generatePdfAndSave

-   Descrição: Gera e salva um arquivo PDF contendo o relatório
    financeiro dos varzeanos.

-   Parâmetros:

    -   varzeanos: Lista de varzeanos representados como Map\<String,
        dynamic\>.

    -   context: BuildContext utilizado para exibir SnackBar com
        feedback ao usuário.

-   Funcionamento:

    -   Cria um documento PDF utilizando pdf e pdf/widgets.dart.

    -   Formata os dados dos varzeanos em uma tabela dentro do PDF.

    -   Salva o PDF no diretório de armazenamento adequado com base no
        sistema operacional (iOS ou Android).

    -   Exibe um SnackBar com mensagem de sucesso ou erro após a
        conclusão.

-   Retorno: Future\<String\> com o caminho completo do arquivo PDF
    salvo.

\_GerenciarVarzeanosScreenState

-   Descrição: Estado da tela principal (RelatorioFinanceiroScreen) do
    aplicativo.

-   Funcionamento:

    -   Inicializa a lista de varzeanos \_varzeanos com dados de
        exemplo.

    -   Ordena os varzeanos com base no estado \'Pendente\' ou \'Pago\'.

    -   Renderiza a interface do usuário com uma tabela e totais de
        pagamentos e pendências.

    -   Implementa a lógica de interação do usuário, como geração de PDF
        e exibição de feedback

### **Widgets Utilizados** {#widgets-utilizados .unnumbered}

-   **Scaffold**: Widget que fornece uma estrutura visual básica para a
    tela, incluindo o fundo e a barra de aplicativo.

-   **Myappbar**: Widget personalizado para exibir a barra de aplicativo
    com um design específico.

-   **VarzeanosTable**: O componente VarzeanosTable é responsável por
    renderizar a tabela de varzeanos na interface do usuário. Ele aceita
    os seguintes parâmetros:

> varzeanos: Uma lista de mapas contendo informações sobre cada
> varzeano. Cada mapa deve conter as chaves \"name\" (nome do varzeano),
> \"classification\" (tipo de classificação), \"valor\" (valor do
> pagamento) e \"extra\" (status de pagamento).
>
> titles: Uma lista de strings representando os títulos das colunas da
> tabela. Os títulos devem estar na mesma ordem das chaves nos mapas de
> varzeanos.
>
> myDefaultColumnWidth: Largura padrão das colunas da tabela.
>
> myFontSize: Tamanho da fonte do texto na tabela.
>
> paddingTop: Espaçamento superior da tabela.
>
> pagamento.
>
> Text: Widget para exibir texto na interface do usuário.
>
> Padding: Widget para adicionar espaçamento ao redor de um widget
> filho.
>
> InkWell: Widget que torna seu filho interativo, respondendo a gestos
> como toques.
>
> Container: Widget para criar um contêiner retangular com propriedades
> de estilo personalizadas.
>
> Image: Widget para exibir uma imagem na interface do usuário.
>
> SnackBar: Widget para exibir uma mensagem temporária na parte inferior
> da tela.
>
> showModalBottomSheet: Método para exibir um painel de modal na parte
> inferior da tela.
>
> ListTile: Widget para exibir um único item em uma lista.