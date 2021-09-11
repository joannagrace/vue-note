<template>
  <div class="row g-0">
    <div class="col-3">
      <note-list :value="list" @item-clicked="onItemClick"/>
    </div>
    <div class="col-9">
      <note-view v-model="currentNote" @input="onSave"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import NoteList from '@/components/note/NoteList.vue';
import NoteView from '@/components/note/NoteView.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    NoteList,
    NoteView,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'test1',
          desc: 'desc1'
        },
        {
          id: 2,
          title: 'test2',
          desc: 'desc2'
        }
      ],
      currentNote: {
        title: '',
        desc: ''
      },
      currentIndex: null
    }
  },
  methods: {
    onItemClick(note, index) {
      this.currentNote = note;
      this.currentIndex = index;
    },
    onSave(note) {
      this.$set(this.list, this.currentIndex, note);
    }
  },
}
</script>
