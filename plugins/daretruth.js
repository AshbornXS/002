let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
  conn.fakelnk(m.chat, `*▢ TRUTH*\n${pickRandom(global.truth)}`, 'Follow me on Instagram\nCLICK HERE !', pp, m)
}
handler.help = ['Truth']
handler.tags = ['random']
handler.command = /^(truth)$/i
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

global.truth = ["Pernah suka sama siapa aja? berapa lama?",
  "Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
  "apa ketakutan terbesar kamu?",
  "pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
  "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
  "pernah gak nyuri uang nyokap atau bokap? Alesanya?",
  "hal yang bikin seneng pas lu lagi sedih apa",
  "pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
  "pernah jadi selingkuhan orang?",
  "hal yang paling ditakutin",
  "siapa orang yang paling berpengaruh kepada kehidupanmu",
  "hal membanggakan apa yang kamu dapatkan di tahun ini",
  "siapa orang yang bisa membuatmu sange",
  "siapa orang yang pernah buatmu sange",
  "(bgi yg muslim) pernah ga solat seharian?",
  "Siapa yang paling mendekati tipe pasangan idealmu di sini",
  "suka mabar(main bareng)sama siapa?",
  "pernah nolak orang? alasannya kenapa?",
  "Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
  "pencapaian yang udah didapet apa aja ditahun ini?",
  "kebiasaan terburuk lo pas di sekolah apa?","Benar atau tidak bahwa orang yang kamu sukai berada diantara kita semua saat ini?","Sebutkan kejadian paling memalukan yang pernah kamu alami?","Kamu pernah kesal dan membenci aku bukan?","Kamu berpura-pura datang ke kelas sebelah hanya untuk melihat gebetanmu bukan?","Siapa orang yang paling jago bikin kamu tertawa terbahak-bahak?","Ceritakan kejadian yang membuatmu marah besar kepada kakak?","Siapa mantan terindah yang pernah kamu miliki?","Ayo jujur, kamu pernah ada niat untuk kembali berpacaran dengan mantanmu bukan","Beritahu kita semua nama orang yang pernah menolak pernyataan cintamu dulu","Belajar online tapi banyak tugas PR atau belajar disekolah tapi banyak jam kosong?","Siapa yang paling sesuai dengan tipe idealmu di antara anak kelas?","Kasih tau gosip paling parah tentang anak sekolah yang kamu rahasiakan dari kita semua","Apa yang menyebab phobia yang kamu miliki sampai sekarang apa?","Kapan terakhir kali kamu mengompol di celana","Baju terjelek yang pernah dipakai oleh kakak apa? Yang jujur ya jawabnya","Siapa yang gaya berpakaiannya paling payah diantara kita semua?","Barang termurah yang di pakai dan barang termahal yang pernah kamu pakai","Beritahu sifat buruk dari kita semua yang menurut kamu sangat menyebalkan sekali?","Sebutkan film dan lagu yang pernah membuatmu menangis tersedu-sedu","Jalan-jalan ke puncak tapi besoknya ujian atau sekolah tapi banyak jam kosong","Moment paling romantis yang pernah dilakukan kekasihmu apa?","Moment menjijikan yang pernah kamu lihat dan tidak ingin terjadi lagi adalah","Jika kamu mempunyai kekuatan super, kekuatan apa yang ingin kamu miliki?","Kalau kamu dijodohkan oleh papa dan mama, kamu setuju atau tidak?","Jujur, kamu sangat tidak suka kalau papa dan mama mulai membandingkan mu dengan saudara lainnya?","Kalau biaya operasi plastik murah, kamu ingin memiliki wajah seperti artis mana?","Sebutkan kebohongan terbesar yang pernah kamu lakukan kepada mama dan papa?","Kalau besok adalah hari kiamat, kamu ingin menghabis moment terakhir dihidupmu bersama dengan siapa?","Jika kamu dikasih kesempatan untuk reinkarnasi, kamu ingin menjadi siapa pada kehidupan selanjutnya?","Kamu pernah melakukan sebuah pencurian atau tidak?","Jika kamu diberikan kesempatan untuk bertukar kehidupan, kamu ingin bertukar kehidupan selama sehari dengan siapa?","Pilih pacar ngajak jalan berdua dan temen-temen ngajak main bersama-sama?","Diantara kita semua, siapa yang paling tidak bisa berpose dan bergaya ketika di foto?","Masakan siapa diantara kita yang memiliki rasa yang tidak enak?","Jujur, kamu pernah buntutin pacar kamu buat mergokin dia lagi selingkuh kan?","Kamu pernah kepoin mantannya pacar kamu kan cuma buat bandingin visual kamu sama dia?","Jujur ya, kamu pernah ga kentut di dalam kelas?","Apakah kamu pernah memarahi adikmu dan membuatnya menangis?","Apa hal yang paling menjengkelkan yang pernah dilakukan kakak kepada kamu?","Kenapa kamu suka ngelarang adik buat cek meja belajarmu?","Sebutkan mimpi buruk yang paling mengerikan dan nyaris pernah kamu alami?","Apakah kamu hampir mengalami kecelakaan dulunya?","Jika kamu sedang bersedih, galau dan kesal, kamu akan meredakan hal tersebut dengan melakukan apa?","Ayo jujur, kamu selalu menuliskan rasa suka mu terhadap kakak kelas A di buku harianmu bukan?","Sebutkan nama penggilan dimasa kecil yang kamu miliki?","Kamu takut sama hewan apa saja?","Kapan terakhir kali kamu memeluk mama dan papa?","Moment membahagiakan yang pernah kamu alami dalam hidupmu apa?","Kamu pernah cemburu sama adikmu kan karena kamu merasa orang tuamu lebih sayang dengan adikmu ketimbang dirimu sendiri?"]
