<template>
  <section>
    <rg-heading-content
      title="What I’m doing #now"
      :sub-title="`Halaman ini terinspirasi dari halaman <a class='text-red-600' href='https://nownownow.com/about' target='_blank'>now</a>. Jika kamu punya situs sendiri, ayo buat juga.`" />

    <div class="container mx-auto xl:pb-24 pb-12 xl:px-64 md:px-24 px-4">
      <article class="xl:pb-12 pb-6 prose xl:prose-xl sm:prose-sm md:prose-lg" style="max-width: none;">
        <h2>Apa pekerjaan utama saya</h2>
        <p>
          Bekerja di Bukalapak sebagai Software Engineer, Frontend. Saya berada di tim Virtual Product yang bertanggung jawab untuk mengembangkan dan merawat produk-produk tagihan, seperti tagihan listrik pascabayar, air PDAM, kartu kredit, hingga pembayaran listrik non-taglis. Kuartal tiga lalu tim kami baru saja rilis produk BukaRumah yang bekerjasama dengan Bank Mandiri sebagai mitra penyedia properti. Jika kamu ingin mencobanya, silakan update aplikasi Bukalapaknya.
        </p>
        <h2>Hal lain yang saya kerjakan</h2>
        <p>
          Saya beberapa kali diajak untuk menjadi pembicara untuk webinar. Tahun ini sudah ada dua kali undangan untuk berbagi. Yang pertama adalah forum FGD yang diadakan oleh Prodi Teknik Informatika Politeknik Elektronika Negeri Surabaya. Dan juga pada bulan September 2020 saya diundang oleh Anak Teknik Academy untuk berbagi tentang teknologi Vue.js dalam pengembangan aplikasi berbasis website.
        </p>
        <p>
          Saya juga sedang lanjut menulis untuk membuat tutorial mengembangkan website menggunakan Vue.js bertajuk <a href="https://medium.com/vuejs-id/yuk-belajar-vue-js-2-pengenalan-1-a1348c98dc09" target="_blank">Yuk Belajar Vue.js 2</a>. Saat ini seriesnya baru ada di medium saya. Tapi saya sudah berencana untuk membuat satu website sendiri untuk menampung semua series tersebut. Kedepannya juga saya ingin membuat beberapa series lagi terkait beberapa teknologi website yang sedang saya pelajari.
        </p>
        <h2>Apa yang saya kerjakan diwaktu luang</h2>
        <p>
          Masih menghabiskan buku yang saya mulai baca pada awal tahun ini.
        </p>
        <figure>
          <img src="https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg" alt="Buku The Pragmatic Programmer 20th Anniversary Edition">
          <figcaption>Buku The Pragmatic Programmer 20th Anniversary Edition</figcaption>
        </figure>
        <p>
          Saya juga mulai rutin untuk lari minimal 3 km untuk tiap dua hari sekali pada sore hari.
        </p>
        <p>
          Saya akhir-akhir ini juga mulai bermain game lagi bersama teman-teman. Game yang kami mainkan adalah Among Us.
        </p>
        <h2>Tempat tinggal saat ini</h2>
        <p>
          Saat ini saya dan istri tinggal di Cinere, Depok, Jawa Barat.
        </p>
        <h4>Terakhir update: 13 September 2020</h4>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NowPage',
  head: {
    title: 'Apa yang Dilakukan Rizal Asrul Pambudi Sekarang?',
    meta: [
      {
        name: 'keywords',
        content: 'now, software engineering, frontend engineer, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Rizal Asrul Pambudi bekerja di Bukalapak, memiliki hobi menulis, dan terkadang juga bermain game.'
      },
      { property: 'og:url', content: 'https://rizalasrul.netlify.app/now' },
      {
        property: 'og:site_name',
        content: '#now | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Apa yang Dilakukan Rizal Asrul Pambudi Sekarang?`,
      },
      {
        property: 'og:description',
        content: 'Rizal Asrul Pambudi bekerja di Bukalapak, memiliki hobi menulis, dan terkadang juga bermain game.',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.netlify.app/now' }],
  },
};
</script>
