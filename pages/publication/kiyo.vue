<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <p>1990 年度より所報から研究報告の部分を分離独立して発刊。毎年度発行。</p>
    <p>
      申込書は<a
        class="red--text"
        href="https://www.hi.u-tokyo.ac.jp/publication/moshikomi201911.pdf"
        >【PDFファイル要コピー】こちら</a
      >。
    </p>

    <ul>
      <li v-for="(value, index) in items" :key="index">
        <a :href="getUrl(value)">東京大学史料編纂所紀要第{{ value }}号</a>
      </li>
    </ul>
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
  title: any = this.$t('研究紀要')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get items(): number[] {
    const items = []
    for (let i = 29; i >= 1; i--) {
      items.push(i)
    }
    return items
  }

  getUrl(value: number) {
    const index = ('0000' + value).slice(-4)
    return (
      'https://www.hi.u-tokyo.ac.jp/publication/kiyo/kiyo' + index + '.html'
    )
  }
}
</script>
