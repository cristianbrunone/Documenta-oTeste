## **Tela de Gerenciamento (GerenciarScreen)** {#tela-de-gerenciamento-gerenciarscreen .unnumbered}

### **Descrição Geral** {#descrição-geral-3 .unnumbered}

Permite aos admin gerenciar informações de jogadores de futebol
varzeano, incluindo inserção de dados, registro de banimentos e
definição de datas de término de banimentos temporários.

### **Arquivos Relacionados** {#arquivos-relacionados-2 .unnumbered}

-   GerenciarScreen.dart

-   ButtonBase.dart

-   MyAppbar.dart

-   MyDatePicker.dart

-   MyDropdownButton.dart

-   ResetPasswordDialog.dart

-   TextFormBase.dart

###  {#section-9 .unnumbered}

### **Componentes Principais** {#componentes-principais-3 .unnumbered}

####  {#section-10 .unnumbered}

#### **Myappbar** {#myappbar .unnumbered}

Barra de aplicativo personalizada.

#### **TextFormBase** {#textformbase-1 .unnumbered}

Campos de texto personalizados para entrada de informações.

#### **MyDropdownButton** {#mydropdownbutton .unnumbered}

Menu suspenso personalizado para selecionar entre opções.

#### **MyDatePicker** {#mydatepicker .unnumbered}

Componente para selecionar datas.

#### **ButtonBase** {#buttonbase-1 .unnumbered}

Botão personalizado para interação do usuário.

### **Funcionalidades da Tela** {#funcionalidades-da-tela-2 .unnumbered}

1.  **Entrada de Dados** Permite inserir informações como CPF, nome,
    e-mail, celular, endereço e posição em campo, com validação de
    dados.

2.  **Registro de Banimento** Usuários podem registrar um banimento
    temporário ou permanente de um jogador, incluindo o motivo do
    banimento.

3.  **Seleção de Data de Banimento** Se o banimento for temporário, os
    usuários podem selecionar a data de término.

**Métodos**

### **banir()** {#banir .unnumbered}

#### **Descrição:** {#descrição .unnumbered}

Este método é responsável por realizar a ação de banir um usuário. Ele
verifica se um motivo de banimento foi fornecido e atualiza o estado da
variável usuarioBanido. Após isso, limpa o campo de entrada de motivo de
banimento e fecha a tela de diálogo de banimento.

#### **Parâmetros:** {#parâmetros .unnumbered}

Nenhum parâmetro explícito é passado para este método, mas ele utiliza
variáveis de estado e contexto do Flutter.

#### **Retorno:** {#retorno .unnumbered}

O método não retorna um valor diretamente, mas utiliza o Navigator.pop
para informar se o usuário foi banido ou não.

#### **Funcionamento:** {#funcionamento .unnumbered}

1.  **Validação de Motivo de Banimento:** Verifica se o campo de motivo
    de banimento está vazio.

2.  **Atualização do Estado:** Altera o estado de usuarioBanido para
    indicar se o usuário foi banido ou não.

3.  **Limpeza de Campo:** Limpa o campo de motivo de banimento após o
    banimento.

4.  **Navegação de Volta:** Fecha a tela atual, retornando o estado de
    usuarioBanido para a tela anterior.

### **atualizar()** {#atualizar .unnumbered}

#### **Descrição:** {#descrição-1 .unnumbered}

Este método é responsável por validar e atualizar informações de um
usuário, como CPF, nome, e-mail, celular, CEP, logradouro, número,
posição, tabela de preços e preço selecionado.

#### **Parâmetros:** {#parâmetros-1 .unnumbered}

Nenhum parâmetro explícito é passado para este método, mas ele depende
do contexto do Flutter para exibir mensagens informativas.

#### **Retorno:** {#retorno-1 .unnumbered}

O método não retorna um valor diretamente, mas exibe mensagens
informativas caso alguma validação falhe.

#### **Funcionamento:** {#funcionamento-1 .unnumbered}

1.  **Validação de CPF:** Verifica se o CPF é válido usando uma
    biblioteca externa (CPFValidator).

2.  **Validação de Nome:** Verifica se o nome completo foi fornecido e
    se contém apenas letras.

3.  **Validação de E-mail:** Verifica se o formato do e-mail é válido.

4.  **Validação de Celular:** Verifica se o número de celular tem o
    comprimento correto.

5.  **Validação de CEP:** Verifica se o CEP foi fornecido e tem o
    comprimento correto.

6.  **Validação de Logradouro, Número, Posição:** Verifica se esses
    campos foram preenchidos.

7.  **Validação de Tabela e Preço Selecionados:** Verifica se foram
    selecionados valores para a tabela de preços e o preço específico.

###  {#section-11 .unnumbered}

###  {#section-12 .unnumbered}

### **limitarAteDia(DateTime dateTime)** {#limitaratediadatetime-datetime .unnumbered}

#### **Descrição:** {#descrição-2 .unnumbered}

Este método recebe uma data e retorna a mesma data, mas com o horário
zerado (00:00:00).

#### **Parâmetros:** {#parâmetros-2 .unnumbered}

-   dateTime: Data que será limitada até o dia.

#### **Retorno:** {#retorno-2 .unnumbered}

-   DateTime: Data com o horário zerado.

#### **Funcionamento:** {#funcionamento-2 .unnumbered}

1.  **Criação de Nova Data:** Cria um novo objeto DateTime com o mesmo
    ano, mês e dia do dateTime original, mas com o horário zerado.

### **\_buscaCep(String cep)** {#buscacepstring-cep .unnumbered}

#### **Descrição:** {#descrição-3 .unnumbered}

Este método realiza uma consulta de CEP usando um serviço externo
(ConsultaCep) e atualiza o campo de logradouro se o CEP for encontrado.

#### **Parâmetros:** {#parâmetros-3 .unnumbered}

-   cep: CEP que será consultado.

#### **Retorno:** {#retorno-3 .unnumbered}

O método não retorna um valor diretamente, mas atualiza o estado do
campo de logradouro se o CEP for válido.

#### **Funcionamento:** {#funcionamento-3 .unnumbered}

1.  **Consulta de CEP:** Usa um serviço externo para obter dados
    relacionados ao CEP fornecido.

2.  **Atualização de Estado:** Se o CEP for encontrado, atualiza o campo
    de logradouro com o valor correspondente.

### **trocarVisibilidade()** {#trocarvisibilidade .unnumbered}

#### **Descrição:** {#descrição-4 .unnumbered}

Este método alterna a visibilidade de um campo de texto entre visível e
oculto.

#### **Parâmetros:** {#parâmetros-4 .unnumbered}

Nenhum parâmetro é necessário para este método.

#### **Retorno:** {#retorno-4 .unnumbered}

O método não retorna um valor diretamente, mas altera o estado da
visibilidade do campo de texto.

#### **Funcionamento:** {#funcionamento-4 .unnumbered}

1.  **Alteração de Visibilidade:** Torna o texto visível se estava
    oculto, e vice-versa, atualizando o estado interno \_obscureText.

## **Tela de Cadastro (NovoCadastroScreen)** {#tela-de-cadastro-novocadastroscreen .unnumbered}

### **Descrição Geral** {#descrição-geral-4 .unnumbered}

Permite que novos usuários se inscrevam no aplicativo, fornecendo
informações como nome, e-mail, CPF, endereço, número de celular e senha.

### **Componentes Principais** {#componentes-principais-4 .unnumbered}

#### **Campos de Entrada de Dados** {#campos-de-entrada-de-dados .unnumbered}

-   **CPF**

-   **Nome**

-   **E-mail**

-   **Celular**

-   **CEP**

-   **Logradouro**

-   **Número**

-   **Complemento**

-   **Senha**

-   **Repetir Senha**

#### **Validações** {#validações .unnumbered}

-   **Validação do CPF:** Deve conter exatamente 11 caracteres
    numéricos.

-   **Validação do Nome:** Deve conter pelo menos duas partes (nome e
    sobrenome) e apenas caracteres alfabéticos.

-   **Validação do E-mail:** Deve seguir o formato padrão de e-mail.

-   **Validação do Celular:** Deve conter exatamente 11 caracteres
    numéricos.

-   **Validação do CEP:** Deve conter exatamente 8 caracteres numéricos.

-   **Validação da Senha:** Deve ter pelo menos 6 caracteres.

####  {#section-13 .unnumbered}

#### **Botão de Criação de Conta** {#botão-de-criação-de-conta .unnumbered}

Permite que o usuário finalize o processo de cadastro.

#### **Checkboxes e Textos de Política** {#checkboxes-e-textos-de-política .unnumbered}

Permitem ao usuário concordar com as políticas de privacidade e termos
de uso.

### **Funcionalidades da Tela** {#funcionalidades-da-tela-3 .unnumbered}

1.  **Validação de Entrada de Dados** Todos os campos possuem validação
    para garantir a correção dos dados inseridos.

2.  **Toggle de Visibilidade da Senha** Permite alternar entre ocultar e
    exibir a senha digitada.

3.  **Reinicialização do Formulário** Após o envio bem-sucedido do
    formulário, os campos são reiniciados para permitir um novo
    cadastro.

### **Estrutura do Código** {#estrutura-do-código .unnumbered}

A tela de cadastro é construída como um widget StatefulWidget, contendo
um formulário que engloba todos os campos de entrada de dados e o botão
de criação de conta. A validação do formulário é realizada quando o
usuário tenta criar a conta.

### **Fluxo de Funcionamento** {#fluxo-de-funcionamento .unnumbered}

1.  O usuário preenche todos os campos necessários.

2.  O usuário pode alternar a visibilidade da senha digitada.

3.  Ao clicar no botão \"Criar Conta\", os dados são validados.

4.  Se todos os campos estiverem corretos, o usuário é cadastrado com
    sucesso.

5.  Caso contrário, são exibidas mensagens de erro para os campos
    inválidos.

6.  Os dados inseridos pelo usuário são validados conforme critérios
    especificos antes de permitir o envio do formulário

7.  Os dados são persistidos localmente em um arquivo JSON após a
    validação bem-sucedida, utilizando operações de leitura e escrita
    assíncronas.

**Métodos**

**\_buscaCep(String cep)**

-   Método assíncrono que realiza uma consulta de CEP utilizando a
    classe ConsultaCep. Atualiza os campos de logradouro, bairro, cidade
    e estado com os dados retornados pela consulta.

**trocarVisibilidade()**

-   Alterna a visibilidade da senha entre oculta e visível, atualizando
    o estado \_obscureText.

**\_salvarDadosUsuario(Map\<String, dynamic\> dadosUsuario)**

-   Salva os dados do usuário em um arquivo JSON local, no diretório de
    documentos do aplicativo. Utiliza a classe File e métodos
    assíncronos para escrever e ler o arquivo JSON.

**\_criarConta()**

-   Valida todos os campos do formulário (CPF, nome, e-mail, celular,
    CEP, logradouro, número, bairro, cidade, estado, senha e aceitação
    de política). Em caso de validação positiva, prepara os dados do
    usuário para serem salvos e chama \_salvarDadosUsuario(). Caso
    contrário, exibe mensagens de erro correspondentes.

**voltarlogin()**

-   Método simples que navega de volta para a tela de login utilizando o
    método Navigator.popAndPushNamed().

**togglePasswordVisibility()**

-   Alternância de visibilidade da senha, utilizado pelo ícone de
    visibilidade na entrada de senha.