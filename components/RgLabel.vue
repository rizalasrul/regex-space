<template>
  <span
    style="background-color: #0f3460;"
    class="text-white text-xs font-semibold inline-block py-1 px-2 uppercase rounded uppercase last:mr-0 mr-1">
    {{ label }}
  </span>
</template>

<script>
export default {
  name: 'RgLabel',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
