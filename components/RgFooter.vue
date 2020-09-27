<template>
  <footer
    style="background-color: #0f3460;"
    class="relative pt-8 pb-6">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height:80px;transform:translateZ(0)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon
          style="color: #0f3460;"
          class="fill-current" points="2560 0 2560 100 0 100" />
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 px-4">
          <h4 class="xl:text-3xl text-xl font-semibold text-white">Let's keep in touch!</h4>
          <h5 class="text-sm xl:text-lg mt-0 mb-2 text-white">Find me on any of these platforms, I respond 1-2 business days.</h5>
        </div>
        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full md:w-6/12 xl:w-4/12 xl:pt-6 pt-3 md:pt-0 md:px-4 ml-auto">
              <span class="block uppercase text-white text-xs xl:text-sm font-semibold mb-2">My Links</span>
              <ul class="list-unstyled">
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://linkedin.com/in/rizalasrul" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://facebook.com/rizal.asrul" target="_blank" rel="noopener">Facebook</a></li>
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://instagram.com/rizalasrul" target="_blank" rel="noopener">Instagram</a></li>
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://medium.com/@rizalasrul" target="_blank" rel="noopener">Medium</a></li>
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://twitter.com/asrulole" target="_blank" rel="noopener">Twitter</a></li>
              </ul>
            </div>
            <div class="w-full md:w-6/12 xl:w-4/12 xl:pt-6 pt-3 md:pt-0 md:px-4 ml-auto">
              <span class="block uppercase text-white text-xs xl:text-sm font-semibold mb-2">Other Resources</span>
              <ul class="list-unstyled">
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://bukalapak.com/u/rizalasrulpambudi" target="_blank" rel="noopener">Bukalapak</a></li>
                <li><a style="color: #93c2db;" class="font-semibold block pb-2 text-sm xl:text-sm" href="https://www.ultrajaya.co.id" target="_blank" rel="noopener">Ultrajaya</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr
        class="my-6"
        style="
          border: 1px solid #16213e;
          "/>
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-xs xl:text-sm text-white font-semibold py-1">
            Copyright © 2020 by me
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RgFooter",
};
</script>
