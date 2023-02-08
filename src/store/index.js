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
    }
});

export default store;