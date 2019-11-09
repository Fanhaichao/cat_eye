<template>
  <div>
    <home-list :movies="movies"></home-list>
  </div>
</template>



<script>
import HomeList from "./HomeList";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    HomeList
  },
  mounted() {
    //数据请求
    this.getMovies();
  },
  methods: {
    ...mapActions(["getMovies"])
  },
  computed: {
    ...mapState({
      movies: state => state.home.movies,
      name: state => state.home.name
    })
  }
};
</script>

<style lang="stylus" scoped>
div {
  flex: 1;
  overflow: hidden;
}
</style>