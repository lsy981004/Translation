<template>
  <v-container>
    <Lesson />
    <v-row class="mt-10">
      <v-col cols="9">
        <v-row>
          <v-col cols="12">
            <span> Video </span>
            <span>
              <v-file-input
                placeholder="No file chosen"
                accept="video/*"
                outlined
                dense
                hide-details
                v-model="videoFile"
                @change="handleImageUpload()"
              >
                <template v-slot:append>
                  <v-progress-circular
                    indeterminate
                    size="25"
                    color="white"
                  ></v-progress-circular>
                </template>
              </v-file-input>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0">Title</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field dense outlined v-model="title"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0">Description</v-col>
          <v-col cols="12" class="pt-0">
            <v-textarea dense v-model="description" outlined></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="3" class="pb-0"> Comment </v-col>
          <v-col cols="3" class="pb-0 pt-0" align="end">
            <v-btn @click="add" class="pt-0 pb-0" color="primary">+Add</v-btn>
          </v-col>

          <v-col cols="12" class="" v-for="i in number" :key="i">
            <v-textarea
              dense
              outlined
              label="내용을 입력해주세요"
              v-model="comment[i]"
              required
              height="150px"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn @click="save" style="background-color: green; color: white">
            Save
          </v-btn>
          <v-btn @click="next" class="ml-3"> Next </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Information",
  components: {
    Lesson: () => import("../components/Lesson"),
  },
  data: () => ({
    language: "",
    number: 1,
    videoFile: [],
    comment: [],
    title: "",
    description: "",
  }),
  methods: {
    add() {
      this.number++;
    },
    next() {
      this.$store.dispatch("menuMutation", { newMenu: "voca1" });
      this.$router.push({
        path: "voca1",
      });
    },
    save() {
      console.log(this.title);
      console.log(this.description);
      console.log(this.comment);
    },
  },
};
</script>

<style scoped></style>
