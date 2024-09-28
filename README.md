```markdown
# API 1 - Sistema de Reconhecimento de Marca de Cerveja

Esta é a API em Nest.js que faz parte do sistema de reconhecimento de marca de cerveja a partir de imagens de latas. Ela recebe as imagens enviadas pelo usuário, processa-as e se comunica com a API de OCR para identificar a marca da cerveja.

## Estrutura do Projeto

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── upload/
│   ├── upload.controller.ts
│   ├── upload.module.ts
│   └── upload.service.ts
└── uploads/
```

## Pré-requisitos

- Node.js
- Nest.js
- Multer para gerenciamento de uploads de arquivos
- Dependências do projeto (verifique o `package.json`)

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL do repositório>
   cd api1_nest
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um diretório para armazenar os uploads:
   ```bash
   mkdir src/uploads
   ```

## Uso

Para iniciar a API, use o seguinte comando:

```bash
npm run start
```

A API estará disponível em `http://localhost:3000`.

### Endpoint

#### `POST /upload`

Este endpoint permite o upload de uma imagem no formato `multipart/form-data`. O campo do arquivo deve ser chamado `image`.

##### Exemplo de requisição

```bash
curl -X POST http://localhost:3000/upload -F "image=@caminho/para/sua/imagem.jpg"
```

##### Resposta

- **Status 200**: Retorna um objeto com o nome da marca identificada.
- **Status 400**: Retorna uma mensagem de erro se nenhum arquivo for enviado ou se o formato do arquivo não for suportado.

## Tecnologias Utilizadas

- [Nest.js](https://nestjs.com/)
- [Multer](https://github.com/expressjs/multer) para gerenciamento de uploads
- TypeScript

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```
