let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) {
  conn.reply(m.chat, `*▢ DARE*\n${pickRandom(global.dare)}`, m)
  }

handler.help = ['Dare']
handler.tags = ['random']
handler.command = /^(dare)$/i
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

global.dare = ["Kirim pesan ke mantan kamu dan bilang 'aku masih suka sama kamu'",
  "telfon crush/pacar sekarang dan ss ke pemain",
  "pap ke salah satu anggota grup",
  "Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' ke cowo",
  "ss recent call whatsapp",
  "drop emot '🥺👉👌' setiap ngetik di gc/pc selama 1 hari",
  "kirim voice note bilang can i call u baby?",
  "drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu",
  "pake foto sule sampe 3 hari",
  "ketik pake bahasa daerah 24 jam",
  "ganti nama menjadi 'gue anak lucinta luna' selama 5 jam",
  "chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia 'i lucky to hv you'",
  "prank chat mantan dan bilang ' i love u, pgn balikan'",
  "record voice baca surah al-kautsar",
  "bilang 'i hv crush on you, mau jadi pacarku gak?' ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini",
  "sebutkan tipe pacar mu!",
  "snap/post foto pacar/crush",
  "teriak gajelas lalu kirim pake vn kesini",
  "pap mukamu lalu kirim ke salah satu temanmu",
  "kirim fotomu dengan caption, aku anak pungut",
  "teriak pake kata kasar sambil vn trus kirim kesini",
  "teriak 'anjimm gabutt anjimmm' di depan rumah mu",
  "ganti nama jadi ' BOWO ' selama 24 jam",
  "Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll","Nyanyikanlah sebuah lagu yang harus dibawakan dengan penuh penghayatan di depan semua orang saat ini","Ayo chat mantan atau gebetanmu dan ketiklah aku kangen kamu lalu kirim. Mari tunggu apa belasan dan reaksinya","Kamu harus menarikan sebuah lagu India dengan diiringi oleh backsound panci dan baskom yang ditabuhkan","Makan dan telan buah lemon sampai habis tanpa tersisa dan tidak boleh dibuang","Ajaklah orang yang tidak kamu kenal untuk menari bersama","Memakai celana legging secara cepat tanpa menggunakan tangan dan hanya diperbolehkan menggunakan kaki","Panggil orang secara random dan katakanlah kamu tampan atau cantik kepada orang tersebut","Gelitiki teman sebangkumu tanpa mengatakan apa alasan dibalik kau melakuka hal tersebut","Larilah ke tengah lapangan seraya menjerit dan mengatakan bahwa aku rindu pada mantanku","Uploadlah sebuah video pada akun sosial media pribadi dimana kamu menarikan sebuah lagu dengan penuh semangat","Ajak orang yang tidak kamu kenal untuk selfie berdua dengan mu lalu upload ke snapgram","Ambil beberapa nomor dari kontakmu secara acak dan kirim sms \"Aku hamil\" sama mereka","Ambil minuman apa saja yang ada didekat mu lalu campurkan dengan cabai dan minum!","Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang \"Aku mencintaimu\"","Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu \"Ini.adalah makanan yang paling mahal yang pernah kubeli\"","Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.","Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.","Berdiri di tengah lapangan basket dan berteriak, \"AKU MENCINTAIMU PANGERANKU/PUTRIKU\"","Beri hormat pada seseorang di kelas, lalu bilang \"Hamba siap melayani Anda, Yang Mulia.\"","Berjalan sambil bertepuk tangan dan menyanyi lagu \"Selamat Ulang Tahun\" dari kelas ke koridor.","Berlutut satu kaki dan bilang \"Marry me?\" sama orang pertama yang masuk ke ruangan.","Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload","Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload","Bilang \"KAMU CANTIK/GANTENG BANGET NGGAK BOHONG\" sama cewek yang menurutmu paling cantik di kelas ini","Bilang pada seseorang di kelas, \"Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.\"","Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang \"Buku ini isinya tidak ada yang bisa memahami\"","Cabut bulu kaki mu sendiri sebanyak 3 kali!","Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.","Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.","Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.","Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.","isi mulut penuh dengan air dan harus tahan hingga dua putaranJika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.","Salamanlah dengan orang pertama yang masuk ke ruangan ini dan bilang \"Selamat datang di Who Wants To Be a Millionaire!\"",".Kirim sms pada orangtuamu \"Hai, bro! Aku baru beli majalah Playboy edisi terbaru!\"","Kirim sms pada orangtuamu, \"Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi.\"","Kirim sms pada tiga nomor acak di kontakmu dan tulis \"Aku baru saja menjadi model majalah Playboy.\"","Makan satu sendok makan kecap manis dan kecap asin!","Makan sesuatu tapi gak pake tangan.","Marah-marahi ketemen kamu yang gak dateng padahal udah janjian mau main \"truth or dare\" bareng\"","Pecahkan telur menggunakan kepala!","Makanlah makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.","Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.","Mengerek tiang bendera tanpa ada benderanya.","Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.","Meniru style rambut semua temen kamu.","Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari","Menyanyikan lagu Baby Shark dengan keras di ruang kelas.","Minjem sesuatu ke tetangga","Minta tandatangan pada seorang guru yang paling paling galak sambil bilang \"Anda benar-benar orang yang paling saya kagumi di dunia.","Minta uang pada seseorang (random/acak) di jalan sambil bilang \"Saya tidak punya uang untuk naik angkot.\"","Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap."]
