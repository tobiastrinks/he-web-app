<template>
    <span>
      <slot></slot> &euro;
      <span>{{note}}</span>
    </span>
</template>

<script>
export default {
  name: 'Price',
  props: {
    note: {
      type: String
    }
  }
};
</script>
