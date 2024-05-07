<template>
    <div class="header-wrap">
        <div class="logo">market <span class="dot-red"></span></div>
        <div class="header-action">
            <!-- <div class="search-btn">
                <img src="../assets/search.png" alt="search" srcset="">
            </div>
            <div class="notif-btn">
                <img src="../assets/alert.png" alt="alert">
            </div> -->
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.header-wrap {
    padding: 16px 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    color: #fff;
}

.header-wrap>.logo {
    display: flex;
    color: #161616;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    /* 133.333% */
}

.header-wrap .header-action {
    display: flex;
    gap: 24px
}

.header-wrap>.logo span.dot-red {
    width: 10px;
    height: 10px;
    background: var(--Ros-500, #F63D68);
    border-radius: 5px;
}

.header-wrap .header-action>.search-btn {}

.header-wrap .header-action>.notif-btn {}
</style>