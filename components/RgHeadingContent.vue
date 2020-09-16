<template>
  <div class="mx-auto px-4 py-10 md:px-24 xl:py-24">
    <center>
      <div>
        <h2 class="font-semibold text-lg md:text-3xl text-gray-700">{{ title }}</h2>
        <hr class="md:w-2/5" style="
          margin-top: 10px;
          margin-bottom: 10px;
          border: 1px solid #c3c3c3;
          ">
        <p class="text-gray-600 text-md md:text-lg" v-html="subTitle" />
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: 'RgHeadingContent',
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
};
</script>
