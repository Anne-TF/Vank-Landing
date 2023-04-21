<template>
    <q-page
      :class="{
        'q-pb-lg': $q.screen.gt.sm
      }"
    >
      <!-- FIRST SECTION --->
      <div style="min-height: 96vh; contain: content" class="bg-white">
        <!-- NAVBAR FOR DESKTOP -->
        <navbar-component  class="q-mb-xl" />
        <!-- UNLIMITED MOBILE/DESKTOP -->
        <div class="flex flex-center "
        :class="{
            'ml-30 mt-80': $q.screen.lt.md
        }">
          <div :class="{
            'mb-60': $q.screen.lt.md
        }">
            <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-26 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-black"
              style="font-weight: 400 !important;"
              v-html="$t('ContactUs.writeToUs')"
            />
            <h2
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,

              }"
              class="no-margin  text-black"
              style=""
              v-html="$t('ContactUs.ourPersonalized')"
            />
            <h1
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,

              }"
              class="no-margin  text-black"
              style=""
              v-html="$t('ContactUs.consulting')"
            />
            <q-icon
              name="img:icons/yellow-bar-contact.svg"

              :style="`
              position: absolute;
              width: ${
                $q.screen.gt.sm
                  ? `${((locale as readonly string[])).includes('es') ? '25em' : '25em'}`
                  : `${((locale as readonly string[])).includes('es') ? '12em' : '10em'}`
              };
              height: ${
                $q.screen.gt.sm
                  ? `${((locale as readonly string[])).includes('es') ? '2em' : '2em'}`
                  : `${((locale as readonly string[])).includes('es') ? '2em' : '2em'}`
              };
              margin-left: ${
                $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '2vw' : '0vw'}`
                : `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
              };
              margin-top: ${((locale as readonly string[])).includes('es') ? '-18px' : '-18px'};`"
            />
            <div class="q-mt-md">
              <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-26 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-black"
              style="font-weight: 400 !important;"
              v-html="$t('ContactUs.becomePart')"
            />
            <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-26 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-black"
              style="font-weight: 400 !important;"
              v-html="$t('ContactUs.bank')"
            />
            </div>
          </div>
            <q-img
              :width="$q.screen.gt.sm ? '59vh' : '30vh'"
              :height="$q.screen.gt.sm ? '80vh' : '40vh'"

              style="position: relative; z-index: 1;"
              src="../../assets/images/contact.webp"
            />
            <div >

            </div>
        </div>

      </div>

      <marquee-component/>

      <!-- SECOND SECTION --->
      <div class="bg-black mb-250" style="position: relative;">
        <div style="position: relative; bottom:-100px">
          <variant-contact-us></variant-contact-us>
        </div>

      </div>

      <marquee-vank-component class="q-mb-xl"/>
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

<style lang="scss">

</style>
