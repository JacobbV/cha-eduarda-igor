# Chá de Panela · Eduarda & Igor

Lista de presentes do chá de panela da Eduarda e do Igor, publicada em
**https://jacobbv.github.io/cha-eduarda-igor/** (o QR Code dos convites aponta para esse endereço).

48 itens divididos em Cozinha, Sala, Quarto, Banheiro e Lavanderia. O convidado toca em
**"Quero presentear"** e abre o WhatsApp da Duda com a mensagem pronta.

## Como marcar um presente como escolhido
1. No GitHub, abra o `index.html` e toque no lápis ✏️.
2. Na linha do item, acrescente `, ganhou:true`. Exemplo:
   `{cat:'Cozinha', nome:'Panela de pressão', ic:'pressao', ganhou:true},`
3. **Commit changes**. Em cerca de 1 minuto o site mostra "✓ Já temos".

## Outras configurações (começo do `<script>` no `index.html`)
- `WHATSAPP_NOIVA`: número que recebe o aviso do presente.
- `CHAVE_PIX`: quando preenchida, aparece a seção "Prefere Pix?".
- `ITENS`: a lista. Para tirar um item, apague a linha dele.
- `FIREBASE_CONFIG` (opcional): liga a reserva automática, em que o item fica marcado sozinho
  quando o convidado escolhe. Sem ele, a lista funciona no modo simples descrito acima.

## Créditos
- Ilustrações dos itens, ícone do bule e imagem do card (`og-image.jpg`): originais, feitas para esta página.
- Fontes: Great Vibes, Cormorant Garamond e Jost, via Google Fonts (SIL Open Font License 1.1).
- Reserva automática (opcional): Google Firebase / Cloud Firestore (SDK Web, Apache License 2.0).

Desenvolvido por **QYUDEV.** · https://jacobbv.github.io
