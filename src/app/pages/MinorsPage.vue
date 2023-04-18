<template>
  <q-page
    :class="{
      'q-pb-lg': $q.screen.gt.sm
    }"
  >
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content" class="bg-minors">
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
              v-html="$t('Minor.vankHas')"
            />
          </div>

          <h1
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-60 lh-80': $q.screen.gt.sm
            }"
            class="no-margin  text-white"
            style=""
            v-html="$t('Minor.gift')"
          />
          <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-30 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-vk-secondary"
              style="font-weight: 400 !important;"
              v-html="$t('Minor.futureDollars')"
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

    <!-- MARQUEE SECTION --->

    <div

      :class="{
        'q-px-md': $q.screen.lt.md
      }"
      class="flex flex-center bg-white"
    >
      <div class="wp-100" style="position: relative; top: 28px;">
        <marquee-vank-component class=""/>
      </div>
    </div>

    <!-- CONDITIONS SECTION --->

    <div
      :style="`${$q.screen.gt.sm ? 'position:relative' : 'position:relative'}`"
      class="wp-100 flex justify-start items-end q-pb-none bg-white div-condition"
    >
    <img
        class="img-vank-card-hand "
        key="companies"
        :ratio="16/9"
        src="../../assets/images/vankcard-hand.webp"
      />
    <div
        :class="{
          'q-pl-xl': $q.screen.gt.md,
          'justify-center': $q.screen.lt.md,
          'wp-50':  $q.screen.gt.sm
        }"
        style="align-self: center;"
        class="flex justify-start items-center q-mt-md hp-100"
      >
        
        <div :style="`font-size: 2vh; line-height: 6vh;`" class="wp-80 ">
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

          <div class="mb-40">
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
                  ? `${((locale as readonly string[])).includes('es') ? '320px' : '300px'}`
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
              margin-top: ${((locale as readonly string[])).includes('es') ? '-60px' : '-55px'};`"
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

          <div class="step-father"
                v-for="(key) in ['yellow-pig','yellow-money','yellow-card']"
                :key="key"
              >
            <div class="circle-black-line" v-if="key !== 'yellow-card'"/>
            <div class="ball-father">
              <div class="circle-black text-vk-secondary">
                <q-icon
                :name="`img:icons/${key}.svg`"
                :size="$q.screen.gt.sm ? '25px' : '25px'"
              />
              </div>
            </div>
            <p
              class="text-vk-grey"
              v-text="$t(`Minor.conditions.${key}`)"
            />
          </div>

        </div>

      </div>
    
    </div>


    <div class="wp-100 bg-unleash flex justify-center q-pt-xl q-pb-xl" >

        <div class="flex justify-center">
            <div class="wp-100" style="position: relative;">
                <p
                    :class="{
                    'fs-50': $q.screen.gt.sm,
                    'fs-30': $q.screen.lt.md,
                    }"
                    class="q-mb-none q-mt-lg text-bold text-center text-white"
                    v-text="$t(`Minor.unleash`)"
                />
                <div class="wp-100 flex flex-center" style="position: absolute; margin-top: -20px;">
                    <q-icon
                    name="img:icons/yellow-bar-contact.svg"
                    :style="`
                    width: 24em;
                    height: 1em;
                    `"
                    />
                </div>
                
            </div>
            <h1
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,

              }"
              class="no-margin  text-vk-secondary"
              style=""
              v-html="$t('Minor.yourCreativity')"
            />
        </div>
    </div>

    <!-- CONTACT US NOW --->
    <coffee-contact-us></coffee-contact-us>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import NavbarComponent from '../components/NavbarComponent.vue';
import CoffeeContactUs from '../components/CoffeeContactUs.vue';
import MarqueeVankComponent from '../components/MarqueeVankComponent.vue';

const { locale } = useI18n({ useScope: 'global' });


</script>

<style>
  .bg-minors{
    background: url("../../assets/images/bg-minors.webp"), #3a3a3a;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
  }

  .bg-unleash{
    background: url("../../assets/images/unleash-banner.webp"), #000000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    min-height: 350px;
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
    height: calc(100% - 50px + 30px);
    position: absolute;
    bottom: -30px;
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
    line-height: 35px;
    margin-left: 25px;
    font-size: 18px
  }

  .img-vank-card-hand{
    position: relative;
    left: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    bottom: 0px;
    width: 50%;
    aspect-ratio: auto;
  }

  @media (max-width: 1400px) {
    .img-vank-card-hand{
      max-width: 50%;
    }
  }

</style>