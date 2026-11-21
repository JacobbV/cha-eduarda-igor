/* ====== CONFIGURAÇÃO (é o único arquivo que você precisa editar) ====== */
window.CHA = {
  // WhatsApp da noiva com DDI+DDD, só números. Vazio = o convidado escolhe o contato.
  WHATSAPP_NOIVA: '558399077236',

  // Chave Pix (deixe '' para esconder a seção "Prefere Pix?")
  CHAVE_PIX: '',

  // Gmail de quem pode entrar na área da noiva (admin.html). Coloque o da Duda e o seu.
  // Importante: os mesmos e-mails também precisam estar em firestore.rules (é lá que a segurança de verdade mora).
  ADMINS: ['eduardabarbosaas@gmail.com', 'ramesonjaco@gmail.com'],

  // Configuração do Firebase: Console > Configurações do projeto > Seus apps > Web.
  // Ligado ao projeto cha-eduarda-igor. Com null, volta ao modo simples (sem reserva automática e sem área da noiva).
  FIREBASE_CONFIG: {
    apiKey: 'AIzaSyBK3AQBUWNNaAW6qCIahws7K4UT2scW0DA',
    authDomain: 'cha-eduarda-igor.firebaseapp.com',
    projectId: 'cha-eduarda-igor',
    storageBucket: 'cha-eduarda-igor.firebasestorage.app',
    messagingSenderId: '126015067568',
    appId: '1:126015067568:web:fce45a5e2c6cdcf8093275'
  }
};
