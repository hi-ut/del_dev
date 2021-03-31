<template>
  <div>
    <Layout :title="title" :index="0" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ title }}</h1>

      <table class="table02 mt-10">
        <tbody>
          <tr>
            <th width="20%">{{ $t('氏名（かな）') }}</th>
            <td>
              <template v-if="person.rmap">
                <a :href="rmap">{{ name }}</a>
              </template>

              <template v-else>
                {{ name }}
              </template>
              <template v-if="lang === 'ja'">
                （{{ person.name_kana }}）
              </template>
            </td>
          </tr>
          <tr>
            <th>{{ $t('所属') }}</th>
            <td>{{ $t(organization[person.main]) }}</td>
          </tr>
          <tr>
            <th>{{ $t('職位・学位') }}</th>
            <td>{{ $t(gyoseki.degree) }}</td>
          </tr>
          <tr v-if="lang === 'ja'">
            <th>{{ $t('研究テーマ') }}</th>
            <td>
              <ul>
                <template v-for="(res, key) in person.researches">
                  <li v-if="res[lang]" :key="key">{{ res[lang] }}</li>
                </template>
              </ul>
            </td>
          </tr>
          <tr>
            <th>{{ $t('著書・論文') }}</th>
            <td>
              <nuxt-content v-if="false" :document="gyoseki" />
              <p class="fc1">TODO</p>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Layout from '~/components/layout/Layout.vue'

@Component({
  components: {
    Layout,
  },
})
export default class about extends Vue {
  /*
  async asyncData({ $content, params, app }: any) {
    const gyoseki = await $content(
      `${app.i18n.locale}/faculty`,
      params.slug || 'index'
    ).fetch()
    return { gyoseki }
  }
  */

  gyoseki: any = {
    degree: 'TODO',
  }

  breadcrumbs: any[] = [
    {
      text: this.$t('ご案内'),
      name: 'about-slug',
    },
    {
      text: this.$t('教員一覧'),
      name: 'faculty',
    },
  ]

  people: any = process.env.people2

  organization: any = process.env.organization

  lang: string = this.$i18n.locale || 'ja'

  get person() {
    const people = this.people
    const slug = this.$route.params.slug.split('gyoseki_')[1]
    return people[slug] || {}
  }

  get test() {
    return ['論文1', '論文2']
  }

  get rmap() {
    return 'https://researchmap.jp/' + this.person.rmap + '?lang=' + this.lang
  }

  get name() {
    const person = this.person
    return this.lang === 'ja' ? person.name_ja : person.name_en
  }

  title: any = this.$t('研究業績') + '（' + this.name + '）'

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
