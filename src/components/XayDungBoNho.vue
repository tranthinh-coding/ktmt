<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const BN = ref(1);
    const optionsBN = ref(1);
    const bitBN = ref(1);

    const IC = ref(1);
    const optionsIC = ref(1);
    const bitIC = ref(1);

    const converter = (option) => {
      return Math.pow(1024, option);
    };

    const result = computed(function () {
      const bytebn = BN.value * converter(optionsBN.value);
      const byteic = IC.value * converter(optionsIC.value);
      const A = (bytebn * bitBN.value) / (byteic * bitIC.value);
      const B = bitBN.value / bitIC.value;
      const n1 = Math.log2(bytebn);
      const n2 = Math.log2(byteic);
      const input = n1 - n2;
      const output = A / B;
      return {
        bytebn,
        byteic,
        A,
        B,
        n1,
        n2,
        input,
        output,
      };
    });
    return {
      BN,
      bitBN,
      IC,
      bitIC,
      optionsIC,
      optionsBN,
      result,
      converter,
    };
  },
};
</script>

<template>
  <div class="w-full">
    <form
      class="max-w-[800px] mx-auto mt-6 bg-white px-6 py-4 shadow rounded-lg overflow-hidden"
      @submit.prevent
    >
      <div class="flex w-full justify-between">
        <div>
          <div class="w-20 inline-block">Bộ nhớ:</div>
          <input
            min="1"
            class="border border-gray-300 rounded-lg outline-none px-2 py-1"
            v-model.number="BN"
            type="number"
            name="bn"
          />
          <select v-model="optionsBN" name="optionsbn">
            <option value="1">KB</option>
            <option value="2">MB</option>
          </select>
        </div>
        <div>
          <div class="w-20 inline-block">Số bit BN:</div>
          <input
            min="1"
            class="border border-gray-300 rounded-lg outline-none px-2 py-1"
            v-model.number="bitBN"
            type="number"
            name="bitbn"
          />
        </div>
      </div>
      <div class="mt-2 flex w-full justify-between">
        <div>
          <div class="w-20 inline-block">IC:</div>
          <input
            min="1"
            class="border border-gray-300 rounded-lg outline-none px-2 py-1"
            v-model.number="IC"
            type="number"
            name="ic"
          />
          <select v-model="optionsIC" name="optionsic">
            <option value="1">KB</option>
            <option value="2">MB</option>
          </select>
        </div>
        <div>
          <div class="w-20 inline-block">Số bit IC:</div>
          <input
            min="1"
            class="border border-gray-300 rounded-lg outline-none px-2 py-1"
            v-model.number="bitIC"
            type="number"
            name="bitic"
          />
        </div>
      </div>
    </form>
    <div class="max-w-[800px] mx-auto mt-6 shadow bg-white px-6 py-4 rounded-lg overflow-hidden">
      <div class="mt-3">
        Bộ nhớ: {{ result.bytebn }} Byte - 2
        <sup>{{ Math.log2(result.bytebn) }}</sup>
        Byte và {{ bitBN }} bit
      </div>
      <div class="mt-3">
        IC: {{ result.byteic }} Byte - 2
        <sup>{{ Math.log2(result.byteic) }}</sup>
        Byte và {{ bitIC }} bit
      </div>
      <div class="mt-3">
        Số lượng IC cần sử dụng: (2
        <sup>{{ Math.log2(result.bytebn) }}</sup>
        * {{ bitBN }}) / (2
        <sup>{{ Math.log2(result.byteic) }}</sup>
        * {{ bitIC }} )
        = {{ result.A }} (IC)
      </div>
      <div class="mt-3">
        Số đường địa chỉ cần cho bộ nhớ: n1 = log
        <sub>2</sub> 2
        <sup>{{ Math.log2(result.bytebn) }}</sup>
        = {{ result.n1 }}
      </div>
      <div class="mt-3">
        Số đường địa chỉ cần cho IC: n2 = log
        <sub>2</sub> 2
        <sup>{{ Math.log2(result.byteic) }}</sup>
        = {{ result.n2 }}
      </div>
      <div class="mt-3">Số IC cần mở đồng thời: B = {{ bitBN }}/{{ bitIC }} = {{ result.B }}</div>
      <div class="mt-3">Bộ giải mã gồm: {{ result.input }} đầu vào và {{ result.output }} đầu ra</div>
    </div>
  </div>
</template>
