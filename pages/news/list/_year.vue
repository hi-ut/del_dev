<template>
  <LayoutNews :title="title">
    <News :items="items"></News>
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
  baseUrl: string = process.env.BASE_URL || ''

  year: number = -1

  get title() {
    return String(this.year) + this.$t('年度のニュース')
  }

  async asyncData({ $content, params, app }: any) {
    let year = params.year
    if (!year) {
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      year = currentMonth < 4 ? currentYear - 1 : currentYear
    }

    const filterStartDate = new Date(year + '-01-01T00:00:00.000Z').valueOf()
    const filterEndDate = new Date(
      Number(year) + 1 + '-03-31T23:59:59.000Z'
    ).valueOf()

    const where = {
      // lang: app.i18n.locale,
      date: {
        $between: [filterStartDate, filterEndDate],
      },
    }
    const news = await $content(`${app.i18n.locale}/news`)
      .where(where)
      .sortBy('date', 'desc')
      .fetch()

    const items: any = {}

    for (let i = 0; i < news.length; i++) {
      const n = news[i]
      const type = n.type || 'news'
      const f = n.featured ? 'featured' : 'nonFeatured'
      if (!items[type]) {
        items[type] = {
          featured: [],
          nonFeatured: [],
        }
      }
      items[type][f].push(n)
    }
    return { year, items }
  }
}
</script>
