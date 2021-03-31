<template>
  <div>
    <v-container class="my-5">
      <LayoutQuestion :title="title">
        <h2 class="h03">{{ title }}</h2>

        <p>
          東京大学史料編纂所（以下、「本所」）が公開している画像データ（関連するメタデータを含む）
          の利用条件は下記の通りです。
        </p>

        <h3 class="h04">【１】本所が所蔵する原本等の史料画像データ</h3>

        <p>
          史料種別（区分）が「貴重書（原本・古写本類）」・「特殊蒐書」（一部を除く）・「写本」のものが該当します。
        </p>

        <p>
          ※史料種別は、所蔵史料目録データベース検索結果画面では下図の例のように表示されています。
        </p>

        <h2 class="h03">成果物提供のお願い</h2>

        <p>
          本所ウェブサイトのコンテンツを利用して作成された書籍、雑誌、論文、パンフレット、映像作品、新聞記事、テレビ番組等の成果物をぜひとも本所にご提供くださいますようお願い申し上げます。
          ご提供が難しい場合は、利用実績を<nuxt-link
            :to="localePath({ name: 'question' })"
            >問い合わせフォーム</nuxt-link
          >よりご報告くださるだけでも結構です。
        </p>

        <h1 class="red--text">問い合わせフォームは分けた方がよいか？</h1>

        <p>
          ご提供先については<nuxt-link
            :to="localePath({ name: 'tosho-toiawase' })"
            >こちら</nuxt-link
          >をご参照ください。
        </p>

        <h2 class="h03">問い合わせ先</h2>

        <p>
          上記についてご不明な点やご質問等ございましたら<nuxt-link
            :to="localePath({ name: 'question' })"
            >問い合わせフォーム</nuxt-link
          >にてお知らせください。
        </p>
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
  title: any = this.$t('利用条件：史料画像データの利用')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
