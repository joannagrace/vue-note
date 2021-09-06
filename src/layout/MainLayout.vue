<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li> -->
                    <router-link tag="li" to="/">
                        <a class="nav-link" aria-current="page">Home</a>
                    </router-link>
                    <router-link tag="li" to="/contact">
                        <a class="nav-link">Contact</a>
                    </router-link>
                    <li class="nav-item">
                        <a class="nav-link" @click="goTo('contact')">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <main>
             <router-view/>
        </main>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(link) {
            this.$router.push({path: link});
        }
    }
}
</script>

<style>

</style>