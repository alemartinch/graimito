<template>
  <v-container>
      <v-form ref="form" v-model="isValidStep">
          <v-row class="ml-1" justify="space-between">
            <v-col cols="3">
              <span>ID Evento:<br></span>
              <v-btn v-if="isNewEvent" small color="primary" @click="isNewEvent = !isNewEvent">NUEVO EVENTO</v-btn>
              <span v-else class="title">{{ fsEventData.id }}</span>
            </v-col>
            <v-col cols="3">
              <span>Originador:<br></span>
              <span class="title">{{ fsEventData.originator }}</span>
            </v-col>
            <v-col cols="3">
              <span>Fecha Creación:<br></span>
              <span class="title">{{ fsEventData.creationDate }}</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col md="3" sm="12">
              <v-select
                label="Establecimiento"
                v-model="fsEventData.facility"
                :items="establecimientos"
                prepend-inner-icon="mdi-houzz"
                :rules="estRules"
                required
                :disabled="isNewEvent"
              ></v-select>
            </v-col>
            <v-col md="3" sm="12">
              <v-select
                label="Sector"
                v-model="fsEventData.sector"
                :items="sectores"
                prepend-inner-icon="mdi-drawing-box"
                :rules="sectorRules"
                required
                :disabled="isNewEvent"
              ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="3">
              <DatePicker
                label="Fecha Evento"
                :disabled="isNewEvent"
                v-on:evt-fecha-change="setEventDate"
              />
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="3">
              <v-select
                v-model="fsEventData.eventLider"
                :items="liderships"
                label="Líder del evento"
                prepend-inner-icon="mdi-teach"
                :rules="liderRules"
                chips
                required
                :disabled="isNewEvent"
              ></v-select>
            </v-col>
            <v-col cols="8">
              <v-select
                v-model="fsEventData.team"
                :items="liderships"
                label="Participantes"
                multiple
                chips
                hide-selected
                clearable
                prepend-inner-icon="mdi-account-group"
                :rules="teamRules"
                required
                :disabled="isNewEvent"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              <v-textarea
                v-model="fsEventData.resume"
                name="resumen"
                label="Resumen del Evento (Máx. 250 caracteres)"
                counter
                no-resize
                :rules="resRules"
                :disabled="isNewEvent"
              ></v-textarea>
            </v-col>
            <v-col cols="6" md="6">
              <v-textarea
                v-model="fsEventData.description"
                name="descripcion"
                label="Descripción del Evento (Máx. 2000 caracteres)"
                counter
                no-resize
                :rules="desRules"
                :disabled="isNewEvent"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="11" lg="4">
              <v-switch 
                v-model="fsEventData.shareLearning" 
                label="¿Aprendizaje para compartir?" 
                inset
                required
                :disabled="isNewEvent"
              >
                <template v-slot:append>
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-help-circle</v-icon>
                    </template>
                    <span>lorem ipsum</span>
                  </v-tooltip>
                </template>
              </v-switch>
            </v-col>
          </v-row>
          <!-- <h3>{{ isValidStep }}</h3> -->
      </v-form>
      <v-row justify="end">
        <v-btn
          color="primary"
          :disabled="!isValidStep"
          @click="sendValidateOk"
        >Continue</v-btn>
      </v-row>
  </v-container>
</template>

<script>
import DatePicker from '@/components/event-page/DatePicker'
export default {
  components: {
    DatePicker
  },
  data () {
    return {
      isNewEvent: true,
      fsEventData: {
        id: 34,
        originator: 'Verónica Stagnitta',
        creationDate: new Date().toISOString().substr(0, 10),
        eventDate: new Date().toISOString().substr(0, 10),
        eventLider: '',
        facility: '',
        sector: '',
        shareLearning: false,
        resume: '',
        description: '',
        team: []
      },
      isValidStep: true,
      estRules: [v => !!v || 'El establecimiento es requerido'],
      sectorRules: [v => !!v || 'El sector es requerido'],
      liderRules: [v => !!v || 'El líder de evento es requerido'],
      teamRules: [v => v.length > 1 || 'El líder de evento es requerido'],
      resRules: [v => (v.length <= 250 && v.length > 0) || 'Max 250 caracteres'],
      desRules: [v => (v.length <= 2000 && v.length > 0) || 'Max 2000 caracteres'],
      establecimientos: ['Rosario', 'Perez', 'Casilda'],
      sectores: ['Acería', 'Laminación'],
      liderships: [
        'Andrés Lopez',
        'Verónica Stagnitta',
        'Walter Plaza',
        'Alejandro Chandro'
      ]
    }
  },
  methods: {
    sendValidateOk () {
      this.$emit('evt-firststep-ok', this.fsEventData)
    },
    setEventDate (date) {
      this.fsEventData.eventDate = date
    }
  }
}
</script>

<style>
</style>