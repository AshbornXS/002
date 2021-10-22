let handler = async (m, { conn, args, groupMetadata}) => {
      let siapa = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       let warn = global.db.data.users[siapa].warn
      m.reply(`▢ *AVISO*\nTotal : ${warn}`)
}

handler.help = ['Cekwarn @user']
handler.tags = ['group']
handler.command = /^cekwarn$/i
handler.group = true
handler.admin = false
handler.botAdmin = false

module.exports = handler