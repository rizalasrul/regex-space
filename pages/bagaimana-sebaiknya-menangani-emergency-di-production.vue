<template>
  <section>
    <rg-heading-content
      title="Bagaimana sebaiknya menangani emergency di production"
      sub-title="12 Januari 2020" />

    <div class="container mx-auto xl:pb-24 pb-12 xl:px-64 md:px-24 px-4">
      <article
        class="xl:pb-12 pb-6 prose xl:prose-xl sm:prose-sm md:prose-lg"
        style="max-width: none;">
        <figure>
          <img src="~/static/images/blog_thumbnails/bagaimana-sebaiknya-menangani-emergency-di-production.webp" alt="Photo by Dawn Armfield on Unsplash">
        </figure>
        <blockquote>
          <p>People make mistakes. But from mistakes, we learn and grow.</p>
        </blockquote>
        <p>
          Kita sudah berusaha sangat keras untuk menyelesaikan task, tetapi kadang-kadang masih ada beberapa hal yang kelewat selama development dan menyebabkan dampak besar di production.
        </p>
        <p>
          Dan hal seperti itu memang tidak dapat dihindari. Yang bisa kita lakukan hanyalah harus menghadapinya dan bertanggung jawab.
        </p>
        <p>
          Saya ingat beberapa bulan setelah masuk Bukalapak pernah bikin bug yang menyebabkan dampak cukup besar. Pada saat itu saya bikin fitur transaksi rutin di halaman <a href="https://www.bukalapak.com/listrik-pln/tagihan-listrik" target="_blank">tagihan listrik pascabayar</a>. Pull request sudah di tes di local ataupun staging, dan aman-aman saja. Ketika rollout ke production pun fitur tersebut berjalan sangat baik.
        </p>
        <p>
          Akan tetapi bug muncul dari pembayaran <a href="http://bukalapak.com/listrik-pln/token-listrik" target="_blank">token listrik</a> yang memang berada di halaman yang sama dengan pembayaran tagihan listrik.
        </p>
        <p>
          Hal itu terjadi karena ketika development, saya tidak sadar kalau modul dan kode untuk halaman pembayaran tagihan listrik pascabayar itu jadi satu dengan halaman pembayaran token listrik. Saya hanya tes fitur tagihan listrik pascabayar dan mengabaikan fitur token listrik.
        </p>
        <p>
          Dampaknya, di hari itu pelanggan Bukalapak tidak dapat melakukan pembayaran token listrik di platform desktop web.
        </p>
        <p>
          Dari peristiwa tersebut saya belajar beberapa panduan sederhana ketika terjadi emergency.
        </p>
        <h2>Be relax</h2>
        <figure>
          <img
            src="~/static/images/blog_contains/bagaimana-sebaiknya-menangani-emergency-di-production-1.webp"
            alt="Photo by Vicky Gu on Unsplash">
          <figcaption>Photo by <a href="https://unsplash.com/@vickygu" target="_blank">Vicky Gu</a> on <a href="https://unsplash.com/photos/x_HpmxR_uZo" target="_blank">Unsplash</a></figcaption>
        </figure>
        <p>
          Hal pertama yang perlu dilakukan adalah santai dan tidak tergesa-gesa.
        </p>
        <p>
          Kita mungkin berpikir bahwa kita harus bertindak sesegera mungkin untuk menyelesaikan insiden. Tetapi jika kita terburu-buru, justru dapat memperburuk keadaan. Jauh lebih bijaksana untuk menghindar dari membuat lebih banyak kesalahan dengan merencanakan langkah yang lebih hati-hati. Coba untuk tarik nafas, atau mungkin sruput kopi yang ada di depan kita, baru kemudian bekerja dengan tenang.
        </p>
        <h2>Koordinasi dengan squad atau tim</h2>
        <figure>
          <img
            src="~/static/images/blog_contains/bagaimana-sebaiknya-menangani-emergency-di-production-2.webp"
            alt="Photo by Alex Kotliarskyi on Unsplash">
          <figcaption>Photo by <a href="https://unsplash.com/@frantic" target="_blank">Alex Kotliarskyi</a> on <a href="https://unsplash.com/photos/QBpZGqEMsKg" target="_blank">Unsplash</a></figcaption>
        </figure>
        <blockquote>
          <p>Sometimes your emergency is not really an emergency.</p>
        </blockquote>
        <p>
          Product manager (atau mungkin project manager) kita kemungkinan besar sudah mengetahui situasinya, dan seharusnya mereka sedang menghitung dampak dari situasi emergency tersebut. Tetapi jika PM kita belum tahu, maka kita harus segera memberitahukan situasinya.
        </p>
        <p>
          Kita dapat langsung mengeksekusi solusi yang sudah kita koding secara langsung. jika solusinya cuman butuh sedikit perubahan baris kode dan cepat. Tetapi jika kita belum tahu bagaimana cara menyelesaikannya, dan mungkin butuh perbaikan yang cukup besar, sebaiknya kita menunggu arahan dari PM kita.
        </p>
        <p>
          Jika bug yang kita buat tersebut bukan termasuk ke dalam situasi emergency, Kita bisa ambil waktu yang cukup lama untuk menentukan solusi yang lebih baik untuk jangka panjang. Tetapi jika bug tersebut termasuk emergency dan butuh deployment sesegera mungkin, koordinasikan dengan lead yang ada di tim kita.
        </p>
        <p>
          Kalau di Bukalapak, kami memiliki <i>production issue levels & SLAs</i>. Parameter yang digunakan adalah <i>daily GMV impact</i> dan <i>daily revenue impact</i>.
        </p>
        <h2>Test our code intensively</h2>
        <p>
          Meskipun kita berada di situasi emergency, kita selalu punya waktu untuk melakukan testing. Tes perubahan kode yang kita buat berkali-kali. Lakukan tes di semua environment, baik itu local, staging, atau bahkan preproduction. Atau jika diperlukan, kita bisa melakukan tes di production beta.
        </p>
        <p>
          Jangan ragu untuk meminta bantuan rekan QA atau test engineer di tim kita. Mereka pasti sangat senang membantu.
        </p>
        <p>
          Sangat direkomendasikan untuk menambahkan unit test di setiap perubahan kode kita. Intinya, lakukan tes berkali-kali hingga kita cukup percaya diri untuk melakukan deployment.
        </p>
        <h2>Jangan ragu bertanya kepada yang lebih senior</h2>
        <p>
          Jika tim atau squad kita tidak dapat membantu mencari solusi, kita selalu bisa untuk bertanya dan meminta bantuan ke tim lain (atau tim core jika ada) yang menurut kita bisa memberikan solusi.
        </p>
        <h2>Pastikan kode yang sudah kita deploy berjalan dengan baik</h2>
        <p>
          Kita pasti sudah sangat percaya diri dengan solusi yang sudah kita pakai. Tapi, selalu cek kembali setelah deployment apakah kode yang kita tulis benar-benar berjalan dengan baik di production. Jika diperlukan, kita dapat minta tolong ke lead kita untuk memantau production metrics apakah sudah aman atau belum.
        </p>
        <h2>Learn and share our experience</h2>
        <figure>
          <img
            src="~/static/images/blog_contains/bagaimana-sebaiknya-menangani-emergency-di-production-3.webp"
            alt="Photo by Mimi Thian on Unsplash">
          <figcaption>Photo by <a href="https://unsplash.com/@mimithian" target="_blank">Mimi Thian</a> on Unsplash</figcaption>
        </figure>
        <p>
          Mendapatkan pelajaran dari situasi emergency adalah satu hal. Tetapi berbagi mengenai pengalaman yang di dapat dari emergency tersebut adalah hal lain.
        </p>
        <p>
          Tidak perlu malu untuk sharing mengenai pengalaman emergency yang menimpa kita, karena hal itu termasuk dari proses pembelajaran. Tidak harus formal, minimal kita bisa berbagi via group chat, atau ketika meeting, atau bahkan melalui dokumentasi yang kita buat.
        </p>
        <p>
          Dengan berbagi, kita sudah membantu engineer lain untuk tidak jatuh di lubang yang sama. Kesalahan yang kita buat bisa menjadi sumber pembelajaran yang sangat berharga bagi rekan kita.
        </p>
      </article>
      <rg-label label="emergency"/>
      <rg-label label="deployment"/>
      <rg-label label="software engineering"/>
      <rg-label label="testing"/>
      <rg-label label="solving"/>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Bagaimana sebaiknya menangani emergency di production | Rizal Asrul Pambudi',
    meta: [
      {
        name: 'keywords',
        content: 'emergency, deployment, software engineering, testing, solving, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Kalau tidak mau ada risiko, masalah, atau bug di production, cukup tidak perlu deploy apa-apa ke production. Accept that incident will happen, this is just part of the innovation.'
      },
      { property: 'og:url', content: 'https://rizalasrul.netlify.app/bagaimana-sebaiknya-menangani-emergency-di-production' },
      {
        property: 'og:site_name',
        content: 'Bagaimana sebaiknya menangani emergency di production | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Bagaimana sebaiknya menangani emergency di production | Rizal Asrul Pambudi`,
      },
      {
        property: 'og:description',
        content: 'Kalau tidak mau ada risiko, masalah, atau bug di production, cukup tidak perlu deploy apa-apa ke production. Accept that incident will happen, this is just part of the innovation.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.netlify.app/images/blog_thumbnails/bagaimana-sebaiknya-menangani-emergency-di-production.webp',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.netlify.app/bagaimana-sebaiknya-menangani-emergency-di-production' }],
  },
};
</script>
