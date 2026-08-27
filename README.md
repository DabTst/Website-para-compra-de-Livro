# Website-para-compra-de-Livro

Site estático (HTML, CSS e JS puro) para divulgar e vender o ebook "A Última Página". Não precisa de servidor, base de dados nem build, basta abrir ou publicar os ficheiros.

Como funciona a compra

O site não processa pagamentos diretamente. O fluxo é:

O visitante clica em "Comprar via WhatsApp".
O JS monta uma mensagem com o título do livro e o preço, e abre o WhatsApp (via link wa.me) já com essa mensagem preenchida, a apontar para o número configurado.
O visitante confirma e envia a mensagem no WhatsApp.
A combinação do pagamento (M-Pesa) e o envio do ebook em PDF são feitos manualmente, na conversa do WhatsApp.

Não há backend, chaves de API nem dados sensíveis no código — por isso este fluxo funciona só com ficheiros estáticos.

Futuras actualizacoes brevemente.

----------------------------------------------------

Static website (pure HTML, CSS, and JS) to promote and sell the ebook "A Última Página". No server, database, or build needed — just open or publish the files.

How purchasing works
The website does not process payments directly. The flow is:

The visitor clicks "Buy via WhatsApp".
The JS constructs a message with the book title and price, and opens WhatsApp (via wa.me link) with this message pre-filled, directed to the configured number.
The visitor confirms and sends the message on WhatsApp.
The payment (M-Pesa) and ebook (PDF) delivery are handled manually within the WhatsApp conversation.
There is no backend, API keys, or sensitive data in the code — which is why this flow works with just static files.