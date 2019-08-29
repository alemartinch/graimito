<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="datePicker"
        :label="label || 'Fecha'"
        prepend-icon="today"
        readonly
        v-on="on"
        :disabled="disabled === null ? true : disabled"
        :hint="itemHint"
        persistent-hint
      ></v-text-field>
    </template>

    <v-date-picker
      v-model="fecha"
      no-title
      scrollable
      @input="menu = true"
      locale="es-AR"
      :allowed-dates="allowedDates"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',

  data: () => ({
    menu: false,
    fecha: new Date().toISOString().substr(0, 10)
  }),

  watch: {
    fecha (newVal) {
      this.$emit('evt-fecha-change', newVal)
    },

    fechaInit (newVal, oldVal) {
      if ((newVal && !oldVal) || (newVal && oldVal && newVal !== oldVal)) {
        this.fecha = newVal
      } else if (!newVal && oldVal) {
        this.fecha = null
      }
    }
  },

  created () {
    if (this.fechaInit) {
      this.fecha = this.fechaInit
    }
  },

  computed: {
    datePicker: function () {
      if (!this.fecha) return null
      const [year, month, day] = this.fecha.split('-')
      return `${day}/${month}/${year}`
    }
  },

  props: ['fechaInit', 'disabled', 'allowedDates', 'label', 'icon', 'itemHint']
}
</script>
