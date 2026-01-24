// JavaScript Veri Tipleri:

// JavaScript'te değerlerin birer veri tipi vardır. Bu veri tipleri program içerisinde işlemler yapılırken bilinmesi önem arz eden yapıalrdır. Bu veri tiplerinden temel olanlar:

// 1) string: Javascript'te alfanümerik karakterlerden oluşan verilerin veri tipidir. Bir string değer tanımlanırken "" içerisinde yazılmalıdır.

// 2) number: Javascript'te nümerik karakterlerden oluşan verilerin veri tipidir. Bir number değer tanımlanırken direkt yazılır. Tırnak içerisinde yazılmaz.

// 3) boolean: Javascript'te true/false değerlerinin veri tipidir

// 4) array: Javascript'te dizilerin veri tipi array'dir. Diziler javascript'te verilerin yönetilmesi noktasında önemli yapılardandır. Bu sebeple ileride daha detaylı bir şekilde ele alacağız.

// 5) object: Javascript'te nesnelerin veri tipi object'tir. Nesneler içerisinde key ve value değer çiftleri halinde veri tutan yapılardır. Nesnelerde tıplı dizilerden olduğu gibi javascript içerisinde öenmli bir yere sahiptir. Bu nedenle nesneleride ileride daha detaylı şekilde ele alacağız.

// ! typeof     ==> Javascript'te bir değerin veri tipini kontrol etmek için kullanılır. Bu metotdan sonra kontrol edilecek değer yazılır ve veri tipi kontrolü yapılır
//  (Ör: document.write("İsim Verisinin Veri Tipi:", typeof isim); )

// String Örneği
var isim = "Ahmet";
var soyisim = "Yılmaz";

document.write("İsim:", isim, "<br/>", "soyisim:", soyisim, "<br/>");
document.write("İsim Verisinin Veri Tipi:", typeof isim, "<br/>");

// Number Örneği
var yaş = 20;

document.write("Yaş:", yaş, "<br/>");
document.write("Yaş Verisinin Veri Tipi:", typeof yaş, "<br/>");

var yas = "30";

document.write("Yaş:", yas, "<br/>");
document.write("Yaş Verisinin Veri Tipi:", typeof yas, "<br/>");

// boolean Örneği

var öğrenciMi = true;
document.write("Öğrenci Mi: ", öğrenciMi, "<br/>");
document.write(
  "Öğrenci Mi Verisinin Veri Tipi:",
  typeof öğrenciMi,
  "<br/>",
  "<br/>",
);

// ! JavaScript String Metodları
// JavaScript'te string ifadelerin sahip olduğu bazı metotlar vardır. Bu metotların bazıları;

var mesaj =
  "Udemig akademiden selamlar. Bu kurs kapsamında FRONTEND eğitimi alıyoruz. Bu eğitim sonucunda cok iyi seviyeye geleceğiz. Kurs kapsamında html ve css'den SONRAKİ KONUMUZ javascript'tir. Javascript dinamik web siteleri oluşturmak için gerekli bir programa dilidir.";

document.write("Mesaj: ", mesaj, "</br>");

document.write(
  "--------------------------------------------------------",
  "</br>",
);

document.write("Mesaj'ın Karakter Uzunluğu: ", mesaj.length, "<br/>");

document.write(
  "--------------------------------------------------------",
  "</br>",
);

// ? indexof
// Bir string ifadenin içerisinde bir kelimenin kaçıncı index'de bulunduğunu kontrol etmek için kullanılır. Index js içerisinde çok duyacağımız bir kavramdır. Index bir değerin bulunduğu bağlam içerisindeki sırasını belirtir. Bu bağlam içerisindeki ilk değerin index'i yanı sıra sayısı 0'dır. Yani js index'i sıfırdan başlar. Bu metod değişken adından sonra "." konularak kullanılır. Aramak istediğimiz kelimeyi "()" içerisinde yazarız.

document.write(
  "Mesaj'ın içerisinde 'selamlar' kelimesinin Index'i: ",
  mesaj.indexOf("selamlar"),
  "</br>",
);

document.write(
  "--------------------------------------------------------",
  "</br>",
);

//  ? slice
//Bir string ifade içerisinden belirli bir aralığı almak için kullanılır. Bu metod değişken adından sonra "."  konulduktan sonra slice() şeklinde çağırılır. () içerisinde metod bizden 2 parametre girmemizi ister. İlk parametre başlangıç parametresidir. Burada ilk parametre zorunlu ikinci parametre ise opsiyoneldir. Yani birinci parametreyi vermezsek metod çalışmaz. Ama ikinci değeri vermezsek birinci değerden başlayarak değişkenin son karakterine kadarki aralığı alır.

document.write(
  "Mesajın içerisinden 2-44. karakterler arası: ",
  mesaj.slice(1, 43),
  "</br>",
);

document.write(
  "--------------------------------------------------------",
  "</br>",
);

document.write(
  "Mesajın içerisinden 2-44. karakterler arası: ",
  mesaj.slice(1),
  "</br>",
);

// ? replace
// Bir string ifade içerisindeki bir değerin başka bir değer ile değiştirmek için kullanılır. ".replace()" şeklinde çağırdıktan sonra bu metot bizden 2 değer istemekte ilk değer değiştirmek istenilen stirng ifade ikinci değer ise yeni eklenecek string kelimedir.

document.write(
  "--------------------------------------------------------",
  "</br>",
);

document.write(
  "Mesajın içerindeki 'frontend' kelimesini 'yazılım' kelimesi ile değiştir: ",
  mesaj.replace("frontend", "yazılım"),
  "</br>",
);

// ? toLocaleLowerCase

// bir string ifade içerisindeki tüm harflerin küçük harf olmasını sağlar

document.write(
  "--------------------------------------------------------",
  "</br>",
);
document.write("Mesaj Küçük Harf: ", mesaj.toLocaleLowerCase(), "</br>");

// ? toLocaleUpperCase

// bir string ifade içerisindeki tüm harflerin büyük harf olmasını sağlar

document.write(
  "--------------------------------------------------------",
  "</br>",
);
document.write("Mesaj Büyük Harf: ", mesaj.toLocaleUpperCase(), "</br>");

document.write(
  "--------------------------------------------------------",
  "</br>",
);

// Javascript Number Metodları

// ? toFixed
// Ondalıklı bir sayının devreden kısmının kaç basamaktan oluşacağını belirtmek için kullanırız. Bu metot () içerisinde devreden kısmın kaç basamaktan oluşacağıının belirtilmesi gerekir.

var sayi = 13.544544;

document.write(
  "--------------------------------------------------------",
  "</br>",
);
document.write("Sayı  ", sayi, "</br>");
document.write("Sayı devrende kısım 2 Basamaklı: ", sayi.toFixed(2), "</br>");

// ? Math.round
// Ondalıklı bir sayıyı en yakın tam sayıya yuvarlamak için kullanılır. Bu metotda Math.round(sayi) şeklinde yazılır. Parantez içerisine yuvarlamak istediğimiz değer girilir.

document.write(
  "Sayıyı en yakın tam sayıya yuvarla: ",
  Math.round(sayi),
  "</br>",
);

// ? Math.ceil
// ondalıklı sayıyı en yakın bir üst tam sayıya yuvarlamak için kullanılır.
document.write(
  "12.2'yi en yakın bir üst tam sayıya yuvarla: ",
  Math.ceil(12.2),
  "</br>",
);

// ? Math.floor
// Ondalıklı sayıyı en yakın bir alt tam sayıya yuvarlamak için kullanılır.
document.write(
  "12.8'i en yakın bir alt tam sayıya yuvarla: ",
  Math.floor(12.8),
  "</br>",
);

// ? Math.max
// Birden fazla sayı içerisinde yer alan sayılardan en büyüğünü bulmak için kullanılır.

document.write("En Büyük Sayı: ", Math.max(1, 2, 3, 50, 123, 4500), "</br>");

// ? Math.min
// Birden fazla sayı içerisinde yer alan sayılardan en küçüğünü bulmak için kullanılır.

document.write(
  "En Küçük Sayı: ",
  Math.min(2, 3, 50, 123, 1, 15, 4500),
  "</br>",
);

// ? Math.random
// Math.random 0 - 1 arasında rastgele b,r sayı üretir. Fakat bu aralıkta oluşturulan sayıların program içerinde çok kullanışlı değildir. Bu sebeple ilgili aralığı genişletip bir tam sayı elde ederiz.

document.write("Rastgele Sayı: ", Math.random(), "</br>");
document.write("Rastgele Sayı: ", Math.round(Math.random() * 100));

document.write("</br>", "</br>", "</br>", "</br>", "</br>", "</br>", "</br>");
