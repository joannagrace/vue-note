<template>
 <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
    <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">Note List</span>
    </a>
    <div v-for="(note, index) in value" :key="note.id" @click="onClick(note, index)" class="list-group list-group-flush border-bottom scrollarea">
      <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">{{ note.title }}</strong>
          <small>Wed</small>
        </div>
        <div class="col-10 mb-1 small">{{ note.desc }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoteList',
    props: {
      value: {
        type: Array,
        default: () => {
          return [];
        }
      },
    },
    methods: {
      onClick(note, index) {
        this.$emit('item-clicked', note, index);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>