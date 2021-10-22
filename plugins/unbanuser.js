let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Quem quer ser anulado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag um'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `desbanido com sucesso`, m)
}
handler.help = ['Unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
