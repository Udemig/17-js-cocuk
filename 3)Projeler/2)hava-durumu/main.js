// Html'den elemanları Js kısmına çek
var elements = {
  form: document.querySelector("form"),
  searchBtn: document.querySelector("#search-btn"),
  fullDate: document.querySelector(".full-date"),
  time: document.querySelector(".time"),
  city: document.querySelector(".city"),
  status: document.querySelector(".status"),
  img: document.querySelector(".icon img"),
  degree: document.querySelector(".degree span"),
  feel: document.querySelector(".feel"),
  hum: document.querySelector(".hum"),
  wind: document.querySelector(".wind"),
  sunrise: document.querySelector(".sunrise"),
  sunset: document.querySelector(".sunset"),
  max: document.querySelector(".max"),
  min: document.querySelector(".min"),
  locations: document.querySelector(".locations"),
};

// Form gönderildiğinde çalışacak fonksiyon
elements.form.addEventListener("submit", function (event) {
  // sayfa yenilenmesini engelle
  event.preventDefault();

  // inputa girilen şehir verisini al
  var city = event.target[0].value;

  getWeatherData(city);

  // Input içeriğini sıfırla
  event.target[0].value = "";
});

// Şehir adına göre api isteğini atan fonksiyon
function getWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10a6f00bc02227e6146dcaf43d4fe83d&units=metric`,
  )
    .then((res) => res.json())
    .then((data) => {
      renderUi(data);
      console.log(data);
    });
}

// Api'dan gelen veri ile arayüzü renderlayan fonksiyon
function renderUi(data) {
  // Şehir adını dinamik hale getir
  elements.city.textContent = data.name;

  // Hava durumunu dinamik hale getir
  elements.status.textContent = data.weather[0].main;

  // Hava durumu iconunu dinamik hale getir
  elements.img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // Sıcaklık değerini dinamik hale getir
  elements.degree.textContent = data.main.temp.toFixed(1) + "°";

  // Hissedilen sıcaklık verisini dinamik hale getir
  elements.feel.textContent = data.main.feels_like.toFixed(1) + "°";

  // Nem değerini dinamik hale getir
  elements.hum.textContent = data.main.humidity + "%";

  // Rüzgar verisini dinamik hale getir
  elements.wind.textContent = data.wind.speed + "km/h";

  // Güneşin doğuş, batış değerlerini dinamik hale getir
  elements.sunrise.textContent = new Date(
    data.sys.sunrise * 1000,
  ).toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });

  elements.sunset.textContent = new Date(
    data.sys.sunset * 1000,
  ).toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // en yüksek ve en düşük sıcaklık verisini dinamik hale getir
  elements.max.textContent = data.main.temp_max + "°";
  elements.min.textContent = data.main.temp_min + "°";
}

// Locations kısmındaki butonlara tıklanınca bu butonları içerisinde yazılı olan şehir için api isteği atan fonksiyon
elements.locations.addEventListener("click", function (event) {
  // Eğer butona tıklandıysa
  if (event.target.tagName === "BUTTON") {
    // tıklanılan butonun içerisindeki şehir verisini al
    var cityName = event.target.textContent;

    // Şehir. adına göre API isteği at
    getWeatherData(cityName);
  }
});

// Tarih kısımlarını dinamik hale getiren fonksiyon
function renderDynamicDate() {
  // Dinamik tarih verisine eriş
  var date = new Date();

  // Dinamik tarih verisine eriş
  var dynamicDate = date.toLocaleDateString("tr", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Dinamik saat verisine eriş
  var dynamicTime = date.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Arayüzdeki tarih ve saat kısımlarını dinamik hale getir
  elements.fullDate.textContent = "Tarih: " + dynamicDate;
  elements.time.textContent = "Saat: " + dynamicTime;
}

renderDynamicDate();
