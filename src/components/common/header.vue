<template>
    <div class="header">
        <div v-if="logined" class="text">天津保税区</div>
        <div v-else class="text"><span class="login">登录</span>/<span class="reg">注册</span></div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            logined: true,
            // logined: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
    .header {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        line-height: 80px;
        background: $main;
        .text {
            position: absolute;
            right: 20px;
            cursor: pointer;
            .login:hover, .reg:hover {
                color: red;
            }
        }

    }
</style>
