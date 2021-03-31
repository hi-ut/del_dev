<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02 mb2">{{ title }}</h1>

      <div v-if="lang === 'ja'" class="mb2">
        <h2 class="h03">年度別出版物</h2>
        <ul>
          <template v-for="(obj, key) in years">
            <li :key="key">
              <nuxt-link
                v-if="obj.year != -1"
                class="mr-5"
                :to="localePath(obj.to)"
                >{{ obj.year }}年度</nuxt-link
              >
            </li>
          </template>
        </ul>

        <template v-if="false">
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
                    ><a class="ml-2" :href="item3.buy">購入</a></template
                  >
                </li>
              </ul>
              <div class="text-right">
                以上{{ item2.publisher
                }}{{ item2.type == '頒布' ? 'にて' : 'より' }}{{ item2.type }}中
              </div>
            </template>
          </div>
        </template>

        <figure class="mt2">
          <img :src="baseUrl + '/publication/images/pub_list.gif'" />
        </figure>
      </div>

      <p>
        <template v-if="lang === 'ja'">
          <!-- また、-->東京大学教員の著作を著者自らが語る広場「<a
            href="https://www.u-tokyo.ac.jp/biblioplaza/ja/search.php?q=&department=%E5%8F%B2%E6%96%99%E7%B7%A8%E7%BA%82%E6%89%80&category=&subcategory="
            >UTokyo BiblioPlaza</a
          >」もご確認ください。
        </template>
        <template v-else>
          <p>
            The Historiographical Institute has a full century of publishing
            experience, beginning with the Dai Nihon Shiryo series in 1901. It
            currently publishes multiple volumes of primary source materials
            each year. Some principle publications are
            <!-- described below. -->
            listed a right menu.
          </p>

          Please check out "<a
            href="https://www.u-tokyo.ac.jp/biblioplaza/en/search.php?q=&department=Historiographical&category=&subcategory="
            >UTokyo BiblioPlaza</a
          >, Books written by UTokyo professors".
        </template>
      </p>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'
// import axios from 'axios'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  get lang() {
    return this.$i18n.locale
  }

  asyncData({ payload }: any) {
    if (payload) {
      return payload
    } else {
      const currentFiscalYear: any = process.env.publicationLatestFiscalYear

      const data: any = process.env.publication

      /*

      let baseUrl = process.env.BASE_URL
      if (baseUrl === '') {
        baseUrl = 'http://127.0.0.1:3000'
      }

      const url = baseUrl + `/data/publication.json`
      const result = await axios.get(url)
      const data: any = result.data

    */

      const items = data[currentFiscalYear]

      return { items }
    }
  }

  latestFiscalYear: any = process.env.publicationLatestFiscalYear

  currentFiscalYear: any = this.$route.params.year || this.latestFiscalYear

  title: any = this.$t('編纂・研究・公開') // (this.$route.params.year || this.latestFiscalYear) + '年度出版物'

  // title2: any = this.$t('編纂・研究・公開')

  breadcrumbs: any[] = []

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
