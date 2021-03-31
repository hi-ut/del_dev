<template>
  <LayoutNews :title="title">
    <h1 class="h02">{{ title }}</h1>
    <nuxt-content :document="document" />
  </LayoutNews>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import News from '~/components/news/List.vue'

@Component({
  components: {
    News,
  },
})
export default class news extends Vue {
  async asyncData({ $content, app, params }: any): Promise<any> {
    const slug = params.slug
    const document = await $content(
      `${app.i18n.locale}/news`,
      slug || 'index'
    ).fetch()
    return { document }
  }

  get title(): any {
    return (this as any).document.date.split('T')[0]
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
