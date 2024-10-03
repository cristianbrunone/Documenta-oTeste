## **Tela Gerenciamento de Varzeano (GerenciarScreen)** {#tela-gerenciamento-de-varzeano-gerenciarscreen .unnumbered}

A tela \"Gerenciar Varzeano\" é uma interface de gerenciamento dentro do
aplicativo, que permite aos administradores inserir e validar dados dos
jogadores, bem como aplicar banimentos temporários ou permanentes.

### **Estrutura Principal** {#estrutura-principal .unnumbered}

-   **Classe GerenciarScreen:**

    -   É uma StatefulWidget que define a estrutura básica da tela.

    -   Possui um estado \_GerenciarScreenState que gerencia o estado da
        tela.

### **Estado da Tela** {#estado-da-tela .unnumbered}

-   **Classe \_GerenciarScreenState:**

    -   Gerencia os controladores de texto para os campos do formulário.

    -   Define variáveis de estado como \_obscureText, containerHeight,
        tipoBanimento, mostrarBoton e mostrarText.

    -   Métodos importantes incluem trocarVisibilidade e banir.

### **Controladores de Texto** {#controladores-de-texto .unnumbered}

-   **Controladores (TextEditingController):**

    -   ctrlEmail, ctrlCpf, ctrlCom, ctrlNum, ctrlNome, ctrlBanimento,
        ctrlPosicao, ctrlLogradouro, ctrlCel, ctrlCep

    -   Utilizados para capturar e gerenciar o texto inserido nos campos
        do formulário.

### **Chave do Formulário** {#chave-do-formulário .unnumbered}

-   **GlobalKey\<FormState\>:**

    -   formKey: Utilizada para validar e resetar o formulário.

### **Componentes Principais** {#componentes-principais-5 .unnumbered}

-   **Componentes de Entrada (TextFormBase):**

    -   Campos personalizados para capturar informações como CPF, Nome,
        E-mail, Celular, CEP, Logradouro, Número, Complemento, Posição
        em Campo e Motivo do Banimento.

    -   Incluem validação personalizada para cada campo.

### **Validação de Campos** {#validação-de-campos .unnumbered}

-   **Validação de CPF:**

    -   Verifica se o CPF não está vazio e se tem exatamente 14
        caracteres (formato ###.###.###-##).

-   **Validação de Nome:**

    -   Verifica se o nome não está vazio.

    -   Assegura que o nome contém pelo menos duas partes (nome e
        sobrenome) e que cada parte contém apenas letras.

-   **Validação de E-mail:**

    -   Verifica se o e-mail não está vazio e se corresponde a um
        formato válido de e-mail.

-   **Validação de Celular:**

    -   Verifica se o celular não está vazio e se tem exatamente 15
        caracteres (formato +55 (XX) XXXXX-XXXX).

-   **Validação de CEP:**

    -   Verifica se o CEP não está vazio e se tem exatamente 8 dígitos.

-   **Validação de Logradouro:**

    -   Verifica se o logradouro não está vazio.

-   **Validação de Número:**

    -   Verifica se o número não está vazio.

-   **Validação de Complemento:**

    -   Verifica se o complemento não está vazio.

-   **Validação de Posição em Campo:**

    -   Verifica se a posição em campo não está vazia.

-   **Validação de Motivo de Banimento:**

    -   Verifica se o motivo do banimento não está vazio.

**Botões e Interações**

-   **Dropdown (MyDropdown):**

    -   Permite selecionar opções predefinidas de tabelas com valores e
        status.

-   **Radio Buttons:**

    -   Permitem escolher entre banimento temporário ou permanente.

    -   Dependendo da escolha, exibem um seletor de data (MyDatePicker)
        para banimento temporário ou uma mensagem para banimento
        permanente.

-   **Botão de Banir (ButtonBase):**

    -   Aciona a função banir ao ser clicado.

### **Métodos** {#métodos .unnumbered}

-   **trocarVisibilidade():**

    -   Alterna a visibilidade do texto e define o tipo de banimento
        como \"Temporario\".

    -   O objetivo e inverter o valor de "\_obscureText" e definir
        "tipoBanimento" para temporario

-   **banir():** Por definir.

    -   Verifica a validade do formulário e, se válido, imprime uma
        mensagem de sucesso e reseta o formulário.

### **Layout** {#layout .unnumbered}

-   **Estrutura de Layout:**

    -   Utiliza Column e Row para organizar os componentes.

    -   Inclui espaçamentos (SizedBox) entre os campos.

    -   Utiliza SafeArea para garantir que o conteúdo não fique oculto
        por elementos do sistema.

### **Personalização** {#personalização .unnumbered}

-   **Estilo de Texto:**

    -   Textos como \"Gerenciar Varzeano\" e \"Registre o Banimento\"
        possuem estilo personalizado (tamanho, cor e peso).

-   **Cores:**

    -   Cores específicas são usadas para botões, textos e outros
        elementos para manter a consistência visual.