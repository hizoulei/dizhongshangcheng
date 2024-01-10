<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="friends-o">个人中心</van-tabbar-item>
        </van-tabbar>
        <RouterView>

        </RouterView>

    </div>
</template>
<script setup>
const active = ref(0)


</script>
<style scoped lang="less"></style>