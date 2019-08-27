<template>
  <v-container fluid>
    <v-card width="400px" class="mx-auto my-auto">
      <v-card-title>
        Login EAT
      </v-card-title>
      <v-card-text>
        <v-form class="pt-5">
          <v-row>
            <v-text-field
              class="px-3"
              placeholder = "Usuario"
              solo
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              class="px-3"
              placeholder = "Password"
              solo
            ></v-text-field>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text>Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>