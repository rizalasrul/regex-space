<template>
  <section>
    <rg-heading-content
      title="Vue.js 2 Dasar"
      sub-title="Belajar mengenai instalasi, Vue instance, data & methods, pengkondisian dan perulangan, serta eksperimen sederhana" />
    <div class="flex flex-wrap md:px-24 mx-auto px-4 xl:px-64 mb-4">
      <div class="mb-4 w-full xl:mb-0 xl:w-3/4">
        <div class="flex flex-wrap justify-center xl:mr-4">
          <div class="border-2 p-4 rounded">
            <img
              :src="`/images/yuk_belajar/vuejs_2/${activeCourse.image_thumbnail}`"
              :alt="activeCourse.label"
              class="shadow rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>
      </div>
      <div class="w-full xl:w-1/4">
        <rg-menu-bar :menus="courses" @menuClicked="activatedMenu"/>
      </div>
    </div>
    <div class="flex flex-wrap mx-auto xl:pb-24 pb-12 xl:px-64 md:px-24 px-4">
      <div class="xl:mb-4 xl:w-3/4 w-full">
<!--         <article
          class="mt-4 pb-12 prose prose-md"
          style="max-width: none;"
          v-html="activeCourse.content" /> -->
         <article
          class="mt-4 pb-12 prose prose-md"
          style="max-width: none;">
          <h1>Konsep two-way data binding</h1>
          <p>
            Singkatnya adalah setiap perubahan yang dilakukan terhadap data akan berpengaruh ke tampilan website, begitu pula sebaliknya. Contoh implementasinya dari sisi user bisa seperti ini.
          </p>
          <ol>
            <li>
              Ketika user memasukkan nama pada input teks, maka nilai dari nama yang dimasukkan tersebut akan tersimpan otomatis pada sebuah variabel.
            </li>
            <li>
              Ketika kita mengganti (secara koding) variabel yang menampung nama user tersebut, maka nilai nama pada input teks juga berubah.
            </li>
          </ol>
          <p>
            Setelah memahami konsep di atas, bisa saja kita membuat kode sendiri yang mendukung implementasi tersebut. Contohnya kita bikin logika supaya variabel <code>name</code> dan <code>age</code> akan selalu terisi oleh data yang diinputkan oleh user, yang dijalankan ketika user selesai mengetik. Seperti kode di bawah ini.
          </p>
        <pre><code class="html" v-highlight>&lt;!-- index.html --&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Belajar Vue.js&lt;/title&gt;
    &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id="vue-app"&gt;
      &lt;h1&gt;Keyboard Events&lt;/h1&gt;
      &lt;label&gt;Nama: &lt;/label&gt;
      &lt;input type="text" v-on:keyup="setName" /&gt;
      &lt;p&gt;Nama: {{ name ||&lt;/p&gt;
      &lt;label&gt;Umur: &lt;/label&gt;
      &lt;input type="text" v-on:keyup="setAge" /&gt;
      &lt;p&gt;Umur: {{ age ||&lt;/p&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <pre><code class="javascript" v-highlight>// app.js
new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: '',
  },
  methods: {
    setName: function(event) {
      this.name = event.target.value;
    },
    setAge: function(event) {
      this.age = event.target.value;
    },
  },
});</code></pre>
<h1>v-model</h1>
<p>
  Beruntungnya, Vue memiliki directive <code>v-model</code> untuk melakukan two-way binding. Pada contoh di atas, kita dapat mengganti logika tersebut menggunakan <code>v-model</code> menjadi seperti ini.
</p>
        <pre><code class="html" v-highlight>&lt;!-- index.html --&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Belajar Vue.js&lt;/title&gt;
    &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id="vue-app"&gt;
      &lt;h1&gt;Keyboard Events&lt;/h1&gt;
      &lt;label&gt;Nama: &lt;/label&gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;Nama: {{ name ||&lt;/p&gt;
      &lt;label&gt;Umur: &lt;/label&gt;
      &lt;input type="text" v-model="age" /&gt;
      &lt;p&gt;Umur: {{ age ||&lt;/p&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <pre><code class="javascript" v-highlight>// app.js
new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: '',
  },
  methods: {
  },
});</code></pre>
<p>
  Dengan menggunakan <code>v-model</code>, nilai yang dimasukkan oleh user pada input text nama akan otomatis disimpan oleh variabel <code>name</code>. Begitu pula yang terjadi terhadap input text umur.
</p>
<h1>v-model pada checkbox</h1>
<p>
Kali ini kita akan mencoba menerapkan <code>v-model</code> pada input dengan tipe checkbox. Contoh sederhananya seperti ini.
</p>
        <pre><code class="html" v-highlight>&lt;!-- index.html --&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Belajar Vue.js&lt;/title&gt;
    &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id="vue-app"&gt;
      &lt;h1&gt;Keyboard Events&lt;/h1&gt;
      &lt;label&gt;Apakah masih kuliah? &lt;/label&gt;
      &lt;input type="checkbox" v-model="isStudent" /&gt;
      &lt;p&gt;Nama: {{ isStudent ||&lt;/p&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <pre><code class="javascript" v-highlight>// app.js
new Vue({
  el: '#vue-app',
  data: {
    isStudent: false,
  },
  methods: {
  },
});</code></pre>
<p>
  Nilai umum pada checkbox hanya menerima nilai dengan tipe data boolean. Karena itulah nilai yang muncul pada tampilan adalah “true” atau “false”.
</p>
<figure>
          <img src="/images/yuk_belajar/vuejs_2/08-1.webp" alt="Hasil dari eksperimen" />
        </figure>
        <h1>v-model pada radio button</h1>
        <p>
          Berikut adalah contoh implementasi <code>v-model</code> pada radio button.
        </p>
        <pre><code class="html" v-highlight>&lt;!-- index.html --&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Belajar Vue.js&lt;/title&gt;
    &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id="vue-app"&gt;
      &lt;h1&gt;Keyboard Events&lt;/h1&gt;
      &lt;input type="radion" value="male" v-model="gender" /&gt;
      &lt;label&gt;Laki-laki&lt;/label&gt;
      &lt;input type="radion" value="female" v-model="gender" /&gt;
      &lt;label&gt;Wanita&lt;/label&gt;
      &lt;p&gt;Jenis kelamin: {{ gender ||&lt;/p&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <pre><code class="javascript" v-highlight>// app.js
new Vue({
  el: '#vue-app',
  data: {
    gender: '',
  },
  methods: {
  },
});</code></pre>
<p>
  Nilai dari <code>gender</code> akan sesuai dengan atribut <code>value</code> yang ada di radio button tersebut. Hasilnya dapat dilihat pada browser.
</p>
<figure>
          <img src="/images/yuk_belajar/vuejs_2/08-2.webp" alt="Hasil dari eksperimen" />
        </figure>
        <h1>Tahap selanjutnya</h1>
        <p>
          Saat ini kita sudah memahami mengenai konsep sederhana dari two-way data binding serta bagaimana cara menggunakan <code>v-model</code> pada berbagai macam input tag. Pada tulisan selanjutnya, kita akan membahas computed properties.
        </p>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import courses from '~/static/data/vuejs_2_dasar.json';

export default {
  name: 'Vuejs2DasarPage',
  head: {
    title: `Belajar Vue.js 2 Indonesia - Vue.js 2 Dasar by Rizal Asrul Pambudi`,
    meta: [
      {
        name: 'keywords',
        content: 'vuejs, tutorial, frontend, indonesia, javascript, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Tutorial Vue.js berbahasa Indonesia. Pada tutorial ini akan dibahas mulai dari installasi, Vue instance, two-way data binding, hingga latihan membuat website sederhana.'
      },
      { property: 'og:url', content: 'https://rizalasrul.com/yuk-belajar/vuejs-2-dasar' },
      {
        property: 'og:site_name',
        content: 'Vue.js 2 Tutorial Bahasa Indonesia | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Belajar Vue.js 2 Indonesia - Vue.js 2 Dasar by Rizal Asrul Pambudi`,
      },
      {
        property: 'og:description',
        content: 'Tutorial Vue.js berbahasa Indonesia. Pada tutorial ini akan dibahas mulai dari installasi, Vue instance, two-way data binding, hingga latihan membuat website sederhana.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/yuk_belajar/vuejs_2/00.png',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com/yuk-belajar/vuejs-2-dasar' }],
  },
  asyncData () {
    return { courses, activeCourse: courses[0] };
  },
  methods: {
    activatedMenu(slug) {
      this.courses.forEach(menu => {
        menu.isActive = false;
      });
      this.findActiveCourse(slug);
      this.activeCourse.isActive = true;
    },
    findActiveCourse(slug) {
      this.activeCourse = this.courses.find(course => course.slug === slug);
    },
  },
};
</script>
