<template>
    <div class="wrap-top_header">
        <div class="back" @click="goBack()">
            <img width="18" height="18" src="../../assets/arrow-outline-left.svg" alt="logo">
        </div>
        <div class="title">{{ menu }}</div>
        <div class="other"></div>
    </div>
</template>

<script>

export default {
    props: ['menu'],
    methods: {
        goBack() {
            this.$router.push('/')
        },

    },
}
</script>

<style scoped>
.wrap-top_header {
    padding: 16px 0 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.wrap-top_header .back {
    display: flex;
    align-items: center;
}

.wrap-top_header .title {
    font-weight: 600;
    font-size: 18px;
}

.wrap-top_header .other {
    width: 16px;
}
</style>