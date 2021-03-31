<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h2 class="h03">{{ syoho.title }}</h2>

      <nuxt-content :document="syoho" />

      <hr />

      {{ syoho.footer }}
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
  async asyncData({ $content, params, app }: any) {
    const syoho = await $content(
      `${app.i18n.locale}/publication/syoho/${params.vol}`,
      params.slug || 'index'
    ).fetch()
    return { syoho }
  }

  get title(): string {
    return (this as any).syoho.title
  }

  get breadcrumbs(): any[] {
    return [
      {
        text: this.$t('編纂・研究・公開'),
        name: 'publication',
      },
      {
        text: this.$t('所報'),
        name: 'publication-syoho',
      },
      {
        text: (this as any).syoho.footer,
        to: this.localePath({
          name: 'publication-syoho-vol',
          params: (this as any).$route.params.vol,
        }),
      },
    ]
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
