<template>
  <div>
    <template v-for="(obj, index) in menu">
      <v-list-item
        v-if="obj.lang.includes($i18n.locale)"
        :key="index"
        :href="
          baseUrl + '/' + ($i18n.locale == 'en' ? '/en/' : '') + obj.to.name
        "
        exact
      >
        <v-list-item-content>
          <v-list-item-title>
            <span>{{ $t(obj.label) }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class LayoutAbout extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  json: any = process.env.jsonData

  get menu(): any {
    return this.json[0].children[3].children
  }
}
</script>
