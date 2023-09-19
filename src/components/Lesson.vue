<template>
  <table border="1">
    <thead>
      <tr style="background-color: #e3e3e3">
        <th>Language</th>
        <th>Lesson No.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ getLanguage }}</td>
        <td>{{ getLessonNumber }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Lesson",
  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    getLessonNumber() {
      return this.$store.getters.getLessonNumber;
    },
  },
};
</script>

<style scoped>
table {
  width: 30%;
  border: 1px solid #444444;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #444444;
}
</style>
