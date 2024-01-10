<script setup>
import { useRoute } from 'vue-router'

import { getGoodsDetail } from '@/api/commodity'

const route = useRoute()
const goodsData = ref({})

getGoodsDetail(route.query.id).then(res => {
    goodsData.value = res.data.result
})

const onClickLeft = () => {
    history.back()
}

</script>
<template>
    <div class="goodsDetail">
        <van-nav-bar left-arrow>
            <template #title>
                <div class="zl-van-nav-bar">
                    商品详情
                </div>
            </template>
            <template #left>
                <van-icon name="arrow-left" size="20" color="#fff" @click="onClickLeft"></van-icon>
            </template>
        </van-nav-bar>
        <van-image width="100%" height="300" :src="goodsData.goods_img" />
        <div class="goods">
            <div class="goods_name">{{ goodsData.goods_name }}</div>
            <div class="goods_num"><span>库存：</span> {{ goodsData.goods_num }}</div>
            <div class="goods_price">￥{{ goodsData.goods_price }}</div>
        </div>
        <div class="detailImg">
            <div>详情</div>
            <img v-for="item in 5" :key="item" :src="goodsData.goods_img" alt="" srcset="">
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="cart-o" text="购物车" badge="0" />
            <van-action-bar-button type="warning" text="加入购物车" />
            <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
    </div>
</template>
<style lang="less" scoped>
.goodsDetail {
    background-color: var(--zl-bj);
    min-height: 100vh;
}

.van-nav-bar {
    background-color: var(--zl-default);
}

.zl-van-nav-bar {
    color: #fff;
    letter-spacing: 2px;
    font-weight: 600;
}

.goods {
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;

    .goods_name {
        padding: 10px;
        font-size: 24px;
        font-weight: 600;
    }

    .goods_num {
        padding: 0px 10px;
        font-size: 14px;

    }

    .goods_price {
        padding: 10px;
        font-size: 24px;
        text-align: right;
        font-weight: 600;
        color: red;
    }
}

.detailImg {
    width: 100%;
    margin-top: .6rem;
    overflow: hidden;

    div {
        height: 1.3rem;
        margin: 0.25rem;
        font-size: 0.6rem;
        font-weight: 600;
        position: relative;

        &::after {
            content: '';
            width: 1rem;
            height: .16rem;
            top: 0.8rem;
            left: 0.1rem;
            background-color: var(--zl-default);
            position: absolute;
        }
    }

    img {
        width: 100%;
        object-fit: cover;
        margin-top: -8px;
    }
}
</style>