<template>
  <q-page
    :class="{
      'q-pb-lg': $q.screen.gt.sm
    }"
    class="bg-white"
  >
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content" class="bg-vank-card">
      <!-- NAVBAR FOR DESKTOP -->
      <navbar-component :dark="true" class="q-mb-xl" />
      <!-- UNLIMITED MOBILE/DESKTOP -->
      <div class="flex flex-start q-mt-xl" style="padding-left: 170px;padding-top: 180px;">

        <div>
          <div style="display: flex; align-items: center;">
            <q-icon
            name="img:icons/v-yellow.svg"
            :style="`
              width: 40px;
              height: 40px;
              margin-right: 10px;
            `"
          />
            <p
              :class="{
                'fs-12 lh-30': $q.screen.lt.md,
                'fs-15 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-white"
              style="font-weight: 400 !important;"
              v-html="$t('VankCard.easiness')"
            />
          </div>

          <h1
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-60 lh-80': $q.screen.gt.sm
            }"
            class="no-margin  text-white"
            style=""
            v-html="$t('VankCard.MoreThan')"
          />
          <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-30 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-vk-secondary"
              style="font-weight: 400 !important;"
              v-html="$t('VankCard.benefit')"
          />
          <div>
            <q-btn
              no-caps
              class="text-black q-mt-xl"
              rounded
              unelevated
              color="vk-secondary"
              href="http://novapro.io:9000/#/sign-up"
              style="height: 35px; font-weight: bold; padding:  0px 50px;"
              :label="$t('Home.navbar.signUp')"
            />
          </div>
        </div>
      </div>

    </div>

    <!-- SECOND SECTION --->

    <div class="q-pa-xl flex flex-center bg-white">
      <div class="flex flex-center q-pa-xl" style="max-width: 1200px;">
        <div class="wp-50">
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,

            }"
            class="no-margin  text-vk-black"
            style=""
            v-html="$t('Company.ourCompany')"
          />
          <q-icon
            name="img:icons/yellow-vank-line-big.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '10em' : '10em'}`
                : `${((locale as readonly string[])).includes('es') ? '10em' : '10em'}`
            };
            height: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '1em' : '1em'}`
                : `${((locale as readonly string[])).includes('es') ? '1em' : '1em'}`
            };
            margin-left: ${
              $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
              : `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
            };
            margin-top: ${((locale as readonly string[])).includes('es') ? '-10px' : '-10px'};`"
          />
          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-16 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black q-mt-md"
            style="font-weight: 400 !important;"
            v-html="$t('Company.ourCompanyText')"
          />
          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-16 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black q-mt-md"
            style="font-weight: 400 !important;"
            v-html="$t('Company.ourCompanyText2')"
          />
        </div>
        <div class="wp-50 flex flex-center q-pa-xl">
          <q-icon
              name="img:icons/vank-card.svg"
              style="width: 40vh; height: 32vh"
            />
        </div>

      </div>
    </div>

    <div class="wp-100 bg-white">
       <marquee-vank-component class="q-mb-xl "/>
    </div>

   


    <!-- CONTACT US --->
    <marquee-component/>

    <div class="bg-black mb-250" style="position: relative;">
      <div style="position: relative; bottom:-100px">
        <variant-contact-us></variant-contact-us>
      </div>
      
    </div>
    
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import NavbarComponent from '../components/NavbarComponent.vue';
import VariantContactUs from '../components/VariantContactUs.vue';
import MarqueeComponent from '../components/MarqueeComponent.vue';
import MarqueeVankComponent from '../components/MarqueeVankComponent.vue';
const { locale } = useI18n({ useScope: 'global' });


</script>

<style>
  .bg-vank-card{
    background: url("../../assets/images/bg-vank-card.webp"), #3a3a3a;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
  }
</style>