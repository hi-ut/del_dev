<template>
  <div>
    <div class="key-common">
      <div class="inner">
        <p class="ttl">{{ $t(this.label) }}</p>
      </div>
    </div>

    <div class="breadcrumb">
      <ul>
        <li v-for="(item, key) in items">
          <template v-if="item.to">
            <nuxt-link :to="item.to">{{ item.text }}</nuxt-link>
          </template>
          <template v-else>
            {{ item.text }}
          </template>
        </li>
      </ul>
    </div>

    <div class="contents-wrap">
      <main class="main-contents" id="main-contents">
        <!-- InstanceBeginEditable name="main" -->
        <section>
          <slot />
        </section>
      </main>

      <div id="sidebar">
        <aside>
          <!-- InstanceBeginEditable name="sub" -->
          <nav>
            <h2>{{ $t(label) }}</h2>
            <ul>
              <template v-for="(obj, index) in menu">
                <li>
                  <nuxt-link
                    :class="title == obj.label ? 'current' : ''"
                    :to="localePath(obj.to)"
                    exact
                    v-if="obj.lang.includes($i18n.locale)"
                    :key="'parent_' + index"
                  >
                    {{ $t(obj.label) }}
                  </nuxt-link>
                </li>

                <!--
              <template v-if="obj.label == '組織'">
                <template v-for="(obj2, index2) in obj.children">
                <v-list-item
                  :href="baseUrl+'/'+obj2.to.name + ($i18n.locale == 'en' ? '/en/' : '')"
                  
                  exact
                  v-if="obj2.lang.includes($i18n.locale)"
                  :key="index2"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <span class="ml-10">{{ $t(obj2.label) }}</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                </template>
              </template>
              -->
              </template>
            </ul>
          </nav>
          <!-- InstanceEndEditable -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class LayoutAbout extends Vue {
  @Prop()
  title!: string

  baseUrl: string = process.env.BASE_URL || ''
  json: any = process.env.jsonData

  get menu(): any {
    return this.json[7].children
  }

  get label(): string {
    return this.json[7].label
  }

  items: any[] = [
    {
      text: 'HOME',
      disabled: false,
      to: this.localePath({
        name: 'index',
      }),
      exact: true,
    },
    {
      text: this.$t(this.label),
      disabled: false,
      to: this.localePath({
        name: 'question',
      }),
      exact: true,
    },
    {
      text: this.$t(this.title),
    },
  ]
}
</script>
