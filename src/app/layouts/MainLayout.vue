<template>
  <q-layout
      view="lHh Lpr lFf">
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
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageSwitch from 'src/app/components/LanguageSwitch.vue';
</script>
