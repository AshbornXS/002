let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Silahkan ulangi dengan menambahkan query\n\ncontoh:\n${usedPrefix + command} wibu`
    let res = await carigroup(text, 'name')
    if (!res.length) throw 'Emm, anu gada.. ku nggk nemu, cari yang lain..'
    let teks = res.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['Carigrup <pencarian>']
handler.tags = ['tools']

handler.command = /^carig(ro?up|c)/i

module.exports = handler

const axios = require('axios')
const cheerio = require('cheerio')
async function carigroup(search, searchby = 'name') {
    let { data } = await axios.get(global.API('http://ngarang.com', '/link-grup-wa/daftar-link-grup-wa.php', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}