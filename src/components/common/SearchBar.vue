<template>
    <div class="wrap-search">
        <div class="search-bar">
            <img src="../../assets/search.svg" alt="">
            <input type="text" placeholder="Search">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.wrap-search {
    width: 100%;
}

.wrap-search .search-bar {
    width: inherit;
    position: relative;
}

.wrap-search .search-bar>img {
    position: absolute;
    top: 9px;
    bottom: 9px;
    left: 10px;
}

.wrap-search .search-bar>input {
    padding: 12px 12px 12px 42px;
    border-radius: 8px;
    border: 1px solid #f6f6f6;
    width: -webkit-fill-available;
    background: #f6f6f6;
    margin-bottom: 16px;
}

.wrap-search .search-bar>input:focus {
    outline: none;
}

.wrap-search .search-bar>input::placeholder {
    color: #B6B6B6;

    font-weight: 500;
}
</style>