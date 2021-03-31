<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>
    <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
    <template v-else>
      <h2 class="h03">共同利用・共同研究拠点</h2>

      <p>
        <nuxt-link :to="localePath({ name: 'collaboration-kyoten' })"
          >共同利用・共同研究拠点の活動について</nuxt-link
        >
      </p>

      <h2 class="h03">科学研究費補助金による共同研究</h2>

      <h3 class="h04">基盤研究 (S)</h3>

      <ul>
        <li>
          <a
            href="https://www.hi.u-tokyo.ac.jp/collaboration/kaken/17H06117.html"
            >天皇家・公家文庫収蔵史料の高度利用化と日本目録学の進展―知の体系の構造伝来の解明―</a
          >（2017 ～ 2021年度）
        </li>
        <ul>
          <li>
            <a href="https://www.hi.u-tokyo.ac.jp/kodai/kinri-kuge-index.html"
              >プロジェクトページ</a
            >
          </li>
          <li>
            <a href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-17H06117/"
              >KAKEN</a
            >
          </li>
        </ul>
      </ul>

      <h3 class="h04">基盤研究 (A)</h3>

      <ul>
        <li>
          コンテキストに応じた人文科学データパッケージ化に関する研究（2020 ～
          2024年度）
        </li>
        <ul>
          <li>
            <a href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-20H00010/"
              >KAKEN</a
            >
          </li>
        </ul>
      </ul>
    </template>
  </LayoutPublication>
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
  title: any = this.$t('共同研究')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
