<template>
  <div class="p-3">
    <div class="form-floating mb-3">
      <input v-model="form.title" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Title</label>
    </div>
    <div class="form-floating">
      <textarea :value="form.desc" @input="onInput($event.target.value)" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 300px"></textarea>
      <label for="floatingTextarea2">description</label>
    </div>
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: 'test',
          desc: 'desc'
        }
      }
    },
    props: {
      value: {
        type: Object,
        default: () => {
          return {};
        }
      },
    },
    watch: {
      value: {
        deep: true,
        handler(old, newVal) {
          this.form = JSON.parse(JSON.stringify(this.value));
        }
      }
    },
    mounted () {
      this.form = this.value;
    },
    methods: {
      onInput(val) {
        this.form.desc = val;
      },
      onSave() {
        this.$emit('input', this.form);
        console.log(this.form);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>