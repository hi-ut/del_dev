<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ title }}</h1>

    <div v-if="$i18n.locale == 'en'" class="mb-5">Japanese text only</div>

    <h2 class="h03">施設</h2>

    <h3 class="h04">建物面積</h3>

    <p>8,167平方メートル</p>

    <p>
      うち書庫部分 2,831 平方メートル（収容能力41 万冊）／特別収蔵庫 125
      平方メートル
    </p>

    <h3 class="h04">略史</h3>

    <div class="txtImg_right-Cpt">
      <div class="mb-5">
        <img :src="baseUrl + '/about/images/about_hi_akamon.jpg'" />
        <p class="stx">小石川植物園へ移築される前の赤門庁舎</p>
      </div>
      <p>
        <span class="mtx">1911年（明治44年）赤門庁舎への移転</span><br />
        <span class="stx"
          >赤門内右側に移築された旧東京医学校本館（明治9年竣工）に移転し、はじめての独立庁舎をもちました。この庁舎は、1965年（昭和40年）に解体され、ついで小石川植物園内に移築されました（重要文化財、現「総合研究博物館小石川分館」）。</span
        >
      </p>
      <p>
        <span class="mtx">1916年（大正5年）赤門倉庫の建築</span><br />
        <span class="stx"
          >庁舎脇に鉄筋煉瓦造り3階建の耐火書庫が建てられました（同位置に現存）。関東大震災（1923年）でも庁舎と書庫は無事でした。</span
        >
      </p>
      <p>
        <span class="mtx">1928年（昭和3年）現本館の竣工</span><br />
        <span class="stx">鉄筋コンクリート造り、地上4階・地下1階。</span>
      </p>
      <p>
        <span class="mtx">1973年（昭和48年）現別館部分の増改築</span><br />
        <span class="stx">同じく地上7階・地下1階、書庫10層。</span>
      </p>
      <p>
        <span class="mtx"
          >2009 年（平成21年）現別館部分の耐震工事、赤門倉庫の本部移管</span
        >
      </p>
      <br class="clear" />
    </div>
  </LayoutAbout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutAbout from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutAbout,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('施設')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
