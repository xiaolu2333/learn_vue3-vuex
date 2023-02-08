/* jshint esversion: 6 */

import {createStore} from 'vuex';
import { COUNT_INCREMENT_MUTATION, COUNT_DECREMENT_MUTATION } from "@/store/mutation-types";

// 创建一个新的 store 实例
const store = createStore({
    state() {
        "use strict";
        return {
            count: 0,
            monetaryUnitCNY: 'CNY',
            monetaryUnitUSD: 'USD',
            monetaryUnitEUR: 'EUR',
        };
    },

    mutations: {
        [COUNT_INCREMENT_MUTATION](state, payload) {
            "use strict";
            console.log("increased by " + payload.amount);
            state.count += payload.amount;
        },
        [COUNT_DECREMENT_MUTATION](state, payload) {
            "use strict";
            console.log("decreased by " + payload.amount);
            state.count -= payload.amount;
        }
    },

    actions: {  // action 提交的是 mutation，而不是直接变更状态。context 参数是一个与 store 实例具有相同方法和属性的 context 对象，payload 是一个额外的对象参数。
        increment(context, payload) {
            // 通过 context.commit 提交 mutation：
            context.commit(COUNT_INCREMENT_MUTATION, payload);
        },
        // 为了简化多次调用 context.commit，我们可以使用 ES2015 的参数解构：
        decrement({commit}, payload) {
            commit(COUNT_DECREMENT_MUTATION, payload);
        }
    }
});

export default store;