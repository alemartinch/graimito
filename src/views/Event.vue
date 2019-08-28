<template>
  <div>
    <!-- <v-sheet class="text-center" color="blue-grey lighten-2">
      <h1 class="blue-grey--text text--darken-4">Crear un nuevo evento</h1>
    </v-sheet>-->
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" editable>Evento</v-stepper-step>

        <v-stepper-step :complete="e1 > 2" step="2" :editable="true">Tipo de Evento</v-stepper-step>

        <v-stepper-step :complete="e1 > 3" step="3" :editable="true">Equipo</v-stepper-step>

        <v-stepper-step :complete="e1 > 4" step="4" :editable="true">Inv. de Causa</v-stepper-step>

        <v-stepper-step step="5" :editable="isValidStepFour">Acciones</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <FirstStep/>
        </v-stepper-content>

        <v-stepper-content step="2" editable>
          
        </v-stepper-content>

        <v-stepper-content step="3" editable>
          <v-form v-model="isValidStepThree">
            <v-row>
              
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-select :items="teamTypes" label="Equipo"></v-select>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  v-model="event.eventTeam"
                  label="ID Equipo"
                  multiple
                  chips
                  hide-selected
                ></v-text-field>
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
            :disabled="!isValidStepThree"
            @click="isValidStepTwo ? e1 = 4 : e1 = 3"
          >Continue</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import FirstStep from '@/components/event-page/FirstStep'
export default {
  name: 'App',
  components: {
    FirstStep
  },
  data: () => ({
    e1: 0,
    isValidStepThree: true,
    isValidStepFour: true,
    event: {
      id: 34,
      creationDate: new Date().toISOString().substr(0, 10),
      originator: 'Verónica Stagnitta',
      eventLider: '',
      facility: '',
      sector: '',
      shareLearning: false,
      resume: '',
      description: '',
      eventFirstType: [],
      eventSecondType: [],
      eventTeam: []
    },
    eventFirstTypes: [
      { name: 'Auditoría Externa', value: 'GC' },
      { name: 'Auditoría Interna', value: 'AI' },
      { name: 'Hallazgos', value: 'HA' },
      { name: 'Req.Internos / Legales', value: 'RIL' },
      {
        name: 'Evento No Planeado / Crítico / Accidentes o Incidentes',
        value: 'ENP'
      },
      { name: 'Otros', value: 'OT' }
    ],
    eventSecondTypes: [
      { name: 'Medio Ambiente', value: 'MD' },
      { name: 'Higiene y Seguridad', value: 'HS' },
      { name: 'Seguridad de Procesos', value: 'SPR' },
      { name: 'Seguridad Patrimonial', value: 'SPA' },
      { name: 'Confiabilidad/ Integridad Mecánica', value: 'CIM' },
      { name: 'Diseño e Ingeniería', value: 'DI' },
      { name: 'Calidad', value: 'CAL' },
      { name: 'Otros', value: 'OT' }
    ],
    teamTypes: [
      'Intercambiadores',
      'Agitadores',
      'Mezcladores Estáticos',
      'Scrubbers',
      'Equipos Rotativos',
      'Equipos de Protección Contra Incendios',
      'Torres de destilación',
      'Tanques y Cañerías',
      'Dispositivos de Alivio',
      'Otro'
    ],
    changeManagment: false
  }),
  computed: {
    isValidStepTwo () {
      return this.event.eventSecondType.length
    }
  },
  methods: {}
}
</script>

<style>

</style>