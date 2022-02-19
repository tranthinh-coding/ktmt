<script>
export default {
  name: "App",
  setup() {
    return {};
  },
};
</script>
 
<template>
  <div class="bg-gray-100 min-h-screen pb-16 justify-center w-full relative">
    <div class="w-full pt-6 text-center">
      <router-link
        class="font-semibold text-xl underline mx-4"
        :to="{name: 'home', params: {}}"
      >Lý thuyết</router-link>
      <router-link
        class="font-semibold text-xl underline mx-4"
        :to="{name: 'xay-dung-bo-nho', params: {}}"
      >Xây dựng bộ nhớ</router-link>
      <router-link
        class="font-semibold text-xl underline mx-4"
        :to="{name: 'ty-so-cache', params: {}}"
      >Tỷ số cache</router-link>
      <router-link
        class="font-semibold text-xl underline mx-4"
        :to="{name: 'anh-xa-tap-hop', params: {}}"
      >Ánh xạ tập hợp</router-link>
      <router-link
        class="font-semibold text-xl underline mx-4"
        :to="{name: 'phan-trang', params: {}}"
      >Kỹ thuật phân trang</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <div class="text-center mt-20">Không dành cho mobile :v</div>
  </div>
</template> 

