<script setup>
const emit = defineEmits(['loadMore', 'headItemClick'])

const props = defineProps({
    list: {
        type: Array,
        required: true,
        default: []
    },
    loading: {
        type: Boolean,
    }
})
const loading = toRef(props.loading.value)
const onLoad = () => {
    emit('loadMore')
}
const headItemClick = (id) => {
    emit('headItemClick', id)
}
</script>
<template>
    <div class="goods">
        <van-list v-model:loading="loading" :finished="false" finished-text="没有更多了" @load="onLoad">
            <van-grid :clickable="true" :border="true" :column-num="2" :gutter="10">
                <van-grid-item v-for="(item, index) in props.list" :key="item.id" @click="headItemClick(item.id)">
                    <van-image :src="item.goods_img" />
                    <div class="goods-name">{{ item.goods_name }}</div>
                    <div class="goods-num"><span>库存</span>{{ item.goods_num }}</div>
                    <div class="goods_price"> {{ item.goods_price }}</div>
                </van-grid-item>
            </van-grid>
        </van-list>
    </div>
</template>
<style scoped lang="less">
.van-grid-item__content--center {
    border-radius: 10px;
    box-shadow: 1px 5px 6px #999;
}

.goods {
    margin-top: 20px;
}

.goods-name {
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    padding: 10px;
    text-align: left;
    color: var(--zl-title-color);
}

.goods-num {
    font-size: 14px;
    color: red;
    width: 100%;

    span {
        margin-right: 10px;
        color: #999;
    }
}

.goods_price {
    font-size: 20px;
    color: red;
    width: 100%;
    font-weight: 600;
    text-align: right;
}
</style>