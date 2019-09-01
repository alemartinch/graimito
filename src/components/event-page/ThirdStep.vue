<template>
  <v-container>
    <v-form v-model="isValidStep">
      <v-row justify="space-between">
        <v-col lg="5">
          <v-combobox
            v-model="tsEventData.type"
            :items="types"
            label="Tipo de evento"
            chips
            :rules="[v => !!v || 'El tipo de evento es requerido']"
          >
          </v-combobox>
        </v-col>
        <v-col lg="7">
          <v-combobox
            v-model="tsEventData.categories"
            :items="categories"
            label="Categoría"
            multiple
            chips
            :disabled="secondTypesDisabled"
          >
          </v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="4">
          <v-combobox
            v-model="tsEventData.devType"
            :items="devTypes"
            label="Tipo de desvío"
            :disabled="devTypeDisabled"
          >
          </v-combobox>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="end">
      <v-btn
        color="primary"
        :disabled="!isValidStep"
      >Continuar</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isValidStep: true,
      tsEventData: {
        type: '',
        categories: []
      },
      types: [
        { text: 'Gestión de Cambio', value: 'GC' },
        { text: 'Auditoría Externa', value: 'AE' },
        { text: 'Auditoría Interna', value: 'AI' },
        { text: 'Hallazgos', value: 'HA' },
        { text: 'Req. Internos / Legales', value: 'RI' },
        { text: 'Evento No Planeado / Crítico / Accidentes o Incidentes', value: 'ENP' },
        { text: 'Otros', value: 'OT' }
      ],
      categories: [
        { text: 'Medio Ambiente', value: 'MD' },
        { text: 'Higiene y Seguridad', value: 'HS' },
        { text: 'Seguridad de Procesos', value: 'SPR' },
        { text: 'Seguridad Patrimonial', value: 'SPA' },
        { text: 'Confiabilidad / Integridad Mecánica', value: 'CI' },
        { text: 'Diseño e Ingeniería', value: 'DI' },
        { text: 'Calidad', value: 'CAL' },
        { text: 'Otros', value: 'OT' }
      ],
      devTypes: [
        { text: 'No Conformidad', value: 'NC' },
        { text: 'No Conformidad M', value: 'NCM' },
        { text: 'Oportunidad de Mejora', value: 'OM' }
      ]
    }
  },
  computed: {
    secondTypesDisabled () {
      return !this.tsEventData.type ||
              this.tsEventData.type.value === 'GC'
    },
    devTypeDisabled () {
      return !this.tsEventData.type ||
              this.tsEventData.type.value === 'GC'
    }
  },
  watch: {
    'tsEventData.type' (type) {
      if (!type || type.value === 'GC') {
        this.tsEventData.categories = []
        this.tsEventData.devType = ''
      }
    }
  }
}
</script>

<style>
</style>