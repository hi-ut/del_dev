<template>
  <div>
    <v-row>
      <v-col cols="12" sm="8">
        <slot />
      </v-col>
      <v-col cols="12" sm="4">
        <v-card flat outlined>
          <v-list nav>
            <v-list-item-group>
              <v-subheader>{{ $t('組織') }}</v-subheader>
              <LayoutOrganization/>
            </v-list-item-group>
          </v-list>
        </v-card>

        <v-card class="mt-10" flat outlined>
          <v-card-text>
            <Timeline id="UTokyo_HI" sourceType="profile" height="200px" 
            :options="{ 'height': '400'}"></Timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutOrganization from '~/components/layout/LayoutOrganization.vue'
//import { Timeline } from 'vue-tweet-embed'
const {Timeline} = require('vue-tweet-embed')

@Component({
  components: {
    LayoutOrganization,
    Timeline,
  },
})
export default class LayoutAbout extends Vue {}
</script>
