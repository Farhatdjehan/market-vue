<template>
    <TopHead menu="Watchlist" />
    <SearchBar />
    <div class="item_wrap">
        <div v-for="(item, index) in Array.from({ length: 20 })" :key="index">
            <List type="list"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<script>
import List from "./components/common/List.vue";
import TopHead from "./components/common/TopHead.vue";
import SearchBar from "./components/common/SearchBar.vue";
export default {

    name: 'App',
    components: {
        List, TopHead, SearchBar
    },

}
</script>

<style scoped>
.item_wrap {
    padding-bottom: 16px;
}
</style>