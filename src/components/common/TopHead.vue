<template>
    <div :class="scrolled ? 'wrap-top_header fixed' : 'wrap-top_header'">
        <div class="back" @click="goBack()">
            <img width="18" height="18" src="../../assets/arrow-outline-left.svg" alt="logo">
        </div>
        <div class="title">{{ menu }}</div>
        <div class="other"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            scrolled: false
        }
    },
    props: ['menu'],

    methods: {
        goBack() {
            this.$router.back()
        },
        handleScroll() {
            if (window.scrollY > 0) {
                this.scrolled = true;
            } else {
                this.scrolled = false
            }
            console.log(this.scrolled);
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }

}
</script>

<style scoped>
.wrap-top_header {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #fff;
}

.wrap-top_header.fixed {
    position: fixed;
    top: 0;
    width: calc(100% - 40px);
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