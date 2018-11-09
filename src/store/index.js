import vuex from "vuex";
import vue from "vue";

import getTravelListData from "@/api/get-travel-list-data";

vue.use(vuex);

export default new vuex.Store({
  state: {
    travelLists: []
  },
  getters: {
    completedLists(state, getters) {
      return state.travelLists.filter(list => {
        const total = list.items.filter(item => item.type === "checkbox")
          .length;
        return total === list.items.filter(item => item.checked).length;
      }).length;
    }
  },
  actions: {
    fetchTravelLists(context) {
      context.commit("setTravelLists", getTravelListData());
    }
  },
  mutations: {
    setTravelLists(state, travelLists) {
      state.travelLists = travelLists;
    },
    addItem(state, travelList) {
      state.travelLists = state.travelLists.map(list => {
        if (list.id === travelList.id) {
          list.items.push({
            type: "checkbox",
            checked: false,
            title: ""
          });
        }
        return list;
      });
    },
    addTitle(state, travelList) {
      state.travelLists = state.travelLists.map(list => {
        if (list.id === travelList.id) {
          list.items.push({
            type: "title",
            checked: false,
            title: ""
          });
        }
        return list;
      });
    }
  }
});
