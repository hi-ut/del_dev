<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <h2 class="h03">
      シンポジウム・研究集会・講演会（最近5 年間の主要なもの）
    </h2>

    <p style="color: red">【TODO】</p>

    <h2 class="h03">国際的な連携等への取組み</h2>

    <p>
      日本学士院・人間文化研究機構の在外日本関係史料収集事業と連携して、中国国家博物館・韓国国史編纂委員会・ロシア国立歴史文書館・ロシア国立海軍文書館・米国イエール大学・バイネキ図書館などの史料所蔵機関と学術交流を深め、各機関が所蔵する日本関係史料の収集と目録化などの共同研究に取り組んでいます。
    </p>

    <p>
      また、史料編纂所を受入機関として希望する外国人研究者のため、研究室の確保をはじめ、所蔵史料の利用も史料編纂所教員とほぼ同じ待遇にして、研究に専念できる環境を整えています。
    </p>
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
  title: any = this.$t('成果公開・教育')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
