// JavaScript Diziler (Arrays)

// Javascript dizileri program içerisinde verilerimizi bir arada tutarak ve sahip olduğu metodlar sayesinde kolayca yötebilmemizi sağlayan yapıdır.

// Diziler ile verilerimiz yönetirken ilk olarak bir dizi tanımlamalı sonrasında bu dizinin sahip olacağı elemanları atamalı akabinde ise program içerisinde gereken yerde bu dizileri kullanmalıyız.

// Bir dizi "var" anahtar kelimesinden sonra dizi ismi verilerek tanımlanır. Tanımlanan bir diziye değer ataması yapmak için "=" sembolü çağırılıp sonrasında [] oluşturup bu [] parantez içerisine dizinin elemanları yazılır.

var öğrencilerDizisi = ["Ahmet", "Akif", "Serdar", "Yusuf", "Enes"];

document.write("ÖğrencilerDizisi: ", öğrencilerDizisi, "</br>");

// TODO: Öğrenciler adında bir dizi tanımlayın. Bu diziye 5 öğrencinin isimlerini ekleyin

var Öğrenciler = ["Yusuf", "Enes", "Yiğit"];

document.write("öğrenciler =>", Öğrenciler, "</br>");

var öğrenciler = ["ahmet", "mehmet", "mustafa", "enes", "ayhan"];

document.write("öğrenciler =>", öğrenciler, "</br>");

var öğrenciNotları = [100, 98, 95, 85, 80, 50, 60];

document.write("Öğrenci Notları: ", öğrenciNotları, "</br>");

// TODO Sınav notları adında bir dizi tanımlayın. Bu diziye 7 öğrencinin notunu ekleyin

var öğrencinot = [100, 95, 49, 20, 59, 79, 83];
document.write("öğrenci notlar =>", öğrencinot, "</br>");

var Öğrencinotları = [90, 76, 55, 87, 66, 32, 54];
document.write("Öğrencinotları =>", Öğrencinotları, "</br>");

var karmaDizi = ["Adana", 1, "Serdar", true, "Udemig"];

document.write("Karma Dizi: ", karmaDizi, "</br>");

document.write(
  "</br>",
  "---------------------------------------------",
  "</br>",
);

// ? Dizi içerisindeki spesifik bir elemana eriş

// Bir dizi içerisinde yer alan bir elemana tek başına erişmek için dizi adından sonra [] koyulup [] içerisine erişilmek istenilen elemanın sıra sayısı yazılır. Fakat tek bir elemana erişmek istenilen durumda ufak bir sıkıntı mevcut. 1. elemana erişmek istersek [1] yazdığımız durumda 1. elemana değil 2. elemana erişmiş oluruz. Bunun sebebi dizi içerisindeki elemanları 1,2,3 şeklinde değilde 0,1,2,3 şeklinde sıralanmasıdır. Bu kavrama index kavramı denir. Dizi içerisindeki doğru elemana erişmek içinse eirşilmek istenilen elemanın sıra sayısının 1 eksiği yazılır. Yani dizi içerisindeki 3 elemana erişmek istiyorsak [2] yazmamız gerekir.

document.write(
  "Öğrenciler Dizisi içerisindeki 1. elemana eriş: ",
  öğrencilerDizisi[0],
  "</br>",
);

document.write(
  "Öğrenciler Dizisi içerisindeki 1. elemana eriş: ",
  öğrencilerDizisi[1],
  "</br>",
);

document.write("Öğrenci Notlar Dizisi:", öğrencinot[4], "</br>");

document.write("---------------------------------------------", "</br>");

// Dizi Metotları

// ? 1) push metotu
// push: Bir dizinin sonuna eleman eklemek için kullanılır. Bu metot eleman eklenecek dizi adının sonuna .push() yazılarak kullanılır. Diziye eklenmek istenen elemanları ise () içerisine yazmamız gerekir.

var arabalar = ["Opel", "Mercedes", "Bmw", "Renault"];

document.write("Arabalar Dizisi:", arabalar, "</br>");

arabalar.push("Nissan");

document.write("Arabalar Dizisi-1:", arabalar, "</br>");

// ? 2) pop metotu
// Bir dizinin sonundaki elemanı kaldırmak için kullanılır. Bu metotda dizinin son elemanını kaldırdığımız için () içerisine herhangi bir değer girmiyoruz.

arabalar.pop(); // arabalar dizisinin son elemanını diziden kaldırdı

document.write("Arabalar Dizisi-2:", arabalar, "</br>");

// ? 3) shift metotu
// Bir dizinin ilk elemanını kaldırmak için kullanılır. () içerisine bir değer girmemize gerek yok.

arabalar.shift();
document.write("Arabalar Dizisi-3:", arabalar, "</br>");

// ? 4) unshift metotu
// Bir dizinin başına eleman eklemek için kullanılır. Bu metot dizi adından sonra .unshift() olarak kullanılır ve () içerisine dizinin başına eklemek istediğimiz değer girilir.

arabalar.unshift("Citroen");

document.write("Arabalar Dizisi-4:", arabalar, "</br>");

// ? 5) length metotu
// Bir dizinin uzunluğunu ölçmek için kullanılır.
document.write("Arabalar dizisinin uzunluğu: ", arabalar.length, "</br>");

// ? Bir dizinin elemanını güncelleme
// Bir dizideki spesifik bir değeri değiştirmek istediğimiz zaman dizi adından sonra [] açılır ve bu [] içerisine değiştirilmek istenilen dizinin index'i yazılır. Ardından "=" konur ve yeni değer girilir. Yeni değer string bir değer ise "" içerisinde number ise direk değerin kendisi yazılır.

arabalar[0] = "Tesla"; // "citroen" değerini "tesla" değeri ile değiştirir.
// arabalar[2] = 1; // "bmw" değerini 1 değeri ile değiştirir

document.write("Arabalar Dizisi-5:", arabalar, "</br>");

document.write("---------------------------------------------", "</br>");

// ! Javascript Fonksiyonlar

// Javascript fonksiyonları bir işlem gerçekleştirmek için özelleştirilmiş kod bloklarıdır. Belirlenen bu işlem iki sayıyı topla, birden fazla sayının ortalamasını hesaplamak, bir çıktı vermek...

//  ? Bir fonksiyon nasıl tanımlanır, Yapacağı işlem nasıl belirlenir ?
// bir fonksiyon "function" anahtar kelimesi yazıldıktan sonra fonksiyona bir isim verilir. Bu isimden sonra sırayla () {} oluşturularak tanımlanır. {} içerisine fonksiyonun yapması istenilen işlemler kodlanır.

function selamla() {
  document.write("Udemig Akademiden selamlar.", "</br>");
}

// Bir fonksiyonun belirtilen işlemi yapması için tanımlanması yeterli değildir. Tanımlandıktan sonra bu fonksiyonun çağırılması gerekir. Bir fonksiyon ise fonksiyon adı ve sonrasında () oluşturularak çağırılır. Bu çağırma işlemi kaç kere yapılırsa fonksiyon o kadar çalışır.
selamla();
// selamla();
// selamla();
// selamla();
// selamla();

// todo 3 adet sayıyı toplayıp toplam sonucunu ekrana yazdıran bir fonksiyon oluşturunuz

function toplamaİşlemi() {
  // toplanacak sayıların tanımlanması
  var sayi1 = 10;
  var sayi2 = 35;
  var sayi3 = 45;

  //   tanımlanan sayıların toplanması
  let toplam = sayi1 + sayi2 + sayi3;

  //   elde edilen toplama işlemi sonucunun yazdırılması
  document.write("Toplam: ", toplam, "</br>");
}

// fonksiyonu çağır
toplamaİşlemi();

function toplamaişlemi() {
  var sayi1 = 80;
  var sayi2 = 54;
  var sayi3 = 42;
  let toplam = sayi1 + sayi2 + sayi3;
  document.write("Toplam", toplam, "</br>");
}
toplamaişlemi();

function toplama() {
  var say1 = 14;
  var say2 = 56;
  var say3 = 76;
  let toplam = say1 + say2 + say3;
  document.write("toplam =>", toplam, "</br>");
}
toplama();
