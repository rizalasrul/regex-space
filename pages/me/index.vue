<template lang="pug">
  div
    section(style='background-color:#1a1a2e;')
      .mx-auto.px-4.py-10(class='xl:px-24 md:px-12 xl:py-24')
        center
          .flex.flex-wrap.justify-center.pb-4
            .w-48
              img.shadow-lg.rounded-full.max-w-full.h-auto.align-middle.border-none(
                src='~/static/me.webp'
                alt='Rizal Asrul Illustration'
              )
          div
            h2.font-semibold.text-lg.text-white(class='md:text-3xl') Rizal Asrul Pambudi
            hr(class='xl:w-2/5' style='margin-top:10px;margin-bottom:10px;border:1px solid #16213e;')
            p.text-white.text-md(class='md:text-lg')
              | Saya adalah seorang software engineer yang fokus dibagian layar depan (frontend). Saat ini saya menjadi bagian dari tim engineering di Bukalapak.
            p.text-white.text-md(class='md:text-lg')
              | Jika kamu ingin berjejaring dengan saya, silakan colek saya di salah satu tautan yang ada di footer situs ini.

    section.pb-40.relative(style='background-color: #16213e;')
      .flex.flex-wrap.justify-center.mb-8.text-center
        .w-full.px-12.mt-8(class='md:w-6/12 md:px-4')
          h2.font-semibold.text-4xl.text-white Portofolio

      .container.mx-auto.px-4.pt-20.pb-20
        .items-center.flex.flex-wrap
          .w-full.ml-auto.px-12(class='md:w-5/12 md:px-4')
            div(class='md:pr-12')
              h3.text-3xl.font-semibold.text-white Pembayaran Premi Asuransi
              p.mt-4.text-lg.leading-relaxed.text-white
                | Bukalapak mengembangkan produk pembayaran premi asuransi untuk mempermudah pengguna dalam membayar tagihan asuransi mereka.
              ul.list-none.mt-6.text-white
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4.text-blue-300
                        a(href="https://www.bukalapak.com/bayar-premi-asuransi?referrer=rizalasrul.com?from=rizalasrul.com")
                          | https://bukalapak.com/bayar-premi-asuransi
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Vue, Node, Express, Go, Microfrontend
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Oktober 2020
          .w-full.mr-auto.px-4.pt-24(class='md:w-6/12 md:pt-0')
            img.max-w-full.rounded-lg.shadow-xl(
              alt='Tampilan Website Premi Asuransi Bukalapak'
              src='~/static/images/portfolio/premi-asuransi.webp'
              style='transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);'
            )

      .container.mx-auto.overflow-hidden.pb-40
        .flex.flex-wrap.items-center
          .w-full.px-12.ml-auto.mr-auto.mt-48(class='md:w-4/12 md:px-4')
            h3.text-3xl.mb-2.font-semibold.leading-normal.text-white Serambi Masjid
            p.mt-4.text-lg.leading-relaxed.text-white
              | Bukalapak mengembangkan SaaS untuk pengurus masjid supaya mempermudah mengumpulkan donasi dari para jama'ah masjidnya. Selain itu, pengurus masjid dapat dengan mudah melakukan pendataan terhadap jama'ahnya.
              ul.list-none.mt-6.text-white
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4.text-blue-300
                        a(href="https://serambimasjid.com")
                          | https://serambimasjid.com
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Vue, Ruby, Ruby on Rails
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Oktober 2020
          .w-full.px-4.mr-auto.ml-auto.mt-32(class='md:w-5/12')
            .relative.flex.flex-col.min-w-0.w-full.mb-6.mt-48(class='md:mt-0')
              img.w-full.align-middle.rounded-lg.absolute.shadow-lg(
                alt='...'
                src='~/static/images/portfolio/serambi-masjid-1.webp'
                style='max-width: 210px; left: 260px; top: -160px;'
              )
              img.w-full.align-middle.rounded-lg.absolute.shadow-lg(
                alt='...'
                src='~/static/images/portfolio/serambi-masjid-4.webp'
                style='max-width: 180px; left: 40px; top: -225px; z-index: 2;'
              )
              img.w-full.align-middle.rounded-lg.absolute.shadow-2xl(
                alt='...'
                src='~/static/images/portfolio/serambi-masjid-3.webp'
                style='max-width: 200px; left: -50px; top: 25px;'
              )

      .container.mx-auto.overflow-hidden.pb-40
        .flex.flex-wrap.items-center
          .w-full.px-12.ml-auto.mr-auto.mt-48(class='md:w-4/12 md:px-4')
            h3.text-3xl.mb-2.font-semibold.leading-normal.text-white BukaRumah
            p.mt-4.text-lg.leading-relaxed.text-white
              | Bukalapak bekerjasama dengan Bank Mandiri mengembangkan platform untuk pengajuan KPR secara online. Pengguna dapat melihat ribuan properti yang tersedia dari berbagai macam developer yang bermitra dengan Mandiri.
              ul.list-none.mt-6.text-white
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4
                        | Hanya dapat diakses di platform Android dan iOS.
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Vue, Node, Express, Go, Microfrontend
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Juni 2020
          .w-full.px-4.mr-auto.ml-auto.mt-32(class='md:w-5/12')
            .relative.flex.flex-col.min-w-0.w-full.mb-6.mt-48(class='md:mt-0')
              img.w-full.align-middle.rounded-lg.absolute.shadow-lg(
                alt='...'
                src='~/static/images/portfolio/bukarumah-1.webp'
                style='max-width: 210px; left: 260px; top: -160px;'
              )
              img.w-full.align-middle.rounded-lg.absolute.shadow-lg(
                alt='...'
                src='~/static/images/portfolio/bukarumah-2.webp'
                style='max-width: 180px; left: 40px; top: -225px; z-index: 2;'
              )
              img.w-full.align-middle.rounded-lg.absolute.shadow-2xl(
                alt='...'
                src='~/static/images/portfolio/bukarumah-3.webp'
                style='max-width: 200px; left: -50px; top: 25px;'
              )

      .container.mx-auto.px-4.pt-20.pb-20
        .items-center.flex.flex-wrap
          .w-full.ml-auto.px-12(class='md:w-5/12 md:px-4')
            div(class='md:pr-12')
              h3.text-3xl.font-semibold.text-white Pembayaran Add-on IndiHome
              p.mt-4.text-lg.leading-relaxed.text-white
                | Bukalapak mengembangkan produk pembayaran paket tambahan (add-on) IndiHome untuk mempermudah pengguna dalam membayar layanan tambahan dari IndiHome.
              ul.list-none.mt-6.text-white
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4.text-blue-300
                        a(href="https://www.bukalapak.com/addon-indihome?referrer=rizalasrul.com?from=rizalasrul.com")
                          | https://bukalapak.com/addon-indihome
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Vue, Node, Express, Go, Microfrontend
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Agustus 2019
          .w-full.mr-auto.px-4.pt-24(class='md:w-6/12 md:pt-0')
            img.max-w-full.rounded-lg.shadow-xl(
              alt='Tampilan Website Premi Asuransi Bukalapak'
              src='~/static/images/portfolio/addon-indihome.webp'
              style='transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);'
            )

      .container.mx-auto.px-4.pt-20.pb-20
        .items-center.flex.flex-wrap
          .w-full.ml-auto.px-12(class='md:w-5/12 md:px-4')
            div(class='md:pr-12')
              h3.text-3xl.font-semibold.text-white Pembayaran PLN Non-Taglis
              p.mt-4.text-lg.leading-relaxed.text-white
                | Bukalapak mengembangkan produk pembayaran listrik non-tagihan untuk mempermudah pengguna dalam membayar sambungan baru, perubahan daya, pemasangan kembali, serta pelayanan non-tagihan lainnya.
              ul.list-none.mt-6.text-white
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4.text-blue-300
                        a(href="https://www.bukalapak.com/listrik-pln/non-taglis?referrer=rizalasrul.com?from=rizalasrul.com")
                          | https://bukalapak.com/listrik-pln/non-taglis
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Vue, Node, Express, Go, Microfrontend
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Mei 2019
          .w-full.mr-auto.px-4.pt-24(class='md:w-6/12 md:pt-0')
            img.max-w-full.rounded-lg.shadow-xl(
              alt='Tampilan Website Premi Asuransi Bukalapak'
              src='~/static/images/portfolio/non-taglis.webp'
              style='transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);'
            )

      .container.mx-auto.px-4.pt-20.pb-20
        .items-center.flex.flex-wrap
          .w-full.ml-auto.px-12(class='md:w-5/12 md:px-4')
            div(class='md:pr-12')
              h3.text-3xl.font-semibold.text-white Pembayaran Tagihan Kartu Kredit
              p.mt-4.text-lg.leading-relaxed.text-white
                | Bukalapak mengembangkan produk pembayaran tagihan kartu kredit untuk mempermudah pengguna dalam membayar tagihan kartu kredit mereka.
              ul.list-none.mt-6.text-white
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4.text-blue-300
                        a(href="https://www.bukalapak.com/tagihan-kartu-kredit?referrer=rizalasrul.com?from=rizalasrul.com")
                          | https://bukalapak.com/tagihan-kartu-kredit
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Vue, Node, Express, Go, Microfrontend
                li.py-2
                  .flex.items-center
                    div
                      span.bg-gray-100.inline-block.mr-3.px-2.py-1.rounded-full.text-gray-600
                    div
                      h4 Mei 2019
          .w-full.mr-auto.px-4.pt-24(class='md:w-6/12 md:pt-0')
            img.max-w-full.rounded-lg.shadow-xl(
              alt='Tampilan Website Premi Asuransi Bukalapak'
              src='~/static/images/portfolio/tagihan-kartu-kredit.webp'
              style='transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);'
            )

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
      { property: 'og:url', content: 'https://rizalasrul.com/me' },
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
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/site_thumbnails/about.png',
      },

    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com/me' }],
  },
};
</script>
