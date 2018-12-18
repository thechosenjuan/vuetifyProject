<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Brand</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/about">About</router-link>
      </v-btn>
      
        <v-flex xs12 sm2>
          <v-overflow-btn :items="project_dropdown" label="Projects" target="#dropdown-select"></v-overflow-btn>
        </v-flex>
      
      <v-btn flat>CONTACT</v-btn>
      <v-btn flat>Language</v-btn>
    </v-toolbar>
    <router-view class="b-router--margin"></router-view>
    <footer-component></footer-component>
  </v-app>
</template>

<style>
 .b-router--margin {
   margin-top: 56px;
 }
</style>

<script>
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  components: {
    FooterComponent,
  },
  data() {
    return {
      project_dropdown: ["Retail", "Hospitality", "Work Space"]
    };
  }
};
</script>
