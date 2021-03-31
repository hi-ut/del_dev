<template>
  <div>
    <LayoutPublication :title="title" :index="2">
      <h1 class="h02">{{ title }}</h1>
      <nuxt-content :document="document" />
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  async asyncData({ $content, app, params }: any): Promise<any> {
    const slug = params.slug
    const document = await $content(
      `${app.i18n.locale}/publication`,
      slug || 'index'
    ).fetch()
    return { document }
  }

  get title(): any {
    return (this as any).document.title
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
