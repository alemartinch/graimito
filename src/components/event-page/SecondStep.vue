<template>
  <v-container>
    <v-form v-model="isValidStep">
      <v-row>

      </v-row>
      <v-row>
        <v-col cols="4">
          <v-combobox 
            v-model="tsEventData.equipment.name" 
            :items="equipments" 
            label="Equipo"
            :rules="[v => !!v || 'Debe seleccionar un equipo']"
          ></v-combobox>
        </v-col>
        <v-col cols="2">
          <v-text-field 
            v-model="tsEventData.equipment.id" 
            label="ID Equipo"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea 
            v-model="tsEventData.equipment.description" 
            label="Descripción"
            :rules="[v => !!v || 'Debe poner una descripción']"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="end">
      <v-btn
        color="primary"
        :disabled="!isValidStep"
        @click="sendValidateOk"
      >Continuar</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isValidStep: false,
      tsEventData: {
        equipment: {
          id: '',
          name: '',
          description: ''
        },
        team: []
      },
      equipments: [
        { text: 'Intercambiadores', value: 'IN' },
        { text: 'Agitadores', value: 'AG' },
        { text: 'Mezcladores Estáticos', value: 'ME' },
        { text: 'Scrubbers', value: 'SC' },
        { text: 'Equipos rotativos', value: 'ER' },
        { text: 'Equipos de protección contra incendios', value: 'EP' },
        { text: 'Torres de destilación', value: 'TD' },
        { text: 'Tanques y cañerías', value: 'TC' },
        { text: 'Dispositivos de alivio', value: 'DA' },
        { text: 'Transformadores', value: 'TR' },
        { text: 'Otros', value: 'OT' }
      ]
    }
  },
  methods: {
    sendValidateOk () {
      this.$emit('evt-secondstep-ok', this.ssEventData)
    }
  }
}
</script>

<style>
</style>