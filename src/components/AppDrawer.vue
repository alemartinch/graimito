<template>
  <div>
    <v-navigation-drawer v-model='drawer' clipped app width="300px">
      <v-list>
        <!-- HOME -->
        <v-list-item link :to="{ name:'home' }">
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
          prepend-icon="mdi-hammer"
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>Eventos & Acciones</v-list-item-title>
          </template>
          <v-list-item link :to="{ name:'event' }">
            <v-list-item-content>
              <v-list-item-title>Crear Evento</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Buscar Evento</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-file-search-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Buscar Acciones Pendientes</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted-triangle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Estadísticas y Reportes</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left app>
      <v-toolbar-title>
        <v-app-bar-nav-icon @click.stop='drawer = !drawer'></v-app-bar-nav-icon>
        <span>EAT/CPA Tool</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    })
  }
</script>