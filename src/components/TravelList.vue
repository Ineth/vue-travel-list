<template>
  <section>
    <h1>Hello</h1>
    <p>Completed: {{ completedLists }}</p>
    <div class="md-layout">
      <TravelListItem
        class="md-layout-item"
        v-for="travelList in travelLists"
        :key="travelList.id"
        v-bind:checklist="travelList"
      >
      </TravelListItem>
    </div>
  </section>
</template>

<script>
import TravelListItem from './TravelListItem';
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'TraveList',
  methods: {
    ...mapActions(['fetchTravelLists'])
  },
  computed: {
    ...mapState(['travelLists']),
    ...mapGetters(['completedLists'])
  },
  created() {
    this.fetchTravelLists();
  },
  components: {
    TravelListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.float-left {
  float: left;
}
</style>
