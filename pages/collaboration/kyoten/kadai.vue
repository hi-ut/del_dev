<template>
  <div>
    <v-container class="my-5">
      <LayoutPublication :title="title">
        <h1 class="h02">{{ title }}</h1>
        <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
        <template v-else>
          <p>課題名をクリックすると、研究・成果の概要が表示されます。</p>

          <h2 class="h03">特定共同研究課題一覧</h2>

          <h1 class="blue--text">TODO</h1>

          <h2 class="h03">一般共同研究課題一覧</h2>

          <h1 class="blue--text">TODO</h1>
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
  title: any = this.$t(
    'これまでに実施された特定共同研究・一般共同研究の研究課題'
  )

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
