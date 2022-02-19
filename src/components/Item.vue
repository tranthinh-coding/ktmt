<template>
  <div>
    <p ref="items" :contenteditable="turnon">{{ question.question }}</p>
    <button @click="change" class="mt-2 text-red-600 bg-red-200 px-3 py-2 rounded-lg">Edit</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["question"],
  setup(props, ctx) {
    const turnon = ref(false);
    const items = ref(null);

    const change = () => {
      turnon.value = !turnon.value;
      // localStorage.setItem(LocalQuestion, JSON.stringify(questions.value));
      if (!turnon.value)
        ctx.emit("change", {
          id: props.question.id,
          question: items.value.textContent,
        });
    };

    return { items, change, turnon };
  },
};
</script>
