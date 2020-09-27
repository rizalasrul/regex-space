<template>
  <section style="background-color: #1a1a2e;">
    <rg-heading-content
      title="Perjalanan belajar saya"
      sub-title="Beberapa hal yang saya pelajari di dunia teknologi" />

    <div class="container grid grid-cols-3 grid-cols-none xl:grid-cols-3 md:grid-cols-2 md:px-12 mx-auto pb-12 xl:grid-cols-3 xl:pb-24">
      <rg-card-class
        v-for="course in classes"
        :key="course.id"
        :slug="course.formated_title"
        :image-thumbnail="course.thumbnail"
        :title="course.title"
        :type="course.type"
        :is-new="course.is_new" />
    </div>
  </section>
</template>

<script>
import classes from '~/static/data/classes.json';

export default {
  name: 'ClassPage',
  head: {
    title: `Rizal Asrul Pambudi - Mari belajar bersama`,
    meta: [
      {
        name: 'keywords',
        content: 'course, tutorial, frontend, backend, javascript, rizal, asrul, pambudi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Ayo belajar teknologi bersama saya.'
      },
      { property: 'og:url', content: 'https://rizalasrul.com/yuk-belajar' },
      {
        property: 'og:site_name',
        content: 'Home | Rizal Asrul Pambudi',
      },
      {
        property: 'og:title',
        content: `Rizal Asrul Pambudi - Mari belajar bersama`,
      },
      {
        property: 'og:description',
        content: 'Ayo belajar teknologi bersama saya.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/site_thumbnails/yuk_belajar.png',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com/yuk-belajar' }],
  },
  asyncData ({ params }) {
    return { classes };
  },
};
</script>
