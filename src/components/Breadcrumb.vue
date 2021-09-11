<template>
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <router-link tag="li" to="/" class="breadcrumb-item">
                <a class="nav-link" aria-current="page">Home</a>
            </router-link>
            <li class="breadcrumb-item active" aria-current="page">{{ currentPage }}</li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: 'Breadcrumbs',
        watch: {
            currentPage(newValue, oldValue) {
                console.log("new page is " + newValue);
            }
        },
        props: {
            currentPage: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>