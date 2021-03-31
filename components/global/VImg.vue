<template>
  <figure>
    <img :style="'height: ' + height" :src="absPath" :alt="alt || caption" />
    <figcaption v-html="caption"></figcaption>
  </figure>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Member extends Vue {
  baseUrl: any = process.env.BASE_URL

  @Prop()
  height: any

  @Prop()
  src: any

  @Prop()
  alt: any

  @Prop()
  caption: any

  get absPath() {
    return this.baseUrl + this.src
  }
}
</script>
