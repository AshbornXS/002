let handler = async (m, { conn, text }) => {
  if (!text) throw 'Sem texto'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Aqui está o seu comentário', m)
}

handler.help = ['Ytcomment <comentário>']
handler.tags = ['maker']

handler.command = /^(ytcomment)$/i

module.exports = handler
