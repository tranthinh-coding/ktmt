<script>
import { computed, ref } from "@vue/reactivity";

export default {
  setup() {
    const arr = ref([]);
    const inp = ref(null);
    const soKhung = ref(1);

    const add = () => {
      if (inp.value != null) arr.value.push(inp.value);
      inp.value = null;
    };

    const clearArr = () => {
      arr.value = [];
    };

    const removeItem = (i) => {
      arr.value.splice(i, 1);
    };

    const soLoiFIFO = computed(() => {
      let a = 0;
      const fifoarr = [];

      arr.value.forEach((item) => {
        if (fifoarr.includes(item)) return;
        if (fifoarr.length < soKhung.value) {
          fifoarr.push(item);
          ++a;
          return;
        }
        // ap dung quy tac hang doi: queue.
        fifoarr.shift();
        fifoarr.push(item);
        ++a;
      });
      return a;
    });

    const soLoiTUH = computed(() => {
      let a = 0;
      const tuharr = [];
      arr.value.forEach((item, index) => {
        if (tuharr.includes(item)) return;
        if (tuharr.length < soKhung.value) {
          tuharr.push(item);
          ++a;
          return;
        }
        // tim ve tuong lai
        let tuhtemp = [...tuharr];
        for (let i = index + 1; i < arr.value.length; ++i) {
          // tim index cua cac phan tu tuong lai trong khung trang hien tai
          const iof = tuhtemp.indexOf(arr.value[i]);
          // tim thay thi xoa khoi khung trang
          if (iof != -1 && tuhtemp.length > 1) tuhtemp.splice(iof, 1);
        }
        // toi day, nhung phan tu con lai la phan tu co the thay the duoc
        const iof = tuharr.indexOf(tuhtemp[0]);
        tuharr[iof] = item;
        ++a;
      });
      return a;
    });

    const soLoiLRU = computed(() => {
      let a = 0;
      const lruarr = [];
      arr.value.forEach((item, index) => {
        if (lruarr.includes(item)) return;
        if (lruarr.length < soKhung.value) {
          lruarr.push(item);
          ++a;
          return;
        }
        console.log(lruarr);

        let iof = 0;
        const lrutemp = [...lruarr];
        // duyet tu phan tu sau no ve phia index = 0. gap cai nao vua su dung thi xoa no
        // cho toi khi chi con 1 phan tu thi do la cai can chen
        for (let _i = index - 1; _i >= 0; --_i) {
          iof = lrutemp.indexOf(arr.value[_i]);
          if (iof != -1 && lrutemp.length > 1) lrutemp.splice(iof, 1);
        }
        iof = lruarr.indexOf(lrutemp[0]);
        lruarr[iof] = item;
        console.log(lruarr);
        ++a;
      });
      return a;
    });

    return {
      arr,
      inp,
      soKhung,
      soLoiLRU,
      soLoiTUH,
      soLoiFIFO,
      add,
      clearArr,
      removeItem,
    };
  },
};
</script>

<template>
  <div class="w-[800px] px-6 py-4 shadow mx-auto mt-6 bg-white rounded-lg">
    <form @submit.prevent="add">
      <div>
        <span>thêm trang:</span>
        <input
          class="border border-gray-300 rounded-lg px-4 py-2 ml-4"
          type="number"
          v-model.number="inp"
        />
        <button
          class="rounded-lg ml-2 px-5 py-2 hover:ring-4 ring-offset-2 transition-all ring-blue-300 bg-blue-500 text-white text-xl mt-2"
          @click="add"
        >Thêm</button>
      </div>
      <div class="mt-2">
        <span>Số khung trang:</span>
        <input
          class="border border-gray-300 rounded-lg px-4 py-2 ml-4"
          type="number"
          v-model.number="soKhung"
          min="1"
        />
      </div>
    </form>
    <button
      class="rounded-lg px-5 py-2 hover:ring-4 ring-offset-2 transition-all ring-blue-300 bg-blue-500 text-white text-xl mt-2"
      @click="clearArr"
    >Xoá mảng.</button>
  </div>
  <div class="w-[800px] px-6 py-4 shadow mx-auto mt-3 bg-white rounded-lg">
    <span
      class="px-2 py-2 relative rounded-lg bg-gray-300 group mr-1"
      v-for="(e, i) in arr"
      :key="i"
    >
      {{ e }}
      <div
        @click="() => removeItem(i)"
        class="absolute hidden group-hover:block cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 top-0 bg-red-400 w-6 h-6 text-center rounded-full"
      >x</div>
    </span>
  </div>
  <div class="w-[800px] px-6 py-4 shadow mx-auto mt-3 bg-white rounded-lg">
    <h2 class="text-xl">FIFO</h2>
    <div>
      Số lỗi trang: {{ soLoiFIFO }}
      <br />
      Tổng số trang: {{ arr.length }}
      <br />
      Số khung trang: {{ soKhung }}
      <br />
      Tỷ lệ lỗi trang: {{ soLoiFIFO / arr.length * 100 || 0 }} %
    </div>
  </div>
  <div class="w-[800px] px-6 py-4 shadow mx-auto mt-3 bg-white rounded-lg">
    <h2 class="text-xl">Tối ưu hoá</h2>
    <div>
      Số lỗi trang: {{ soLoiTUH }}
      <br />
      Tổng số trang: {{ arr.length }}
      <br />
      Số khung trang: {{ soKhung }}
      <br />
      Tỷ lệ lỗi trang: {{ soLoiTUH / arr.length * 100 || 0 }} %
    </div>
  </div>
  <div class="w-[800px] px-6 py-4 shadow mx-auto mt-3 bg-white rounded-lg">
    <h2 class="text-xl">LRU</h2>
    <div>
      Số lỗi trang: {{ soLoiLRU }}
      <br />
      Tổng số trang: {{ arr.length }}
      <br />
      Số khung trang: {{ soKhung }}
      <br />
      Tỷ lệ lỗi trang: {{ soLoiLRU / arr.length * 100 || 0 }} %
    </div>
  </div>
</template>
