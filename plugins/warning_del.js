let handler = async (m, { conn, args, groupMetadata}) => {
  if (args.length > 0) {
  const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
       let ban = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false
       let warn = global.db.data.users[ban].warn
       if (warn > 0) {
         global.db.data.users[ban].warn -= 1
         m.reply('⚠️ *AVISO -1*')
         m.reply(`Admin mengurangi warn kamu, warn kamu sekarang ${warn - 1}`, ban)
         } else if (warn == 0) {
            m.reply('O usuário não tem nenhum aviso')
        }
} else conn.reply(m.chat, 'Tag target', m)
}

handler.help = ['Delwarn @user']
handler.tags = ['group']
handler.command = /^delwarn$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler