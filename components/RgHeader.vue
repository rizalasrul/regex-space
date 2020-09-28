<template>
  <nav
    style="background-color: #16213e;"
    class="w-full relative flex flex-wrap items-center justify-between px-2 xl:py-24 py-12 navbar-expand-lg">
    <div class="container px-12 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
        <span class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
          RIZALASRUL
        </span>
        <button
          aria-label="show-hide-menu"
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()">
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </button>
      </div>
      <div
        :class="{'hidden': !isMenuShow, 'flex': isMenuShow}"
        class="md:flex md:flex-grow items-center">
        <ul class="flex flex-col md:flex-row list-none md:ml-auto">
          <li
            :class="{'bg-white': isMenuActivated('')}"
            class="nav-item">
            <nuxt-link
              :style="isMenuTabActive(isMenuActivated(''))"
              to="/"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">HOME</nuxt-link>
          </li>
          <li
            :class="{'bg-white': isMenuActivated('yuk-belajar')}"
            class="nav-item">
            <nuxt-link
              :style="isMenuTabActive(isMenuActivated('yuk-belajar'))"
              to="/yuk-belajar"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
              YUK BELAJAR
            </nuxt-link>
          </li>
          <li
            :class="{'bg-white': isMenuActivated('now')}"
            class="nav-item">
            <nuxt-link
              :style="isMenuTabActive(isMenuActivated('now'))"
              to="/now"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
              #NOW
            </nuxt-link>
          </li>
          <li
            :class="{'bg-white': isMenuActivated('me')}"
            class="nav-item">
            <nuxt-link
              :style="isMenuTabActive(isMenuActivated('me'))"
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
    isMenuTabActive(isActive) {
      if (isActive) return 'color: #16213e;';
      return '';
    },
  },
};
</script>
