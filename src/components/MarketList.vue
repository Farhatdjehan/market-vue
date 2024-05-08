<template>
    <div class="wrap-list_stock">
        <div class="title-list_stock">Watchlist</div>
        <div class="item_list">
            <div v-for="(item, index) in Array.from({ length: 5 })" :key="index">
                <List type="list"/>
            </div>
        </div>
        <div class="load-more">
            <RouterLink to="/list">
                Muat Lainnya
            </RouterLink>
        </div>
    </div>
</template>

<script>
// import { RouterLink } from "vue-router";
import List from "./common/List.vue";
export default {
    components: { List }
}

</script>

<style scoped>
.wrap-list_stock {
    padding: 8px 0;
}

.wrap-list_stock .load-more {
    text-align: center;
    padding: 12px;
    margin-top: 32px;
    background: #93ffb9;
    border-radius: 16px;
    margin-bottom: 24px;
}

.wrap-list_stock .load-more:hover {
    transform: scale(1.02);
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.wrap-list_stock .load-more a {
    text-decoration: none;
    color: #1e9b49;
    font-weight: 600;
}

.title-list_stock {
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 24px;
}

.item_list {
    display: flex;
    gap: 12px;
    flex-direction: column;
}

.item_stock {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    width: 100%;
}

.item_stock .left {
    display: flex;
    justify-content: space-between;
}

.item_stock .right {
    text-align: right;
}

.item_stock .right .item_value {
    font-weight: 600;
}

.right .item_status {
    font-size: 13px;
    color: #39b062;
    display: flex;
    justify-content: flex-end;
}

.right .item_status span {
    display: flex;
    height: 100%;
    margin-right: 2px;
    height: auto;
}

.item_logo {
    width: 46px;
    height: 46px;
    background-color: #161616;
    border-radius: 50%;
    margin-right: 12px;
    border: 1px solid #dcdcdc;
}

.item_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
}

.item_info .item_code {
    font-weight: 600;
    margin-bottom: 4px;
}

.item_info .item_company {
    font-size: 13px;
    color: #B6B6B6;
}
</style>