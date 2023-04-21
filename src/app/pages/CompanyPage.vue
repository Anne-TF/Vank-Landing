<template>
  <q-page
    :class="{
      'q-pb-lg': $q.screen.gt.sm
    }"
  >
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content" class="bg-black">
      <!-- NAVBAR FOR DESKTOP -->
      <navbar-component :dark="true" class="q-mb-xl" />
      <!-- UNLIMITED MOBILE/DESKTOP -->
      <div class="flex flex-center q-mt-xl">
        <q-icon name="img:icons/vank-phone.svg" class="q-mb-xl" size="55vh" />
        <div>
          <p
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-26 lh-30': $q.screen.gt.sm
            }"
            class="no-margin text-left text-white"
            style="font-weight: 400 !important;"
            v-html="$t('Company.unlock')"
          />
          <h1
            :class="{
              'fs-50 lh-80': $q.screen.lt.md,

            }"
            class="no-margin  text-vk-secondary"
            style=""
            v-html="$t('Company.unlimited')"
          />
          <q-icon
            name="img:icons/white-vank-line-big.svg"

            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '25em' : '25em'}`
                : `${((locale as readonly string[])).includes('es') ? '18em' : '18em'}`
            };
            height: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '2em' : '2em'}`
                : `${((locale as readonly string[])).includes('es') ? '2em' : '2em'}`
            };
            margin-left: ${
              $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '0vw' : '2vw'}`
              : `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
            };
            margin-top: ${((locale as readonly string[])).includes('es') ? '-18px' : '-18px'};`"
          />
          <div class="q-pl-xl">
            <h3
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,

              }"
              class="no-margin text-center text-white"
              style=""
              v-html="$t('Company.possibilities')"
            />
            <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-26 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-vk-secondary"
              style="font-weight: 400 !important;"
              v-html="$t('Company.just')"
            />
          </div>
        </div>


        <div class="wp-100 flex flex-center" v-if="$q.screen.gt.sm" style="bottom: 40px;position: absolute;">
          <q-icon name="img:icons/mouse.svg" size="5vh" />
        </div>
      </div>

    </div>

    <!-- SECOND SECTION --->

    <div class="q-pa-xl flex flex-center">
      <div class="flex flex-center   row"
          :class="{
              'q-pa-xl': $q.screen.gt.sm,

            }"   style="max-width: 1200px;">
        <div class="col-12 col-md-6 ">
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
        <div class="col-12 col-md-6  flex flex-center"
        :class="{
              'q-pa-xl': $q.screen.gt.sm,

            }"  >
          <q-img

            width="100%"
            :class="{   }"
            src="../../assets/images/company-persons.webp"
          />
        </div>
        <div class="col-12 col-md-6 ">
          <q-img
            :class="{
              'mt-50': $q.screen.lt.md,

            }"
            width="100%"

            src="../../assets/images/company-computer.webp"
          />
        </div>
        <div class="col-12 col-md-6 flex flex-center "
        :class="{
              'q-pa-xl': $q.screen.gt.sm,

            }"  >

          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-16 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black q-mt-md"
            style="font-weight: 400 !important;"
            v-html="$t('Company.ourCompanyText3')"
          />
        </div>

      </div>
    </div>
    <marquee-component/>
    <!-- CONTACT US NOW --->
    <coffee-contact-us></coffee-contact-us>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import NavbarComponent from '../components/NavbarComponent.vue';
import CoffeeContactUs from '../components/CoffeeContactUs.vue';
import MarqueeComponent from '../components/MarqueeComponent.vue';

const { locale } = useI18n({ useScope: 'global' });


</script>

