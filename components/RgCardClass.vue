<template>
  <nuxt-link :to="slug" style="text-decoration: none;">
    <div class="col-span-4 flex flex-col items-center lg:col-span-1 md:col-span-2 sm:col-span-4 xl:col-span-1 mb-8">
      <div class="bg-white rounded-lg mt-5">
        <img
          :src="`/images/yuk_belajar/${imageThumbnail}`"
          alt="Vue.js 2 Dasar"
          class="h-40 rounded-md" />
        </div>
      <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
        <div class="py-5 px-5">
          <span class="font-bold text-gray-800 text-lg">{{ title }}</span>
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-600 font-light">{{ type }}</div>
            <div v-if="isNew" class="text-base text-red-600 font-bold">BARU</div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RgCardClass',
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
    type: {
      type: String,
      required: true,
    },
    isNew: {
      type: String,
      required: true,
    },
  },
};
</script>
