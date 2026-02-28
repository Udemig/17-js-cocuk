var getUsersBtn = document.querySelector("#getUsers");
var getRecipesBtn = document.querySelector("#getRecipes");

// API Nedir ?
// API (Application Programming Interface) farklı yazılımların birbiriyle iletişim kurmasını sağlayan kurallar ve araçlar bütünüdür. Geliştirmekte olduğumuz örnek olarak alışveriş sitesi projesi için bu projede kullanacağımız ürünleri tek tek oluşturmak yerine bu tarz verilerin saklandığı internet sitelerine istek alarak verileri alırız. Bu sayede projeyi geliştirirken ürünleri oluşturmak için harcayacağımız zamandan tasarruf etmiş oluruz.

// Api'lar sayesinde server'da tutalan verilere erişebiliriz. Api'lar temelde 2 kısımdan oluştur.
// 1. Kısım baseUrl         ==> Api'ın temel kısmıdır.

// 2. Kısım endpoint        ==> Api'ın verileri tutmak için özelleştirilmiş uç noktalarııdır.

// baseUrl ve endpoint'e örnek verecek olursak  baseUrl alışveriş yapmak için gittiğimiz market iken, endpoint'ler market içerisindeki reyonlar diyebiliriz.

// fetch ==> Api'dan verileri almamızı sağlayan metottur. Bu metot () içerisine "" arasında istek atılacak api'ın yazılmasını ister.
// fetch ile istek atıldıktan sonra yapılacak işlemler için fetch() sonra .then(() => {}) metotu kullanılır.

// api'da veriler json formatında saklanır. İstek attığımızda gelen veri json formatında olduğu için okuyamayız. Bunu engellemek için ise gelen cevabı .json() metodu ile js formatına çeviririz.

// fetch("https://dummyjson.com/products") // api'ya istek at
//   .then((response) => response.json()) // api'dan gelen veriyi json veri formatından javascript formatına çevir

//   .then((data) => console.log(data)); // Javascript formatına çevirilmiş olan veriyi console'a yazdır

// Tarif Verilerini Al
getRecipesBtn.addEventListener("click", () => {
  fetch("https://dummyjson.com/recipes")
    .then((response) => response.json())
    .then((recipe) => console.log("Tarif Verileri", recipe));
});

// Kullanıcı Verilerini al
getUsersBtn.addEventListener("click", getUsers);

function getUsers() {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((users) => console.log("Kullanıcı Verileri", users));
}

// Api'dan verileri alırken eğer bu işlemi uygun bir şekilde yapmazsak bu noktada veri alamayız. Uygun sekilden kastımız asenkron şekilde api işlemi yapmaktır.

// Senkron aynı anda gerçekleşen demektir. Javascript kodları aksi söylenmediği sürece senkron çalışır. Fakat api istekleri asenkron olmak zorundadır.

// Api işlemleri asenkron yapılmalıdır. Çünkü bu işlemler internet hızı backend kısmındaki yoğunluk, json dan js dönüşüm ... gibi işlem ve sebeplere bağlı olarak uzamaktadır.

// Api işlemlerini genellikle fonksiyon içerisinde yöneteceğiz ve javascript fonksiyonları aksi söylenmedikçe senkrondur. Bir fonksiyonu asenkron yapabilmek için fonksiyonu tanımlarken "async" ibaresini kullanmamız gerekir. (async function verileriAl(){} örneğindeki gibi) Bu ibareden sonra fonksiyon içerisinde nerede asenkron yönetim sergilemek istersek o kısımda "await" dememiz yeterli. Api'a istek atarken await denilmesi bu fonksiyonu veri gelene kadar bekle demektir. Bu bekleme sayesinde api'dan verileri alırız. Verileri aldıktan sonra gelen veriyi JSON formatından JavaScript formatına çevirmemiz gerektiğinden dolayı burada da bu işlemi beklemesi gerektiğini söylemek için "await" kullandık.

async function verileriAl() {
  // api'a istek at
  var yanit = await fetch("https://dummyjson.com/products");

  // api'dan gelen veriyi javascript'de kullanabileceğimiz formata çevirelim
  var veri = await yanit.json();

  //   js'e çevirilen veriyi yazdır
  console.log("ürünler: ", veri);
}

verileriAl();

async function veriAl() {
  // Tek bir ürün için istek at
  var data = await fetch("https://dummyjson.com/products/30");

  // gelen veriyi JS'e çevir
  var urun = await data.json();

  console.log("tek bir ürün: ", urun);
}

veriAl();
