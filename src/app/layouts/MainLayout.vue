<link rel="stylesheet" href="../../../../qori-pay/src/css/app.scss">
<template>
  <q-layout
    view="hhH Lpr lff">
      <q-header class="bg-white" :class="{ 'q-px-lg' : $q.screen.lt.xl, 'q-px-xl' : $q.screen.gt.lg }">
        <q-toolbar>
          <q-toolbar-title
            :class="{
              'fs-15' : $q.screen.gt.sm
            }"
            class="text-black text-bold flex justify-end items-center">
            {{ $t('Home.followUs') }}
            <q-icon name="img:icons/instagram-black.svg" class="q-ml-md" size="22px" />
            <q-icon name="img:icons/youtube-black.svg" class="q-mx-sm" size="28px" />
            <q-icon name="img:icons/twitter-black.svg" class="q-mr-lg" size="25px" />

            <language-switch  />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

    <q-page-container class="bg-vk-tertiary">
      <router-view />
    </q-page-container>

    <q-footer
        :class="{
          'px-90 pt-70 pb-50' : $q.screen.gt.sm
        }"
        class="bg-vk-accent row no-margin text-white">
        <div
          v-for="(key, index) in ['people', 'business', 'minors', 'company']"
          :key="index"
          class="col-6 col-md-2 pt-40">
          <p
            :class="{
              'fs-20' : $q.screen.gt.sm
            }"
            class="q-mb-sm q-mt-none text-bold" v-text="$t(`Home.footer.${key}.title`)" />
          <p
            :class="{
              'fs-14' : $q.screen.gt.sm,
              'fs-10' : $q.screen.lt.md
            }"
            class="no-margin" v-text="$t(`Home.footer.${key}.wallet`)" />
          <p
            :class="{
              'fs-14' : $q.screen.gt.sm,
              'fs-10' : $q.screen.lt.md
            }"
            class="no-margin" v-text="$t(`Home.footer.${key}.payments`)" />
          <p
            :class="{
              'fs-14' : $q.screen.gt.sm,
              'fs-10' : $q.screen.lt.md
            }"
            class="no-margin" v-text="$t(`Home.footer.${key}.transfer`)" />
          <p
            :class="{
              'fs-14' : $q.screen.gt.sm,
              'fs-10' : $q.screen.lt.md
            }"
            class="no-margin" v-text="$t(`Home.footer.${key}.card`)" />
        </div>

        <div class="col-12 col-sm-4 flex justify-center items-start">
            <q-icon name="img:icons/rounded-v-yellow.svg" size="3.5em" />
            <p class="wp-100 lh-8 q-mt-sm q-mb-none text-center">Vank Company LLC</p>
            <p class="wp-100 lh-8 no-margin text-center">contacto@vankweb.com</p>

          <div class="q-gutter-x-md q-mt-md">
            <q-icon name="img:icons/instagram-yellow.svg" size="1.6em" />
            <q-icon name="img:icons/youtube-yellow.svg" size="2em" />
            <q-icon name="img:icons/twitter-yellow.svg" size="1.8em" />
          </div>
        </div>

      <div class="col-12 col-lg-7 col-xl-5 q-mt-xl white-border-bottom-input">
        <h5 class="no-margin" v-text="$t('Home.footer.subscribe')" />
        <p class="q-mt-md q-mb-xs" :class="{ 'fs-16' : $q.screen.gt.sm, 'fs-13' : $q.screen.lt.md }" v-text="$t('Fields.email')" />
        <div class="flex flex-inline justify-between">
          <q-input
            color="white"
            dense
            dark
            class="text-white"
            :class="{
              'wp-70' : $q.screen.gt.sm,
              'wp-100' : $q.screen.lt.md
            }"
            v-model="email"
          />
          <q-btn
            :label="$t('Home.footer.subscribeNow')"
            no-caps
            unelevated
            rounded
            color="vk-secondary"
            class="text-vk-accent text-bold q-px-xl q-py-sm fs-13"
          />
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageSwitch from 'src/app/components/LanguageSwitch.vue';

const email = ref<string | null>(null);
</script>
