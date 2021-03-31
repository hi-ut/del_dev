<template>
  <li class="mt-2">
    <div :class="{ bold: isFolder }" @click="toggle">
      <a>
        <template v-if="isFolder">
          <b>
            {{ item.label }}
          </b>
        </template>
        <template v-else>
          {{ item.label }}
        </template>

        <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
      </a>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <template v-if="item.collections">
        <treeItem
          v-for="(child, index) in item.collections"
          :key="index"
          class="item"
          :item="child"
          :vhint="vhint"
        ></treeItem>
      </template>
      <template v-else>
        <v-row>
          <v-col
            v-for="(manifest, index) in item.manifests"
            :key="index"
            cols="12"
            md="3"
            :item="manifest"
          >
            <template v-if="vhint == 'use-thumb'">
              <v-card>
                <a
                  :href="
                    manifest['@type'] == 'sc:Manifest'
                      ? 'http://mirador.cultural.jp/?manifest=' +
                        manifest['@id']
                      : manifest['@id']
                  "
                >
                  <v-img
                    height="200px"
                    style="background-color: lightgrey"
                    :src="manifest.thumbnail"
                    contain
                  >
                  </v-img>
                </a>

                <v-card-text class="text--primary">
                  <a
                    target="_blank"
                    :href="
                      manifest['@type'] == 'sc:Manifest'
                        ? 'http://mirador.cultural.jp/?manifest=' +
                          manifest['@id']
                        : manifest['@id']
                    "
                    >{{ manifest.label }}</a
                  >
                </v-card-text>
              </v-card>
            </template>
            <template v-else>
              <li>
                <a
                  target="_blank"
                  :href="
                    manifest['@type'] == 'sc:Manifest'
                      ? 'http://mirador.cultural.jp/?manifest=' +
                        manifest['@id']
                      : manifest['@id']
                  "
                  >{{ manifest.label }}</a
                >
              </li>
            </template>
          </v-col>
        </v-row>
      </template>
    </ul>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import treeItem from '~/components/publication/dip/treeItem.vue'

@Component({
  name: 'treeItem',
  components: {
    treeItem,
  },
})
export default class ComponentsPublicationDip extends Vue {
  @Prop()
  item!: any

  @Prop()
  vhint!: string

  isOpen: boolean = false

  get isFolder() {
    return this.item.manifests || this.item.collections
  }

  toggle() {
    if (this.isFolder) {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
