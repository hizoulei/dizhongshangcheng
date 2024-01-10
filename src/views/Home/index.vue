<script setup>
import { useRouter } from 'vue-router'
import { getGoods } from '@/api/commodity'
const router = useRouter()
const searchValue = ref('')
const active = ref(0)
const goodsList = reactive([])
const loading = ref(false)

//搜索
const onSearch = (e) => {
    console.log(e)
}

//获取商品列表
const getList = () => {
    loading.value = true
    getGoods().then(res => {
        goodsList.value = res.data.result.rows
        loading.value = false
    })
}

const loadMore = () => {
    // getList()
}
const headItemClick = (val) => {
    console.log(val)
    router.push({ path: '/goodsDetail', query: { id: val } })
}

onMounted(() => {
    getList()
})
</script>
<template>
    <div class="home">
        <van-search v-model="searchValue" background="var(--zl-bj)" shape="round" show-action placeholder="请输入搜索关键词"
            @search="onSearch">
            <template #action>
                <div @click="onClickButton">搜索</div>
            </template>
        </van-search>
        <van-tabs v-model:active="active" background="var(--zl-bj)">
            <van-tab title="服装"></van-tab>
            <van-tab title="数码"></van-tab>
            <van-tab title="电器"></van-tab>
            <van-tab title="零食"></van-tab>
        </van-tabs>
        <CommodityList @headItemClick="headItemClick" :loading="loading" :list="goodsList.value" @loadMore="loadMore">
        </CommodityList>
    </div>
</template>

<style scoped lang="less">
.home {
    background-color: var(--zl-bj);
    min-height: 100vh;

    /deep/ .van-search__content--round {
        background-color: transparent;
        border: 2px solid var(--van-blue);
    }
}
</style>