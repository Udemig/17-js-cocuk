// JavaScript Koşullu Yapılar
// 1) if - else Koşulu

// if-else ile javascript'te karar yapıları oluşturuyoruz. Ör: yaşı 18'den büyük olanların ehliyet alabilir. 18'den küçük olanların ise ehliyet alamaz şeklinde bir koşul oluşturmak istersek if-else kullanırız.

// if(yaş > 18) {
// document.write("Ehliyet alabilir.", "<br>");
// } else {
// document.write("Ehliyet alamaz");
// } ==> şeklinde kullanılır. if anahtar kelimesinden sonra () içerisine koşul yazılır. Ardından {} içerisine koşuluk gerçekleşme durumunda ne işlem yapılacağı yazılır. else kısmında ise koşulun gerçekleşmemesi durumunda ne yapılacağı yazılır.

var yaş = 16;

if (yaş > 18) {
  document.write("Ehliyet alabilir.", "<br>");
} else {
  document.write("Ehliyet alamaz", "<br>");
}

// TODO bir öğrencinin ortalaması 50'den büyükse "geçtiniz" değilse "kaldınız" çıktısı veren bir koşul yazınız.

var ortalama = 70;

if (ortalama > 50) {
  document.write("geçti", "<br>");
} else {
  document.write("kaldi", "<br>");
}

var yaş = 19;

if (yaş > 20) {
  document.write("Ehliyet alabilir.", "</br>");
} else {
  document.write("Ehliyet alamaz.", "</br>");
}

// Birden fazla koşullu yapılar oluşturmak için ilk if bloğundan sonra her bir koşul için "else if" kullanılır. Sonunda koşul içinse "else" kullanılır

var notOrtalama = 85;

if (notOrtalama < 50) {
  document.write("Kaldınız", "</br>");
} else if (notOrtalama >= 50 && notOrtalama < 65) {
  document.write("Geçtiniz ama belge alamadınız", "</br>");
} else if (notOrtalama >= 65 && notOrtalama < 85) {
  document.write("Tebrikler.. Teşekkür belgesi aldınız", "</br>");
} else {
  document.write("Tebrikler. Takdir belgesi aldınız", "</br>");
}

// 2) Switch - case Koşulu
// Bu koşul yapısı javascript'te bir ifadenin sahip olduğu değerlere göre işlem yapmamızı sağlar

// Ör: Kurs Kodu 1 ise frontend, 2 ise Backend, 3 ise Mobile ve 4 ise İngilizce yazdıralım

var kursKodu = 110;

switch (kursKodu) {
  case 1:
    document.write("Frontend Kursu", "<br>");
    break;

  case 2:
    document.write("Backend Kursu", "<br> ");
    break;

  case 3:
    document.write("Mobile Kursu", "<br> ");
    break;

  case 4:
    document.write("İngilizce Kursu", "<br> ");
    break;

  default:
    document.write("Tanımlanmamış Kurs", "<br> ");
}

// Switch case yapısında koşula bağlı değil değişkenin durumuna bağlı bir yapı oluşturduk. switch anahtar kelimesinden sonra () içerisine değişkenimizi verdik. Ardından {} içerisinde değişkenin alabileceği değerler üzerinde "case" ler oluşturduk. her case' in sonuna break anahtar kelimesini ekledik. Bu sayede case gerçekleştikten sonra diğer case'lerin okunmasına gerek yok çalışmayı durdur demiş olduk.

// haftagün adında bir değişken tanımalayın. Değişkenin alacağı değer hangi güne denk geliyorsa ekrana o günün ismini yazdırın.

// switch case yapısında tanımladığımız durumlar haricinde bir durum oluşması durumunda default anahtar kelimesini kullanırız ve kullanıcıya belirlenen durum dışında bir değer girdiğini bildiririz.

var haftagün = 30;

switch (haftagün) {
  case 1:
    document.write("Pazartesi", "<br>");
    break;
  case 2:
    document.write("Salı", "<br>");
    break;
  case 3:
    document.write("Çarşamba", "<br>");
    break;
  case 4:
    document.write("Perşembe", "<br>");
    break;
  case 5:
    document.write("Cuma", "<br>");
    break;
  case 6:
    document.write("Cumartesi", "<br>");
    break;
  case 7:
    document.write("Pazar", "<br>");
    break;
  default:
    document.write("Tanımsız Değer", "<br>");
}

// DOM ( Document Object Modal) Manipülasyonları

// JavaScript'te HTML arayüzündeki elemanlara erişip elemanlar üzerinde manipülasyon yapmamızı sağlar

// Bir elemana js erişmek ve müdahalede bulunmak için o elemanı js e çekmemiz gerekir.

// ? 1) TagName üzerinde etiketlerine göre erişmek
// Html'de tanımlanan bir tag'e JavaScript'te erişmek için document.getElementsByTagName("tagName") şeklinde erişip bir değişkene atıyoruz.

var başlık1 = document.getElementsByTagName("h1");
// console.log(başlık1);

var başlık2 = document.getElementsByTagName("a");
// console.log(başlık2);

// ? 2) className üzerinden erişmek

// HTML elemanlarına JavaScript'te erişmenin bir diğer yöntemi className üzerinden erişmek. document.getElementsByClassName("class-adı") şeklinde tanımlanır.

var başlık3 = document.getElementsByClassName("title-1");
// console.log(başlık3);

// ? 3) Id üzerinden erişmek
// HTML elemanlarına JS'te erişmenin bir diğer yolu Id üzerinden erişme
// document.getElementById() parantez içerisine id değeri yazılarak çağırılır.

var başlık4 = document.getElementById("title-2");
// console.log(başlık4);

// ? 4) querySelector()

// var text = document.querySelector("p"); etiket ismi üzerinden
// var text = document.querySelector(".title-1"); className üzerinden
var text = document.querySelector("#prg");
// console.log(text);

// Html elemanına js üzerinden still özellikleri verme

// text.style.backgroundColor = "red";
// text.style.fontSize = "30px";
// text.style.padding = "10px";
// text.style.borderRadius = "20px";

// HTML'den Js'e çekilen bir elemana yukarıda da görüldüğü gibi still özellikleri verebiliriz. Fakat hem otomatik tamamlamanın olmaması hem yazım tarzında farklıların bulunması haricinde daha temiz ve okunabilir kod yazmak istediğimizden ayrıca stillendirmelerin css içinde dinamik özelliklerin js içinde olmasını istediğimizden kısaca kod karmaşasının olmasını istemediğimizden js'de stillendirme yapmıyoruz.

// Fakat css'de tanımlanan stillendirmeyi bir html elemanına js'te ekleyebiliriz.

// Burada HTML'den eriştiğimiz p etiketini text değişkenine atadık. Ardından classList.add diyerek css düzenlemelerinin bulunduğu class ismini p etiketine ekledik.

// class ismini kaldırmak için ise classList.remove() özelliğini kullandık.

text.classList.add("paragraf");

text.classList.remove("paragraf");

var addStyleBtn = document.querySelector(".add-style");
var wrapper = document.querySelector("#prg");

addStyleBtn.addEventListener("click", function () {
  wrapper.classList.toggle("example");
  console.log(wrapper);
});
