<template>
    <HeaderApp />
    <HighlightCard />
    <MarketList />
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import HighlightCard from './components/HighlightCard.vue'
import MarketList from './components/MarketList.vue'
export default {
    name: 'App',
    components: {
        HeaderApp, HighlightCard, MarketList
    }
}
</script>

<style></style>