# WhatsApp Chatbot

Este projeto é um chatbot para WhatsApp utilizando a biblioteca `whatsapp-web.js`. Ele permite criar stickers a partir de imagens e responde a um comando específico sobre a presença do "Frank" no trabalho.

## Requisitos

- Node.js instalado (versão recomendada: 16 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`
- Google Chrome ou Chromium instalado (para execução do Puppeteer, se necessário)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/self1027/whatsappweb-bot.git
   cd whatsappweb-bot
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Inicie o bot:

   ```sh
   node chatbot.js
   ```

4. Escaneie o QR Code exibido no terminal com o seu WhatsApp para autenticar a sessão.

## Funcionalidades

- **Criação de Stickers**: Responda a uma imagem com `!!` para convertê-la em sticker.
- **Verificação do "Frank"**: Envie `!frank` para saber se o Frank vai trabalhar hoje.

## Estrutura do Código

### `chatbot.js`

- Inicializa o cliente do WhatsApp Web
- Gera o QR Code para autenticação
- Escuta mensagens recebidas e comandos
- Chama as funções de criação de stickers e verificação do "Frank"

### `functions.js`

- `handleStickerCreation(client, msg, from)`: Processa mensagens de imagem para criar stickers.
- `processQuotedMessage(client, msg, from)`: Obtém a mídia de uma mensagem citada e a converte em sticker.
- `processImageMessage(client, msg, from)`: Obtém uma imagem recebida e a converte em sticker.
- `sendSticker(client, from, media)`: Envia o sticker para o contato.
- `isFrankWorking()`: Determina se o "Frank" vai trabalhar com base em um cálculo de dias alternados.

## Dependências Principais

- `whatsapp-web.js`: Biblioteca para integração com o WhatsApp Web.
- `qrcode-terminal`: Exibe QR Code no terminal para autenticação.

## Problemas Comuns e Soluções

1. **Erro de bibliotecas ausentes ao rodar o bot**
   
   Se encontrar erros como `libnss3.so` ou `libxkbcommon.so.0` ausentes, instale as dependências necessárias no Linux:
   
   ```sh
   sudo apt update && sudo apt install -y libnss3 libatk-bridge2.0-0 libxkbcommon0
   ```

2. **Erro de tamanho de arquivo ao fazer push para o GitHub**
   
   Caso tente enviar arquivos muito grandes para o repositório (como `node_modules` ou Chromium baixado pelo Puppeteer), adicione as seguintes regras ao `.gitignore`:
   
   ```sh
   node_modules/
   .wwebjs_cache/
   ```

   E remova os arquivos já adicionados ao commit:
   
   ```sh
   git rm -r --cached node_modules
   git commit -m "Removendo node_modules do repositório"
   git push origin main
   ```

## Autor

Desenvolvido por **Murilo D.**

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

