<template>
  <div>
    <!-- <v-sheet class="text-center" color="blue-grey lighten-2">
      <h1 class="blue-grey--text text--darken-4">Crear un nuevo evento</h1>
    </v-sheet>-->
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" editable>Evento</v-stepper-step>

        <v-stepper-step :complete="e1 > 2" step="2" :editable="isValidStepOne">Equipo</v-stepper-step>

        <v-stepper-step :complete="e1 > 3" step="3" :editable="isValidStepTwo">Tipo de evento</v-stepper-step>

        <v-stepper-step :complete="e1 > 4" step="4" :editable="true">Acciones</v-stepper-step>

        <v-stepper-step :complete="e1 > 5" step="5" :editable="true">Resumen</v-stepper-step>

      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <FirstStep
            v-on:evt-firststep-ok="validateFirstStep"/>
        </v-stepper-content>

        <v-stepper-content step="2" editable>
          <SecondStep
            v-on:evt-secondstep-ok="validateSecondStep"/>
        </v-stepper-content>

        <v-stepper-content step="3" editable>
          <ThirdStep/>
        </v-stepper-content>

        <v-stepper-content step="4" editable>
          <ThirdStep/>
        </v-stepper-content>

        <v-stepper-content step="5" editable>
          <ThirdStep/>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import FirstStep from '@/components/event-page/FirstStep'
import SecondStep from '@/components/event-page/SecondStep'
import ThirdStep from '@/components/event-page/ThirdStep'
export default {
  name: 'App',
  components: {
    FirstStep,
    SecondStep,
    ThirdStep
  },
  data: () => ({
    e1: 0,
    isValidStepOne: true,
    isValidStepTwo: true,
    isValidStepThree: true,
    isValidStepFour: true,
    event: {
      id: 34,
      creationDate: new Date().toISOString().substr(0, 10),
      ocurrenceDate: null,
      originator: 'Verónica Stagnitta',
      leader: '',
      facility: '',
      sector: '',
      equipment: null,
      shareLearning: false,
      resume: '',
      description: '',
      type: null,
      category: null,
      team: [],
      linkFolder: null,
      cause: [],
      actions: [],
      status: 'OPEN'
    },
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
  },
  methods: {
    validateFirstStep (fsEventData) {
      this.event.ocurrenceDate = fsEventData.eventDate
      this.isValidStepOne = true
      this.e1 = 2
    },
    validateSecondStep (fsEventData) {
      this.isValidStepTwo = true
      this.e1 = 3
    }
  }
}
</script>

<style>

</style>