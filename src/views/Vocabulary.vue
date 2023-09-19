<template>
  <v-container>
    <Lesson />
    <v-row class="mt-5">
      <v-col cols="9">
        <v-row>
          <v-col class="" cols="auto">
            <v-btn
              @click="activeMenu = 'voca1'"
              :color="activeMenu == 'voca1' ? 'primary' : ''"
              >어휘1</v-btn
            >
          </v-col>
          <v-col cols="auto">
            <v-btn
              @click="activeMenu = 'voca2'"
              :color="activeMenu == 'voca2' ? 'primary' : ''"
              >어휘2</v-btn
            >
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col cols="12" class="pb-0">Title</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field
              dense
              outlined
              class="editLabel"
              required
              :label="activeMenu"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-row class="ml-1">
          <v-col cols="12" class="pb-0 pt-0" align="end">
            <v-btn @click="addVoca" color="primary" class="pt-0 pb-0"
              >+Add</v-btn
            >
          </v-col>
          <v-col
            cols="5"
            align="center"
            class="pb-0 pt-0 mt-5"
            style="background-color: #565555; color: white"
          >
            <span justify="center"> 한국어 </span>
          </v-col>
          <v-col
            cols="5"
            align="center"
            class="pb-0 pt-0 mt-5 ml-2"
            style="background-color: #565555; color: white"
          >
            <span> 번역 </span>
          </v-col>
          <v-col cols="12" v-for="i in vocaNum" :key="i" class="pt-0">
            <v-row>
              <v-col cols="5" class="pr-0 pl-0">
                <v-text-field outlined height="70px" v-model="korean[i]">
                </v-text-field>
              </v-col>
              <v-col cols="5" class="pr-0 pl-0 ml-2">
                <v-text-field outlined height="70px" v-model="trans[i]">
                </v-text-field>
              </v-col>
              <v-col cols="1">
                <v-row>
                  <v-file-input
                    placeholder="Image"
                    accept="image/*"
                    dense
                    ref="imageFile"
                    v-model="imageFile[i]"
                    @change="handleImageUpload()"
                  >
                  </v-file-input
                ></v-row>
                <v-row>
                  <v-file-input
                    placeholder="Audio"
                    accept="audio/*"
                    dense
                    ref="imageFile"
                    v-model="audioFile[i]"
                    @change="handleImageUpload()"
                  >
                  </v-file-input
                ></v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="3" class="pb-0"> Comment </v-col>
          <v-col cols="3" class="pb-0 pt-0" align="end">
            <v-btn @click="add" class="pt-0 pb-0" color="primary">+Add</v-btn>
          </v-col>

          <v-col cols="12" class="" v-for="i in number" :key="i">
            <v-textarea
              height="150px"
              label="내용을 입력해주세요"
              dense
              outlined
              class="editLabel"
              v-model="comment[i]"
              required
              width="400px"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn @click="save" style="background-color: green; color: white">
            Save
          </v-btn>
          <v-btn class="ml-3"> Next </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Vocabulary",
  components: {
    Lesson: () => import("../components/Lesson"),
  },
  data: () => ({
    activeMenu: "voca1",
    number: 1,
    vocaNum: 1,
    comment: [],
    korean: [],
    trans: [],
    imageFile: [],
    audioFile: [],
  }),
  created() {
    this.activeMenu = this.$router.meta.active;
  },
  watch: {
    activeMenu: "changeMenu",
  },
  methods: {
    changeMenu: function () {
      if (this.activeMenu == "voca1") {
        this.$router.push({ path: "/voca1" });
        this.init();
      } else {
        this.$router.push({ path: "/voca2" });
        this.init();
      }
    },
    add() {
      this.number++;
    },
    addVoca() {
      this.vocaNum++;
    },
    init() {
      this.number = 1;
      this.vocaNum = 1;
      this.comment = [];
      this.korean = [];
      this.trans = [];
      this.imageFile = [];
      this.transaudioFile = [];
    },
    save() {
      console.log(this.comment);
      console.log(this.korean);
      console.log(this.trans);
      console.log(this.imageFile);
      console.log(this.audioFile);
    },
  },
};
</script>

<style scoped></style>
