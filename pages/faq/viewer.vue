<template>
  <div>
    <v-container class="my-5">
      <LayoutQuestion :title="title">
        <h1 class="h02">{{ title }}</h1>

        <h2 class="h03">SHIPS Image Viewer 動作環境</h2>

        <p>以下の環境で動作を確認しています。（確認日：2016年2月1日）</p>
        <ul>
          　
          <li>OS：Windows 8.1</li>
          　
          <li>ブラウザ：Internet Explorer 11、Firefox 43.0</li>
        </ul>

        <h2 class="h03">SHIPS Image Viewer 使い方</h2>

        <h3 class="h04">画像一覧画面</h3>

        <figure class="mt-10">
          <img :src="baseUrl + '/img/hi/viewer_sample01.jpg'" alt="拾芥抄" />
        </figure>

        <table class="table02 mt-10">
          <thead>
            <tr>
              <th width="15%">番号</th>
              <th width="30%">項目名</th>
              <th width="55%">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>①</td>
              <td>所員用ログイン／ログアウト</td>
              <td>所内ユーザのログイン／ログアウトが可能です。</td>
            </tr>
            <tr>
              <td>②</td>
              <td>ページ送り</td>
              <td>
                ページ番号や矢印をクリックすることで指定のページに移動します。
              </td>
            </tr>
          </tbody>
        </table>
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
  title: any = this.$t('ビューアについて')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
