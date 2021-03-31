<template>
  <section class="top-topics">
    <h2 class="h01">
      News &amp; Topics
      <nuxt-link
        v-if="isListLink"
        class="list"
        style="text-decoration: none"
        :to="localePath({ name: 'news' })"
        >{{ $t('一覧') }}</nuxt-link
      >
    </h2>
    <div class="data" style="height: 700px">
      <dl>
        <template v-for="(newsMap, key) in newsList">
          <dt :key="`dt-${key}`">
            {{ newsMap.date }}
            <span class="chip1">{{ newsMap.featured }}</span>
            <span class="chip2">{{ newsMap.tag }}</span>
          </dt>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <dd :key="`dd-${key}`" v-html="newsMap.content"></dd>
        </template>
      </dl>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  components: {},
})
export default class NewsComponent extends Vue {
  @Prop({ default: false })
  isListLink!: boolean

  newsList: any[] = []

  baseUrl: string = process.env.BASE_URL || ''

  lang: string = this.$i18n.locale

  async created() {
    const prefix =
      this.baseUrl + '/data/news/' + (this.lang === 'ja' ? '' : 'en/')
    try {
      const res = await axios.get(prefix + 2020 + '.json')
      this.newsList = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
</script>
