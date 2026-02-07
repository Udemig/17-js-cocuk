// ? Bir JavaScript Fonksiyonu nasıl dinamik işlemler yapabilir ?

// Bir fonksiyonu dinamik hale getirmek için fonksiyonda parametre kullanırız. Bir fonksiyonda parametre kullanırken ilk olarak () içerisinde bu parametreleri karşılar sonrasında ise fonksiyon içerisinde karşılanan parametreleri kullanırız.

// TODO: Dışarıdan alınan 3 adet sayının ortalmasını hesaplayan bir fonksiyon oluşturunuz.

function ortalama(x, y, z) {
  var toplam = x + y + z;

  var ortalama = toplam / 3;

  document.write("Ortalama: ", ortalama, "</br>");
}

ortalama(); // NaN çıktısını aldık. (Not a Number) Bunun sebebi fonksiyon dışarıdan 3 adet değer alması gerektiği için
ortalama(5, 6, 7);
ortalama(10, 15, 20);
ortalama(100, 200, 300);

function ortalamaHesapla(x, y, z) {
  var toplam = x + y + z;
  var ortalama = toplam / 3;
  document.write("ortalama", ortalama, "</br>");
}
ortalamaHesapla();
ortalamaHesapla(3, 5, 7);
ortalamaHesapla(5, 87, 34);

function ortalamahesabı(x, y, z) {
  var toplam = x + y + z;
  var ortalama = toplam / 3;
  document.write("ortalama", ortalama, "</br>");
}
ortalamahesabı();
ortalamahesabı(4, 85, 99);

function selamla(isim) {
  document.write("Merhaba ", isim, " hoşgeldin", "</br>");
}

selamla("Serdar");
selamla("Enes");
selamla("Mehmet");
selamla("Nehir");
selamla("Yusuf");

// Özetle bir fonksiyonun dinamik işlemler yapabilmesini istiyorsak bunu fonksiyonda parametre kullanarak yapabiliriz. Bir fonksiyonda parametre kullanırken ilk olarak fonksiyona parametre girilmeli ardından girilen parametre fonksiyon içerisinde gereken yerlerde kullanılmalı. Parametre kullanılan bir fonksiyon çağırılırken gereken parametreler verilmelidir.

// ? Javascript fonksiyonlarının değer döndürmesi

// Bir javascript fonksiyonu içerisinde tanımlanan bir değeri fonksiyon dışına direk olarak çıkaramayız. Bu sebeple fonksiyonun bir değeri dosya dışına çıkarmamız için fonksiyon içerisinde "return" anahtar kelimesi kullanılır. return  yanında yer alan değer fonksiyonun çağırıldığı yere geri döner.

function stokHesapla(a, b, c, d, e) {
  var stok = a + b + c + d + e;

  return stok;
}

document.write("Stok: ", stokHesapla(10, 20, 30, 40, 50), "<br>");
document.write("Stok: ", stokHesapla(100, 250, 305, 455, 567), "<br>");

// özetle bir fonksiyonun bir dizi işlem yapması sonucunda elde edilen değeri fonksiyon dışına çıkarması için return anahtar kelimesini kullanırız. return anahtar kelimesinin yanına yazılan değer fonksiyon dışına çıkarılır.

// Javascript Object

// javascript2De key-value değer çiftleri halinde veri tutmak için objeler kullanılır. bir javascript objesi oluşturmak için var anahtar kelimesinden sonra objeye bir isim verilir. Verilen ismin obje içeriği ile alakalı olmasında fayda vardır. obje isminden sonra = {}. {} içerisinde objenin sahip olmasını istediğimiz elemanları kodluyoruz. Bir obje içerisinde string, number, dizi, boolean, object ve fonksiyon verileri tanımlanabilir.

var kullanıcı = {
  isim: "serdar",
  soyisim: "mete",
  yaş: 30,
  hobiler: ["yazılım", "spor", "müzik", "yüzme"],
  öğrenciMi: true,
  adres: {
    şehir: "tekirdağ",
    ilçe: "merkez",
    postakodu: 59000,
  },

  //   bir obje içerisinde bu objenin içerisindeki bir değere erişmek istenirse bunun objenin içerisinde yer alan bir değer olduğunu belirtmemiz gerekir. Bu belirtme işlemini kullanıcı.isim (objeAdı.erişilmekİstenilenDeğer) şeklinde tanımlayabildiğimiz gibi this anahtar kelimesiyle de yapabiliriz. this.isim şeklinde

  kişiTanıtım: function () {
    document.write(
      "Kullanıcı adı: ",
      this.isim,
      "<br>",
      "Kullanıcı soyadı: ",
      this.soyisim,
      "<br>",
    );
  },
};

document.write(kullanıcı, "<br>"); // javascript obje tabanlı olduğundan bir objeyi ekrana yansıtamaz.

// objeye erişmek için kullanılır.
console.log(kullanıcı);

// obje içerisinde bir key değerine erişme 2 yöntem bulunmaktadır.

// obje içerisindeki bir key değerine erişmek için objeAdı.key kullanılabilir.
console.log(kullanıcı.isim);
console.log(kullanıcı.soyisim);

// obje içerisindeki bir key değerine erişmek için objeAdı["keyİsmi"] kullanılabilir.
console.log("Kullanıcının soyismi", kullanıcı["soyisim"]);
console.log(kullanıcı.adres);
console.log(kullanıcı.hobiler);

// obje içerisinde tanımlanmış bir array(dizi) içerisindeki bir değere erişmek istenirse diziAdı[index] değeri yazılır.
console.log(kullanıcı.hobiler[3]);

kullanıcı.kişiTanıtım();

// özetle objeler içerisinde key-value değer çiftleri halinde değerler tutmak için kullanılan javascript yapısıdır. Bu yapı sayesinde düzdnli kod yazar ve birden fazla değerin bir arada yönetilmesini sağlarız.
