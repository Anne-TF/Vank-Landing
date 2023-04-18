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
        <div class="wp-60">
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-80': $q.screen.gt.sm,
            }"
            class="no-margin text-vk-black flex"
            style=""
          >
            <div class="mr-15" v-if="!((locale as readonly string[])).includes('es')">
              <span class="text-vk-secondary" v-text="'B'" />
              <span v-text="$t('Home.ank')" /> <br />
              <q-icon
                name="img:icons/v.svg"
                :size="$q.screen.gt.sm ? '48px' : '41px'"
                :style="`position: absolute; margin-top: ${
                  $q.screen.gt.sm ? '-68px' : '-68px'
                }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
              />
            </div>
            <span v-html="$t('VankCard.bankCard')"></span>
            <div class="ml-15" v-if="((locale as readonly string[])).includes('es')">
              <span class="text-vk-secondary" v-text="'B'" />
              <span v-text="'ank'" /> <br />
              <q-icon
                name="img:icons/v.svg"
                :size="$q.screen.gt.sm ? '48px' : '41px'"
                :style="`position: absolute; margin-top: ${
                  $q.screen.gt.sm ? '-68px' : '-68px'
                }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
              />
            </div>
          </h4>
          <q-icon
            name="img:icons/yellow-vank-line-big.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '23em' : '22em'}`
                : `${((locale as readonly string[])).includes('es') ? '10em' : '10em'}`
            };
            height: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '3em' : '2.5em'}`
                : `${((locale as readonly string[])).includes('es') ? '1em' : '1em'}`
            };
            margin-left: ${
              $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
              : `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
            };
            margin-top: ${((locale as readonly string[])).includes('es') ? '-20px' : '-15px'};`"
          />
          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-16 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black q-mt-xl"
            style="font-weight: 400 !important;"
            v-html="$t('VankCard.firstP')"
          />

        </div>
        <div class="wp-40 flex flex-center q-pa-xl">
          <q-icon
              name="img:icons/vank-card.svg"
              class="q-ml-xl"
              style="width: 40vh; height: 32vh"
            />
        </div>

      </div>
    </div>

    <div class="wp-100 bg-white">
       <marquee-vank-component class="q-mb-xl "/>
    </div>

    <div class="wp-100 flex flex-center">
      <div class="mt-80">
          <q-tabs
            v-model="tab"
            active-class="text-bold bg-vk-tertiary"
            indicator-color="transparent"
            class="custom-tab-label"
            no-caps
          >
            <q-tab
              name="individuals"
              icon="img:icons/invididuals-tab.svg"
              :label="$t('VankCard.individuals')"
            />
            <q-tab
              name="companies"
              icon="img:icons/company-tab.svg"
              :label="$t('VankCard.companies')"
            />
          </q-tabs>
        </div>
    </div>

    <!-- TABS -->
    <div
      :style="`${$q.screen.gt.sm ? 'min-height: 100vh;' : ''}`"
      class="wp-100 flex justify-center q-pb-none bg-vk-tertiary"
    >
      <div
        :class="{
          'q-mt-xl wp-100': $q.screen.gt.md,
          'q-mt-xl wp-99': $q.screen.gt.sm && $q.screen.lt.lg
        }"
        :style="`${
          $q.screen.gt.sm ? 'position: absolute; margin-top: 5vh;' : ''
        }`"
        class="flex justify-center"
      >
        <div
          :class="{
            'flex-inline justify-center q-gutter-x-lg': $q.screen.gt.sm,
            'justify-center q-mt-md wp-100': $q.screen.lt.md
          }"
          class="flex"
        >
          <q-img
            width="75vh"
            v-if="tab === 'individuals'"
            class="fadeInImg"
            key="individuals"
            src="../../assets/images/vank-card-tab-1-img.webp"
          />
          <q-img
            width="75vh"
            v-if="tab === 'companies'"
            class="fadeInImg"
            key="companies"
            src="../../assets/images/vank-card-tab-1-img.webp"
          />

          <div
            v-if="tab === 'individuals'"
            :class="{
              'q-pl-xl': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-40':  $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
            <div class="flex">
              <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                >
                <div class="mr-15" v-if="!((locale as readonly string[])).includes('es')">
                  <span class="text-vk-secondary" v-text="'B'" />
                  <span v-text="$t('Home.ank')" /> <br />
                  <q-icon
                    name="img:icons/v.svg"
                    :size="$q.screen.gt.sm ? '48px' : '41px'"
                    :style="`position: absolute; margin-top: ${
                      $q.screen.gt.sm ? '-68px' : '-68px'
                    }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
                  />
                </div>
              </h4>

              <div>
                <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                  v-html="$t('VankCard.vankConditions')"
                />
                <q-icon
                  name="img:icons/thin-yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '23em' : '22em'}`
                      : `${((locale as readonly string[])).includes('es') ? '10em' : '10em'}`
                  };
                  height: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '3em' : '2.5em'}`
                      : `${((locale as readonly string[])).includes('es') ? '1em' : '1em'}`
                  };
                  margin-left: ${
                    $q.screen.gt.sm
                    ? `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
                    : `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
                  };
                  margin-top: ${((locale as readonly string[])).includes('es') ? '-30px' : '-30px'};`"
                />
              </div>
              <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                >
                <div class="ml-15" v-if="((locale as readonly string[])).includes('es')">
                  <span class="text-vk-secondary" v-text="'B'" />
                  <span v-text="'ank'" /> <br />
                  <q-icon
                    name="img:icons/v.svg"
                    :size="$q.screen.gt.sm ? '48px' : '41px'"
                    :style="`position: absolute; margin-top: ${
                      $q.screen.gt.sm ? '-68px' : '-68px'
                    }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
                  />
                </div>
              </h4>

            </div>

            <div :style="`font-size: 2vh; line-height: 4.4vh;`" class="wp-80 q-mt-xl">
              <div class="step-father"
                    v-for="(key,index) in ['one','two', 'three', 'four', 'five', 'six']"
                    :key="key"
                  >
                <div class="circle-black-line" v-if="key !== 'six'"/>
                <div class="ball-father">
                  <div class="circle-black text-vk-secondary">
                    {{ index + 1 }}
                  </div>
                </div>
                <p
                  class="text-vk-grey"
                  v-text="$t(`VankCard.stepperInvididuals.${key}`)"
                />
              </div>

            </div>

          </div>

          <div
            v-if="tab === 'companies'"
            :class="{
              'q-pl-xl': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-40': $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
            <div class="flex">
              <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                >
                <div class="mr-15" v-if="!((locale as readonly string[])).includes('es')">
                  <span class="text-vk-secondary" v-text="'B'" />
                  <span v-text="$t('Home.ank')" /> <br />
                  <q-icon
                    name="img:icons/v.svg"
                    :size="$q.screen.gt.sm ? '48px' : '41px'"
                    :style="`position: absolute; margin-top: ${
                      $q.screen.gt.sm ? '-68px' : '-68px'
                    }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
                  />
                </div>
              </h4>

              <div>
                <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                  v-html="$t('VankCard.vankConditions')"
                />
                <q-icon
                  name="img:icons/thin-yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '23em' : '22em'}`
                      : `${((locale as readonly string[])).includes('es') ? '10em' : '10em'}`
                  };
                  height: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '3em' : '2.5em'}`
                      : `${((locale as readonly string[])).includes('es') ? '1em' : '1em'}`
                  };
                  margin-left: ${
                    $q.screen.gt.sm
                    ? `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
                    : `${((locale as readonly string[])).includes('es') ? '0vw' : '0vw'}`
                  };
                  margin-top: ${((locale as readonly string[])).includes('es') ? '-30px' : '-30px'};`"
                />
              </div>
              <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                >
                <div class="ml-15" v-if="((locale as readonly string[])).includes('es')">
                  <span class="text-vk-secondary" v-text="'B'" />
                  <span v-text="'ank'" /> <br />
                  <q-icon
                    name="img:icons/v.svg"
                    :size="$q.screen.gt.sm ? '48px' : '41px'"
                    :style="`position: absolute; margin-top: ${
                      $q.screen.gt.sm ? '-68px' : '-68px'
                    }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
                  />
                </div>
              </h4>
            </div>


            <div :style="`font-size: 2vh; line-height: 4.4vh;`" class="wp-80 q-mt-xl">
              <div class="step-father"
                    v-for="(key,index) in ['one','two', 'three', 'four', 'five', 'six']"
                    :key="key"
                  >
                <div class="circle-black-line" v-if="key !== 'six'"/>
                <div class="ball-father">
                  <div class="circle-black text-vk-secondary">
                    {{ index + 1 }}
                  </div>
                </div>
                <p
                  class="text-vk-grey"
                  v-text="$t(`VankCard.stepperInvididuals.${key}`)"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
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
import { ref } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import VariantContactUs from '../components/VariantContactUs.vue';
import MarqueeComponent from '../components/MarqueeComponent.vue';
import MarqueeVankComponent from '../components/MarqueeVankComponent.vue';
const { locale } = useI18n({ useScope: 'global' });

const tab = ref<'individuals' | 'companies' >('individuals');
</script>

<style>
  .bg-vank-card{
    background: url("../../assets/images/bg-vank-card.webp"), #3a3a3a;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
  }

  .circle-black{
    width: 50px;
    height: 50px;
    max-width: 50px;
    max-height: 50px;
    min-width: 50px;
    min-height: 50px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 20px;
    position: relative;
  }

  .ball-father{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .circle-black-line{
    content: '';
    background-color: #000000;
    width: 3px;
    margin-left: 1px;
    height: calc(100% - 50px + 15px);
    position: absolute;
    bottom: 0px;
    left: 23.5px;
  }

  .step-father{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 30px;
    position: relative;
  }

  .step-father p {
    margin: 0;
    line-height: 25px;
    margin-left: 15px;
  }
</style>