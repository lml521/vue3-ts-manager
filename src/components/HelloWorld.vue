<!-- <script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style> -->

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "../store";
const store = useStore();
const count = ref(0);
const showcount = computed(() => {
  return store.getters["getCount"];
});
const addBtn = () => {
  store.commit("setCount", ++count.value);
};
</script>
<template>
  <p>{{ showcount }}</p>
  <button @click="addBtn">增加</button>
</template>
<style scoped></style>
