<template>
  <li>This is a todo: {{ todo }}</li>
</template>

<script>
export default {
  props: {
    todo: String
  },
}
</script>

<style lang="scss" scoped></style>