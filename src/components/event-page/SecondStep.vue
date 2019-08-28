<template>
  <v-container>
    <v-form v-model="isValidStepTwo">
      <v-row>
        
      </v-row>
      <v-row class="ml-5">
      </v-row>
    </v-form>
    <v-btn
      color="primary"
      :disabled="!isValidStepTwo"
      @click="nothing"
    >Continue</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isValidStepTwo: true
    }
  }
}
</script>

<style>
</style>