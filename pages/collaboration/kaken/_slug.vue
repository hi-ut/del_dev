<template>
  <v-container class="my-5">
    <LayoutPublication :title="title">
      <dl class="row">
        <dt class="col-sm-3 text-muted">
          <b>{{ $t('研究種目名') }}</b>
        </dt>
        <dd class="col-sm-9">
          {{ news.type }}
        </dd>
      </dl>

      <dl class="row">
        <dt class="col-sm-3 text-muted">
          <b>{{ $t('研究課題名') }}</b>
        </dt>
        <dd class="col-sm-9">{{ news.title }}（{{ $route.params.slug }}）</dd>
      </dl>

      <dl class="row">
        <dt class="col-sm-3 text-muted">
          <b>{{ $t('研究期間') }}</b>
        </dt>
        <dd class="col-sm-9">{{ news.from }}年度～{{ news.to }}年度</dd>
      </dl>

      <dl class="row">
        <dt class="col-sm-3 text-muted">
          <b>{{ $t('研究代表者名') }}</b>
        </dt>
        <dd class="col-sm-9">
          {{ news.person }}
        </dd>
      </dl>

      <dl class="row">
        <dt class="col-sm-3 text-muted">
          <b>{{ $t('研究実績の概要') }}</b>
        </dt>
        <dd class="col-sm-9">
          <nuxt-content :document="news" />
        </dd>
      </dl>
    </LayoutPublication>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutAbout from '~/components/layout/LayoutAbout.vue'

@Component({
  components: {
    LayoutAbout,
  },
})
export default class news_ extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  head() {
    // @ts-ignore
    const title = this.title
    return {
      title,
    }
  }

  get title() {
    // @ts-ignore
    return this.news.title
  }

  async asyncData({ $content, params }: any): Promise<any> {
    const news = await $content('kaken', params.slug || 'index').fetch()
    return { news }
  }
}
</script>
