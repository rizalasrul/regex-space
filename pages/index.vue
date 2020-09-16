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
import blogs from '~/static/data/blogs.json'

export default {
  name: 'Homepage',
  asyncData ({ params }) {
    return { blogs };
  },
};
</script>
