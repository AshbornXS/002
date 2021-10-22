let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.reply('Silahkan tunggu')
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', 'horny:>', m)
}

handler.help = ['Hornycard']
handler.tags = ['maker']

handler.command = /^(horny(card|license))$/i

module.exports = handler
