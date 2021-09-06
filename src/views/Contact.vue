<template>
  <div class="container"> 
      <h1>Contact Page</h1>
      <h2>Phone</h2>
      <p v-if="showNumber">{{ phoneNumber }}</p>
      <button @mouseover="togglePhone">Call Us</button>
      <h3>Emails</h3>
      <!-- <span v-for="e in emails" :key="e.id">{{ e.value }}</span> -->
      <span>{{ emails[0].value }}</span>
  </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            showNumber: true,
            phoneNumber: '09090909',
            emails: [
                {
                    id: 1,
                    value: 'gerald@gmail.com'
                },
                {
                    id: 2,
                    value: 'michael@gmail.com'
                }
            ]
        }
    },
    // created() {
    //     console.log("created");
    // },
    // beforeMount() {
    //     this.initializePage();
    // },
    mounted() {
        // this.initializePage();
    },
    methods: {
        initializePage() {
            alert("page has been initialized" + this.phoneNumber);
        },
        togglePhone() {
            this.showNumber = !this.showNumber;
        }
    }
}
</script>

<style>

</style>