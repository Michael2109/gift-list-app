import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'

import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from "vue-router";

import App from '../imports/ui/App.vue'
import {router} from "../imports/ui/router/Router";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue/src";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Meteor.startup(() => {

    console.log("Startup")

    Tracker.autorun((computation) => {
        console.warn("Logging in...");

        if (!Meteor.loggingIn()) {
            computation.stop();
            console.warn("Initializing App...");

            Vue.config.productionTip = false

            router.beforeEach((to, from, next) => {
                if (to.name !== "Login" && Meteor.userId() == null) {
                    console.log("Redirect to Sign In");
                    next({name: 'Login'});
                } else {
                    next();
                }
            });

            new Vue({
                el: '#app',
                router,
                template: '<App/>',
                components: { App },
                render: h => h(App)
            })
        }
    });

});
