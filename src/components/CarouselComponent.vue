<template>
  <v-carousel hide-delimiters height="800px">
    <v-carousel-item v-for="(item,i) in arrayOfImages" :key="i" :src="item"></v-carousel-item>
  </v-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>
<script>
export default {
  name: "carouselComponent",
  data() {
    return {
      arrayOfImages: [
        "https://cdn.wallpapersafari.com/98/6/QWTV06.jpg",
        "https://wallpapercave.com/wp/2oFDnXJ.jpg",
        "https://static.wixstatic.com/media/dc7808_7584310e18c2475fb142ab4d295e63d2~mv2.jpg"
      ]
    };
  }
};
</script>
