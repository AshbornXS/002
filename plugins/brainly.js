const Brainly = require('brainly-scraper-v2')
const brain = new Brainly("id")
let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `uhm.. soalnya mana?\n\ncontoh:\n${usedPrefix + command} apa itu javascript?`
  brain.search("id", text).then(async res => {
    let br = JSON.stringify(res)
    let json = JSON.parse(br)
    let answer = json.map((v, i) => `▢ *PERTANYAAN KE ${i + 1}*\n${v.question.content}\n${v.answers.map((v, i) => `*▢ JAWABAN KE ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join('\n')}`).join('\n\n')
    m.reply(answer)
  })
}
handler.help = ['Brainly <query>']
handler.tags = ['kasi']

handler.command = /^brainly$/i

module.exports = handler