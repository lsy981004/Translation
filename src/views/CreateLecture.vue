<template>
  <div>
    <h1>언어 및 강의 선택</h1>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="6">
          <v-select
            :items="getLanguageList"
            :label="getLanguage"
            v-model="language"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="6">
          <v-select
            :items="index"
            :label="getLessonNumber"
            v-model="lessonNum"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="end">
      <v-btn @click="save" style="background-color: green; color: white">
        Save
      </v-btn>
      <v-btn class="ml-3" @click="next"> Next </v-btn>
    </v-row>
  </div>
</template>

<script>
import { getInfo } from "../service/create";

export default {
  name: "Create",
  data: () => ({
    language: "",
    lessonNum: 0,
    index: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
  computed: {
    getLanguageList() {
      return this.$store.getters.getLanguageList;
    },
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    getLessonNumber() {
      return this.$store.getters.getLessonNumber;
    },
  },
  methods: {
    save() {
      this.$store.dispatch("languageMutation", { newLan: this.language });
      this.$store.dispatch("lessonNumberMutation", {
        newLessonNumber: this.lessonNum,
      });
    },
    next() {
      this.$store.dispatch("menuMutation", { newMenu: "information" });
      this.$router.push({
        path: "information",
      });
    },
    test: async function () {
      const resp = await getInfo();
      console.log(resp);
    },
  },
};
</script>

<style scoped></style>
