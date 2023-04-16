<link rel="stylesheet" href="../../../../qori-pay/src/css/app.scss" />
<template>
  <q-layout view="hhH Lpr lff">
    <q-header
      :class="{
        'q-px-lg': $q.screen.lt.xl && $q.screen.gt.sm,
        'q-px-xl': $q.screen.gt.lg,
        'q-px-xs': $q.screen.lt.md,
      }"
      class="bg-white"
    >
      <q-toolbar
        :class="{ 'flex flex-inline justify-between': $q.screen.lt.md }"
      >
        <q-toolbar-title
          v-if="$q.screen.gt.sm"
          :class="{
            'fs-15': $q.screen.gt.sm,
          }"
          class="text-black text-bold flex justify-end items-center"
        >
          {{ $t('Home.followUs') }}
          <q-icon
            name="img:icons/instagram-black.svg"
            class="q-mr-sm q-ml-lg"
            size="22px"
          />
          <q-icon
            name="img:icons/youtube-black.svg"
            class="q-mr-sm"
            size="28px"
          />
          <q-icon
            name="img:icons/twitter-black.svg"
            class="q-mr-sm"
            size="25px"
          />
          <q-icon
            name="img:icons/tiktok-black.svg"
            class="q-mr-sm"
            size="23px"
          />
          <q-icon
            name="img:icons/telegram-black.svg"
            class="q-mr-sm"
            size="24px"
          />
          <q-icon
            name="img:icons/linkedin-black.svg"
            class="q-mr-lg"
            size="22px"
          />
          <language-switch />
        </q-toolbar-title>

        <q-icon
          v-if="$q.screen.lt.md"
          name="img:icons/vank-black.svg"
          style="width: 70px; height: 40px"
        />
        <q-icon
          @click="
            () => {
              drawer = !drawer;
              navbarColor = !drawer ? 'vk-tertiary' : 'white';
            }
          "
          v-if="$q.screen.lt.md"
          :name="!drawer ? 'img:icons/menu.svg' : 'close'"
          size="25px"
          color="vk-accent"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-vk-tertiary wp-100">
      <router-view />
    </q-page-container>

    <q-footer
      :class="{
        'px-90 pt-70 pb-50': $q.screen.gt.sm,
        'px-40': $q.screen.lt.md,
      }"
      class="bg-vk-accent row no-margin text-white"
    >
      <div
        class="col-12 col-sm-6 col-md-2 pt-30"
      >
        <p
          :class="{
            'fs-20': $q.screen.gt.sm,
            'fs-16': $q.screen.lt.md,
          }"
          class="q-mb-sm q-mt-none text-bold"
          v-text="'Sitemap'"
        />
        <p
          :class="{
            'fs-14': $q.screen.gt.sm,
            'fs-12 q-pb-xs': $q.screen.lt.md,
          }"
          v-for="(key) in ['/','people', 'minors', 'business', 'vankcard', 'vankversity', 'company', 'contact']"
          :key="key"
          class="no-margin"
          @click="$router.push(key)"
          v-text="$t(`Home.navbar.${key}`)"
        />
      </div>
      <div
        class="col-12 col-sm-6 col-md-3  pt-30"
      >
        <p
          :class="{
            'fs-20': $q.screen.gt.sm,
            'fs-16': $q.screen.lt.md,
          }"
          class="q-mb-sm q-mt-none text-bold"
          v-text="$t(`Home.footer.contactWithUs.title`)"
        />
        <p
          :class="{
            'fs-14': $q.screen.gt.sm,
            'fs-12 q-pb-xs': $q.screen.lt.md,
          }"
          v-for="(key) in ['email','number', 'address', 'web']"
          :key="key"
          class="no-margin"
          v-text="$t(`Home.footer.contactWithUs.${key}`)"
        />
      </div>
      <div
        class="col-12 col-sm-6 col-md-3  pl-30 pt-30"
      >
        <p
          :class="{
            'fs-20': $q.screen.gt.sm,
            'fs-16': $q.screen.lt.md,
          }"
          class="q-mb-sm q-mt-none text-bold"
          v-text="$t(`Home.footer.followUs`)"
        />
        <div class="q-gutter-x-md q-mt-md">
          <q-icon name="img:icons/tiktok-yellow.svg" size="1.8em" />
          <q-icon name="img:icons/telegram-yellow.svg" size="1.8em" />
          <q-icon name="img:icons/linkedin-yellow.svg" size="1.8em" />
        </div>
        <div class="q-gutter-x-md q-mt-md">
          <q-icon name="img:icons/instagram-yellow.svg" size="1.6em" />
          <q-icon name="img:icons/youtube-yellow.svg" size="2em" />
          <q-icon name="img:icons/twitter-yellow.svg" size="1.8em" />
        </div>
      </div>


      <div
        class="col-12 col-sm-4  flex justify-center items-start pt-30"
        :class="{ 'q-mt-xl': $q.screen.lt.md }"
      >
        <q-icon name="img:icons/rounded-v-yellow.svg" size="6em" />
        <div class="wp-100" style="position: relative;">
          <p
            :class="{
              'fs-25': $q.screen.gt.sm,
              'fs-20': $q.screen.lt.md,
            }"
            class="q-mb-sm q-mt-none text-bold text-center"
            v-text="$t(`Home.footer.downloadOurApp`)"
          />
          <div class="wp-100 flex flex-center" style="position: absolute; margin-top: -28px;">
            <q-icon
              name="img:icons/yellow-bar-contact.svg"
              :style="`
              width: 14em;
              height: 2em;
              `"
            />
          </div>
        </div>
        <div class="wp-100 flex flex-center mb-8 mt-2" v-if="((locale as readonly string[])).includes('es')">
          <q-img
            width="17vh"
            :class="{   }"
            src="../../assets/images/get-app-store-spanish.webp"
          />
          <q-img
            width="15vh"
            :class="{   }"
            src="../../assets/images/get-in-google-play-spanish.webp"
          />
        </div>
        <div class="wp-100 flex flex-center mb-8 mt-10" v-else>
          <q-img
            width="15vh"
            class="mr-10 ml-10"
            src="../../assets/images/get-app-store-english.webp"
          />
          <q-img
            width="15vh"
            :class="{   }"
            src="../../assets/images/get-in-google-play-english.webp"
          />
        </div>
        <p
          class="wp-100 q-mt-lg q-mb-none text-center"
          :class="{ 'lh-8': $q.screen.gt.sm }"
        >
          Vank Company LLC
        </p>

      </div>

      <div class="col-12 col-lg-7 col-xl-5 q-mt-xl white-border-bottom-input">
        <h5
          class="no-margin"
          :class="{ 'fs-20': $q.screen.lt.md }"
          v-text="$t('Home.footer.subscribe')"
        />
        <p
          class="q-mt-md q-mb-xs"
          :class="{ 'fs-16': $q.screen.gt.sm, 'fs-13': $q.screen.lt.md }"
          v-text="$t('Fields.email')"
        />
        <div class="flex flex-inline justify-between">
          <q-input
            color="white"
            dense
            dark
            class="text-white"
            :class="{
              'wp-70': $q.screen.gt.sm,
              'wp-100': $q.screen.lt.md,
            }"
            v-model="email"
          />
          <q-btn
            :label="$t('Home.footer.subscribeNow')"
            no-caps
            unelevated
            rounded
            :class="{
              'q-my-lg full-width': $q.screen.lt.md,
            }"
            color="vk-secondary"
            class="text-vk-accent text-bold q-px-xl q-py-sm fs-13"
          />
        </div>
      </div>
    </q-footer>

    <!-- MOBILE MENU --->
    <Transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="{
        enter: 300,
        leave: 300,
      }"
    >
      <div
        style="
          position: fixed;
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        "
        v-if="drawer"
        class="bg-white no-scroll"
      >
        <q-list dense class="mt-70 text-opensans-bold fs-20 q-px-sm">
          <language-switch />
          <div
            v-for="key in [
              '/',
              'people',
              'minors',
              'business',
              'vankcard',
              'vankversity',
              'company',
              'contact',
            ]"
            :key="key"
          >
            <q-item
              class="text-vk-accent fs-13 text-left"
              clickable
              @click="
                () => {
                  drawer = !drawer;
                  $router.push(key);
                }
              ">
              <q-item-section class="q-py-sm">
                {{ $t(`Home.navbar.${key}`) }}
              </q-item-section>
            </q-item>
            <q-separator
              size="0.1em"
              color="grey-3"
              class="q-my-none q-mx-md"
            />
          </div>

          <div v-for="key in ['login', 'signUp']" :key="key">
            <q-item class="text-vk-accent fs-13 text-left" clickable>
              <q-item-section class="q-py-sm">
                {{ $t(`Home.navbar.${key}`) }}
              </q-item-section>
            </q-item>
            <q-separator
              size="0.1em"
              color="grey-3"
              class="q-my-none q-mx-md"
            />
          </div>

          <p
            v-text="$t('Home.followUs')"
            class="text-left q-mt-md q-mx-md q-mb-sm fs-13 text-semi-bold"
          />
          <div class="flex justify-start items-center">
            <q-icon
              name="img:icons/instagram-black.svg"
              class="q-ml-md"
              size="22px"
            />
            <q-icon
              name="img:icons/youtube-black.svg"
              class="q-ml-md"
              size="28px"
            />
            <q-icon
              name="img:icons/twitter-black.svg"
              class="q-ml-md"
              size="25px"
            />
            <q-icon
              name="img:icons/tiktok-black.svg"
              class="q-ml-md"
              size="24px"
            />
            <q-icon
              name="img:icons/telegram-black.svg"
              class="q-ml-md"
              size="25px"
            />
            <q-icon
              name="img:icons/linkedin-black.svg"
              class="q-ml-md"
              size="22px"
            />
            
          </div>
        </q-list>
      </div>
    </Transition>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageSwitch from 'src/app/components/LanguageSwitch.vue';
import { useI18n } from 'vue-i18n';

const email = ref<string | null>(null);
const drawer = ref<boolean>(false);
const navbarColor = ref<'white' | 'vk-tertiary'>('vk-tertiary');

const onInter = (val: any): void =>
{
  // console.log(val);
};

const { locale } = useI18n({ useScope: 'global' });
</script>
