let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");
let handler = async(m, { conn, text }) => {
   
   if (!text) return m.reply('Masukkan Nama Grup!')
   try{
         await m.reply('Silahkan tunggu')
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('Berhasil Membuat Grup *' + text + '*\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
       } catch (e) {
    m.reply('Error')
    console.log (e)
  }
}
handler.help = ['Creategroup']
handler.tags = ['owner']
handler.command = /^((create|buat)(gc|grup|group))$/
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler