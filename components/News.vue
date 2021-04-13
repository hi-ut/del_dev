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

     <div class="page-link c4">
<ul>
<li><a @click="select = 'latest'">{{ $t('新着一覧') }}</a></li>
<li><a @click="select = 'news'">{{ $t('news') }}</a</li>
<li><a @click="select = 'event'">{{ $t('event') }}</a> </li>
<li><a @click="select = 'data'">{{ $t('data') }}</a> </li>
</ul>
</div>


    <div class="data" style="height: 700px">

     <template v-for="(newsMap, key) in newsList">

      <dl :key="key" v-if="select === 'latest' || select === newsMap.tag">
        
          <dt class="mb1">
            {{ newsMap.date }}
            <!-- <span class="chip1">{{ newsMap.featured }}</span> -->
            <span class="chip2">{{ $t(newsMap.tag) }}</span>
          </dt>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <dd>
            <span class="fc1">{{ newsMap.featured }}</span> <span v-html="newsMap.content"></span>
          </dd>
        
      </dl>

      </template>
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

  select: string = "latest"

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
