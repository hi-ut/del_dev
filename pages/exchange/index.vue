<template>
  <div>
    <LayoutExchange :title="title" :index="6" :breadcrumbs="[]">
      <h1 class="h02">{{ title }}</h1>

      <nuxt-content :document="document" />
    </LayoutExchange>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutExchange from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutExchange,
  },
})
export default class about extends Vue {
  async asyncData({ $content, app, params }: any): Promise<any> {
    const slug = params.slug
    const document = await $content(
      `${app.i18n.locale}/exchange`,
      slug || 'index'
    ).fetch()
    return { document }
  }

  get title() {
    return this.$t('国際交流')
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
