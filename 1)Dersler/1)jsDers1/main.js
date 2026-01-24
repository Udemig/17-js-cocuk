// JS Bağlantı Kontrolü
// console.log("Merhaba")

// * JavaScript Çıktı Metotları

// JavaScript'de kullanıcıya dinamik şekilde çıktı vermek için şu yöntemleri kullanırız:

// 1-) document.write();

// HTML kısmındaki body'nin javascript'deki karşılığı document objesidir. Bu alana yazdırma işlemi yapabilmek için ise bu objenin sonuna .write() metodu eklenir. Bu metot () içerisine yazılır. Yazılıcak içeriği bu parantezlerin içine yazarız. Eğer parantez içine yazdığınız şey bir metin/yazı ise "" içine yazılır.

document.write("Udemig Akademisine Hoşgeldiniz", "<br>")
document.write("Udemig Akademisine Hoşgeldiniz", "<br>")
document.write("Udemig Akademisine Hoşgeldiniz", "<br>")

// 2-) console.log();

// Javascript'de console.log() metodu ile kullanıcıya tarayıcıda bulunan console ksımında çıktı verir. Bu metot bağlantı kontorlü, veri kontrolü ve hata kontrolü için çok yaygın bir şekilde kullanılır.

console.log("Console'a hoşgeldiniz")

// 3-) alert();

// alert metodu ise açılır kapanır bir popup ile kullanıcıya çıktı vermek için kullanılır. Bu metot bizden () içerisinde kullanıcıya verilecek çıktının "" içerisinde yazılmasını ister.

// alert("Bugün hava yağışlı dikkat et")

document.write("<----------------------------------------------->", "<br><br>")

// * JavaScript Değişkenleri

// Değişkenler program içerisinde değeri değişebilecek verileri yönetmek için kullanılır. Bir değişkeni program içerisinde kullanabilmek için önce tanımlamamız sonra değer ataması yaomamız en son ise program içerisinde uygun yerde kullanmamız gerekir. 


// i) Değişken Tanımlama

var isim = "Yusuf";

document.write(isim, "<br>");

var yas = 15;

document.write(yas, "<br>" );


// * JavaScript Aritmetik Operatörler:

var sayi1 = 15;
var sayi2 = 30;

// 1. Toplama(+):
var toplam = sayi1 + sayi2

document.write("Toplama: " + toplam + "<br>")
document.write("Toplam: " ,  sayi1+sayi2 , "<br>")

// 2. Çıkarma(-):
var cikarma = sayi2 - sayi1;

document.write("Çıkarma: " + cikarma + "<br>")
document.write("Çıkarma: " ,  sayi1-sayi2 , "<br>")

// 3. Çarpma(*):
var carpma = sayi2 * sayi1;

document.write("Çarpma: " + carpma + "<br>")
document.write("Çarpma: " ,  sayi1*sayi2 , "<br>")
document.write("Çarpma: ", 5 * 7 , "<br>")

// 4. Bölme(/):
var bolme = sayi2 / sayi1;

document.write("Bölme: " + bolme + "<br>")
document.write("Bölme: " ,  sayi1/sayi2 , "<br>")
document.write("Bölme: ", 30 / 6 , "<br>")

// * JavaScript Eşitlik Operatörü

var sayi3 = 44;
var sayi4 = 44;

document.write("Sayı-3 ve Sayı-4 Eşit Mi? ", sayi3 == sayi4 , "<br>")
document.write("44 50'e Eşit Mi? ", 44 == 50 , "<br>")


// * JavaScript Karşılaştırma Operatörleri

var sayi5 = 65;
var sayi6 = 89;

// 1. Küçüktür(<): 

document.write("Sayı-5 Sayı-6'dan Küçük Mü? ", sayi5 < sayi6, "<br>")
document.write("Sayı-5 40'dan Küçük Mü? ", sayi5 < 40, "<br>")

// 2. Büyüktür(>): 

document.write("Sayı-6 Sayı-5'dan Büyük Mü? ", sayi6 > sayi5, "<br>")
document.write("Sayı-6 100'den Büyük Mü? ", sayi6 > 100, "<br>")