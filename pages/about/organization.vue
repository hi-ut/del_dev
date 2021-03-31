<template>
  <LayoutAbout :title="title">
    <h1 class="h02">{{ title }}</h1>

    <p v-if="lang === 'ja'" class="text-right">
      副所長は技術部長・図書部長を兼務する
    </p>
    <figure>
      <img
        :src="baseUrl + '/about/images/about_hi_soshiki_hi-def.png'"
        alt="Director Toru Hoya"
      />
    </figure>

    <h2 id="keisai" class="h03 mt-10">{{ $t('常勤職員数') }}</h2>

    <p class="text-right" style="text-align: right">
      {{
        lang === 'ja' ? '2020（令和2）年7月1日現在' : 'Compiled in 2020-07-01'
      }}
    </p>

    <table class="table02" style="text-align: center">
      <tbody>
        <tr>
          <th colspan="2">{{ $t('教員等') }}</th>
        </tr>
        <tr>
          <td>{{ $t('教授') }}</td>
          <td>{{ numbers.professor.all }} ({{ numbers.professor.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('准教授') }}</td>
          <td>{{ numbers.assoc.all }} ({{ numbers.assoc.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('助教') }}</td>
          <td>{{ numbers.assist.all }} ({{ numbers.assist.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('特任助教') }}</td>
          <td>{{ numbers.project.all }} ({{ numbers.project.women }})</td>
        </tr>
        <tr>
          <td>{{ $t('特任研究員') }}</td>
          <td>{{ numbers.research.all }} ({{ numbers.research.women }})</td>
        </tr>
        <tr>
          <td>
            <b>{{ $t('合計') }}</b>
          </td>
          <td>
            <b>{{ sum.sum1.all }} ({{ sum.sum1.women }})</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">{{ $t('職員等') }}</th>
        </tr>
        <tr>
          <td>{{ $t('事務職員・技術職員・学術支援職員') }}</td>
          <td>{{ numbers.staff.all }} ({{ numbers.staff.women }})</td>
        </tr>
        <tr>
          <th colspan="2">{{ $t('合計') }}</th>
        </tr>
        <tr>
          <td colspan="2">
            <b>{{ sum.sum2.all }} ({{ sum.sum2.women }})</b>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="mt-4 text-right" style="text-align: right; margin-top: 16px">
      ※（ ）{{ $t('女性教職員、内数') }}
    </p>

    <template v-if="false">
      <template v-if="$i18n.locale == 'en'">
        <h2 class="mb-5">RESEARCH</h2>

        <h1 class="red--text">要確認</h1>

        <p class="text-right">
          Deputy director also serves as technical manager and library manager.
        </p>
        <v-img
          class="mb-2"
          contain
          :src="baseUrl + '/about/images/about_hi_organization_01.jpg'"
        />
      </template>

      <template v-else>
        <p class="text-right">副所長は技術部長・図書部長を兼務する</p>
        <v-img
          class="mb-2"
          contain
          :src="baseUrl + '/about/images/about_hi_soshiki_hi-def.png'"
        />
      </template>
    </template>
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
  title: any = this.$t('組織')

  lang: any = this.$i18n.locale

  numbers: any = {
    professor: {
      all: 19,
      women: 5,
    },
    assoc: {
      all: 22,
      women: 6,
    },
    assist: {
      all: 14,
      women: 3,
    },
    project: {
      all: 1,
      women: 1,
    },
    research: {
      all: 3,
      women: 0,
    },
    staff: {
      all: 20,
      women: 12,
    },
  }

  get sum() {
    const numbers = this.numbers
    const sum1All =
      numbers.professor.all +
      numbers.assoc.all +
      numbers.assist.all +
      numbers.project.all +
      numbers.research.all
    const sum1Women =
      numbers.professor.women +
      numbers.assoc.women +
      numbers.assist.women +
      numbers.project.women +
      numbers.research.women
    return {
      sum1: {
        all: sum1All,
        women: sum1Women,
      },
      sum2: {
        all: sum1All + numbers.staff.all,
        women: sum1Women + numbers.staff.women,
      },
    }
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
