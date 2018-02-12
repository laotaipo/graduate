<template>
    <div class="login">
        <div>
            hahaha 
        </div>
            shabus 
            <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            visible: true
        }
    }
}
</script>


<style lang="scss"> 
    .login {
        background: red;
        div {
            background: green;
        }
    }
</style>
