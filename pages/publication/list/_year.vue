<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02 mb-5">{{ title2 }}</h1>

      <template v-for="(obj, key) in years">
        <nuxt-link
          v-if="obj.year != -1"
          :key="key"
          class="mr-5"
          :to="localePath(obj.to)"
          >{{ obj.year }}年度</nuxt-link
        >
      </template>

      <h2 class="h03 mt-5">{{ currentFiscalYear }}年度出版物</h2>

      <p v-if="currentFiscalYear === 2019" style="color: red">
        中村メモ：2019年度出版物のリンクに誤りあり
      </p>

      <div v-for="(item2, key2) in items" :key="'key2-' + key2">
        <template v-if="item2">
          <ul>
            <li v-for="(item3, key3) in item2.children" :key="key3">
              <template v-if="item3.url">
                <a :href="getUrl(item3.url)">
                  {{ item3.label }}
                </a>
              </template>
              <template v-else>
                {{ item3.label }}
              </template>

              <template v-if="item3.buy"
                ><a class="ml-4" :href="item3.buy">購入</a></template
              >
            </li>
          </ul>
          <div class="text-right">
            以上{{ item2.publisher }}{{ item2.type == '頒布' ? 'にて' : 'より'
            }}{{ item2.type }}中
          </div>
        </template>
      </div>

      <figure class="mt-10">
        <img :src="baseUrl + '/publication/images/pub_list.gif'" />
      </figure>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
// import axios from 'axios'
import LayoutPublication from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  asyncData({ payload, params }: any) {
    if (payload) {
      return payload
    } else {
      const currentFiscalYear: any =
        params.year || process.env.publicationLatestFiscalYear

      const data: any = process.env.publication

      /*
      let baseUrl = process.env.BASE_URL
      if (baseUrl === '') {
        baseUrl = 'http://127.0.0.1:3000'
      }

      const url = baseUrl + `/data/publication.json`
      const { data } = await axios.get(url)
      */
      const items = data[currentFiscalYear]
      return { items }
    }
  }

  latestFiscalYear: any = process.env.publicationLatestFiscalYear

  currentFiscalYear: any = this.$route.params.year || this.latestFiscalYear

  title: any = (this.$route.params.year || this.latestFiscalYear) + '年度出版物'

  title2: any = this.$t('編纂・研究・公開')

  breadcrumbs: any[] = [
    {
      text: this.title2,
      name: 'publication',
    },
  ]

  results: any = {}

  getUrl(url: string) {
    return url.includes('http') ? url : 'https://www.hi.u-tokyo.ac.jp' + url
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get years() {
    const years = []

    for (let i = this.latestFiscalYear; i >= 2006; i--) {
      years.push({
        year: i,
        to: {
          name: 'publication-list-year',
          params: {
            year: i,
          },
        },
      })
    }

    return years
  }
}
</script>
