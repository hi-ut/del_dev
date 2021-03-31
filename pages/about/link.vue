<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ title }}</h1>
    <template v-if="$i18n.locale == 'en'">
      <p style="color: red">Written in Japanese</p>
    </template>

    <v-row>
      <v-col col="12" :sm="6">
        <ul>
          <li>
            <a href="http://www.lib.u-tokyo.ac.jp/">東京大学附属図書館</a>
          </li>
          <li><a href="http://ci.nii.ac.jp/books/?l=ja">CiNii Books</a></li>
          <li>
            <a href="http://www.u-tokyo.ac.jp/index_j.html"
              >東京大学ホームページ</a
            >
          </li>
          <li>
            <ul>
              <li>
                <a href="http://www.ioc.u-tokyo.ac.jp/">東洋文化研究所</a>
                <a href="http://www.ioc.u-tokyo.ac.jp/database/index.html"
                  >（データベース）</a
                >
              </li>
              <li>
                <a href="http://www.eri.u-tokyo.ac.jp/Jhome.html">地震研究所</a>
                <a href="http://www.eri.u-tokyo.ac.jp/?page_id=366"
                  >（刊行物・データベース）</a
                >
              </li>
              <li>
                <a
                  href="http://www.eri.u-tokyo.ac.jp/project/eri-hi-cro/index.html"
                  >地震火山史料連携研究機構</a
                >
              </li>
              <li>
                <a href="http://www.asnet.dir.u-tokyo.ac.jp/">ASNET</a> 東京大学
                日本・アジアに関する教育研究ネットワーク
              </li>
            </ul>
          </li>

          <br /><br />

          <li>
            <a href="http://www.shochou-kaigi.org/"
              >全国国立大学附置研究所長・センター長会議</a
            >
          </li>
          <li>
            <a href="http://www.kyoten.org/"
              >国立大学共同利用・共同研究拠点協議会</a
            >
          </li>

          <li><a href="http://www.nihu.jp/">人間文化研究機構</a></li>
          <li>
            <ul>
              <li>
                <a href="http://www.rekihaku.ac.jp">国立歴史民俗博物館</a>
                <a
                  href="http://www.rekihaku.ac.jp/education_research/gallery/database/index.html"
                  >（データベースれきはく）</a
                >
              </li>
              <li>
                <a href="http://www.nijl.ac.jp/">国文学研究資料館</a>
                <a href="http://www.nijl.ac.jp/pages/database/"
                  >（データベース）</a
                >
              </li>
              <li>
                <a href="http://www.nichibun.ac.jp/">国際日本文化研究センター</a
                ><a
                  href="http://www.nichibun.ac.jp/graphicversion/dbase/database.html"
                  >（データベース）</a
                >
              </li>
            </ul>
          </li>

          <li><a href="http://www.ndl.go.jp/">国立国会図書館</a></li>
          <li>
            <ul>
              <li><a href="https://ndlopac.ndl.go.jp/">蔵書検索</a></li>
              <li>
                <a href="http://iss.ndl.go.jp/">国立国会図書館サーチ</a>
              </li>
              <li>
                <a href="http://dl.ndl.go.jp/">デジタルコレクション</a>
              </li>
            </ul>
          </li>

          <li><a href="http://www.nich.go.jp/">国立文化財機構</a></li>
          <li>
            <ul>
              <li>
                <a href="http://www.tnm.jp/">東京国立博物館</a>
                <a href="http://webarchives.tnm.jp/imgsearch/">（画像検索）</a>
              </li>
              <li>
                <a href="http://www.kyohaku.go.jp/jp/">京都国立博物館</a>
                <a href="http://www.kyohaku.go.jp/jp/syuzou/index.html"
                  >（収蔵品データベース）</a
                >
              </li>
              <li>
                <a href="http://www.narahaku.go.jp/">奈良国立博物館</a>
                <a
                  href="http://imagedb.narahaku.go.jp/archive_search/search/Login.action"
                  >（画像データベース）</a
                >
              </li>
              <li>
                <a href="http://www.kyuhaku.jp/">九州国立博物館</a>
                <a href="http://d-archive.kyuhaku.jp/"
                  >（収蔵品デジタルアーカイブ）</a
                >
              </li>
              <li>
                <a href="http://www.tobunken.go.jp/index_j.html"
                  >東京文化財研究所</a
                >
                <a href="http://archives.tobunken.go.jp/internet/index.html"
                  >（研究資料総合検索システム）</a
                >
              </li>
              <li>
                <a href="http://www.nabunken.go.jp/">奈良文化財研究所</a>
                <a href="http://www.nabunken.go.jp/japanese/database.html"
                  >（データベース）</a
                >
              </li>
            </ul>
          </li>

          <br /><br />

          <li><a href="http://www.emuseum.jp/">e国宝</a></li>
          <li>
            <a href="http://bunka.nii.ac.jp/Index.do">文化遺産オンライン</a>
          </li>
          <li>
            <a href="http://www.bunka.go.jp/bsys/index.asp"
              >国指定文化財等検索システム</a
            >
          </li>
        </ul>
      </v-col>
      <v-col col="12" :sm="6">
        <ul>
          <li><a href="http://www.archives.go.jp/">国立公文書館</a></li>
          <li>
            <ul>
              <li>
                <a href="http://www.digital.archives.go.jp/index.html"
                  >デジタルアーカイブ</a
                >
              </li>
              <li>
                <a href="http://www.archives.go.jp/links/index.html#Sec_04"
                  >全国公文書館リンク</a
                >
              </li>
              <li>
                <a href="http://www.jacar.go.jp/">アジア歴史資料センター</a>
              </li>
            </ul>
          </li>

          <br /><br />

          <li>
            <a href="http://www.pref.hokkaido.lg.jp/sm/mnj/">北海道立文書館</a>
            <a href="http://www.pref.hokkaido.lg.jp/sm/mnj/d/shiryokensaku.htm"
              >(資料検索)</a
            >
          </li>
          <li>
            <a href="http://www.hmh.pref.hokkaido.jp/">北海道開拓記念館</a>
            <a href="http://www.hmh.pref.hokkaido.jp/kensaku/KENSAKU1.HTM"
              >（収蔵資料検索）</a
            >
          </li>
          <li>
            <a href="http://www.thm.pref.miyagi.jp/">東北歴史博物館</a>
            <a href="http://www.thm.pref.miyagi.jp/index.php?app=shiryo_bunrui"
              >（館蔵資料ダイジェスト）</a
            >
          </li>
          <li>
            <a href="http://www.pref.akita.lg.jp/kobunsyo/">秋田県公文書館</a
            ><a
              href="http://www.pref.akita.lg.jp/www/contents/1251352984801/index.html"
              >（古文書収蔵資料の概要）</a
            >
          </li>
          <li>
            <a href="http://www.archives.pref.niigata.jp/">新潟県立文書館</a>
            <a href="http://www.archives.pref.niigata.jp/shozo-bunsho-annai/"
              >（所蔵文書案内）</a
            >
          </li>
          <li>
            <a href="http://www.rekishikan.museum.ibk.ed.jp/">茨城県立歴史館</a>
            <a href="http://www2.rekishikan.museum.ibk.ed.jp/"
              >（資料検索システム）</a
            >
          </li>
          <li>
            <a href="http://www.soumu.metro.tokyo.jp/01soumu/archives/index.htm"
              >東京都公文書館</a
            >
            <a
              href="http://www.soumu.metro.tokyo.jp/01soumu/archives/03shozou_shiryou.htm"
              >（所蔵資料の案内）</a
            >
          </li>
          <li>
            <a href="http://www.pref.kanagawa.jp/cnt/f1040/"
              >神奈川県立公文書館</a
            >
            <a href="http://kanagawa-archives-search.force.com/Gov__p0520"
              >（アーカイブズの検索）</a
            >
          </li>
          <li>
            <a href="http://www.pref.kyoto.jp/shiryokan/">京都府立総合資料館</a>
            <a href="http://hyakugo.kyoto.jp/">（東寺百合文書WEB）</a>
          </li>
          <li>
            <a href="http://www.pref.oita.jp/site/346/">大分県公文書館</a>
            <a href="http://www.pref.oita.jp/site/346/list-top.html"
              >(公文書目録)</a
            >
          </li>
          <li>
            <a href="http://www.archives.pref.okinawa.jp/">沖縄県公文書館</a>
          </li>
        </ul>
      </v-col>
    </v-row>
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
  title: any = this.$t('リンク')

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
