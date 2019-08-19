<template>
  <v-app>
    <AppDrawer/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppDrawer from './components/AppDrawer'

export default {
  name: 'App',
  components: {
    AppDrawer
  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-home' },
      { title: 'About', icon: 'question_answer' }
    ]
    //
  })
}
</script>
