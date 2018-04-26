import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    json: []
};

const actions = {
    getJson(context) {
        fetch('http://127.0.0.1:130/json', {
            // methods: 'GET',
            headers: {
               'Accept': 'application/json' , 
               'Content-Type': 'application/json'
            },
        }).then(function(res) {
            if(res.status === 200) {
                return res.json
            }
        }).then(function(json) {
            context.commit('setJson', Array.from(json));
        })
    }
}

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decreament: state => state.count--
    }
})