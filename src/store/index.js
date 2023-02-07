/* jshint esversion: 6 */

import {createStore} from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
    state() {           // state 是一个函数，返回一个对象，这个对象就是我们的状态树，这个对象可以包含任意的属性，这些属性就是我们的状态
        "use strict";
        return {
            count: 1,
            monetaryUnitCNY: 'CNY',
            monetaryUnitUSD: 'USD',
            monetaryUnitEUR: 'EUR',
        };
    },
    getters: {        // 可以认为是 store 的计算属性\
        // 不接收参数，将作为普通函数使用
        getStateCount() {
            "use strict";
            return 10;
        },
        // 接收一个参数
        getStateMonetaryUnitCNY(state) {
            "use strict";
            return state.count * 10 + " " + state.monetaryUnitCNY;
        },
        // 接收两个参数
        getStateMonetaryUnitCNY2USD(state, getters) {
            "use strict";
            return getters.getStateCount / 7 + " " + "USD";
        }
    },

    // mutations: {        // mutations 是一个对象，这个对象包含了我们的状态变更函数，这些函数就是我们的状态变更行为，这些函数接收两个参数，第一个参数是 state，第二个参数是 payload，payload 是我们提交状态变更函数时传递的参数
    //     increment(state, payload) {
    //         "use strict";
    //         console.log(payload + " is clicked!");
    //         state.count++;  // 由于页面中使用了 this.$store.getters.getStateCount，所以这里的会导致 count 的值十倍增长
    //     },
    //     decrement(state, payload) {
    //         "use strict";
    //         console.log(payload + " is clicked!");
    //         state.count--;  // 由于页面中使用了 this.$store.getters.getStateCount，所以这里的会导致 count 的值十倍减少
    //     }
    // }
});

export default store;