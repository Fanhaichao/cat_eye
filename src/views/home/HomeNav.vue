<<template>
    <div>
        <ul>
            <router-link tag="li" to="/city" class="city">
                <span>杭州</span>
                <i class="fas fa-caret-down"></i>
            </router-link>
            <li class="nav">
                <router-link :to="{name:'f-hot'}" active-class="active">正在热映</router-link>

                <router-link :to="{name:'f-coming'}" active-class="active">即将上映</router-link>
                
            </li>
            <router-link tag="li" to="/search" class=" search">
                <a >
                    <i class="fas fa-ban"></i>
                </a>
            </router-link>
        </ul>
    </div>
    </template>


<style lang="stylus" scoped>
@import '../../assets/css/border.styl';
@import '../../assets/css/theme.styl';

ul {
  display: flex;
  height: 0.44rem;
  border: 0 0 1px, #ccc;

  .city {
    flex: 70;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.14rem;
      margin-right: 0.03rem;
    }

    i {
      font-size: 0.1rem;
    }
  }

  .nav {
    flex: 255;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      font-size: 0.15rem;
      text-decoration: none;
      color: #666666;
      font-weight: 900;
      height: 100%;
      line-height: 0.44rem;
      padding: 0 0.15rem;
      border-bottom: 0.02rem solid transparent;

      &.active {
        color: $theme_color;
        border-bottom: 0.02rem solid $theme_color;
      }
    }
  }

  .search {
    flex: 50;
    width: 0.45rem;
    height: 0.45rem;

    a {
      width: 100%;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      i {
        font-size: 0.2rem;
        color: #666;
      }
    }
  }
}
</style>
    