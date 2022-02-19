<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const timeCache = ref(1);
    const optionCache = ref(1);

    const timeKCache = ref(1);
    const optionKCache = ref(1);

    const percent = ref(100);

    const soLanTruyCap = ref(1);

    const result = computed(() => {
      const tCache =
        timeCache.value *
          optionCache.value *
          ((soLanTruyCap.value * percent.value) / 100) +
        timeKCache.value *
          optionKCache.value *
          ((soLanTruyCap.value * (100 - percent.value)) / 100);

      const tKCache =
        timeKCache.value * optionKCache.value * soLanTruyCap.value;

      const res = tKCache / tCache;

      return { tCache, tKCache, res };
    });

    return {
      timeCache,
      timeKCache,
      optionKCache,
      optionCache,
      soLanTruyCap,
      result,
      percent,
    };
  },
};
</script>


<template>
  <div class="w-full">
    <form
      class="max-w-[800px] mx-auto shadow mt-6 bg-white px-6 py-4 rounded-lg overflow-hidden"
      @submit.prevent
    >
      <div class="flex w-full justify-between gap-8">
        <div class="flex-1">
          <div>Thời gian bộ nhớ:</div>
          <div>
            <input
              min="0"
              class="border border-gray-300 rounded-lg outline-none px-2 py-1"
              v-model.number="timeKCache"
              type="number"
              name="kcache"
            />
            <select v-model="optionKCache" name="optionsbn">
              <option value="1">ns</option>
              <option value="1000">ms</option>
            </select>
          </div>
        </div>
        <div class="flex-1">
          <div>Thời gian cache:</div>
          <div>
            <input
              min="0"
              class="border border-gray-300 rounded-lg outline-none px-2 py-1"
              v-model.number="timeCache"
              type="number"
              name="cache"
            />
            <select v-model="optionCache" name="optionsbn">
              <option value="1">ns</option>
              <option value="1000">ms</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex w-full mt-3 justify-between gap-8">
        <div class="flex-1">
          <div>Tỷ số trúng cache (%):</div>
          <input
            class="w-full border border-gray-300 rounded-lg outline-none px-2 py-1"
            type="number"
            min="0"
            max="100"
            v-model="percent"
          />
        </div>
        <div class="flex-1">
          <div>Số lần truy cập:</div>
          <input
            class="w-full border border-gray-300 rounded-lg outline-none px-2 py-1"
            type="number"
            min="0"
            v-model="soLanTruyCap"
          />
        </div>
      </div>
    </form>
    <div class="max-w-[800px] mx-auto shadow mt-6 bg-white px-6 py-4 rounded-lg overflow-hidden">
      <div class="mt-3">
        <span>Thời gian truy cập bộ nhớ chính (Không có cache): {{ result.tKCache }} ns</span>
      </div>
      <div class="mt-3">
        <span>Thời gian truy cập bộ nhớ có cache: {{ result.tCache }} ns</span>
      </div>
      <div class="mt-3">
        <span>Tỷ số: {{ result.res }}</span>
      </div>
    </div>
  </div>
</template>