<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const mainMemory = ref(1);
    const typeMainMemory = ref(1);

    const cacheMemory = ref(1);
    const typeCacheMemory = ref(1);

    const line_block = ref(1);
    const typeLine_block = ref(0);

    const soDuongTapHop = ref(1);

    const converter = (option) => {
      return Math.pow(1024, option);
    };

    const result = computed(() => {
      const bytebn = mainMemory.value * converter(typeMainMemory.value);
      const byteCache = cacheMemory.value * converter(typeCacheMemory.value);

      const byteLine = line_block.value * converter(typeLine_block.value);

      const N = Math.log2(bytebn);
      const W = Math.log2(byteLine);
      const L = Math.log2(byteCache / byteLine);
      return {
        bytebn,
        byteCache,
        byteLine,
        N,
        W,
        L,
      };
    });

    return {
      soDuongTapHop,
      result,
      mainMemory,
      cacheMemory,
      line_block,
      typeLine_block,
      typeMainMemory,
      typeCacheMemory,
    };
  },
};
</script>

<template>
  <div class="w-full">
    <form @submit.prevent class="shadow max-w-[800px] mx-auto mt-6 px-6 py-4 rounded-lg bg-white">
      <div class="flex gap-10">
        <div class="flex-1">
          <div>Dung lượng bộ nhớ:</div>
          <input
            class="border mt-2 border-gray-300 outline-none rounded-lg px-6 py-2"
            v-model.number="mainMemory"
            type="number"
          />
          <select v-model="typeMainMemory" name="optionMainMemory">
            <option value="0">Byte</option>
            <option value="1">kB</option>
            <option value="2">MB</option>
            <option value="3">GB</option>
          </select>
        </div>
        <div class="flex-1">
          <div>Dung lượng cache:</div>
          <input
            class="border mt-2 border-gray-300 outline-none rounded-lg px-6 py-2"
            v-model.number="cacheMemory"
            type="number"
          />
          <select v-model="typeCacheMemory" name="optionCacheMemory">
            <option value="0">Byte</option>
            <option value="1">kB</option>
            <option value="2">MB</option>
            <option value="3">GB</option>
          </select>
        </div>
      </div>
      <div class="flex gap-10 mt-3">
        <div class="flex-1">
          <div>Kích thước Line:</div>
          <input
            class="border mt-2 border-gray-300 outline-none rounded-lg px-6 py-2"
            v-model.number="line_block"
            type="number"
          />
          <select v-model="typeLine_block" name="optionCacheMemory">
            <option value="0">Byte</option>
            <option value="1">kB</option>
            <option value="2">MB</option>
            <option value="3">GB</option>
          </select>
        </div>
        <div class="flex-1">
          <div>Dành cho tập hợp, số đường:</div>
          <input
            class="border mt-2 border-gray-300 outline-none rounded-lg px-6 py-2"
            v-model="soDuongTapHop"
            type="number"
          />
        </div>
      </div>
    </form>
    <div class="max-w-[800px] shadow px-6 py-4 bg-white rounded-lg mt-10 mx-auto">
      <h2 class="my-3 font-semibold">Ánh xạ trực tiếp</h2>
      <div class="mt-3">
        Bộ nhớ chính: {{ result.bytebn }} Byte = 2
        <sup>{{ result.N }}</sup>
        Byte => N = {{ result.N }} bít
      </div>
      <div class="mt-3">
        Bộ nhớ cache: {{ result.byteCache }} Byte = 2
        <sup>{{ Math.log2(result.byteCache) }}</sup> Byte
      </div>
      <div class="mt-3">
        Line: {{ result.byteLine }} Byte = 2
        <sup>{{ result.W }}</sup>
        Byte => W = {{ result.W }} bít
      </div>
      <div class="mt-3">
        Số line trong cache: 2
        <sup>{{ Math.log2(result.byteCache) }}</sup> / 2
        <sup>{{ result.W }}</sup> = 2
        <sup>{{ Math.log2(result.byteCache / result.byteLine) }}</sup>
        Line
        => L = {{ result.L }} bít
      </div>
      <div
        class="mt-3"
      >Số bít trường Tag: T = {{ result.N }} - ({{ result.L }} + {{ result.W }}) = {{ result.N - (result.L + result.W) }}</div>
    </div>
    <div class="max-w-[800px] shadow px-6 py-4 bg-white rounded-lg mt-6 mx-auto">
      <h2 class="my-3 font-semibold">Ánh xạ liên kết toàn phần</h2>
      <div class="mt-3">
        Bộ nhớ chính: {{ result.bytebn }} Byte = 2
        <sup>{{ result.N }}</sup>
        Byte => N = {{ result.N }} bít
      </div>
      <div class="mt-3">
        Line: {{ result.byteLine }} Byte = 2
        <sup>{{ result.W }}</sup>
        Byte => W = {{ result.W }} bít
      </div>
      <div
        class="mt-3"
      >Số bít của trường Tag: T = {{ result.N }} - {{ result.W }} = {{ result.N - result.W }}</div>
    </div>
    <div class="max-w-[800px] shadow px-6 py-4 bg-white rounded-lg mt-6 mx-auto">
      <h2 class="my-3 font-semibold">Ánh xạ liên kết tập hợp {{ soDuongTapHop }} đường</h2>
      <div class="mt-3">
        Bộ nhớ chính: {{ result.bytebn }} Byte = 2
        <sup>{{ result.N }}</sup>
        Byte => N = {{ result.N }} bít
      </div>
      <div class="mt-3">
        Bộ nhớ cache: {{ result.byteCache }} Byte = 2
        <sup>{{ Math.log2(result.byteCache) }}</sup> Byte
      </div>
      <div class="mt-3">
        Line: {{ result.byteLine }} Byte = 2
        <sup>{{ result.W }}</sup>
        Byte => W = {{ result.W }} bít
      </div>
      <div class="mt-3">
        Số line trong cache: 2
        <sup>{{ Math.log2(result.byteCache) }}</sup> / 2
        <sup>{{ result.W }}</sup> = 2
        <sup>{{ Math.log2(result.byteCache / result.byteLine) }}</sup>
        Line
        => L = {{ result.L }} bít
      </div>
      <div class="mt-3">
        Một Set có {{ soDuongTapHop }} Line = 2
        <sup>{{ Math.log2(soDuongTapHop) }}</sup> Line
      </div>
      <div class="mt-2">
        => Số Set trong Cache 2
        <sup>{{ result.L }}</sup> / 2
        <sup>{{ Math.log2(soDuongTapHop) }}</sup>
        = 2
        <sup>{{ result.L - Math.log2(soDuongTapHop) }}</sup>
        => S = {{ result.L - Math.log2(soDuongTapHop) }}
      </div>
      <div class="mt-2">
        Số bit của trường Tag sẽ là:
        T = {{ result.N }} - ( {{ result.W }} + {{ result.L - Math.log2(soDuongTapHop) }} ) =
        {{ result.N - (result.W + (result.L - Math.log2(soDuongTapHop))) }} bít
      </div>
    </div>
  </div>
</template>

