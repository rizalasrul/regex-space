<template>
  <section style="background-color: #1a1a2e;">
    <rg-heading-content
      title="Unit Testing di Javascript"
      sub-title="Belajar mengenai konsep unit testing dan dasar-dasar unit testing di javascript" />
    <div class="flex flex-wrap md:px-24 mx-auto px-4 xl:px-64 mb-4">
      <div class="mb-4 w-full xl:mb-0 xl:w-3/4">
        <div
          style="background-color: #0f3460;"
          class="flex flex-wrap justify-center xl:mr-4">
          <div class="p-4 rounded">
            <img
              :src="`/images/yuk_belajar/unit_testing_di_js/${activeCourse.image_thumbnail}`"
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
import courses from '~/static/data/unit_testing_di_javascript.js';

export default {
  name: 'UnitTestingDiJavascriptPage',
  head: {
    title: `Belajar Unit Testing di Javascript Indonesia by Rizal Asrul Pambudi`,
    meta: [
      {
        name: 'keywords',
        content: 'unit test, javascript, frontend, indonesia, jest, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Belajar unit testing di javascript berbahasa indonesia. Belajar mengenai konsep unit testing, membuat unit test sederhana, membuat mock function, hingga siklus red dan green.'
      },
      { property: 'og:url', content: 'https://rizalasrul.com/yuk-belajar/unit-testing-di-javascript' },
      {
        property: 'og:site_name',
        content: 'Belajar Unit Testing di Javascript Bahasa Indonesia | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Belajar Unit Testing di Javascript Indonesia by Rizal Asrul Pambudi`,
      },
      {
        property: 'og:description',
        content: 'Belajar unit testing di javascript berbahasa indonesia. Belajar mengenai konsep unit testing, membuat unit test sederhana, membuat mock function, hingga siklus red dan green.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/yuk_belajar/unit_testing_di_js/00.png',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com/yuk-belajar/unit-testing-di-javascript' }],
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
