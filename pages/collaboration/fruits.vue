<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>
    <template v-if="$i18n.locale == 'en'"> Japanese text only </template>
    <template v-else>
      <h2 class="h03">各種研究成果物</h2>

      <table class="table02">
        <thead>
          <tr>
            <th>成果物</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in items" :key="key">
            <td>
              <a :href="item.href">{{ item.label }}</a>
            </td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>

      <h2 class="h03 mt-10">東京大学史料編纂所研究成果報告書</h2>

      <h1 style="color: red">TODO</h1>
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
  title: any = this.$t('各種成果')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  items: any[] = [
    {
      label: '入来院家文書',
      description: '',
      href: this.baseUrl + '/iriki-j.html',
    },
    {
      label: '『日本関係海外史料目録』（全14冊）の画像の試験公開',
      description:
        '1997年度科学研究費『WWWサーバによる日本史データベースのマルチメディア化と公開に関する研究』（代表者：加藤友康）より',
      href: this.baseUrl + '/personal/yokoyama/hensan/microfilm.htm',
    },
  ]
}
</script>
