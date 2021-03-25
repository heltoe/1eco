<template>
  <div class="footer">
    <p class="copy">© {{ currentYear }} Eco One</p>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  padding: 20px;
}
.copy {
  color: #fff;
}
</style>
