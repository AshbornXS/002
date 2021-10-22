let handler = async (m, { conn, text }) => {
    if (!text) throw 'Tag target !'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag target'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `*Done"`, m)
}
handler.help = ['Ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
