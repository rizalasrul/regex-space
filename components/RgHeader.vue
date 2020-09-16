<template>
  <nav class="w-full relative flex flex-wrap items-center justify-between px-2 xl:py-24 py-12 navbar-expand-lg bg-red-500">
    <div class="container px-12 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <a class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
          RIZALASRUL
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()">
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </button>
      </div>
      <div
        :class="{'hidden': !isMenuShow, 'flex': isMenuShow}"
        class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li
            :class="{'bg-white': isMenuActivated('')}"
            class="nav-item">
            <nuxt-link
              :class="{'text-red-600': isMenuActivated('')}"
              to="/"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">HOME</nuxt-link>
          </li>
          <li
            :class="{'bg-white': isMenuActivated('now')}"
            class="nav-item">
            <nuxt-link
              :class="{'text-red-600': isMenuActivated('now')}"
              to="/now"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
              #NOW
            </nuxt-link>
          </li>
          <li
            :class="{'bg-white': isMenuActivated('me')}"
            class="nav-item">
            <nuxt-link
              :class="{'text-red-600': isMenuActivated('me')}"
              to="/me"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
              ABOUT
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RgHeader',
  data: () => ({
    isMenuShow: false,
  }),
  methods: {
    toggleNavbar(){
      this.isMenuShow = !this.isMenuShow;
    },
    isMenuActivated(route) {
      return `/${route}` === this.$route.path;
    },
  },
};
</script>
