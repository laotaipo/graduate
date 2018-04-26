<template>
    <div class="home">
        <Header></Header>
        <div class="content">
            <div class="employee-manage" @click="goto(0)">员工管理</div>
            <div class="goods-manage" @click="goto(1)">货物管理</div>
            <div>合作伙伴</div>
        </div>
    </div>
</template>
<script>
import Header from "../../components/common/header"
export default {
    name: 'Home',
    components: {
        Header
    },
    methods: {
        goto(idx) {
            switch(idx) {
                case 0:
                this.$router.push({path:'/employee'});
                break;
                case 1: 
                this.$router.push({path:'/goods'});
                break;
            }
        }
    },
}
</script>
<style lang="scss">
@import '../../style/common.scss';
    .home {
        .content {
            font-family: PingFangSC-Regular;
            font-size: 20px;
            width: 80%;
            margin: 0 auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            div {
                width: 200px;
                height: 200px;
                margin-top: 40px;
                text-align: center;
                line-height: 200px;
                background: $main;
                border-radius: 40px;
                transition: all .5s;
                cursor: pointer;
            }
            div:hover {
                background: #cccccc;
                width: 205px;
                height: 205px;
                // line-height: 210px;
            }
        }
    }
</style>
