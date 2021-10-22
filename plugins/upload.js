const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Nenhuma mídia encontrada'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${link}
${media.length} Byte(s)
${isTele ? '(Sem data de validade)' : '(Unknown)'}`)
}
handler.help = ['Upload <reply media>']
handler.tags = ['tools']
handler.command = /^upload$/i

module.exports = handler
