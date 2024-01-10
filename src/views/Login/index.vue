<script setup>
import { showToast } from 'vant';
import 'vant/es/toast/style'

import { login } from '@/api/user'
import { setToken } from '@/utils/auto'
import { userStoreToken } from '@/stores/token'

const router = useRouter()
const token = userStoreToken()
const userData = reactive({
    user_name: '',
    password: '',
});
const onSubmit = () => {
    login(userData).then(res => {
        console.log(res)
        if (res.data.code === 200) {
            showToast({
                message: '登录成功',
                icon: 'success'
            });
            setToken(res.data.result.token);
            token.importToken(res.data.result.token);
            router.go(-1)
        } else {
            showToast({
                message: res.data.message,
                icon: 'cross'
            });
        }
    }).catch(err => {
        showToast({
            message: '登录失败',
            icon: 'cross'
        });
    })
};
</script>
<template>
    <div class="login">
        <div class="login-form">
            <div class="login-title">登录</div>
            <van-form @submit="onSubmit" class="form-center" label-width="2rem">
                <van-cell-group inset>
                    <van-field v-model="userData.user_name" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="userData.password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" autocomplete="off" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<style lang="less" scoped>
.login {
    width: 100%;
    height: 100vh;
    background-image: url('https://img.aiyou.art/resultimg/2024-01-09/t738817fe332ba70b.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    object-fit: cover;

    .login-form {
        // background-color: rgba(255, 255, 255, 0.7);
        width: 8.5rem;
        height: auto;
        border-radius: 0.5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        backdrop-filter: blur(1rem);
        color: #fff;

        .login-title {
            text-align: center;
            margin-top: 0.5rem;
            letter-spacing: 0.2rem;
            font-size: .6rem;
            font-weight: 600;
        }

        .form-center {
            border-radius: 0.5rem;
            margin: 0 auto;
            margin-top: 0.5rem;
            // position: absolute;
            // top: 50%;
            // transform: translate(0%, -50%);
        }
    }

    .van-cell-group {
        background-color: transparent;
    }

    .van-cell {
        background-color: transparent;

    }

    /deep/ .van-field__label {
        color: #fff !important;
        font-weight: 600;
        font-size: 0.4rem;
    }

    /deep/.van-field__control {
        caret-color: #fff;
    }

    /deep/.van-field__control {
        color: #fff;
    }
}
</style>