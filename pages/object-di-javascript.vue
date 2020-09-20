<template>
  <section>
    <rg-heading-content
      title="Pengenalan object di Javascript"
      sub-title="30 Mei 2017" />

    <div class="container mx-auto xl:pb-24 pb-12 xl:px-64 md:px-24 px-4">
      <article
        class="xl:pb-12 pb-6 prose xl:prose-xl sm:prose-sm md:prose-lg"
        style="max-width: none;">
        <figure>
          <img src="~/static/images/blog_thumbnails/object-di-javascript.webp" alt="Photo from Unplash">
        </figure>
        <p>
          Kita tentu familiar dengan konsep OOP yang dimiliki oleh beberapa pemrograman seperti Java dan C#. Di JavaScript juga memiliki konsep object yang hampir mirip dengan OOP. Hal terpenting dan fundamental dari tipe data pada JavaScript adalah tipe data Object. Selain tipe data Object, JavaScript juga memiliki lima jenis tipe data lain (tipe data primitif): Number, String, Boolean, Undefined, dan Null. Perbedaannya adalah tipe data primitif bersifat <code>immutable</code>, sedangkan Object bersifat <code>mutable</code>. Untuk lebih jelasnya mengenai immutable dan mutable, klik di <a href="https://www.sitepoint.com/immutability-javascript/" target="_blank" rel="noopener">sini</a>.
        </p>
        <h2>Apakah object itu?</h2>
        <p>
          Object adalah kumpulan atau list dari tipe data primitif (bisa juga tipe data reference, seperti array). Tiap item dari list tersebut disebut property, sedangkan fungsi disebut method.
        </p>
        <p>
          Contoh object sederhana:
        </p>
        <pre><code class="javascript" v-highlight>var myFirstObject = {
  firstName : “Richard”,
  favoriteAuthor : “Conrad”
}</code></pre>
        <p>
          Dari contoh tersebut, <code>firstName</code> dan <code>favoriteAuthor</code> disebut dengan property, dan nilainya adalah “Richard” dan “Conrad”.
        </p>
        <p>
          Property dari object dapat berupa string atau number, tapi jika properti tersebut berupa number, maka properti tersebut dapat diakses dengan kurung siku. Berikut adalah contohnya.
        </p>
        <pre><code class="javascript" v-highlight>var ageGroup = {
  30: "Children",
  100: "Very Old"
}
console.log(ageGroup.30) // Error

console.log(ageGroup["30"]); // “Children”</code></pre>
        <p>
          Sebagai javascript developer, kita akan sering menggunakan tipe data object, khususnya pada saat menyimpan data dan untuk membuat method atau function.
        </p>
        <h2>Reference data type dan primitive data type</h2>
        <p>
          Perbedaan utama antara tipe data reference dan primitf adalah metode penyimpanan datanya. Tipe data reference tidak menyimpan datanya secara langsung pada variabel, tetapi disimpan sebagai reference. Tipe data reference akan menyimpan alamat dari variabel yang menampung nilai tersebut.
        </p>
        <pre><code class="javascript" v-highlight>// Tipe data primitif string menyimpan data
var person = "Kobe";
var anotherPerson = person; // anotherPerson = nilai dari variabel person
person = "Bryant"; // nilai dari variabel person berubah

console.log(anotherPerson); // ”Kobe”
console.log(person); // “Bryant”</code></pre>
        <p>
          Bandingkan dengan cara penyimpanan data pada tipe data reference.
        </p>
        <pre><code class="javascript" v-highlight>var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name); // “Bryant”
console.log(person.name); // “Bryant”</code></pre>
        <p>
          Pada contoh tersebut, variabel <code>anotherPerson</code> diisi dinisialisasi dengan variabel <code>person</code>. Karena nilai pada variabel <code>person</code> disimpan berupa reference dan bukan nilai aktualnya, maka ketika property <code>person.name</code> diubah menjadi “Bryant”, <code>anotherPerson</code> juga ikut berubah. Hal tersebut karena variabel <code>anotherPerson</code> tidak berisi nilai aktual, melainkan reference atau alamat dari <code>person</code>. Lain lagi jika variabel <code>anotherPerson</code> diinisialisasi dengan property <code>person.name</code>.
        </p>
        <h2>Creating objects</h2>
        <p>Terdapat dua cara umum untuk membuat object.</p>
        <ol>
          <li>
            Object literals
            <p>
              Cara paling umum dan, tentu saja, cara paling mudah untuk membuat object adalah dengan mendefinisikan nama property dan method secara langsung.
            </p>
            <pre><code class="javascript" v-highlight>// Object kosong
var myBooks = {}

// Object dengan 4 item
var banana = {
  color: "yellow",
  shape: "round",
  sweetness: 8,

  howSweetAmI: function () {
    console.log("Hmm Hmm Keren");
  }
}</code></pre>
          </li>
          <li>Object Constructor
            <p>
              Cara umum lainnya untuk membuat object adalah dengan metode ini. Constructor adalah fungsi yang digunakan untuk menginisialisasi object baru (new objects), dan kita bisa menggunakan keyword “new” untuk memanggil constructor. Cara ini cukup familiar dengan bahasa pemrograman berbasis OOP lainnya.
            </p>
              <pre><code class="javascript" v-highlight>var mango =  new Object ();

mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;

mango.howSweetAmI = function () {
  console.log("Hmm Hmm Keren");
}</code></pre>
          </li>
        </ol>
        <p>
          Object dapat berisi tipe data lainnya, termasuk Numbers, Arrays, dan bahkan Object itu sendiri.
        </p>
        <h2>Practical pattern dalam pembuatan object</h2>
        <p>
          Untuk object sederhana yang mungkin hanya digunakan sekali pada aplikasi, kedua metode di atas sudah cukup untuk membuat object.
        </p>
        <p>
          Bayangkan jika kita memiliki sebuah aplikasi untuk menampilkan buah-buahan beserta detail informasinya. Semua object buah pada aplikasi kita memiliki beberapa property: <code>color</code>, <code>shape</code>, <code>sweetness</code>, <code>cost</code>, dan method <code>showName</code>. Akan sangat melelahkan untuk mengetik atau membuat ulang object tersebut tiap kali kita ingin membuat object buah baru.
        </p>
        <pre><code class="javascript" v-highlight>var mangoFruit = {
  color: "yellow",
  sweetness: 8,
  fruitName: "Mango",
  nativeToLand: ["South America", "Central America"],

  showName: function() {
    console.log("This is " + this.fruitName);
  },
  nativeTo: function() {
    this.nativeToLand.forEach(function (eachCountry) {
      console.log("Grown in:" + eachCountry);
    });
  }
}</code></pre>
        <p>
          Kode di atas adalah contoh membuat satu object buah. Jika kita memiliki 10 buah, kita akan menulis kode yang sama sebanyak 10 kali. Dan bagaimana jika ada perubahan di method <code>nativeTo</code>? kita harus menulis perubahan tersebut di 10 tempat yang berbeda. Cara seperti itu bukanlah cara yang ideal untuk membuat object, terutama saat mengembangkan aplikasi skala besar.
        </p>
        <p>
          Untuk memecahkan masalah itu, para software engineer telah menemukan pola (solusi) untuk membuat aplikasi yang lebih efisien.
        </p>
        <p>
          Terdapat dua pola umum untuk membuat object.
        </p>
        <ol>
          <li>
            Pola constructor
            <pre><code class="javascript" v-highlight>function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {
  this.color = theColor;
  this.sweetness = theSweetness;
  this.fruitName = theFruitName;
  this.nativeToLand = theNativeToLand;

  this.showName = function() {
    console.log("This is a " + this.fruitName);
  }

  this.nativeTo = function() {
    this.nativeToLand.forEach(function(eachCountry)  {
      console.log("Grown in:" + eachCountry);
    });
  }
}</code></pre>
            <p>
              Dengan pola seperti di atas, akan sangat mudah untuk membuat semua object buah yang diinginkan. Dapat dilakukan seperti:
            </p>
            <pre><code class="javascript" v-highlight>var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // “This is a Mango”.
mangoFruit.nativeTo();
// “Grown in:South America”
// “Grown in:Central America”
// “Grown in:West Africa”

var pineappleFruit = new Fruit("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // “This is a Pineapple”.</code></pre>
            <p>
              Jika kita ingin mengubah method <code>fruitName</code>, kita hanya perlu mengubah di satu lokasi saja. Dengan pola ini, kita cukup membuat satu membuat object <code>Fruit</code> dengan keyword <code>new</code> yang telah berisi semua fungsionalitas dari fungsi <code>Fruit</code> yang sudah didefinisikan sebelumnya.
            </p>
          </li>
          <li>
            Pola prototype
            <pre><code class="javascript" v-highlight>function Fruit() {}

Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function() {
  console.log("This is a " + this.fruitName);
}

Fruit.prototype.nativeTo = function() {
  console.log("Grown in:" + this.nativeToLand);
}</code></pre>
            <p>
              Dengan pola seperti di atas, berikut adalah cara kita memanggil constructor object <code>Fruit</code>.
            </p>
            <pre><code class="javascript" v-highlight>var mangoFruit = new Fruit();
mangoFruit.showName();
mangoFruit.nativeTo();
// “This is a Generic Fruit”
// “Grown in:USA”</code></pre>
          </li>
        </ol>
        <h2>
          Cara mengakses properties pada object
        </h2>
        <p>
          Dua cara utama untuk mengakses properties dari object adalah dengan menggunakan dot notation dan bracket notation.
        </p>
        <ul>
          <li>
            Dot notation
            <pre><code class="javascript" v-highlight>// Pada bagian pertama sudah diberikan contoh mengenai dot notation. Berikut adalah contoh lengkapnya:
var book = {title: "Ways to Go", pages: 280, bookMark1:"Page 20"};

// Lakukan ini untuk mengakses properties object menggunakan dot notation:
console.log(book.title); // “Ways to Go”
console.log(book.pages); // “280”</code></pre>
          </li>
          <li>
            Bracket notation
            <pre><code class="javascript" v-highlight>// Untuk mengakses object menggunakan bracket notation, berikut adalah contohnya:
console.log(book["title"]); // “Ways to Go”
console.log(book["pages"]); // “280”

// Atau, kita bisa memasukkan nama property ke variabel:
var bookTitle = "title";
console.log(book[bookTitle]); // “Ways to Go”
console.log(book["bookMark" + 1]); // “Page 20”</code></pre>
          </li>
        </ul>
        <p>
          Mengakses property dari object yang tidak ada akan menghasilkan <code>undefined</code>.
        </p>
        <h2>Own dan inherited properties</h2>
        <p>
          object memiliki inherited properties dan own properties. Own properties adalah propertiy yang didefinisikan di dalam object, sedangkan inherited properties adalah property yang didapatkan dari Prototype object.
        </p>
        <p>
          Untuk mencari tahu apakah suatu property itu terdapat pada object atau tidak (baik inherited atau own properties), kita bisa menggunakan operator in.
        </p>
        <pre><code class="javascript" v-highlight>// Buat object school dengan property schoolName
var school = {schoolName: "MIT"};

// “true”, karena property schoolName terdapat pada object
console.log("schoolName" in school); // “true”

// “false”, karena tidak terdapat property schoolType, baik itu own ataupun inherited properties.
console.log("schoolType" in school);  // “false”

// “true”, karena property toString termasuk inherited proeprties dari Object.prototype.
console.log("toString" in school);  // “true”</code></pre>
        <h2>hasOwnProperty</h2>
        <p>
          Untuk mencari tahu apakah object tersebut memiliki suatu spesifik property atau tidak, kita dapat menggunakan method <code>hasOwnProperty</code>. Method ini sangar berguna karena dari waktu ke waktu kita butuh untuk memilah isi dari object dan kita hanya butuh own properties, bukan yang inherited.
        </p>
        <pre><code class="javascript" v-highlight>// Buat object school dengan property schoolName
var school = {schoolName: "MIT"};

// “true”, karena property schoolName terdapat pada object
console.log(school.hasOwnProperty("schoolName"));  // “true“

// “false”, karena object school memiliki inherited properties toString, sedangkan toString bukan own properties.
console.log(school.hasOwnProperty("toString"));  // “false“</code></pre>
        <h2>Mengakses dan memilah properties pada object</h2>
        <p>
          Untuk mengakses enumerable (own dan inherited) properties pada object, kita bisa menggunakan looping for/in atau hanya looping for.
        </p>
        <pre><code class="javascript" v-highlight>// Buat object school dengan 3 own properties: schoolName, schoolAccredited, and schoolLocation.
var school = {schoolName: "MIT", schoolAccredited: true, schoolLocation: "Massachusetts"};

// Menggunakan looping for/in untuk mengakses proeprties pada object school.
for (var eachItem in school) {
   console.log(eachItem); // “schoolName”, “schoolAccredited”, “schoolLocation”
}</code></pre>
        <h2>Mengakses inherited properties</h2>
        <p>
          Inherited properties yang dari <code>Object.prototype</code> tidak termasuk enumerable, jadi looping for/in tidak akan ditampilkan. Namun, inherited properties yang enumerable dapat ditampilkan melalui looping for/in.
        </p>
        <pre><code class="javascript" v-highlight>/// Membuat fungsi baru HigherLearning.
function HigherLearning() {
  this.educationLevel = "University";
}

// Implementasi inheritance dengan HigherLearning constructor
var school = new HigherLearning();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";


// Menggunakan looping for/in untuk mengakses properties dari object.
for (var eachItem in school) {
  console.log(eachItem); // “educationLevel”, “schoolName”, “schoolAccredited”, dan “schoolLocation”
}</code></pre>
        <h2>Menghapus properties dari object</h2>
        <p>
          Untuk menghapus property dari object, kita bisa menggunakan operator <code>delete</code>. Inherited properties tidak dapat dihapus. kita harus menghapus inherited properties dari prototype object. Juga, kita tidak dapat menghapus properties dari object global, yang mana dideklarasikan dengan keyword <code>var</code>.
        </p>
        <p>
          Operator <code>delete</code> memiliki return <code>true</code> jika berhasil menghapus. Dan herannya, operator <code>delete</code> juga menghasilkan return <code>true</code> jika property yang di hapus tidak ada atau property tersebut tidak bisa dihapus (seperti property yang non-configurable)
        </p>
        <pre><code class="javascript" v-highlight>var christmasList = {mike: "Book", jason: "sweater"}
delete christmasList.mike; // property mike terhapus

for (var people in christmasList) {
  console.log(people);
}
// “jason”
// property mike sudah terhapus</code></pre>
        <h2>Object serialize dan deserialize</h2>
        <p>
          Untuk mengirim object melalui HTTP atau untuk mengkonversi menjadi string, kita butuh untuk melakukan serialize (konversi object menjadi string) dengan fungsi <code>JSON.stringify</code>. Sebelum ECMAScript 5, kita harus menyertakan json2 library untuk mendapatkan fungsi <code>JSON.stringify</code>.
        </p>
        <p>
          Untuk melakukan deserialize pada object (konversi dari string menjadi object), kamu bisa menggunakan fungsi <code>JSON.parse</code>.
        </p>
        <pre><code class="javascript" v-highlight>var christmasList = {mike: "Book", jason: "sweater", chelsea: "iPad"}
JSON.stringify(christmasList);
// "{"mike":"Book","jason":"sweater","chels":"iPad"}"  

// Untuk mencetak string object dengan format, tambahkan “null” dan “4” sebagai parameter.
JSON.stringify (christmasList, null, 4);
/* "{
    "mike": "Book",
    "jason": "sweater",
    "chels": "iPad"
}" */

// Contoh JSON.parse
var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

// Konversi menjadi object
var christmasListObj = JSON.parse(christmasListStr);

// Sekarang object dapat diakses menggunakan dot notation
console.log(christmasListObj.mike); // Book</code></pre>
      </article>
      <rg-label label="object"/>
      <rg-label label="javascript"/>
      <rg-label label="tutorial javascript"/>
      <rg-label label="array"/>
      <rg-label label="data type"/>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Pengenalan object di Javascript | Rizal Asrul Pambudi',
    meta: [
      {
        name: 'keywords',
        content: 'object, javascript, tutorial javascript, array, data type, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Di JavaScript juga memiliki konsep object yang hampir mirip dengan OOP. Hal terpenting dan fundamental dari tipe data pada JavaScript adalah tipe data Object'
      },
      { property: 'og:url', content: 'https://rizalasrul.com/object-di-javascript' },
      {
        property: 'og:site_name',
        content: 'Pengenalan object di Javascript | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Pengenalan object di Javascript | Rizal Asrul Pambudi`,
      },
      {
        property: 'og:description',
        content: 'Di JavaScript juga memiliki konsep object yang hampir mirip dengan OOP. Hal terpenting dan fundamental dari tipe data pada JavaScript adalah tipe data Object',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/meta/object-di-javascript.png',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com/object-di-javascript' }],
  },
};
</script>
