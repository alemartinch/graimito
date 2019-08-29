<template>
  <v-container>
    <v-form v-model="isValidStep">
      <v-row></v-row>
      <v-row>
        <v-col cols="4">
          <v-select :items="equipments" label="Equipo"></v-select>
        </v-col>
        <v-col cols="2">
          <v-text-field v-model="tsEventData.eventTeam" label="ID Equipo" multiple chips hide-selected></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea label="Descripción"></v-textarea>
        </v-col>
      </v-row>
    </v-form>
    <v-btn
      color="primary"
      :disabled="!isValidStep"
    >Continue</v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isValidStep: false,
      tsEventData: {
        equipment: null,
        team: []
      },
      equipments: [{}]
    }
  }
}
</script>

<style>
</style>