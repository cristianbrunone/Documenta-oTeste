# Documentação da API - AuthService

A API `AuthService` permite aos usuários gerenciar a autenticação, incluindo login, registro e redefinição de senha.

## Estrutura do Projeto

```
/auth-service
|-- /models
|   |-- User.js
|-- /routes
|   |-- auth.js
|-- /controllers
|   |-- authController.js
|-- server.js
|-- .env
|-- package.json
```

## Endpoints Principais

### **POST /api/auth/login**

**Descrição:** Permite que um usuário faça login fornecendo e-mail e senha.

**Parâmetros do Corpo da Requisição:**

```json
{
  "email": "string (obrigatório)",
  "password": "string (obrigatório)"
}
```

**Respostas:**

- **200 OK**
  
  ```json
  {
    "message": "Login bem-sucedido.",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```

- **400 Bad Request**
  
  ```json
  {
    "error": "E-mail ou senha inválidos."
  }
  ```

- **401 Unauthorized**
  
  ```json
  {
    "error": "Credenciais não correspondem."
  }
  ```

### **POST /api/auth/signup**

**Descrição:** Permite que um novo usuário se registre.

**Parâmetros do Corpo da Requisição:**

```json
{
  "name": "string (obrigatório)",
  "email": "string (obrigatório)",
  "password": "string (obrigatório)"
}
```

**Respostas:**

- **201 Created**
  
  ```json
  {
    "message": "Usuário registrado com sucesso."
  }
  ```

- **400 Bad Request**
  
  ```json
  {
    "error": "E-mail já cadastrado."
  }
  ```

### **POST /api/auth/reset-password**

**Descrição:** Envia um link para redefinição de senha para o e-mail fornecido.

**Parâmetros do Corpo da Requisição:**

```json
{
  "email": "string (obrigatório)"
}
```

**Respostas:**

- **200 OK**
  
  ```json
  {
    "message": "Link de redefinição de senha enviado para o e-mail."
  }
  ```

- **404 Not Found**
  
  ```json
  {
    "error": "E-mail não encontrado."
  }
  ```

## Exemplo de Implementação

### Modelo de Usuário (models/User.js)

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Método para criptografar a senha antes de salvar
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Método para verificar a senha
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
```

### Controlador de Autenticação (controllers/authController.js)

```javascript
const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Credenciais não correspondem." });
        }

        res.status(200).json({
            message: "Login bem-sucedido.",
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(400).json({ error: "E-mail ou senha inválidos." });
    }
};

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "Usuário registrado com sucesso." });
    } catch (error) {
        res.status(400).json({ error: "E-mail já cadastrado." });
    }
};

exports.resetPassword = async (req, res) => {
    const { email } = req.body;

    // Lógica para enviar o link de redefinição de senha
    res.status(200).json({ message: "Link de redefinição de senha enviado para o e-mail." });
};
```

### Roteador de Autenticação (routes/auth.js)

```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
```

### Inicialização do Servidor (server.js)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
        });
    })
    .catch(err => console.error(err));
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```
MONGODB_URI=mongodb://<username>:<password>@host:port/dbname
PORT=3000
```

## Observações

Esta API utiliza MongoDB como banco de dados. Certifique-se de ter um banco de dados MongoDB ativo e substitua as credenciais na variável `MONGODB_URI` no arquivo `.env`. O método `resetPassword` deve ser implementado para enviar um e-mail de redefinição de senha (por exemplo, utilizando a biblioteca nodemailer).
