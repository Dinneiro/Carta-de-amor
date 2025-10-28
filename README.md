# Carta de Amor Interativa ❤️

Um projeto web simples e carinhoso para celebrar o tempo de namoro, apresentando uma carta personalizada, um contador de tempo preciso e efeitos visuais interativos.

## Funcionalidades ✨

* **Contador de Namoro:** Calcula e exibe o tempo exato (anos, meses, dias, horas, minutos e segundos) desde a data informada.
* **Mensagem Carinhosa:** Exibe uma das frases pré-definidas aleatoriamente ao abrir a carta.
* **Temas (Dark/Light):** Permite ao usuário escolher entre o tema "Preto" (Padrão) e "Branco".
* **Player Spotify Integrado:** Um botão para mostrar/esconder um player de música embutido.
* **Interatividade Visual:**
    * **Desktop:** Chuva contínua de corações caindo na tela.
    * **Mobile:** Geração de corações ao tocar na tela.
* **Responsivo:** Ajustes de layout para garantir uma boa experiência em smartphones e tablets.

## Tecnologias Utilizadas

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Estrutura da página, incluindo a entrada de data, a carta e os controles de configuração. |
| `style.css` | Estilização completa, temas dinâmicos via CSS Variables (`:root` e `[data-theme]`), responsividade e animações de corações. |
| `script.js` | Lógica de detecção de dispositivo, manipulação do DOM, contador de tempo (`atualizarContador`), alternância do player Spotify e efeitos interativos de corações. |

## Como Usar 🚀

1.  **Clone o Repositório:**
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    ```
2.  **Abra o Arquivo:**
    Abra o arquivo `index.html` diretamente no seu navegador.
3.  **Insira a Data:**
    Coloque a data de início do namoro no campo de entrada.
4.  **Abrir Carta:**
    Clique no botão "Abrir Carta" para iniciar o contador e visualizar a mensagem.

## Estrutura do Contador

O script calcula o tempo decorrido desde a data de início da seguinte forma:

```javascript
// Exemplo de como o tempo é exibido
Estamos juntos há 0 anos, 1 meses, 20 dias 
15h 30m 45s 💕
