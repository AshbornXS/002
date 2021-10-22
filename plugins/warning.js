let handler = async (m, { conn, args, groupMetadata}) => {
    if (args.length > 0) {
  const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
        let ban = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false
        let warn = global.db.data.users[ban].warn
        if (warn < 2) {
            global.db.data.users[ban].warn += 1
            conn.reply(m.chat, `⚠️ *AVISO +1*`, m)
            m.reply('Você recebeu um aviso do administrador, seu aviso total agora *' + (warn + 1) + '* aviso, se você for avisado * 3 vezes *, você será automaticamente removido do grupo', ban)
        } else if (warn == 2) {
            //global.DATABASE._data.users[ban].banned = true
            global.db.data.users[ban].warn = 0
            m.reply('Adeus')
                await time(5000)
             await conn.groupRemove(m.chat, [ban])
             m.reply(`Você foi removido do grupo ${groupMetadata.subject} porque foi avisado 3 vezes`, ban)
           
        }
    } else conn.reply(m.chat, 'Tag target', m)
}
handler.help = ['Warn @user']
handler.tags = ['group']
handler.command = /^warn$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler