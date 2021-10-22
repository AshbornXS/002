const { default: fetch } = require('node-fetch')
const { createWriteStream, existsSync } = require('fs')
const { promisify } = require('util')
const { join } = require('path')

let confirmation = {}
let repository = 'Nurutomo/wabot-aq'
let branch = 'master'

async function handler(m, { text }) {
    let res = await fetch(`https://raw.githubusercontent.com/${repository}/${branch}/${text}`)
    if (!res.ok) throw await res.text()
    let filename = join(__dirname, '..', text)
    if (existsSync(filename)) {
        confirmation[m.sender] = {
            res,
            filename,
            text,
            timeout: setTimeout(() => (m.reply('tempo esgotado'),delete confirmation[m.sender]), 60000)
        }
        throw 'O arquivo existe. Tem certeza de que deseja substituí-lo? (s / n) (tempo limite 60s)'
    }
    res.body.pipe(createWriteStream(filename))
    res.body.once('end', () => {
        m.reply('Atualização concluída!')
        conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
    })
}

handler.all = async m => {
    if (!(m.sender in confirmation)) return
    let { res, filename, text, timeout } = confirmation[m.sender]
    if (/^y(es|a)?$/i.test(m.text)) {
        res.body.pipe(createWriteStream(filename))
        res.body.once('end', () => {
            m.reply('Substituição concluída!')
            conn.sendFile(m.chat, filename, text, null, m).catch(console.error)
        })
        clearTimeout(timeout)
        delete confirmation[m.sender]
        return !0
    } else if (/^no?$/i.test(m.text)) {
        delete confirmation[m.sender]
        m.reply('Rejeitado')
        clearTimeout(timeout)
        return !0
    }
}

handler.rowner = true
handler.help = ['Update2']
handler.tags = ['host']
handler.command = ['update2']

handler.rowner = true

module.exports = handler
