<template>
  <nuxt-link
    :to="slug"
    class="w-full lg:w-4/12 px-4 xl:mb-24 mb-8"
    style="text-decoration: none;">
    <div
      class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full xl:mb-6 mb-4 shadow-lg rounded-lg"
      style="transition: all 0.15s ease 0s;">
      <img
        :alt="title"
        :src="`images/blog_thumbnails/${imageThumbnail}.webp`"
        class="align-middle border-none max-w-full h-auto rounded-lg" />
    </div>
    <h5 class="font-semibold text-md xl:text-xl text-gray-700">{{ title }}</h5>
    <h6 class="text-red-600 text-xs xl:text-sm">{{ publishDate }}</h6>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RgCardBlog',
  props: {
    slug: {
      type: String,
      required: true,
    },
    imageThumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
  },
};
</script>
