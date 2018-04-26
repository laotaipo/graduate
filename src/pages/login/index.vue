<template>
    <div class="login">
        <Modal v-if="idx==1" v-model="visible" title="欢迎注册糖果保税区物流管理系统">保税区  
            <Select style="width:200px">
                <Option v-for="item in originList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select><br/>
            密码 
            <Input v-model="value" placeholder="请输入密码" style="width: 300px"></Input><br/>
            确认密码
            <Input v-model="value" placeholder="请输入密码" style="width: 300px"></Input><br/>
            上传备案文件
            <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            visible: true,
            idx: 1,//登录
            originList: [
                {
                    value: '上海',
                    label: '上海'
                },
                {
                    value: '天津',
                    label: '天津'
                }
            ],
            value: ''
        }
    },
    methods: {
        
    }
}
</script>


<style lang="scss"> 
    .login {
        // background: red;
        width: 100%;
        height: 1000px;
        background-image: url(../../assets/back.jpg) norepeat top;
        background-size: 100%;
        div {
            background: green;
        }
    }
</style>
