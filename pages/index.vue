<template>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-sm-12 col-md-3">
        <ResumeMenu />
      </div>
      <div class="col col-12 col-sm-12 col-md-9">
        <ResumeDetails />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.col {
  padding: 0;
}
.container {
  padding: 0;
  margin: 0;
  max-width: 100%;
}

.row {
  width: 100%;
  margin: 0;
}

.menu {
  height: 100%;
}
</style>
