<template>
  <div class="w-full h-[400px] custom-scroll overflow-y-scroll">
    <div
      class="py-2 border-t border-stone-300"
      v-for="question in ListQuestions"
      :key="question.id"
    >
      <Item @change="changeContent" :question="question" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

import { computed } from "vue";

export default {
  props: ["search", "List"],
  setup(props, ctx) {
    const ListQuestions = computed(() =>
      props.List.filter((e) =>
        e.question.toLowerCase().includes(props.search.toLowerCase().trim())
      )
    );

    const changeContent = (val) => {
      ctx.emit("change", val);
    };

    return { ListQuestions, changeContent };
  },
  components: {
    Item,
  },
};
</script>