<template>
  <div>
    <v-container class="my-5">
      <LayoutQuestion :title="title">
        <h1 class="h02">{{ title }}</h1>

        <p>
          東京大学史料編纂所がホームページから提供するデータベースでは、ユニコード（UTF-8）を使用しています。本データベースを利用に際しては、以下の外字・ゲタ字（〓）・異体字同定処理に関する原則をお読み下さい。(2006/4/17)
        </p>

        <h2 class="h03">外字処理について</h2>

        <p>
          ここでの「外字」とは、ユニコード（UTF-8）にない文字のことです。現状では、２つの処理方式が混在しています。
        </p>

        <h3 class="h04">
          東京大学多国語処理研究会の提供するＧＴフォント（12*12のGIFフォント）によってイメージ表示するもの｡
        </h3>

        <p>
          この処理方式では、諸橋『大漢和辞典』（大修館書店）の漢字にふりあたえられた一連番号（大漢和コード）を入力し、それを利用してＧＴフォントを表示させています。
        </p>
        <p>
          【注意】大漢和コードとＧＴフォントとの連繋がうまくいっていないものは、<img
            :src="baseUrl + '/img/hi/img-gaiji.gif'"
          />が表示される場合があります。
        </p>
        <h1 class="red--text">要確認・リンク切</h1>
        <p>
          【参考】東京大学多国語処理研究会については<a
            href="https://www.l.u-tokyo.ac.jp/GT/"
            >こちら</a
          >のホームページをご覧下さい。
        </p>

        <h3 class="h04">ゲタ字〓を入力したもの。</h3>

        <p>
          諸橋『大漢和辞典』（大修館書店）外の漢字など、大漢和コードを与えることができないものは、ゲタ字〓を入力しています。
        </p>
        <p>
          【注意】ただし、次の項目で説明するように、現在では、ユニコードフォントあるいはＧＴフォントで表示可能なものでも、ゲタ字〓が入力されているものがあります。
        </p>
        <h1 class="blue--text">TODO</h1>
      </LayoutQuestion>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutQuestion from '~/components/layout/LayoutQuestion.vue'

@Component({
  components: {
    LayoutQuestion,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('データベースにおける文字について')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
