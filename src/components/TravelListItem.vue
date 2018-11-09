<template>
  <md-card md-with-hover>
    <md-card-header>
      <div class="md-title">{{ checklist.title }}</div>
    </md-card-header>
    <md-card-content>
      <md-list>
        <md-list-item v-for="item in checklist.items" :key="item.id">
          <md-checkbox v-if="item.type === 'checkbox'" v-model="item.checked">
          </md-checkbox>
          <md-field>
            <md-input
              v-model="item.title"
              @keypress.enter="$store.commit('addItem', checklist);"
            ></md-input>
          </md-field>
        </md-list-item>
      </md-list>
    </md-card-content>
    <md-card-actions>
      <md-button @click="addItem(checklist);">Add</md-button>
      <md-button @click="addTitle(checklist);">Add Title</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TravelListItem',
  props: {
    checklist: Object
  },
  methods: {
    ...mapMutations({
      addItem: 'addItem',
      addTitle: 'addTitle'
    })
  }
};
</script>

<style scoped>
.md-list-item {
  margin-right: 15px;
}

.md-field {
  margin: 0px;
  padding-top: 0px;
  min-height: 0px;
}
</style>
