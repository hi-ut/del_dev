<template>
  <div>
    <div class="page-link" :class="top ? 'c4' : ''">
      <ul>
        <li v-if="top">
          <a @click="select = 'latest'">{{ $t('新着一覧') }}</a>
        </li>
        <li>
          <a @click="select = 'news'">{{ $t('news') }}</a>
        </li>
        <li>
          <a @click="select = 'event'">{{ $t('event') }}</a>
        </li>
        <li>
          <a @click="select = 'data'">{{ $t('data') }}</a>
        </li>
      </ul>
    </div>

    <div class="data">
      <dl>
        <template v-for="(f, index2) in featured">
          <template v-if="items[select]">
            <template v-for="(n, index) in items[select][f]">
              <dt :key="`dt-${index}-${index2}`">
                {{ n.date.split('T')[0].split('-').join('/') }}
                <span
                  v-if="n.tag"
                  style="background-color: #d96395; color: white"
                  class="mx-1 pa-1"
                  >{{ n.tag }}</span
                >
                <span
                  style="background-color: #5cc2d0; color: white"
                  class="mx-1 pa-1"
                  >{{ $t(n.type) }}</span
                >
              </dt>
              <dd :key="`dd-${index}-${index2}`" class="mt-1">
                {{ n.title }}
                <!-- 
                <nuxt-link
                  :to="
                    localePath({
                      name: 'news-list-year',
                      params: {
                        year: n.slug,
                      },
                    })
                  "
                  >{{ n.title }}</nuxt-link
                >
                -->
                <nuxt-content :document="n" />
              </dd>
              <hr
                v-if="index != items[select].length - 1"
                :key="`hr-${index}-${index2}`"
                style="margin-top: 2em; margin-bottom: 2em"
              />
            </template>
          </template>
        </template>
        <template v-if="noFlag">{{ $t('お知らせはありません。') }} </template>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Member extends Vue {
  featured: string[] = ['featured', 'nonFeatured']

  @Prop()
  items!: any

  @Prop()
  top!: any

  @Prop({ default: -1 })
  max!: number

  select: string = this.top ? 'latest' : 'news'

  get noFlag(): boolean {
    let count = 0
    const featured = this.featured
    const items = this.items[this.select]
    if (!items) {
      return true
    }
    for (let i = 0; i < featured.length; i++) {
      const f = featured[i]
      if (items[f]) {
        count += items[f].length
      }
    }
    return count === 0
  }
}
</script>
<style>
a {
  cursor: pointer;
}
</style>
