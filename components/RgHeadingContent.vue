<template>
  <div class="mx-auto px-4 py-10 md:px-24 xl:py-24">
    <center>
      <div>
        <h2 class="font-semibold text-lg md:text-3xl text-white">{{ title }}</h2>
        <hr class="md:w-2/5" style="
          margin-top: 10px;
          margin-bottom: 10px;
          border: 1px solid #16213e;
          ">
        <p class="text-white text-md md:text-lg" v-html="subTitle" />
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
