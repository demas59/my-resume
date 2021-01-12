<template>
  <div>
    <div class="titre text-white position-absolute mw-100">
      <h1>
        <strong>{{ $t('name') }}:</strong>
        Aymeric De Massary
      </h1>
      <h2>Developpeur Web</h2>
    </div>
    <img src="../assets/mountain.png" alt="mountain.png" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}

.titre {
  position: absolute;
  left: 10%;
  top: 1%;
}

h1 {
  font-size: 4vw;
}
h2 {
  font-size: 3vw;
}
</style>
