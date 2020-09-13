<template>
  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
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
