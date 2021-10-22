let handler = async (m, { conn, args, usedPrefix, command }) => {
  
 await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  m.reply('Sukses')
}

handler.help = ['Setdesk <text>']
handler.tags = ['group']
handler.command = ['setdesk']

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler