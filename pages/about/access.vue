<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ $t(title) }}</h1>

    <p v-if="lang !== 'ja'" class="fc1">Written in Japanese</p>

    <h2 class="h03">東京大学史料編纂所の位置</h2>

    <figure>
      <img width="100%" :src="baseUrl + '/about/images/access_01.gif'" />
    </figure>

    <h2 class="h03 mt-10">交通機関のご利用</h2>

    <h3 class="h04">最寄り駅</h3>

    <ul class="mb-5">
      <li>東京メトロ丸の内線・都営大江戸線 本郷三丁目駅</li>
      <li>東京メトロ千代田線 湯島駅・根津駅</li>
      <li>東京メトロ南北線 東大前駅</li>
    </ul>

    <figure>
      <img width="100%" :src="baseUrl + '/about/images/access_02.gif'" />
    </figure>
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
  title: any = this.$t('access')

  lang: any = this.$i18n.locale

  head() {
    const title = this.title
    return {
      title,
    }
  }

  items: any[] = [
    {
      text: 'HOME',
      disabled: false,
      to: this.localePath({
        name: 'index',
      }),
      exact: true,
    },
    {
      text: this.$t(this.title),
    },
  ]
}
</script>
