// ! Javascript Çıktı Metodları
// Js'de 3 şekilde çıktı alabiliriz. Ekrana yazdırarak, konsola yazdırarak ve uyarı olarak yazdırabiliriz.

// 1. Yöntem document.write
document.write("Selamlar,nasılsınız?", "<br>");

// 2. Yöntem console.log()
console.log("Selamlar,nasılısnız?");

// 3. Yöntem alert()
// alert("Bu işlem için yetkiniz yok");

// ! Javascript'te değişkenler
// Js'de değişken tanımlamak için var anahtar kelimisini kullanırız. var dedikten sonra değişken ismi belirlenir ardından "=" operatörü ile tanımlanmak istenilen değişken tanımlanır

var numara = 44;

document.write(numara, "<br>");

var kullaniciReferansNo = 1234567890;

document.write(kullaniciReferansNo, "<br>");

var isim = "Yusuf";

document.write("Selam ", isim, " nasılsın?", "<br>");

// Javascript Operatörler
var sayı1 = 14;
var sayı2 = 7;

// ! Matematiksel Operatörler
// Toplama
document.write("Toplama: ", sayı1 + sayı2, "<br>");

// Çıkarma
document.write("Çıkarma: ", sayı1 - sayı2, "<br>");

// Çarpma
document.write("Çarpma: ", sayı1 * sayı2, "<br>");

// Bölme
document.write("Bölme: ", sayı1 / sayı2, "<br>");

// ! Eşittir && Atama Operatörleri
// document.write(sayı1 = sayı2) şeklinde yazdırdığımızda "=" sembolü javascript'te atama operatörü olarak kullanıldığı için burda eşit mi ? sorgusu yapmaz. sayı1'in değerini sayı2'ye eşitler. Bu neden bunu yazdırdığımızda "7" çıktısını alırız.

// Js'de eşit mi sorgusunu yapmak için "==" kullanılır. Bu sorgu "==" solundaki değer ile sağındaki değer eşit mi ? sorgusunu yapar.

// Eşit değil mi ? sorgusunu yapmak için "!==" kullanılır.

//  "=="     eşit mi ? diye sorar
//  "!=="    eşit değil mi ? diye sorar

document.write("Sayılar eşit mi ? ", sayı1 == sayı2, "<br>");

// ! Karışılaştırma Operatörleri

// Js'de karşılaştırma yapmak için karşılaştırma operatörleri kullanılır. Bu operatörler ">", "<", ">=", "<=" operatörleridir. Bu sorgulama sonucunda sorgulama değeri doğru ise "true", yanlış ise "false" çıktısı alırız.

document.write("Sayı1 sayı2' den büyük mü ? ", sayı1 > sayı2, "<br>");
document.write("Sayı1 sayı2' den büyük mü ? ", sayı1 < sayı2, "<br>");

var sayı3 = 15;
var sayı4 = 15;

document.write("Sayı3 sayı4' ten büyük mü ? ", sayı3 >= sayı4, "<br>");
document.write("Sayı3 sayı4' ten küçük mü ? ", sayı3 <= sayı4, "<br>");

// * Javascript Veri Tipleri

// 5 adet veri tipi bulunmaktadır. Number,string, boolean, obje ve diziler

document.write(typeof sayı1, "<br>"); // number
document.write(typeof "Selam", "<br>"); // string
document.write(typeof true, "<br>"); // boolean

// ! Javascript String Metodları

var mesaj = "Selamlar, Nasılsın? Çalışmalar Nasıl Gidiyor?";

document.write("Mesaj :", mesaj, "<br>");

// length   ==> string bir ifadenin uzunluğunu ölçmek için kullanılır
document.write("Mesaj Uzunluğu :", mesaj.length, "<br>");

// indexof  ==> bir kelimenin string değer içerisinde kaçıncı sıradan itibaren başladığını bulur
document.write("İndexOf değeri: ", mesaj.indexOf("nasılsın"), "<br>");

// slice    ==> string bir ifadenin belirli bir aralıktaki değerini almak için kullanılır. Slice metodu bizden başlangıç ve bitiş indexlerini ister. Başlangıç indexini nereden başlayacağını bilmesini söylememiz gerektiğinden zorunludur. 2 değer olan bitiş değerini girmediğimiz durumda başlangıç değerinden sonra tüm string değerleri bize getirir.

document.write("Slice (tek değer): ", mesaj.slice(10), "<br>");

document.write("Slice (çift değer): ", mesaj.slice(10, 30), "<br>");

// replace  ==> String ifade içerisindeki bir değeri değiştirmek için kullanılır. () içerisine 2 değer girilir. Girilen ilk değer değiştirilmek istenilen değer ikinci değer ise yeni değerdir.

document.write("Mesaj :", mesaj, "<br>");
document.write("Replace :", mesaj.replace("Selamlar", "Merhabalar"), "<br>");

// toLocaleLowerCase    ==> string ifadeyi küçük harfe çevirir
document.write("Küçük Harf: ", mesaj.toLocaleLowerCase(), "<br>");

// toLocaleUpperCase    ==> string ifadeyi küçük harfe çevirir
document.write("Büyük Harf: ", mesaj.toLocaleUpperCase(), "<br>");

// ! Javascript Number Metodları

var sayı5 = 100.23561723;

document.write(
  "--------------------------------------------------------------------------------------",
  "<br>",
);
document.write("Sayı: ", sayı5, "<br>");

// toFixed()    ==> "." dan sonra kaç basamak olacağını gösterir
document.write("Sayı: ", sayı5.toFixed(2), "<br>");
document.write("Sayı: ", sayı5.toFixed(3), "<br>");
document.write("Sayı: ", sayı5.toFixed(1), "<br>");

// Math.round()  ==> matematiksel olarak en yakın tam sayıya yuvarlar. Bu metodu Math.round() şeklinde kullanırız. () içerisine yuvarlamak istediğimiz değeri gireriz.
document.write("En Yakın Tam Sayıya Yuvarla: ", Math.round(sayı5), "<br>");

// Math.floor() ==> bir alt tam sayıya yuvarlamak için kullanılır
document.write("Alt Tam Sayı: ", Math.floor(sayı5), "<br>");

// Math.ceil() ==> bir üst tam sayıya yuvarlamak için kullanılır
document.write("Üst Tam Sayı: ", Math.ceil(sayı5), "<br>");

// Math.max()   ==> en büyük sayıyı bulmak için kullanılır
document.write(
  "En Büyük Sayı: ",
  Math.max(1, 234, 2345, 5678, 98999, 0, 15),
  "<br>",
);

// Math.min()   ==> en küçük sayıyı bulmak için kullanılır
document.write(
  "En Küçük Sayı: ",
  Math.min(1, 234, 2345, 5678, 98999, 15),
  "<br>",
);

// Math.random() sayfa her yenilendiğinden 0 ile 1 arasında rastgele bir sayı üretir
document.write("Random Sayı: ", Math.random(), "<br>");

document.write("0-10 Random Sayı: ", Math.round(Math.random() * 10), "<br>");
document.write("0-100 Random Sayı: ", Math.round(Math.random() * 100), "<br>");

document.write(
  "--------------------------------------------------------------------------------------",
  "<br>",
);

// ! Javascript Dizi Metodları

var kişiler = ["Yusuf", "Serdar", "Ali", "Ayşe"];

document.write("Dizi: ", kişiler, "<br>"); // Dizinin tamamına eriş

document.write("Bir eleman: ", kişiler[3], "<br>");

// Dizinin sonuna bir eleman eklemek için kullanılır.
kişiler.push("Furkan");

document.write(kişiler, "<br>");

//  pop ==>     Dizinin sonundaki elemanı kaldırıyoruz
kişiler.pop();
document.write(kişiler, "<br>");

// unshift  ==> Dizinin başına eleman ekle
kişiler.unshift("Merve");

document.write(kişiler, "<br>");

// shift    ==>  Dizinin başındaki elemanı kaldırmak için
kişiler.shift();

document.write(kişiler, "<br>");

// Dizi içerisindeki bir elemanı güncelle
kişiler[1] = "Taha";

document.write(kişiler, "<br>");
