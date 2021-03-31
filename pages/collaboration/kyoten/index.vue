<template>
  <div>
    <v-container class="my-5">
      <LayoutPublication :title="title">
        <h1 class="h02">{{ title }}</h1>
        <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
        <template v-else>
          <p>
            東京大学史料編纂所は、前近代を中心とする多くの日本史史料を収集し、影写本や写真帳の形で、また、『大日本史料』や『大日本古文書』などの史料集の編纂・刊行を通じて、さらに近年ではさまざまなデータベースを開発することによって、これらを研究資源として多くの研究者の利用に供してきました。
            こうした基盤のもとに、本所は2009年6月、文部科学大臣より「日本史史料の研究資源化に関する研究拠点」として認定され、2010年度より活動を開始いたしました。
          </p>

          <p>
            この拠点は、研究資源とその利用手段のさらなる充実による日本史研究の発展を願う研究者コミュニティの要望にこたえるべく、これまでに蓄積してきた研究資源をもとに、国内外に存在する日本関係史料について、多くの研究者と連携して共同調査・共同研究をおこない、全体的・系統的な研究資源の蓄積と共同利用を促進し、史料学研究・日本史研究の質の向上を目指すことを目的とするものです。
          </p>

          <p>
            特定共同研究の共同研究員・一般共同研究の課題については、毎年公募を行ない、東京大学史料編纂所協議会の審議を経て、採択決定します。共同研究のご希望をお持ちの研究者は、ぜひご検討ください。
          </p>

          <p>
            これまでに実施された特定共同研究・一般共同研究の研究課題とその成果については、こちらをご覧ください。
          </p>

          <p>
            2020年度の拠点の事業として、東京大学史料編纂所協議会の審議に基づき、以下の共同研究を採択決定し、活動を開始しました。
          </p>

          <h1 style="color: red">TODO</h1>

          <!-- 
          <h2 class="h03">
            これまでに実施された特定共同研究・一般共同研究の活動
          </h2>

          <p>
            これまでに実施された特定共同研究・一般共同研究の研究課題とその成果については、
            <nuxt-link :to="localePath({ name: 'collaboration-kyoten-kadai' })"
              >こちら</nuxt-link
            >をご覧ください。
          </p>
          -->
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
  title: any = this.$t('共同利用・共同研究拠点の活動について')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
