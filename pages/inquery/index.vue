<template>
  <div>
    <LayoutAbout :title="title">
      <h1 class="h02">{{ title }}</h1>

      <template v-if="$i18n.locale == 'en'">
        <p>
          Please leave a About related to the website or database in the area
          below. Unfortunately, we cannot answer Abouts related to topics other
          than the website or database.
        </p>

        <p style="color: red">以下、TODO</p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfMezPW8Y09_HRLWJr6_ZMyRlu_c6GVGhlzHakwrypxu1Y4qA/viewform?embedded=true"
          width="640"
          height="854"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >読み込んでいます…</iframe
        >
      </template>
      <template v-else>
        <div class="page-link mt-10">
          <ul>
            <li><a href="#web">ウェブサイトおよびDB</a></li>
            <li><a href="#tosho">図書室利用</a></li>
            <li><a href="#ir">IR・広報</a></li>
          </ul>
        </div>

        <h2 id="web" class="h03 mt-10">
          ウェブサイトおよびデータベースに関する問い合わせページ
        </h2>

        <!--

          <p>
            図書室利用に関するお問い合わせは、下記フォームへの入力ではなく、<nuxt-link :to="localePath({name : 'tosho-toiawase'})">こちら</nuxt-link>を参照してください．
          </p>

          

          <p>
            <ul>
              <li>史料等の閲覧については<nuxt-link :to="localePath({name : 'tosho-etsuran'})">こちら</nuxt-link></li>
              <li>史料等の複製・掲載・放映などは<nuxt-link :to="localePath({name : 'tosho-shiryoriyo'})">こちら</nuxt-link></li>
            </ul>
          </p>

          <br/><br/>

          -->

        <p>
          以下は，当ウェブサイトおよびデータベースの利用方法に関するお問い合わせ用フォームです．
          史料の所在や内容に関するご質問には応じておりません．悪しからずご了承ください．
        </p>
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMezPW8Y09_HRLWJr6_ZMyRlu_c6GVGhlzHakwrypxu1Y4qA/viewform"
            >お問い合わせ用フォーム</a
          >
        </p>

        <ul>
          <li>
            データベース利用は<a href="http://wwwap.hi.u-tokyo.ac.jp/ships/"
              >こちら</a
            >
          </li>
        </ul>

        <h2 id="tosho" class="h03 mt-10">図書室利用に関するお問い合わせ</h2>

        <a :href="baseUrl + '/tosho/toiawase/'">こちら</a>を参照してください．

        <ul>
          <li>
            史料等の閲覧については<a :href="baseUrl + '/tosho/etsuran/'"
              >こちら</a
            >
          </li>
          <li>
            史料等の複製・掲載・放映などは<a
              :href="baseUrl + '/tosho/shiryoriyo/'"
              >こちら</a
            >
          </li>
        </ul>

        <h2 id="ir" class="h03 mt-10">IR・広報に関するお問い合わせ</h2>

        <p class="fc1">TODO</p>
      </template>
    </LayoutAbout>
  </div>
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
  title: any = this.$t('お問い合わせ')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
