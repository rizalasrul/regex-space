<template>
  <section>
    <rg-heading-content
      title="Mengapa tiap programmer harus mulai bloging"
      sub-title="27 Desember 2017" />

    <div class="container mx-auto xl:pb-24 pb-12 xl:px-64 md:px-24 px-4">
      <article
        class="xl:pb-12 pb-6 prose xl:prose-xl sm:prose-sm md:prose-lg"
        style="max-width: none;">
        <figure>
          <img
            src="~/static/images/blog_thumbnails/mengapa-tiap-programmer-harus-mulai-bloging.webp"
            alt="Technical writing untuk programmers">
          <figcaption>Technical writing untuk programmers</figcaption>
        </figure>
        <p>
          Hai! Ini adalah pengalaman pertama saya untuk menulis di situs saya sendiri. Untuk permulaan, saya tidak menulis tentang hal teknis. Saya akan mencoba menulis dengan salah satu kegelisahan saya, “setiap programmer harus menulis”, atau paling tidak memiliki sebuah blog. FYI, Saya sudah menulis di personal blog saya sebelumnya di <a href="https://medium.com/@rizalasrul" target="_blank" rel="noopener">sini</a>.
        </p>
        <blockquote>
          <p>Ikatlah ilmu dengan menulis (Imam Ali r.a.)</p>
        </blockquote>
        <h2>Mengapa bloging itu bermanfaat bagi programmer?</h2>
        <p>
          Menulis adalah salah satu dari banyak cara untuk membuat sebuah warisan dalam hidup, entah itu melalui buku, publikasi ilmiah, artikel online, atau bahkan tulisan di sosial media. Jika programmer menulis tentang teknologi backend, maka dia sudah membuat warisan di bidang backend development. Di era digital ini, blog adalah platform terbaik. Tiap orang dapat menulis di blog, karena kesederhanaannya.
        </p>
        <p>
          Sebagai programmer, kita belajar banyak teknologi, dan terkadang kita lupa tentang apa yang dulu pernah kita kuasai. Bayangkan jika kamu lupa tentang teknologi xxx, dan kamu googling dengan keyword “xxx tutorial”. Lalu yang muncul paling atas dari halaman google adalah sebuah artikel dari blog kamu yang telah kamu tulis beberapa tahun lalu. Secara tidak langsung, tulisanmu telah menyelamatkanmu, bukan?
        </p>
        <h2>Bloging membuat technical skills kita berkembang</h2>
        <p>
          Bloging sering memaksa kita untuk banyak melakukan eksperimen. Jika di real project kita sering memanipulasi array hanya dengan menggunakan sedikit built-in method, maka di blog kita mencoba untuk memanipulasi array secara mendalam dengan kondisi yang bermacam-macam. Karena kita tahu bahwa blog memiliki audien yang lebih luas dibanding dengan real project kita. Audien atau pembaca akan melihat kode yang kita tulis dan sedalam apakah kemampuan kita. Tulisan kita harus menjadi sesuatu yang dapat dipertanggungjawabkan.
        </p>
        <h2>Apakah kamu bosan dengan tutorial yang “itu-itu aja”? Tulis sesuatu yang fresh!</h2>
        <p>
          Pernahkan kamu stuck ketika sedang mengembangkan aplikasi website menggunakan rails atau golang, tetapi ketika kamu googling hasilnya hanya “<i>PHP tutorial</i>” atau “<i>web development using PHP</i>”? Tidak, saya tidak mengatakan bahwa PHP itu buruk. Hanya saja kita harus setuju bahwa tutorial tentang PHP sudah terlalu banyak. Bahkan tidak sedikit kampus yang masih mengajarkan PHP untuk mata kuliah web development. Jadi, jika kita sedang membuat sebuah proyek dengan teknologi yang anti-mainstream, maka itu adalah kesempatanmu untuk membuat tutorial tentang itu.
        </p>
        <h2>Akan selalu ada seseorang di luar sana yang baru belajar programming</h2>
        <p>
          Kita tidak harus mulai menulis dengan sesuatu yang baru atau hype. Kita dapat memulai dengan sesuatu yang mendasar, seperti variable, function, looping dan — sesuatu yang saya sebut — cool stuff (back to basic is cool stuff). Karena percayalah, akan selalu ada orang baru yang baru belajar pemrograman, dan mereka membutuhkan sesuatu yang mendasar.
        </p>
        <h2>Pencitraan untuk programmer</h2>
        <p>
          Seperti yang sudah saya katakan sebelumnya, konten dari blog kita dapat merepresentasikan skill atau pengetahuan kita. Faktanya, menulis adalah hasil dari pemikiran yang sudah kita konsep. Blog kita dapat memberikan kesempatan kepada orang lain untuk belajar. Melalui menulis, programmer bisa mendapatkan kesempatan baru seperti menjadi speaker di tech conference, atau menjadi trainer di beberapa workshop, atau bahkan dapat berkolaborasi dengan programmer lain. Keren, bukan!
        </p>
        <h2>Kesimpulan</h2>
        <p>
          Just do bloging, programmers.
        </p>
      </article>
      <rg-label label="programming"/>
      <rg-label label="technical writing"/>
      <rg-label label="bloging"/>
      <rg-label label="bloging tips"/>
      <rg-label label="first post"/>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Mengapa tiap programmer harus mulai bloging | Rizal Asrul Pambudi',
    meta: [
      {
        name: 'keywords',
        content: 'programming, technical writing, bloging, bloging tips, first post, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Akan selalu ada yang pertama, termasuk tulisan ini. Ingin tahu jawabannya? Klik aja tulisan ini.'
      },
      { property: 'og:url', content: 'https://rizalasrul.netlify.app/mengapa-tiap-programmer-harus-mulai-bloging' },
      {
        property: 'og:site_name',
        content: 'Mengapa tiap programmer harus mulai bloging | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Mengapa tiap programmer harus mulai bloging | Rizal Asrul Pambudi`,
      },
      {
        property: 'og:description',
        content: 'Akan selalu ada yang pertama, termasuk tulisan ini. Ingin tahu jawabannya? Klik aja tulisan ini.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.netlify.app/images/blog_thumbnails/mengapa-tiap-programmer-harus-mulai-bloging.webp',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.netlify.app/mengapa-tiap-programmer-harus-mulai-bloging' }],
  },
};
</script>
