function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[aiueo]/gi, v => {
        switch (v.toLowerCase()) {
            case 'a': return 'ave'
            case 'i': return 'ive'
            case 'u': return 'uve'
            case 'e': return 'eve'
            case 'o': return 'ove'
        }
    }))
}
handler.help = ['Purba <teks>']
handler.tags = ['fun']
handler.command = ['purba']

module.exports = handler