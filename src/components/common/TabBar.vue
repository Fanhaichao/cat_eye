<template>
  <footer>
    <ul>
      <router-link
        tag="li"
        :to="item.path"
        active-class="active"
        v-for="item in tabbars "
        :key="item.id"
      >
        <i class="fas" :class="[item.icon]"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      tabbars: [
        {
          id: 1,
          text: "首页",
          path: "/home",
          icon: "fa-home"
        },
        {
          id: 2,
          text: "影院",
          path: "/cinema",
          icon: "fa-angry"
        },
        {
          id: 3,
          text: "我的",
          path: "/mine",
          icon: "fa-user"
        }
      ]
    };
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/css/border.styl';
@import '../../assets/css/theme.styl';

footer {
  width: 100%;
  height: 0.48rem;
  padding-top: 0.04rem;
  border: 1px 0 0 0, #ccc;

  ul {
    display: flex;
    justify-content: space-around;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active {
        i {
          color: $theme_color;
        }

        span {
          color: $theme_color;
        }
      }

      i {
        font-size: 0.25rem;
        margin-bottom: 0.04rem;
        color: #696969;
      }

      span {
        font-size: 0.12rem;
        color: #696969;
      }
    }
  }
}
</style>