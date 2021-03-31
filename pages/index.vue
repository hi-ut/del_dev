<template>
  <div>
    <!-- InstanceBeginEditable name="toppage" -->
    <!-- v-if="lg" -->
    <div class="key-img">
      <!--  style="background-color: #e6e1d8" -->
      <img
        :src="/*baseUrl + '/assets/img/top/keyv.png'*/ 'https://www.hi.u-tokyo.ac.jp/common/images/mainimg2018.jpg'"
        width="1050"
        alt="東京大学史料編纂所 Historiographical Institute The University of Tokyo"
      />
    </div>
    <!-- InstanceEndEditable -->

    <div class="contents-wrap">
      <main id="main-contents" class="main-contents">
        <News :is-list-link="true" />

        <!-- InstanceBeginEditable name="main" -->
        <section v-if="false" class="top-topics">
          <h2 class="h01">
            News &amp; Topics
            <nuxt-link class="list" :to="localePath({ name: 'news' })">{{
              $t('一覧')
            }}</nuxt-link>
          </h2>

          <News2 :items="items" :top="true"></News2>
        </section>
        <section v-if="false" class="top-link">
          <a class="btn01 v1" href="https://clioteam.hi.u-tokyo.ac.jp/share/"
            >共同研究に<br />
            参加されている皆様へ</a
          ><nuxt-link class="btn01 v1" :to="localePath({ name: 'faq-slug' })"
            >よくあるご質問</nuxt-link
          ><a
            class="btn01 v1"
            href="https://cliocyb.hi.u-tokyo.ac.jp/start.html"
            >所内用サイト</a
          >
        </section>
        <!-- InstanceEndEditable -->
      </main>
      <div id="sidebar">
        <aside>
          <!-- InstanceBeginEditable name="sub" -->
          <nav>
            <h2>{{ $t('組織') }}</h2>
            <ul>
              <li>
                <a :href="getHiPath('kodai')">{{ $t('古代史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('chusei')">{{ $t('中世史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('kinsei')">{{ $t('近世史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('komo')">{{ $t('古文書古記録部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('tokushu')">{{ $t('特殊史料部門') }}</a>
              </li>
              <li>
                <a :href="getHiPath('gazo')">{{
                  $t('画像史料解析センター')
                }}</a>
              </li>
              <li>
                <a :href="getHiPath('cdps')">{{
                  $t('前近代日本史情報国際センター')
                }}</a>
              </li>
              <li>
                <nuxt-link :to="localePath({ name: 'faculty' })">{{
                  $t('教員一覧')
                }}</nuxt-link>
              </li>
              <li v-if="lang === 'ja'">
                <nuxt-link :to="localePath({ name: 'collaboration-kyoten' })">{{
                  $t('共同利用・共同研究拠点')
                }}</nuxt-link>
              </li>
              <li>
                <a :href="getHiPath('gijyutu')">{{
                  $t('技術部・史料保存技術室')
                }}</a>
              </li>
              <li>
                <a :href="getHiPath('ir')">{{ $t('IR・広報室') }}</a>
              </li>
            </ul>
          </nav>
          <p v-if="false">
            <a class="fc2" href="shakairenkei/srindex.html"
              >社会連携研究部門は<br />
              2013年3月に時限を迎えました。</a
            >
          </p>

          <div class="frame02 mt2">
            <p>
              <a href="https://utf.u-tokyo.ac.jp/"
                ><img
                  :src="baseUrl + '/assets/img/common/btn_kihu.png'"
                  alt="東京大学基金"
              /></a>
            </p>
            <a class="btn01 v2" href="https://utf.u-tokyo.ac.jp/project/pjt10"
              ><em>{{ $t('史料編纂所基金') }}</em
              ><template v-if="lang === 'ja'">（部局基金）</template></a
            >
          </div>

          <div v-if="false" class="mt-10"></div>
          <!-- InstanceEndEditable -->

          <div class="mt1">
            <a href="https://twitter.com/UTokyo_HI" target="_blank">
              <img
                src="https://www.hi.u-tokyo.ac.jp/common/images/Twitter_Social_Icon_Square_Color.png"
                width="45px"
              />
            </a>
          </div>

          <Timeline
            v-if="false"
            id="UTokyo_HI"
            class="mt-10"
            source-type="profile"
            height="200px"
            :options="{ height: '400' }"
          ></Timeline>
        </aside>
      </div>
    </div>

    <div v-if="lang === 'ja'" class="foot-link" style="background: white">
      <div class="inner">
        <a class="btn01 v1" href="https://clioteam.hi.u-tokyo.ac.jp/share/"
          >共同研究に<br />
          参加されている皆様へ</a
        ><nuxt-link class="btn01 v1" :to="localePath({ name: 'faq-slug' })"
          >よくあるご質問</nuxt-link
        ><a class="btn01 v1" href="https://cliocyb.hi.u-tokyo.ac.jp/start.html"
          >所内用サイト</a
        >
      </div>
    </div>

    <div v-if="false" class="foot-link">
      <div class="inner">
        <a class="btn02" href="https://wwwap.hi.u-tokyo.ac.jp/ships/"
          ><i
            ><img
              class="img-a"
              :src="baseUrl + '/assets/img/common/foot_link_icon01.svg'"
              alt="" /><img
              class="img-b"
              :src="baseUrl + '/assets/img/common/foot_link_icon01_h.svg'"
              alt="" /></i
          >{{ $t('データベース検索') }}</a
        >
        <a
          class="btn02"
          :href="baseUrl + (lang != 'ja' ? '/' + lang : '') + '/tosho'"
          ><i
            ><img
              class="img-a"
              :src="baseUrl + '/assets/img/common/foot_link_icon02.svg'"
              alt="" /><img
              class="img-b"
              :src="baseUrl + '/assets/img/common/foot_link_icon02_h.svg'"
              alt="" /></i
          >{{ $t('史料の利用') }}</a
        >
        <nuxt-link class="btn02" :to="localePath({ name: 'publication' })"
          ><i
            ><img
              class="img-a"
              :src="baseUrl + '/assets/img/common/foot_link_icon03.svg'"
              alt="" /><img
              class="img-b"
              :src="baseUrl + '/assets/img/common/foot_link_icon03_h.svg'"
              alt="" /></i
          >{{ $t('編纂・研究・公開') }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import News2 from '~/components/news/List.vue'
const { Timeline } = require('vue-tweet-embed')

@Component({
  components: {
    Timeline,
    News2,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  lang: string = this.$i18n.locale

  get lg(): boolean {
    return this.$store.getters.getLg
  }

  set lg(value) {
    this.$store.commit('setLg', value)
  }

  head() {
    const title =
      this.$i18n.locale === 'ja'
        ? '東京大学史料編纂所'
        : 'Historiographical Institute The University of Tokyo'
    return {
      titleTemplate: null,
      title,
    }
  }

  getHiPath(data: string) {
    if (data.includes('hi.u-tokyo.ac.jp')) {
      return data
    }

    return this.baseUrl + '/' + (this.lang === 'en' ? 'en/' : '') + data + '/'
  }

  /*
  async asyncData({ $content, app }: any) {
    const types = ['latest', 'news', 'event', 'data']
    const items: any = {}
    const lang = app.i18n.locale
    for (let i = 0; i < types.length; i++) {
      const type = types[i]

      let where: any = {
        // lang,
        featured: true,
      }

      if (type !== 'latest') {
        where.type = type
      }

      let query = await $content(lang + '/news')
        .where(where)
        .sortBy('date', 'desc')
      const featured = await query.fetch()

      const filterStartDate = new Date('2015-01-01T00:00:00.000Z').valueOf()

      where = {
        // lang,
        featured: false,
        date: {
          $gte: filterStartDate,
        },
      }

      if (type !== 'latest') {
        where.type = type
      }

      query = await $content(lang + '/news')
        .where(where)
        .sortBy('date', 'desc')
        .limit(15)
      const nonFeatured = await query.fetch()

      items[type] = {
        featured,
        nonFeatured,
      }
    }

    return { items }
  }
  */
}
</script>
