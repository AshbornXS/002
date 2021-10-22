const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Número de série Kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de série incorreto'
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = [''].map(v => 'Unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

