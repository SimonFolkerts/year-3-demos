<template>
  <li>Todo: {{ todo }}</li>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped></style>