let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `*Contoh* :\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`
    if (isNaN(args[0]) || isNaN(args[1])) throw `*Contoh* :\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`

    let res = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let mes = `
${json.result.data.text.arab}
    
${json.result.data.translation.id}
( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, json.result.data.audio.primary, 'tts.opus', null, m, true)
}
handler.help = ['Alquran <114> <1>']
handler.tags = ['quran']
handler.command = /^(al)?quran$/i
module.exports = handler