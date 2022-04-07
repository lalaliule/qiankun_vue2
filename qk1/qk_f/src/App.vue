<template>
    <div id="container" class="container">
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/">F应用</el-menu-item>
        <el-menu-item index="/qk_s1" >子应用1</el-menu-item>
        <el-menu-item index="/qk_s2">子应用2</el-menu-item>
      </el-menu>
        <!-- <router-link to="/">F应用</router-link>|
        <router-link to="/qk_s1">子应用1</router-link>
        <router-link to="/qk_s2">子应用1</router-link> -->
        <!-- <head-top v-if="$route.name != 'Home'" /> -->
        <router-view />
        <div  id="subApp" />
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '/',
      };
    },
    created(){
      this.activeIndex='/'+this.$route.path.split('/')[1]
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath,'....');
      }
    }
  }
</script>
<style lang="less" scoped>
  .container{
    box-sizing: border-box;
  }
</style>
<style lang="less">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
