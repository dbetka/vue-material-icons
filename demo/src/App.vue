<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Individual component
      </router-link>
      <router-link to="/full-bundle">
        Full bundle
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 8px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page {
  position: relative;
  flex: 1;
  padding: 16px;
  line-height: 24px;
}
.label {
  vertical-align: super;
  padding: 4px 0;
}
</style>
