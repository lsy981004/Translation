<template>
  <v-container>
    <Lesson />
    <v-row>
      <v-col cols="9">
        <v-row no-gutters>
          <v-col cols="12" class="pb-0 mt-14">Package Title</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field dense outlined v-model="packageTitle"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pb-0">Package Description</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field
              dense
              outlined
              v-model="packageDescription"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pb-0">Lesson No.</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field dense outlined v-model="lessonNumber"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pb-0">Lesson Title(한국어)</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field dense outlined v-model="lessonTitle"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pb-0">Lesson Title(번역)</v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field
              dense
              outlined
              v-model="lessonTitleTrans"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pb-0 d-flex">
            <span>Lesson Description</span>
          </v-col>
          <v-col cols="12" class="pt-0">
            <QuillEditor :description="description" @input="getEditorInput" />
          </v-col>
        </v-row>

        <v-row no-gutters justify="space-between">
          <v-col cols="3" class="pb-0"> Comment </v-col>
          <v-col cols="3" class="pb-0 pt-0" align="end">
            <v-btn @click="add" color="primary" class="pt-0 pb-0">+Add</v-btn>
          </v-col>

          <v-col cols="12" class="" v-for="i in number" :key="i">
            <v-textarea
              height="150px"
              dense
              label="내용을 입력해주세요"
              outlined
              v-model="comment[i]"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row no-gutters justify="end">
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
import dedent from "dedent";

export default {
  name: "Information",
  components: {
    Lesson: () => import("@/components/Lesson"),
    QuillEditor: () => import("@/components/editor/QuillEditor"),
  },
  data: () => ({
    packageTitle: "",
    packageDescription: "",
    lessonNumber: "",
    lessonTitle: "",
    lessonTitleTrans: "",
    language: "",
    number: 1,
    comment: [],
    description: dedent`
          <h1 class="ql-align-center"><s class="ql-font-serif">I am bubble example!</s></h1><p><br></p><p><span class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</span></p><p><strong class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</strong></p><p><br></p><p><u class="ql-font-serif">Dead history is write in ink, the living sort in blood.</u></p><p><em class="ql-font-serif">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</em></p><p><br></p><p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p><p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p><p><br></p><p><span class="ql-font-serif">Chaos not is a pit, chaos is a ladder.</span></p><p><span class="ql-font-serif">A chain needs all sorts of metals, and a land needs all sorts of people.</span></p><p><br></p><p><span class="ql-font-serif">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</span></p>
        `,

    editor: null,
  }),
  mounted() {},
  beforeDestroy() {},
  methods: {
    getEditorInput: function (input) {
      this.description = input;
    },
    add() {
      this.number++;
    },
    next() {
      this.$store.dispatch("menuMutation", { newMenu: "purpose" });
      this.$router.push({
        path: "purpose",
      });
    },
    save() {
      this.$store.dispatch("menuMutation", { newMenu: this.newMenu });
      this.$store.dispatch("languageMutation", { newLan: this.language });
      console.log(this.packageTitle);
      console.log(this.packageDescription);
      console.log(this.lessonNumber);
      console.log(this.lessonTitle);
      console.log(this.lessonTitleTrans);
      console.log(this.comment);
    },
  },
};
</script>

<style scoped></style>
