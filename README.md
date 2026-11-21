# Chá de Panela · Eduarda & Igor

Lista de presentes do chá de panela da Eduarda e do Igor, publicada em
**https://jacobbv.github.io/cha-eduarda-igor/** (o QR Code dos convites aponta para esse endereço).

Quando o convidado toca em **"Quero presentear"**, ele informa o nome, o item fica reservado para todo
mundo ao mesmo tempo e abre o WhatsApp da Duda com a mensagem pronta.

## Arquivos
| Arquivo | Para que serve |
|---|---|
| `index.html` | A lista pública. |
| `admin.html` | Área da noiva: entra com Google e edita a lista. Não aparece em buscas. |
| `config.js` | **Único arquivo para editar:** WhatsApp, Pix, e-mails autorizados e Firebase. |
| `dados.js` | Desenhos dos itens e a lista inicial (48 itens). |
| `firestore.rules` | Regras de segurança do banco (coladas no Console do Firebase). |
| `favicon.*`, `apple-touch-icon.png`, `og-image.jpg` | Ícone da aba e imagem do card do WhatsApp. |

## Ligar o Firebase (uma vez só)
1. **Projeto:** console.firebase.google.com > Criar projeto (`cha-eduarda-igor`, sem Analytics).
2. **Banco:** Criação > Firestore Database > Criar banco (modo produção, região `southamerica-east1`).
3. **Login:** Criação > Authentication > Vamos começar > Google > Ativar (escolha seu e-mail de suporte).
4. **Domínio:** Authentication > Configurações > Domínios autorizados > Adicionar `jacobbv.github.io`.
5. **Regras:** Firestore > Regras. Cole o `firestore.rules`, troque os dois e-mails (letras minúsculas) e Publicar.
6. **App web:** Configurações do projeto > Seus apps > ícone `</>`. Copie o `firebaseConfig`.
7. **Config:** em `config.js`, cole no `FIREBASE_CONFIG` e troque os e-mails em `ADMINS` (os mesmos do passo 5).
8. `git add .` · `git commit` · `git push`.
9. Abra `.../admin.html`, entre com o Google e toque em **Importar a lista inicial**. Pronto.

## Área da noiva (`admin.html`)
- **Já temos:** marca o item como garantido, sem nome.
- **Liberar:** apaga a reserva de um convidado e o item volta a ficar disponível.
- **Editar / Remover / Novo presente:** nome, categoria e desenho. Categoria nova cria uma seção nova.
- Só os e-mails de `ADMINS` (e de `firestore.rules`) conseguem alterar. Qualquer pessoa pode ler a lista e reservar.

## Sem Firebase
Com `FIREBASE_CONFIG: null`, vale a lista de `dados.js` e o botão abre direto o WhatsApp da Duda.
Para marcar um item como escolhido, acrescente `, ganhou:true` na linha dele em `dados.js`.

## Observações
- Se todos os itens forem removidos pela área da noiva, o site volta a mostrar a lista inicial de `dados.js`.
- A configuração do Firebase no `config.js` é pública por natureza; quem protege os dados são as regras.

## Créditos
- Ilustrações dos itens, ícone do bule e imagem do card (`og-image.jpg`): originais, feitas para esta página.
- Fontes: Great Vibes, Cormorant Garamond e Jost, via Google Fonts (SIL Open Font License 1.1).
- Login e banco de dados: Google Firebase (Authentication e Cloud Firestore, SDK Web, Apache License 2.0).

Desenvolvido por **QYUDEV.** · https://jacobbv.github.io
