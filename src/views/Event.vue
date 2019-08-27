<template>
  <div>
    <!-- <v-sheet class="text-center" color="blue-grey lighten-2">
      <h1 class="blue-grey--text text--darken-4">Crear un nuevo evento</h1>
    </v-sheet> -->
    <v-stepper v-model="e1" alt-labels vertical>
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" editable>Evento</v-stepper-step>

        <v-stepper-step :complete="e1 > 2" step="2" :editable="true">Tipo de Evento</v-stepper-step>

        <v-stepper-step :complete="e1 > 3" step="3" :editable="true">Equipo</v-stepper-step>

        <v-stepper-step :complete="e1 > 4" step="4" :editable="true">Inv. de Causa</v-stepper-step>

        <v-stepper-step step="5" :editable="isValidStepFour">Acciones</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form ref="form" v-model="isValidStepOne" class="ml-5">
            <v-container>
              <v-row>
                <v-col md="3" sm="12">
                  <v-select
                    label="Establecimiento"
                    v-model="event.facility"
                    :items="establecimientos"
                    prepend-icon="mdi-houzz"
                    :rules="estRules"
                    required
                  ></v-select>
                </v-col>
                <v-col md="3" sm="12">
                  <v-select
                    label="Sector"
                    :items="sectores"
                    prepend-icon="mdi-drawing-box"
                    :rules="sectorRules"
                    required
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="ml-1">
                <v-col cols="4">
                  <span>ID Evento:</span>
                  <span class="ml-5 title">{{ event.id }}</span>
                </v-col>
                <v-col cols="4">
                  <span>Fecha Creación:</span>
                  <span class="ml-5 title">{{ event.creationDate }}</span>
                </v-col>
                <v-col cols="4">
                  <span>Originador:</span>
                  <span class="ml-5 title">{{ event.originator }}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-select
                    v-model="event.eventLider"
                    :items="liderships"
                    placeholder="Líder del evento"
                    prepend-icon="mdi-teach"
                    :rules="liderRules"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="4" class="ml-5">
                  <v-switch 
                    v-model="event.shareLearning" 
                    label="¿ Aprendizaje para compartir ?"
                    required
                  ></v-switch>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" md="6">
                  <v-textarea
                    v-model="event.resume"
                    solo
                    name="resumen"
                    label="Resumen del Evento (Máx. 250 caracteres)"
                    counter
                    no-resize
                    :rules="resRules"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6">
                  <v-textarea
                    v-model="event.description"
                    solo
                    name="descripcion"
                    label="Descripción del Evento (Máx. 2000 caracteres)"
                    counter
                    no-resize
                    :rules="desRules"
                  ></v-textarea>
                </v-col>
              </v-row>
              <h3>{{ isValidStepOne }}</h3>
            </v-container>
          </v-form>
          <v-btn color="primary" :disabled="!isValidStepOne" @click="isValidStepOne ? e1 = 2 : e1 = 1">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2" editable>
          <v-form>
            <v-row>
              <v-col>
                <span class="title">Tipo de Evento</span>
              </v-col>
            </v-row>
            <v-row class="ml-5">
              <v-col cols="4">
                <v-list-item>
                  <v-checkbox 
                    v-model="changeManagment" 
                    class="my-0" 
                    label="Gestión de Cambios"
                    :rules="[v => !!v || 'You must agree to continue!']"
                  ></v-checkbox>
                </v-list-item>
                <v-list v-if="!changeManagment">
                  <v-list-item v-for="item in eventFirstTypes" v-bind:key="item.id">
                    <v-checkbox
                      v-model="event.eventFirstType"
                      class="my-0"
                      :label="item.name"
                      :disabled="changeManagment"
                      :value="item.value"
                      :rules="[v => !!v || 'You must agree to continue!']"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="4">
                <v-list v-if="event.eventFirstType[0] && !changeManagment">
                  <v-list-item v-for="item in eventSecondTypes" v-bind:key="item.id">
                    <v-checkbox 
                      v-model="event.eventSecondType"
                      class="my-0" 
                      :label="item.name"
                      :value="item.value"
                      :rules="[v => !!v || 'You must agree to continue!']"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-form>
          <v-btn color="primary" :disabled="!isValidStepTwo" @click="isValidStepTwo ? e1 = 3 : e1 = 2">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3" editable>
          <v-form v-model="isValidStepThree">
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="event.eventTeam"
                  :items="liderships"
                  label="Participantes"
                  multiple
                  chips
                  hide-selected
                  clearable
                >
                <template v-slot:selection="data">
                  <v-chip close>
                    <v-icon left color="red">mdi-account</v-icon>
                    {{ data.item }}
                  </v-chip>
                </template>
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-select
                  :items="teamTypes"
                  label="Equipo"
                >
                </v-select>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  v-model="event.eventTeam"
                  label="ID Equipo"
                  multiple
                  chips
                  hide-selected
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Descripción"
                >
                </v-textarea>
              </v-col>
            </v-row>
          </v-form>
          <v-btn color="primary" :disabled="!isValidStepThree" @click="isValidStepTwo ? e1 = 4 : e1 = 3">Continue</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data: () => ({
    e1: 0,
    isValidStepOne: true,
    // isValidStepTwo: true,
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
      { name: 'Evento No Planeado / Crítico / Accidentes o Incidentes', value: 'ENP' },
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
    establecimientos: ['Rosario', 'Perez', 'Casilda'],
    sectores: ['Acería', 'Laminación'],
    liderships: [
      'Andrés Lopez',
      'Verónica Stagnitta',
      'Walter Plaza',
      'Alejandro Chandro'
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
    changeManagment: false,
    estRules: [v => !!v || 'El establecimiento es requerido'],
    sectorRules: [v => !!v || 'El sector es requerido'],
    liderRules: [v => !!v || 'El líder de evento es requerido'],
    resRules: [v => (v.length <= 250 && v.length > 0) || 'Max 250 caaracteres'],
    desRules: [v => (v.length <= 2000 && v.length > 0) || 'Max 2000 caracteres']
  }),
  computed: {
    isValidStepTwo () {
      return this.event.eventSecondType.length
    }
  },
  methods: {

  }
}
</script>

<style>
</style>