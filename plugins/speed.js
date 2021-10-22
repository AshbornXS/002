let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
 // await m.reply('_Testing speed..._')
  let neww = performance.now()
  let speed = neww - old
  let { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone
  m.reply(`*[ BOT INFORMATION ]*
  
*≡ STATUS*
▢ *${groups.length}* Group Chats
▢ *${groupsIn.length}* Groups Joined
▢ *${groups.length - groupsIn.length}* Groups Left
▢ *${chats.length - groups.length}* Personal Chats
▢ *${chats.length}* Total Chats

*≡ DEVICE*
Battery : ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? 'Charging' : 'Discharging'}` : 'Unknown'}
▢ Device : ${device_manufacturer}
▢ Versi OS : ${os_version}
▢ Versi Device : ${device_model}
▢ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▢ MCC : ${mcc}
▢ MNC : ${mnc}
▢ Versi Wa : ${conn.user.phone.wa_version}
`)
}

handler.help = ['Info']
handler.tags = ['main']
handler.command = ['info']
module.exports = handler
