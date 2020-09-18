<template>
  <section>
    <rg-heading-content
      title="404 kamu berada di halaman yang salah"
      sub-title="Jangan bersedih dan berkecil hati. Kamu dapat memilih halaman lain, atau baca puisi karya Gus Mus favorit saya yang sungguh berhubungan dengan kondisi saat ini." />

    <div class="container mx-auto xl:pb-24 pb-12 xl:px-64 md:px-24 px-4">
      <article class="xl:pb-12 pb-6 prose xl:prose-xl sm:prose-sm md:prose-lg" style="max-width: none;">
        <p>
          Makkah sepi <br />
          Madinah sunyi <br />
          Kakbah dipagari <br />
          Masjid tutup <br />
          Jamaah bubar <br />
          Jumat batal <br />
          Umrah di stop <br />
          Haji tak pasti <br />
          Lafadz adzan berubah <br />
          Salaman dihindari <br />
        </p>
        <p>
          Corona datang <br />
          Seolah-olah membawa pesan <br />
          Ritual itu rapuh! <br />
        </p>
        <p>
          Ketika Corona datang <br />
          Engkau dipaksa mencari Tuhan <br />
          Bukan di tembok Kakbah <br />
          Bukan di dalam masjid <br />
          Bukan di mimbar khutbah <br />
          Bukan dalam thawaf <br />
          Bukan pada panggilan azan <br />
          Bukan dalam shalat jamaah <br />
          Bukan dengan jabat tangan <br />
        </p>
        <p>
          Melainkan, <br />
          Pada keterisolasianmu <br />
          Pada mulutmu yang terkunci <br />
          Pada hakikat yang tersembunyi <br />
        </p>
        <p>
          Corona mengajarimu, <br />
          Tuhan itu bukan (melulu) pada keramaian <br />
          Tuhan itu bukan (melulu) pada syariat <br />
          Tuhan itu ada pada jalan keterputusanmu <br />
          Dengan dunia yang berpenyakit <br />
        </p>
        <p>
          Corona memurnikan agama <br />
          Bahwa tak ada yang boleh tersisa <br />
          Kecuali Tuhan itu sendiri! <br />
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage',
  head: {
    title: `404`,
    meta: [
      {
        name: 'keywords',
        content: 'blogs, software engineering, frontend engineer, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Segala sesuatu yang ada di kepala Rizal Asrul Pambudi: tulisan, tutorial, dan pengalaman.'
      },
      { property: 'og:url', content: 'https://rizalasrul.com' },
      {
        property: 'og:site_name',
        content: 'Home | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `404`,
      },
      {
        property: 'og:description',
        content: 'Segala sesuatu yang ada di kepala Rizal Asrul Pambudi: tulisan, tutorial, dan pengalaman.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/site_thumbnails/home.webp',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com' }],
  },
};
</script>
