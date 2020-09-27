<template>
  <div
    style="background-color: #0f3460;"
    class="flex max-w-full lg:max-w-xs p-4 w-full rounded">
    <ul
      class="flex flex-col w-full"
      style="height:360px; overflow:auto;">
      <li class="my-px">
        <span class="flex font-medium text-sm text-white px-4 my-4 uppercase">
          MATERI
        </span>
      </li>
      <li v-for="menu in menus" :key="menu.slug" class="my-px">
        <a
          :href="`#${menu.slug}`"
          :class="{'bg-blue-800': menu.isActive, 'text-white': menu.isUnlock, 'text-gray-600 cursor-not-allowed': !menu.isUnlock}"
          class="flex flex-row items-center h-12 px-4 rounded-lg"
          v-on="!menu.isUnlock ? {} : { click: () => $emit('menuClicked', menu.slug) }">
          <span class="text-sm">{{ menu.label }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RgMenuBar',
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>
