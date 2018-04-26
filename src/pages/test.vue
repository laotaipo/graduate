<template>
    <div class="test">
        <!-- <div v-for="i in 4" ref="haha">{{i}}</div> -->
        <!-- <div ref="haha">111</div> -->
        <!-- <input type="checkbox" :value="1" v-model="checked">haha
        <input type="checkbox" :value="2" v-model="checked">111
        <input type="checkbox" :value="3" v-model="checked">2222
        <!-- <input type="checkbox" :value="4" v-model="checked">3333 --> 
<div>
    <p  style='height:100px;margin-left:100px'>jjjjjj</p>
        <p style='floatleft;width:100px'>dddd</p>
    
</div>

    </div>
</template>

<style lang="scss">
    // .test {
    //     div {
    //         height: 50px;
    //         background: red;
    //         border-bottom: 2px solid blue;
    //     }
    // }
</style>

<script>
import axios from 'axios'
export default {
    name: 'Test',
    data() {
        return {
            checked: [1,2, 4]
            
        }
    },
    methods: {

    },
    mounted() {
        // let url = this.HOME+'/getJson';
        // this.$axios.get('/api/getJson', {
        //     method: 'GET',
        //     // mode:'cors',
        //     // headers: {
        //     //     'Accept': 'application/getJson',
        //     //     'Content-Type': 'application/getJson',
        //     // },
        //     }).then(function (res) {
        //     if(res.status === 200){
        //         console.log(res)
        //         return res.data
        //     }
        //     }).then(function (getJson) {
        //     // context.commit('setJson', Array.from(getJson));
        // })
        // fetch('http://127.0.0.1:3000/getJson', {
        //     method: 'GET',
        //     mode:'no-cors',
        //     // headers: {
        //     //     'Accept': 'application/json',
        //     //     'Content-Type': 'application/json',
        //     // },
        //     }).then(function (res) {
        //     if(res.status === 200){
        //         return res.json()
        //     }
        //     }).then(function (getJson) {
            
        //     //console.log(typeof Array.from(json), Array.from(json));
        //     // context.commit('setJson', Array.from(json));
        // })
        // console.log(this.$refs.haha[0].offsetHeight);
        // let a = [1, 2, 3, 4];
        // let b = {
        //     a: 1,
        //     b: 2,
        //     c: 3,
        //     d: 4
        // }
        // let { d , c } = b;
        // console.log(a);
        // console.log(c);
        // console.log(b)
        // let x = 2;
        // let y = 4;
        // let z = 0;
        // z = (x, y) => {
        //     return x * y;
        // }
        // // x => x * x;
        // console.log('======', z);
        var obj = {
            name: 'yang',
            age: 18,
            showAge: function() {
                console.log(this.name);
                var fn = () => {
                    console.log('=========', this);
                };
                return fn();
            }
        }
        obj.showAge();
    }
    
}
</script>
