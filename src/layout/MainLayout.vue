<template>
    <div class="d-flex flex-column h-100">
        <navbar/>
        <main class="flex-shrink-0">
             <breadcrumb :current-page="page" />
             <router-view/>
        </main>
        <sticky-footer/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import StickyFooter from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

export default {
    components: {
        Navbar,
        StickyFooter,
        Breadcrumb,
    },
    watch:{
        $route (to, from){
            this.page = to.name;
        }
    },
    data() {
        return {
            page: ''
        }
    },
    methods: {
        // goTo(link) {
        //     this.$router.push({path: link});
        // }
    }
}
</script>

<style>

</style>