<template>
    <TopHead menu="Watchlist" />
    <div v-for="(item, index) in Array.from({ length: 20 })" :key="index">
        <List />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log("tes");
    window.scrollTo(0, 0)
})
</script>

<script>
import List from "./components/common/List.vue";
import TopHead from "./components/common/TopHead.vue";

export default {
    name: 'App',
    components: {
        List, TopHead
    }
}
</script>

<style></style>