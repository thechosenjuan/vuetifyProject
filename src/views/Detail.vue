<template>
  <p>{{message}} {{$route.params.id}}</p>
</template>

<script>
export default {
  name: "about-detail",
  data() {
    return {
      message: "Hello there"
    };
  }
};
</script>

