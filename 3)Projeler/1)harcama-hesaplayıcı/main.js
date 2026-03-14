// Bu projede kullanıcı arayüzde bulunan formu gönderdiğinde form içerisinde yer alan harcama ismi ve harcama miktarını alıp bu değer ile arayüzde dinamik şekilde bir harcama kartı render etmeliyiz.

// Bu işlemleri yapabilmek için ilk olarak arayüzdeki formun gönderilmesini izlememiz gerekir. Çünkü formun içindeki değerler olmadan arayüzde harcama kartı render edemeyiz.Devamında render edilen harcama kartı üzerinde bulunan sil ikonuna tıklanınca harcama kartını silebilmek için bu sil ikonuna tıklanma durumunu izlememiz gerekecek. Javascript'te bu izleme olaylarını "addEventListener" ile yapıyorduk. Bu yöntemi kullanabilmek içinse ilk olarak html elemanlarını js kısmına çekmemiz gerekir. Html'den js'e eleman çekmek için DOM seçicilerini(getElementByTagName, getElementByClassName, getElementById, querySelector) kullanırız.

// 1. Js'e html elemanlarını çek
var form = document.querySelector("form");
var expenseList = document.querySelector(".expense-list");

// 2. Erişilen Formun gönderilmesini izle
form.addEventListener("submit", function (event) {
  // formlar gönderildiğinde default olarak sayfayı yeniler. Bu durumda sayfa yenilendikçe formun içerisindeki değerlere erişemeyiz. Sayfa yenilendiğinden dolayı. Bunu engellemek için preventDefault() metodu kullanırız.
  event.preventDefault();

  //   form gönderildiğinde fonksiyona parametre olarak geçilen event içerisinde bu olay ile alakalı değerler bulunur. bunlardan biride "target" tır. event.target ile bu olayı tetikleyen html elemanına (form) eriştikten sonra erişilen eleman içerisindeki inputlara erişebildik.

  var expenseName = event.target[0].value;
  var expensePrice = event.target[1].value;

  //   3. Formun gönderilmesi ile erişilen expenseName ve expensePrice değerleirni kullanarak bir harcama kartı oluştur

  // Js kısmında dinamik bir şekilde html elemanı oluşturmak için document objesi içerisinde bulunan createElement() metodunu kullanılır. () içerisine oluşturmak istenilen html elemeanın tag adı yazılır.

  var expenseDiv = document.createElement("div");

  //   4. oluşturulan boş div e class ataması yap ve html içeriğini belirle

  //   class ismi eklemek için add, class ismini kaldırmak için remove, class ismi yoksa ekle, varsa class ismini kaldır işlemi yapmak için ise toggle

  expenseDiv.classList.add("expense-card");

  // 5.  Js te bir elemanın html içeriğini belirlemek için elemanAdı.innterHTML metodu kullanılır. Eğer bu içeriği dinamik hale getirmek istiyorsak `` içerisinde ${} ile yaparız.

  expenseDiv.innerHTML = `
  
        <h3>${expenseName}</h3>

        <h4>${expensePrice} TL</h4>

        <img class="delete-icon" src="./assets/trash.png" alt="trash-icon" />
  `;

  //   Bir elemanı dinamik halde arayüze yansıtmak için eklenecek elemanın kapsayıcısına erişmemiz gerekir. Erişildikten sonra ise .appendChild() metodu ile arayüze eklemek istediğimiz elemanı () içerisine yazarız

  expenseList.appendChild(expenseDiv);

  //   6. Form içeriğini sıfırlamak için değerlere boş string ataması yaptık.
  event.target[0].value = "";
  event.target[1].value = "";

  console.log(expenseDiv);
});

expenseList.addEventListener("click", function (event) {
  // Tıklanılan noktaya event içerisinde bulunan target ile erişebiliriz. Fakat bizi bu alandaki sadece sil ikonu üzerinde gerçekleşen tıklamalar ilgilendiriyor. Yani bizim silme işlemi yaparken fonksiyona dememiz gereken "eğer sil ikonuna tıklanıldıysa işlemi gerçekleştir"

  if (event.target.classList.contains("delete-icon")) {
    // Bu koşulla delete-icon classına sahip bir elemana tıklanıldıysa bu anı izleyebiliyoruz. Erişiilen bu delete-icon classına sahip elemanı kapsayıcı olan expense-card classlı elemana erişmeli akabinde bunu ekrandan kaldırmalıyız. Bunun için parentElement methodunu kaldırma işlemi yapcağımız için .remove() metodunu kullandık.
    event.target.parentElement.remove();
  }
  console.log(event);
});
