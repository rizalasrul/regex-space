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
        <article
          class="mt-4 pb-12 prose prose-md"
          style="max-width: none;"
          v-html="activeCourse.content" />
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
      { property: 'og:url', content: 'https://rizalasrul.netlify.app/yuk-belajar/vuejs-2-dasar' },
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
        content: 'https://rizalasrul.netlify.app/images/yuk_belajar/vuejs_2/00.webp',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.netlify.app/yuk-belajar/vuejs-2-dasar' }],
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
