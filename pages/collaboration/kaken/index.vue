<template>
  <div>
    <v-container class="my-5">
      <LayoutPublication :title="title">
        <h1 class="mb-5">{{ title }}</h1>
        <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
        <template v-else>
          <h2 class="my-5">科学研究費補助金による共同研究</h2>

          <h3 class="mb-5">中核的研究拠点（COE）形成基礎研究費</h3>

          <ul>
            <li>
              <a
                href="https://www.hi.u-tokyo.ac.jp/collaboration/kaken/17H06117.html"
                >天皇家・公家文庫収蔵史料の高度利用化と日本目録学の進展―知の体系の構造伝来の解明―</a
              >（2017 ～ 2021年度）
            </li>
            <ul>
              <li>
                <a
                  href="https://www.hi.u-tokyo.ac.jp/kodai/kinri-kuge-index.html"
                  >プロジェクトページ</a
                >
              </li>
              <li>
                <a
                  href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-17H06117/"
                  >KAKEN</a
                >
              </li>
            </ul>
          </ul>

          <h3 class="my-5">若手研究（スタートアップ）</h3>

          <ul>
            <li
              v-for="(obj, index) in map['若手研究（スタートアップ）']"
              :key="index"
            >
              <nuxt-link
                :to="
                  localePath({
                    name: 'collaboration-kaken-slug',
                    params: {
                      slug: obj.slug,
                    },
                  })
                "
                >{{ obj.title }}</nuxt-link
              >（2017 ～ 2021年度）

              <ul>
                <li>
                  <a
                    :href="
                      'https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-' +
                      obj.slug +
                      '/'
                    "
                    >KAKEN</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </template>
      </LayoutPublication>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/LayoutPublication.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('共同研究')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  async asyncData({ $content }: any) {
    const year = new Date().getFullYear() // env.currentYear
    console.log(year)
    const where = {
      // to: { $contains: year }
    }
    const query = await $content('kaken').where(where).sortBy('from', 'desc')
    const news = await query.fetch()
    console.log({ news })
    const map: any = {}
    for (let i = 0; i < news.length; i++) {
      const obj = news[i]
      const type = obj.type
      if (!map[type]) {
        map[type] = []
      }
      map[type].push(obj)
    }
    return { map }
  }
}
</script>
