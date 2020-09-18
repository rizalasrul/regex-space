<template>
  <section>
    <rg-heading-content
      title="Tulisan"
      sub-title="Bringing personal experience into writing" />

    <div class="container mx-auto">
      <div class="xl:px-64 md:px-24">
        <div class="flex flex-wrap">
          <rg-card-blog
            v-for="blog in blogs"
            v-if="blog.is_active"
            :key="blog.id"
            :slug="`/${blog.formated_title}`"
            :image-thumbnail="blog.formated_title"
            :title="blog.title"
            :publish-date="blog.publish_date" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from '~/static/data/blogs.json';

export default {
  name: 'Homepage',
  head: {
    title: `Rizal Asrul Pambudi - What's on my mind?`,
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
        content: `Rizal Asrul Pambudi - What's on my mind?`,
      },
      {
        property: 'og:description',
        content: 'Segala sesuatu yang ada di kepala Rizal Asrul Pambudi: tulisan, tutorial, dan pengalaman.',
      },
      {
        property: 'og:image',
        content: 'https://rizalasrul.com/images/site_thumbnails/home.png',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://rizalasrul.com' }],
  },
  asyncData ({ params }) {
    return { blogs };
  },
};
</script>
