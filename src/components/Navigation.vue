<template>
  <aside class="navigation">
    <div class="menu">
      <div class="menu-top">
        <i class="fa fa-lg fa-bars"></i>
        <i class="fa fa-lg fa-home"></i>
        <i class="fa fa-lg fa-globe"></i>
        <i class="fa fa-lg fa-table"></i>
      </div>
      <div class="menu-bottom">
        <i class="fa fa-lg fa-gears"></i>
        <i class="fa fa-lg fa-user"></i>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.navigation {
  grid-area: nav;
}

.menu {
  height: 100%;
  background-color: #767676;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.menu-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fa {
  padding: 10px 5px;
  cursor: pointer;
}

i {
  width: 100%;
  text-align: center;
}

i:hover {
  background-color: #000
}
</style>
