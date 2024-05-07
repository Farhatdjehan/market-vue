<template>
    <div class="item_stock">
        <div class="left">
            <div class="item_logo"></div>
            <div class="item_info">
                <div class="item_code">TLKM</div>
                <div class="item_company">Telkom Indonesia</div>
            </div>
        </div>
        <div class="right">
            <div class="item_value">Rp 4.500</div>
            <div class="item_status"><span><img width="14" height="14" src="../../assets/arrow-up.svg" alt=""
                        srcset=""></span> 3.2%</div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.item_list {
    display: flex;
    gap: 12px;
    flex-direction: column;
}

.item_stock {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
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
    align-items: center;
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