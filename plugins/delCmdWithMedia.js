module.exports = Object.assign(async function handler(m, { text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `Masukan nama cmd`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'Kamu tidak bisa menghapus command ini'
    delete sticker[hash]
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'Del' + v + ' <text>'),
    tags: ['database'],
    command: ['delcmd']
})