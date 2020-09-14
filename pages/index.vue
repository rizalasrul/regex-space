<template>
  <section>
    <div class="mx-auto pt-24 px-24 py-24">
      <center>
        <div>
          <h2 class="font-semibold text-3xl text-gray-700">Tulisan</h2>
          <hr class="w-2/5" style="
            margin-top: 10px;
            margin-bottom: 10px;
            border: 1px solid #c3c3c3;
            ">
          <p class="text-gray-600 text-lg">Bringing personal experience into writing</p>
        </div>
      </center>
    </div>

    <div class="container mx-auto">
      <div class="px-64">
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
