let handler = async (m, { conn, args, usedPrefix, command }) => {
  
 await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
  m.reply('Sukses')
}

handler.help = ['Setname <text>']
handler.tags = ['group']
handler.command = ['setname']

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler