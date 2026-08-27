// ===== Configuração =====
// Troque pelo número de WhatsApp que deve receber os pedidos (código do país + número, sem "+" nem espaços).
const WHATSAPP_NUMBER = "258833721796";
const BOOK_TITLE = "A Última Página";
const PRICE = "450 MT";

// ===== Botão de compra: abre o WhatsApp com uma mensagem pronta =====
const buyBtn = document.getElementById("buyBtn");

buyBtn.addEventListener("click", () => {
  const mensagem =
    `Olá! Quero comprar o ebook "${BOOK_TITLE}" (${PRICE}).\n\n` +
    `Podem indicar-me o número M-Pesa para o pagamento?`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});
