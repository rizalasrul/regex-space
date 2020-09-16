<template>
  <section>
    <div class="mx-auto px-4 py-10 xl:px-24 md:px-12 xl:py-24">
      <center>
        <div class="flex flex-wrap justify-center pb-4">
          <div class="w-48">
            <img src="~/static/me.jpeg" alt="Rizal Asrul Illustration" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none">
          </div>
        </div>
        <div>
          <h2 class="font-semibold text-lg md:text-3xl text-gray-700">Tentang RIZALASRUL</h2>
          <hr class="xl:w-2/5" style="
            margin-top: 10px;
            margin-bottom: 10px;
            border: 1px solid #c3c3c3;
            ">
          <p class="text-gray-600 text-md md:text-lg">
            Halo semuanya, saya Rizal Asrul Pambudi, seorang software engineer yang fokus dibagian layar depan (frontend). Saat ini saya juga menjadi bagian dari tim engineering di Bukalapak.
          </p>
          <p class="text-gray-600 text-md md:text-lg">
            Jika kamu ingin berjejaring dengan saya, silakan colek saya di salah satu tautan yang ada di footer situs ini.
          </p>
        </div>
      </center>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MePage',
  head: {
    title: 'Siapakah Rizal Asrul Pambudi?',
    meta: [
      {
        name: 'keywords',
        content: 'about, software engineering, frontend engineer, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Rizal Asrul Pambudi adalah seorang software engineer.'
      },
      { property: 'og:url', content: 'https://rizalasrul.netlify.app/me' },
      {
        property: 'og:site_name',
        content: 'About | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Siapakah Rizal Asrul Pambudi?`,
      },
      {
        property: 'og:description',
        content: 'Rizal Asrul Pambudi adalah seorang software engineer.',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.netlify.app/me' }],
  },
};
</script>
