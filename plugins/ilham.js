let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
  conn.fakelnk(m.chat, `*▢ ILHAM*\n${pickRandom(global.ilham)}`, 'Follow me on Instagram\nCLICK HERE !', pp, m)
}
handler.help = ['Ilham']
handler.tags = ['random']
handler.command = /^(ilham)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.ilham = ["” Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep” - Kata ilham.","” Sesimpel ini deh, sibuk itu palsu, semua tergantung prioritas” – kata ilham.","” Dia hanya menghargaimu, bukan mencintaimu” – kata ilham.","” Keadilan sosial hanya berlaku bagi warna negara yang good looking ” – kata ilham.","” Jangan jadi pelangi untuk orang yang buta warna ” – kata ilham.","” Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat ” – kata ilham.","” Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta ” – kata ilham.","” Mencintaimu adalah seni menyakiti diri ‘ – kata ilham.","” Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya ” – kata ilham.","” Cukup tahu namaku, jangan rupaku” – kata ilham.","” Sesuatu akan terasa berharga jika sudah kehilangan ” – kata ilham.","” Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan ” – kata ilham.","“ngapain tidur kalo besok bangun lagi“. - Kata Ilham.","“dia ngetik pake jari, lu bales pake hati”, - kata ilham.","“Dia tak buta warna, kau yang bukan pelanginya” - kata ilham.","“Dia nggk sibuk, lu yang bukan prioritas nya” - kata ilham","“Jangan pernah jadi pelangi, untuk seseorang yang buta warna” - kata ilham"]
