let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let nomor = '5519996503657@s.whatsapp.net'
let levelling = require('../lib/levelling')
let tags = {
  'main': 'SOBRE', 
  'game': 'JOGOS',
  'fun': 'DIVERSÃO',
  'kerang': 'ESCUDOS MÁGICOS',
  'exp': 'REG EXP',
  'xp': 'LEVEL & LIMIT',
  'sticker': 'STICKER',
  'random': 'RANDOM',
  'pict': 'FOTOS',
  'prim': 'PRIMBON',
  'group': 'GRUPO',
  'nable': 'EN/DISABLE OPTIONS',
  'absen': 'AUSENTE',
  'vote': 'VOTING',
  'premium': 'PREMIUM',
  'kasi': 'EDUCAÇÃO',
  'nime': 'ANIME',
  'internet': 'INTERNET',
  'other': 'OUTROS',
  'film': 'MOVIE',
  'tools': 'TOOLS',
  'nulis': 'TEXT MAKER',
  'maker': 'IMAGE MAKER',
  'videomaker': 'VIDEO MAKER',
  'audio': 'MEDIA AUDIO',
  'quran': 'AL QUR\'AN',
  'jadibot': 'JADI BOT',
  'downloader': 'DOWNLOADER',
  'anonymous': 'ANONYMUS CHAT',
  'database': 'DATABASE',
  'owner' : 'OWNER',
  'host': 'HOST',
  'advanced': 'ADVANCED',
  '': 'No Category',
  'true': 'FITUR ERROR',
};
const defaultMenu = {
  before: `
Hai, %name! (Lv. %level %role)

Limite : *%limit*
◫ *%week, %date*
Uptime : *%uptime (%muptime)*
User : %totalreg
*Dono* : @${nomor.split('@')[0]}

%readmore
────────────────────
▢ O bot está equipado com *Auto Block*, Auto Block é ativo se você fizer uma chamada para o *Bot*
▢ O bot está equipado com *Anti Spam*, você pode usar o comando após a conclusão do processo anterior,
▢ Se você encontrar um recurso Bug, Erro, Sugestão / Solicitação, entre em contato com o proprietário do bot
▢ O recurso *Erro* ficará visível no menu inferior
▢ O bot é executado com *Multi Prefix*, todos os sinais podem ser usados ​​para executar comandos
▢ Este bot ainda está em desenvolvimento, todos os recursos podem não funcionar corretamente
▢ Junte-se ao grupo gratuitamente se tiver mais de 100 membros
────────────────────

  ≡ *LIST MENU*
`.trimStart(),
header: '┌───⊷ *%category*',
  body: '├▢ %cmd %islimit %isPremium',
  footer: '└──────────────\n',
  after: `╎ アシュボーン╎🧧˳໋◦
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'pt'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limite)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    // -- thumbnail menu
    img = await (await fetch('https://telegra.ph/file/cdd5516b6063ddfad3790.jpg')).buffer()
    conn.send3ButtonLoc(m.chat, img, text.trim(), 'Inscreva-se no meu canal\nhttps://youtube.com/c/FrostyAshborn', '✆ Owner', '.owner', '⏍ Info', '.info', '© Group', '.gruplexa', m, {
            contextInfo: {
        mentionedJid: conn.parseMention(text)
      }})
  } catch (e) {
    conn.reply(m.chat, 'Erro', m)
    throw e
  }
}
handler.help = ['Menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
