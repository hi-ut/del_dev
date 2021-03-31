<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ $t('所報') }}</h1>
      <h2 class="h03">{{ title }}</h2>
      <table class="table02 mt-10">
        <tbody>
          <tr>
            <td>{{ '標題' }}</td>
            <td>{{ '著者名' }}</td>
            <td>{{ '掲載ページ' }}</td>
          </tr>
          <template v-for="(obj, key) in results.children">
            <template v-if="obj.length > 0">
              <tr :key="key">
                <th>{{ key }}</th>
                <th></th>
                <th></th>
              </tr>

              <tr v-for="(item, n) in obj" :key="`${key}^${n}`">
                <td>
                  <template v-if="item.url && item.url.includes('.html')">
                    <nuxt-link :to="getUrl(item.url)">{{
                      item.title
                    }}</nuxt-link></template
                  >
                  <template v-else-if="item.url"
                    ><a :href="item.url">{{ item.title }}</a></template
                  ><template v-else>{{ item.title }}</template>
                </td>
                <td>{{ item.author }}</td>
                <td>{{ item.page }}</td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </LayoutPublication>
  </div>
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
  asyncData({ payload, app }: any) {
    if (payload) {
      return payload
    } else {
      const vol = app.context.params.vol
      const data = (process.env.syoho as any)[Number(vol)]
      return { results: data, title: data.title }
    }
  }

  title: string = ''

  breadcrumbs: any[] = [
    {
      text: this.$t('編纂・研究・公開'),
      name: 'publication',
    },
    {
      text: this.$t('所報'),
      name: 'publication-syoho',
    },
  ]

  head() {
    const title = this.title
    return {
      title,
    }
  }

  getUrl(url: any) {
    const es = url.split('/')
    return this.localePath({
      name: 'publication-syoho-vol-slug',
      params: {
        vol: ('0000' + es[5]).slice(-4),
        slug: es[6].split('.')[0],
      },
    })
  }
}
</script>
