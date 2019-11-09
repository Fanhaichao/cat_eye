<<template> 
<div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
        <div class="list-wrap" style="margin-top: 0px;">
          <div v-if="movies">
              <home-item :data="item" v-for="item in movies.movieList" :key="item.id"></home-item>
          </div>
        </div>
    </div>
    <Loading v-if="loadingFlag"></Loading>
 </div>
</template>


<script>
import HomeItem from "./HomeItem";
import Bscroll from "better-scroll";
import _ from "loadsh";
import { mapActions, mapState } from "vuex";
import { Toast } from "mint-ui";
export default {
  props: ["movies"],
  components: {
    HomeItem,
    Toast
  },
  methods: {
    ...mapActions(["getComingMovies", "ShowLoading", "HideLoading"])
  },
  computed: {
    ...mapState({
      loadingFlag: state => state.home.loadingFlag
    })
  },
  mounted() {
    let count = 0;
    const bs = new Bscroll(".page", {
      pullUpLoad: {
        threshold: 30
      }
    });
    bs.on("pullingUp", () => {
      //有一个选项要配置
      //id 分组
      const movieIds = this.movies.movieIds.slice(12);
      const Ids = _.chunk(movieIds, 10);
      // console.log(Ids[count]);
      if (count == Ids.length) {
        Toast({
          message: "已经没有更多电影了",
          position: "bottom",
          duration: 2000
        });
      }

      if (count < Ids.length) {
        //可以进行数据请求
        console.log("进行数据请求");
        this.ShowLoading();
        setTimeout(() => {
          this.getComingMovies(Ids[count].join(","));
          this.HideLoading();
        }, 2000);
      }
      bs.finishPullUp();
      count++;
    });
  }
};
</script>

<style lang="stylus" scoped>
.tab-content {
  height: 100%;

  .page {
    height: 100%;
  }
}
</style>