// DOM Manipülasyonaları (Document Object Model)

// var text = document.getElementsByTagName("h1");
// var text2 = document.getElementsByClassName("text");
// var text3 = document.getElementById("text3");

// var paragraf = document.querySelector("p");

// Html elemanları javascript'te erişmek için 3 farklı yöntem bulunur. Bu elemanlara tagName üzerinden className üzerinde ve ıd üzerinden erişebildiğimizden bahsettik. Ayrıca bu yöntemler haricinde genel olarak querySelector ile istek tag name ister class name istersekde id üzerinden erişebiliyorduk.

// ? DOM Olay İzleyicileri

// 1) Click Olay izleyicisi

// Js'de bir elemana bir olayın gerçekleşmesini istediğimizde addEventListener() methodunuzu kullanırız. Bu method bizden 2 değer ister. İlk değerimiz olay türüdür. Bu örneğimizde "click". ikinci değer ise tıklanma olayı gerçekleştiğinde nasıl bir işlem yapılmasını istediğimizi belirttiğimiz alandır.

var alertBtn = document.querySelector("#give-alert");

alertBtn.addEventListener("click", function () {
  alert("Butona tıklandı");
});

// 2) Drag izleyicisi

var dragBtn = document.querySelector("#drag-btn");

dragBtn.addEventListener("dragstart", function () {
  console.log("Drag işlemi başladı");
});

dragBtn.addEventListener("dragend", function () {
  console.log("Drag işlemi bitti");
});

// tema değiştirme örneği

var themeBtn = document.querySelector(".theme-btn");
var exampleDiv = document.querySelector("#example-wrapper");

// bir html elemanına bir class eklemek istediğimizde classList() özelliğini kullanırız.

// class eklemek istediğimizde classList.add() methodunu kaldırmak istediğimizde ise classList.remove() methodunu kullanırız.

// Fakat aynı butona hem ekleme hemde kaldırma işlemi yaptırmak istediğimizde bu yöntemlerin çalışmadığını gördük.

// Bu gibi durumlarda bir butona hem ekleme hemde kaldırma islemi yaptırmak istediğimizde add veya remove özelliklerini değil toggle özelliğini kullanmamız gerekir.

// toggle ile bir html elemanına class eklemek istediğimizde ilk tıklamada o class ekler. İkinci tıklamada ise o classı kaldırır. Yani toggle özelliği ile class ismi varsa kaldır yoksa ekle işlemi yaptırmış olduk.
themeBtn.addEventListener("click", function () {
  exampleDiv.classList.toggle("bg-color");
});

// Form Olay İzleyicisi
var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Sayfa yenilemeyi engeller

  //   dışarıdan aldığımız event ile input içerisindeki değerlere event.target[].value ile eriştik ve console yazdırdık.
  console.log(event.target[0].value);
  console.log(event.target[1].value);

  //   form gönderildikten sonra inputların içeriğini temizlemek için "" ataması yaptık.
  event.target[0].value = "";
  event.target[1].value = "";
});

// Kapsayıcı içerisine html elemanı ekleme
var createDiv = document.querySelector("#create-div");
var container = document.querySelector(".kapsayıcı");

createDiv.addEventListener("click", function () {
  // createElement() metodu ile yeni bir html elemanı oluşturduk. Parantez içerisine oluşturmak istediğimiz html elementinin adını yazarız.
  var newDiv = document.createElement("div");

  //innterHTML özelliği ile yeni oluşturduğumuz div elementinin içerisini belirledik.
  newDiv.innerHTML = "Yeni Div";

  //   classLiist.add() metodu ile yeni oluşturduğumuz ve içeriğini belirlediğimiz div elementinin css dosyasında belirlediğimiz stillendirmeleri alması için class ekledik.
  newDiv.classList.add("new-eleman");

  //   appendChild() metodu ile yeni oluşturup içeriğini belirlediğimiz stillendirmelerini yaptığımız elementi kapsayıcısı içerisine ekledik.
  container.appendChild(newDiv);
});

var resimKapsayıcısı = document.querySelector(".resim-kapsayıcısı");

resimKapsayıcısı.innerHTML = "<img src='https://picsum.photos/300/300' />";

// innterHTML özelliği ile html de oluşturduğumuz resim kapsayıcısı isimli div elementi içerisine JavaScript ile görsel ekledik. Görsel eklemek için öncelikle kapsayıcı elementimize querySelector ile eriştik ve bir değişkene atadık. Ardından bu element içerisine görsel eklemek istediğimiz için inntrHTML özelliğini kullanarak img ekledik. Bu sayede JavaScript ile html elementine eleman eklemiş olduk.
