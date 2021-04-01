<template>
  <div>
    <LayoutAbout :title="title">

      <section>
        <p id="ttl" class="hsample1">タイトル</p>
        <p class="fc1">h1,h2,h3,h4,h5,pタグ等に使用可能</p>
        <h1 class="h01 mb1">タイトル</h1>
        <pre><code class="html">&lt;h1 class=&quot;h01&quot;&gt;タイトル&lt;/h1&gt;</code></pre>
        <hr class="sample" />
        <h1 class="h02 mb0">タイトル</h1>
        <pre><code class="html">&lt;h1 class=&quot;h02&quot;&gt;タイトル&lt;/h1&gt;</code></pre>
        <hr class="sample" />
        <h1 class="h03 mb0">タイトル</h1>
        <pre><code class="html">&lt;h1 class=&quot;h03&quot;&gt;タイトル&lt;/h1&gt;</code></pre>
        <hr class="sample" />
        <h1 class="h04 mb0">タイトル</h1>
        <pre><code class="html">&lt;h1 class=&quot;h04&quot;&gt;タイトル&lt;/h1&gt;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="margin" class="hsample1">マージン</p>
        <p class="fc1">
          文章の余白、数字1は1文字分の余白　.mtは上　.mbは下　.mrは右　.mlは左<br />
          &lt;p&gt;&lt;ul&gt;&lt;li&gt;&lt;ol&gt;&lt;div&gt;などの余白調整
        </p>
        <pre><code class="html">class=&quot;mt1&quot;
class=&quot;mt2&quot;
class=&quot;mt3&quot;
class=&quot;mb0&quot;
class=&quot;mb05&quot;
class=&quot;mb1&quot;
class=&quot;mb15&quot;
class=&quot;mb2&quot;
class=&quot;mb3&quot;
class=&quot;mr1&quot;
class=&quot;mr2&quot;
class=&quot;mr3&quot;
class=&quot;ml1&quot;
class=&quot;ml2&quot;
class=&quot;ml3&quot;
</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="color" class="hsample1">カラー</p>
        <p class="fc1">赤</p>
        <pre><code class="html">class=&quot;fc1&quot;</code></pre>
        <p class="fc2">青</p>
        <pre><code class="html">class=&quot;fc2&quot;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="pl" class="hsample1">ページ内リンク</p>
        <div class="page-link mb0">
          <ul>
            <li><a href="#link1">リンク1</a></li>
            <li><a href="#link2">リンク2</a></li>
            <li><a href="#link3">リンク3</a></li>
            <li><a href="#link4">リンク4</a></li>
            <li><a href="#link5">リンク5</a></li>
            <li><a href="#link6">リンク6</a></li>
          </ul>
        </div>
        <pre><code class="html">&lt;div class=&quot;page-link mb0&quot;&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href=&quot;#link1&quot;&gt;リンク1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href=&quot;#link2&quot;&gt;リンク2&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href=&quot;#link3&quot;&gt;リンク3&lt;/a&gt; &lt;/li&gt;
&lt;li&gt;&lt;a href=&quot;#link4&quot;&gt;リンク4&lt;/a&gt; &lt;/li&gt;
&lt;li&gt;&lt;a href=&quot;#link5&quot;&gt;リンク5&lt;/a&gt; &lt;/li&gt;
&lt;li&gt;&lt;a href=&quot;#link6&quot;&gt;リンク6&lt;/a&gt; &lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>4カラム</strong></p>
        <div class="page-link c4 mb0">
          <ul>
            <li><a href="#link1">リンク1</a></li>
            <li><a href="#link2">リンク2</a></li>
            <li><a href="#link3">リンク3</a></li>
            <li><a href="#link4">リンク4</a></li>
            <li><a href="#link5">リンク5</a></li>
            <li><a href="#link6">リンク6</a></li>
          </ul>
        </div>
        <pre><code class="html">&lt;div class=&quot;page-link v4&quot;&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>5カラム</strong></p>
        <div class="page-link c5 mb0">
          <ul>
            <li><a href="#link1">リンク1</a></li>
            <li><a href="#link2">リンク2</a></li>
            <li><a href="#link3">リンク3</a></li>
            <li><a href="#link4">リンク4</a></li>
            <li><a href="#link5">リンク5</a></li>
            <li><a href="#link6">リンク6</a></li>
          </ul>
        </div>
        <pre><code class="html">&lt;div class=&quot;page-link v5&quot;&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>6カラム</strong></p>
        <div class="page-link c6 mb0">
          <ul>
            <li><a href="#link1">リンク1</a></li>
            <li><a href="#link2">リンク2</a></li>
            <li><a href="#link3">リンク3</a></li>
            <li><a href="#link4">リンク4</a></li>
            <li><a href="#link5">リンク5</a></li>
            <li><a href="#link6">リンク6</a></li>
          </ul>
        </div>
        <pre><code class="html">&lt;div class=&quot;page-link v6&quot;&gt;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="ul" class="hsample1">リスト</p>
        <p class="fc1"><strong>ディスク</strong></p>
        <ul>
          <li>ul-1</li>
          <li>
            ul-1
            <ul>
              <li>ul-2</li>
              <li>ul-2</li>
            </ul>
          </li>
        </ul>
        <pre><code class="html">&lt;ul&gt;
&lt;li&gt;ul-1&lt;/li&gt;
&lt;li&gt;ul-1
&lt;ul&gt;
&lt;li&gt;ul-2&lt;/li&gt;
&lt;li&gt;ul-2&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>数字</strong></p>
        <ol>
          <li>ol</li>
          <li>ol</li>
        </ol>
        <pre><code class="html">&lt;ol&gt;&lt;li&gt;ol&lt;/li&gt;&lt;li&gt;ol&lt;/li&gt;&lt;/ol&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>ローマ数字</strong></p>
        <ol class="roman">
          <li>あいうえお</li>
          <li>あいうえお</li>
        </ol>
        <pre><code class="html">&lt;ol class=&quot;roman&quot;&gt;&lt;li&gt;あいうえお&lt;/li&gt;&lt;li&gt;あいうえお&lt;/li&gt;&lt;/ol&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>括弧　a)</strong></p>
        <ol class="a-">
          <li>あいうえお</li>
          <li>あいうえお</li>
        </ol>
        <pre><code class="html">&lt;ol class=&quot;a-&quot;&gt;&lt;li&gt;あいうえお&lt;/li&gt;&lt;li&gt;あいうえお&lt;/li&gt;&lt;/ol&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>括弧　(1)</strong></p>
        <ol class="-n-">
          <li>あいうえお</li>
          <li>あいうえお</li>
        </ol>
        <pre><code class="html">&lt;ol class=&quot;-n-&quot;&gt;&lt;li&gt;あいうえお&lt;/li&gt;&lt;li&gt;あいうえお&lt;/li&gt;&lt;/ol&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>数字　（1階層　1.）（2階層　1-1. ）</strong></p>
        <ol class="n-n">
          <li>あいうえお</li>
          <li>
            あいうえお
            <ol class="n-n">
              <li>アイウエオ</li>
              <li>アイウエオ</li>
            </ol>
          </li>
        </ol>
        <pre><code class="html">&lt;ol class=&quot;n-n&quot;&gt;
&lt;li&gt;あいうえお&lt;/li&gt;
&lt;li&gt;あいうえお
&lt;ol class=&quot;n-n&quot;&gt;
&lt;li&gt;アイウエオ&lt;/li&gt;
&lt;li&gt;アイウエオ&lt;/li&gt;
&lt;/ol&gt;
&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>数字　色つき　ボールド</strong></p>
        <ol class="level1">
          <li>あいうえお</li>
          <li>あいうえお</li>
        </ol>
        <pre><code class="html">&lt;ol class=&quot;level1&quot;&gt;
&lt;li&gt;あいうえお&lt;/li&gt;
&lt;li&gt;あいうえお&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        <hr class="sample" />

        <p class="fc1"><strong>頭出し</strong></p>
        <p class="fc1">
          ul10は1文字、ul05は0.5文字、ul15は1.5文字、ul20は2文字、ul30は3文字
        </p>
        <ul class="ul10">
          <li>
            ※ul　頭出し　1文字<br />
            ダミーダミー、ダミーダミー、ダミーダミー。
          </li>
        </ul>
        <pre><code class="html">&lt;ul class=&quot;ul10&quot;&gt;
&lt;li&gt;※ul　頭出し　1文字&lt;br&gt;
ダミーダミー、ダミーダミー、ダミーダミー。
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        <hr class="sample" />
      </section>

      <section>
        <p id="btn" class="hsample1">ボタン</p>

        <a class="btn01 v1" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn01 v1&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
        <a class="btn01 v2" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn01 v2&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
        <a class="btn01 v5" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn01 v5&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
        <a class="btn01 v6" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn01 v6&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
        <a class="btn03 v1" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn03 v1&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
        <a class="btn03 v2" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn03 v2&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
        <a class="btn03 v3" href="#">ボタン</a>
        <pre><code class="html">&lt;a class=&quot;btn03 v3&quot; href=&quot;#&quot;&gt;ボタン&lt;/a&gt;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="hr" class="hsample1">仕切り線</p>
        <hr />
        <pre><code class="html">&lt;hr&gt;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="frame" class="hsample1">フレーム</p>
        <div class="frame01">
          <h3>ダミー</h3>
          <p>ダミーダミー、ダミーダミー、ダミーダミー、ダミー。</p>
        </div>
        <pre><code class="html">&lt;div class=&quot;frame01&quot;&gt;
&lt;h3&gt;ダミー&lt;/h3&gt;
&lt;p&gt;ダミーダミー、ダミーダミー、ダミーダミー、ダミー。&lt;/p&gt;
&lt;/div&gt;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="table" class="hsample1">テーブル</p>
        <table class="table01">
          <tbody>
            <tr>
              <th>01</th>
              <td><p>ダミーダミーダミー</p></td>
            </tr>
            <tr>
              <th>01</th>
              <td><p>ダミーダミーダミー</p></td>
            </tr>
          </tbody>
        </table>
        <pre><code class="html">&lt;table class=&quot;table01&quot;&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;th&gt;01&lt;/th&gt;
&lt;td&gt;&lt;p&gt;ダミーダミーダミー&lt;/p&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;01&lt;/th&gt;
&lt;td&gt;&lt;p&gt;ダミーダミーダミー&lt;/p&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        <hr class="sample" />

        <table class="table02">
          <tbody>
            <tr>
              <th>02</th>
              <td><p>ダミーダミーダミー</p></td>
            </tr>
            <tr>
              <th>02</th>
              <td><p>ダミーダミーダミー</p></td>
            </tr>
          </tbody>
        </table>
        <pre><code class="html">&lt;table class=&quot;table02&quot;&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;th&gt;02&lt;/th&gt;
&lt;td&gt;&lt;p&gt;ダミーダミーダミー&lt;/p&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;02&lt;/th&gt;
&lt;td&gt;&lt;p&gt;ダミーダミーダミー&lt;/p&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        <hr class="sample" />
      </section>
      <section>
        <p id="layout" class="hsample1">レイアウト</p>
        <p class="fc1">2カラム</p>
        <div class="flex col2">
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
        </div>
        <pre><code class="html">&lt;div class=&quot;flex col2&quot;&gt;
&lt;figure&gt;&lt;img src=&quot;assets/img/tosho/img_01.jpg&quot; alt=&quot;キャプション&quot;/&gt;
&lt;figcaption&gt;キャプション&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;figure&gt;&lt;img src=&quot;assets/img/tosho/img_02.jpg&quot; alt=&quot;キャプション&quot;/&gt;
&lt;figcaption&gt;キャプション&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;figure&gt;&lt;img src=&quot;assets/img/tosho/img_01.jpg&quot; alt=&quot;キャプション&quot;/&gt;
&lt;figcaption&gt;キャプション&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;figure&gt;&lt;img src=&quot;assets/img/tosho/img_02.jpg&quot; alt=&quot;キャプション&quot;/&gt;
&lt;figcaption&gt;キャプション&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;/div&gt;</code></pre>
        <hr class="sample" />

        <p class="fc1"><strong>3カラム</strong></p>
        <div class="flex col3">
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
        </div>
        <pre><code class="html">&lt;div class=&quot;flex col3&quot;&gt;
</code></pre>
        <hr class="sample" />
        <p class="fc1"><strong>768px以下の画面でレイアウト変更</strong></p>
        <p class="fc1">spb1は1カラム、spb2は2カラム</p>
        <div class="flex col3 spb1">
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
        </div>
        <pre><code class="html">&lt;div class=&quot;flex col3 spb1&quot;&gt;
</code></pre>
        <hr class="sample" />
        <div class="flex col3 spb2">
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_01.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
          <figure>
            <img src="assets/img/tosho/img_02.jpg" alt="キャプション" />
            <figcaption>キャプション</figcaption>
          </figure>
        </div>
        <pre><code class="html">&lt;div class=&quot;flex col3 spb2&quot;&gt;
</code></pre>
        <hr class="sample" />
      </section>
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

  lang: string = this.$i18n.locale

  title: string = 'Sample'
}
</script>
