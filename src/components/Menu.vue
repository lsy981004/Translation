<template>
  <v-container>
    <v-list class="menu pt-3">
      <v-list-item-title
        @click="goto('main')"
        class="main-text"
        style="color: black !important; cursor: default !important"
      >
        Admin
      </v-list-item-title>

      <v-list-item-title @click="goto('main')" class="main-text mt-6">
        홈
      </v-list-item-title>

      <v-list-item-title @click="goto('create')" class="main-text mt-6">
        데이터 입력
      </v-list-item-title>
      <v-list-item-group class="pl-0">
        <v-list-item
          v-if="getMenu == 'information'"
          @click="goto('information')"
          style="cursor: pointer; color: red !important"
          class="pb-0 pl-0"
        >
          — {{ "강의 정보" }}
        </v-list-item>
        <v-list-item
          v-else
          @click="goto('information')"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "강의 정보" }}
        </v-list-item>
        <v-list-item
          v-if="getMenu == 'purpose'"
          class="pb-0 pl-0"
          @click="goto('purpose')"
          style="cursor: pointer; color: red !important"
        >
          — {{ "학습 목표" }}
        </v-list-item>
        <v-list-item
          v-else
          class="pb-0 pl-0"
          @click="goto('purpose')"
          style="cursor: pointer"
        >
          — {{ "학습 목표" }}
        </v-list-item>
        <v-list-item
          v-if="getMenu == 'voca1'"
          @click="goto('voca1')"
          style="cursor: pointer; color: red !important"
          class="pb-0 pl-0"
        >
          — {{ "어휘" }}
        </v-list-item>
        <v-list-item
          v-else
          @click="goto('voca1')"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "어휘" }}
        </v-list-item>
        <v-list-item
          @click="goto(quiz)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "퀴즈" }}
        </v-list-item>
        <v-list-item
          @click="goto(conversation)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "대화" }}
        </v-list-item>
        <v-list-item
          @click="goto(pron)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "발음" }}
        </v-list-item>
        <v-list-item
          @click="goto(grammer)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "문법&표현" }}
        </v-list-item>
        <v-list-item
          @click="goto(culture)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "문화" }}
        </v-list-item>
        <v-list-item
          @click="goto(finish)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "마무리" }}
        </v-list-item>
        <v-list-item
          @click="goto(common)"
          style="cursor: pointer"
          class="pb-0 pl-0"
        >
          — {{ "Common words" }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({}),
  computed: {
    getMenu: {
      get: function () {
        return this.$store.getters.getMenu;
      },
    },
  },
  methods: {
    goto(link) {
      this.$store.dispatch("menuMutation", { newMenu: link });
      this.$router.push({
        path: link,
      });
    },
  },
};
</script>

<style scoped>
.menu {
  background-color: rgb(235, 245, 255) !important;
}

.main-text {
  cursor: pointer;
  font-weight: bold;
  font-size: 25px;
  color: rgb(28, 132, 180) !important;
}
</style>
