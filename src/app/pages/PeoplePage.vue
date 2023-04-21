<template>
  <q-page
  >
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content" class="bg-people">
      <!-- NAVBAR FOR DESKTOP -->
      <navbar-component :dark="true" class="q-mb-xl" />
      <!-- UNLIMITED MOBILE/DESKTOP -->
      <div 
        class="flex flex-start q-mt-xl" 
        :class="{
            'ml-30': $q.screen.lt.md,
            'ml-170': $q.screen.gt.sm
        }"
        style="padding-top: 180px;">

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
              v-html="$t('People.bestChoice')"
            />
          </div>

          <h1
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-60 lh-80': $q.screen.gt.sm
            }"
            class="no-margin  text-white"
            style=""
            v-html="$t('People.takeCare')"
          />
          <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-30 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-vk-secondary"
              style="font-weight: 400 !important;"
              v-html="$t('People.andYourFamily')"
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

    <div class="row  flex justify-center pt-100 pb-100">
      <div class="col-11 col-md-5 col-lg-4 flex justify-center items-center">
        <div  style="height: fit-content;">
          <div
            
            :style="`${$q.screen.gt.sm ? '' : ''}`"
            class="mb-30"
          >
            <h3
              :class="{
                'fs-25 wp-100 lh-20 text-center': $q.screen.lt.md,
                'lh-50': $q.screen.gt.sm
              }"
              class="no-margin"
            >
              {{ `${$t('People.title1')} ${$t('People.title2')}` }} <br v-if="$q.screen.gt.sm" />
            </h3>
          </div>
          <div
            class="father-step-square"
            v-for="(key,index) in [
                'one',
                'two',
                'three',
                'four',
                'five'
            ]"
            :key="key"
            >
            <div class="number-step-square bg-vk-secondary">{{ index+1 }}</div>
            <div>
              <p v-html="$t(`People.steps.${key}`)" class="text-vk-grey no-margin"/>
            </div>
          </div>

        </div>
      </div>
      <div class="col-11 col-sm-8 col-md-6 col-lg-5" style="position: relative;">
        <q-img
            width="100%"
            class="fadeInImg"
            :style="`${$q.screen.gt.sm ? 'position: absolute;margin-top: -80px; right: -40px;max-width: 600px' : ''}`"
            key="natural"
            src="../../assets/images/phone-persons.webp"
          />
      </div>
    </div>

    <!-- Receive Payments  --->
    <div class="bg-white flex flex-center pt-100" style="min-height: 600px;">
      <div
        :class="{
          'wp-70': $q.screen.gt.md,
          'wp-80': $q.screen.lt.lg && $q.screen.gt.sm,
          'wp-100': $q.screen.lt.md,
          'mt-20': $q.screen.gt.sm,
          'q-mt-xl q-px-md': $q.screen.lt.md
        }"
      >
        <h3
          :class="{
            'fs-25 lh-30': $q.screen.lt.md
          }"
          class="q-mb-none text-center"
          v-html="$t('People.receivePayments')"
        />
        <div class="wp-100 flex justify-center">
          <q-icon
            name="img:icons/yellow-line.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '25em' : '32em'}`
                : `${((locale as readonly string[])).includes('es') ? '16em' : '16em'}`
            };
            margin-top:-0px`"
          />
        </div>
        <div class="wp-100 flex justify-center mt-40"
          :class="{
              'fs-15 lh-20': $q.screen.lt.md,
              'fs-18 lh-35': $q.screen.gt.sm
            }">
          <p v-html="$t('People.receivePaymentsP')" class="text-center text-vk-grey" style="max-width:1000px"/>
        </div>

        <div 
          class="wp-100 flex justify-between items-center q-mt-xl q-pt-xl q-pb-xl" 
          style="max-width: 1200px;width: 100%;"
          :class="{
            'column': $q.screen.lt.sm
            }" 
          >
          <div class="receive-payments-1 bg-vk-secondary">
            <q-icon
              name="img:icons/hand1.svg"
            />
            <h5 class="no-margin" v-html="$t('People.receivePaymentsSteps.one')" />
          </div>
          <div class="receive-payments-2 ">
            <h5 class="text-vk-secondary no-margin mb-10" v-html="$t('People.receivePaymentsSteps.two')" />
            <p class="text-vk-secondary no-margin" v-html="$t('People.receivePaymentsSteps.twoText')"></p>
          </div>
          <div class="receive-payments-3 bg-vk-secondary">
            <q-icon
              name="img:icons/hand3.svg"
            />
            <h5 class="no-margin" v-html="$t('People.receivePaymentsSteps.three')" />
          </div>
        </div>
      </div>
    </div>


     <!-- Products or services --->

     <div class=" bg-white flex flex-center q-pb-xl" style="min-height: 600px;">
      <div
        :class="{
          'wp-70': $q.screen.gt.md,
          'wp-80': $q.screen.lt.lg && $q.screen.gt.sm,
          'wp-100': $q.screen.lt.md,
          'mt-40': $q.screen.gt.sm,
          'q-mt-xl q-px-md': $q.screen.lt.md
        }"
      >
        <h3
          :class="{
            'fs-25 lh-30': $q.screen.lt.md
          }"
          class="q-mb-none text-center"
          v-html="$t('People.ProductsOrServices')"
        />
        <div class="wp-100 flex justify-center">
          <q-icon
            name="img:icons/yellow-line.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '20em' : '20em'}`
                : `${((locale as readonly string[])).includes('es') ? '11em' : '11em'}`
            };
            margin-top:-10px;
            margin-right: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '260px' : '260px'}`
                : `${((locale as readonly string[])).includes('es') ? '140px' : '140px'}`
            };
            `"
          />
      </div>
    </div>

      <div class="row q-mt-xl q-mb-lx q-pb-xl" style="max-width: 1200px;width: 100%;">
        <div class="col-sm-4 col-12 q-pa-md">
          <div class="div-people-cols-1">
            <div class="q-pa-xl mt-100">
              <h5
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="q-mb-none text-center text-vk-secondary q-mx-xl"
                v-html="$t('People.ProductsOrServicesCols.one')"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-8 col-12">
          <div class="row">
            <div class="col-sm-6 col-12 q-pa-md">
              <div class="div-people-cols-2">
                <div class="q-pa-xl ">
                  <h5
                    :class="{
                      'fs-25 lh-30 ': $q.screen.lt.md
                    }"
                    class="q-mb-none text-center text-vk-secondary mt-160"
                    v-html="$t('People.ProductsOrServicesCols.two')"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-12 q-pa-md">
              <div class="div-people-cols-3">
                <div class="q-pa-xl mt-40">
                  <h5
                    :class="{
                      'fs-25 lh-30': $q.screen.lt.md
                    }"
                    class="q-mb-none text-center text-vk-secondary mt-110"
                    v-html="$t('People.ProductsOrServicesCols.three')"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 q-pa-md">
              <div class="div-people-cols-4">
                <div class="q-pa-xl" style="max-width: 600px;">
                  <h5
                    :class="{
                      'fs-25 lh-30': $q.screen.lt.md
                    }"
                    class="q-mb-none text-center text-vk-secondary mt-120"
                    v-html="$t('People.ProductsOrServicesCols.four')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- TRANSFERS SECTION --->

    <div class="row bg-black  flex justify-around pt-20 pb-20 ">
      <div class="col-md-4  col-10 flex justify-center items-center">
        <div class="div-bg-hand flex justify-start items-center">
          <div>
            <div
              :class="{
                '': $q.screen.lt.md
              }"
            >
              <h3
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="q-mb-none q-mt-none text-vk-secondary"
                v-html="$t('People.transfer')"
              />
              <div class="wp-100 ">
                <q-icon
                  name="img:icons/white-yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '18em' : '14em'}`
                      : `${((locale as readonly string[])).includes('es') ? '10em' : '8em'}`
                  };
                  margin-top:${((locale as readonly string[])).includes('es') ? '-3px' : '-3px'}
                  `"
                />
            </div>
          </div>

            <p
              class="text-white"
              :class="{
                'fs-20 mt-20': $q.screen.gt.sm,
                'fs-18 wp-100 q-mt-sm': $q.screen.lt.md
              }"
              v-text="$t('People.transferP')"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 row">
        <div class="col-sm-6 col-12  q-pa-lg">
          <div class="bg-white text-black q-pa-lg" style="border-radius: 10px;">
              <q-icon
                name="img:icons/pig-black.svg"
                :style="`width:80px;height:80px`"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.one.firstWord')"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.one.secondWord')"
              />
              <p
                class="no-margin"
                :class="{
                  'fs-12 ': $q.screen.gt.sm,
                  'fs-10 ': $q.screen.lt.md
                }"
                v-text="$t('People.transferSection.one.p')"
              />
          </div>
        </div>
        <div class="col-sm-6 col-12 q-pa-lg">
          <div class="bg-black text-white q-pa-lg" style="border-radius: 10px;">
              <q-icon
                name="img:icons/coin-white.svg"
                :style="`width:80px;height:80px`"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.two.firstWord')"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.two.secondWord')"
              />
              <p
                class="no-margin"
                :class="{
                  'fs-12 ': $q.screen.gt.sm,
                  'fs-10 ': $q.screen.lt.md
                }"
                v-text="$t('People.transferSection.two.p')"
              />
          </div>
        </div>
        <div class="col-sm-6 col-12  q-pa-lg">
          <div class="bg-black text-white q-pa-lg" style="border-radius: 10px;">
              <q-icon
                name="img:icons/chat-white.svg"
                :style="`width:80px;height:80px`"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.three.firstWord')"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.three.secondWord')"
              />
              <p
                class="no-margin"
                :class="{
                  'fs-12 ': $q.screen.gt.sm,
                  'fs-10 ': $q.screen.lt.md
                }"
                v-text="$t('People.transferSection.three.p')"
              />
          </div>
        </div>
        <div class="col-sm-6 col-12 q-pa-lg">
          <div class="bg-black text-white q-pa-lg" style="border-radius: 10px;">
              <q-icon
                name="img:icons/card-white.svg"
                :style="`width:80px;height:80px`"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.four.firstWord')"
              />
              <h4
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="no-margin"
                v-html="$t('People.transferSection.four.secondWord')"
              />
              <p
                class="no-margin"
                :class="{
                  'fs-12 ': $q.screen.gt.sm,
                  'fs-10 ': $q.screen.lt.md
                }"
                v-text="$t('People.transferSection.four.p')"
              />
          </div>
        </div>
      </div>
    </div>


    <!-- CARD SECTION -->

    <div class="row bg-white flex justify-center pt-20 pb-100">
      <div class="col-md-6 col-10 flex justify-start">
        <q-img
            width="90%"
            class="fadeInImg"
            key="natural"
            src="../../assets/images/card-persons.webp"
          />
      </div>
      <div class="col-md-4 col-8 flex justify-center items-center">
        <div class="q-mb-xl" style="height: fit-content;">
          <div
              :class="{
                'q-mt-xl': $q.screen.lt.md
              }"
            >
              <h3
                :class="{
                  'fs-25 lh-30': $q.screen.lt.md
                }"
                class="q-mb-none q-mt-none"
                v-html="$t('People.card.title')"
              />
              <div class="wp-100 ">
                <q-icon
                  name="img:icons/yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '10em' : '10em'}`
                      : `${((locale as readonly string[])).includes('es') ? '8em' : '6em'}`
                  };
                  margin-top:${((locale as readonly string[])).includes('es') ? '-3px' : '-3px'}
                  `"
                />
            </div>
          </div>

          <p
            class="text-vk-grey"
            :class="{
              'fs-20 mt-20': $q.screen.gt.sm,
              'fs-18 wp-100 q-mt-sm': $q.screen.lt.md
            }"
            v-text="$t('People.card.p')"
          />

          <div
            :class="{

              '': $q.screen.gt.sm
            }"
          >
            <q-btn
              no-caps
              class="text-black "
              rounded
              unelevated
              color="vk-secondary"
              href="http://novapro.io:9000/#/sign-up"
              style="height: 35px; font-weight: bold; padding:  0px 50px;"
              :label="$t('People.card.btn')"
            />
          </div>
          <q-icon
            name="img:icons/pointing-person-black.svg"
            style="width: 15em; height: 4em;margin-left: 120px;margin-top: -15px;">
          </q-icon>

        </div>
      </div>

    </div>

     <!-- BANNER SECTION -->

     <div class="wp-100 flex justify-center bg-white" style="position: relative;">
      <div class="banner-people flex justify-end items-center">
        <div 
          style="min-width: 45%; " 
          :style="`
            min-width: ${ $q.screen.gt.xs ? '45%' : '100%'};
            max-width: ${ $q.screen.gt.xs ? '45%' : '100%'};
            `" 
          class="q-pb-md">
          <p
            class="text-vk-grey no-margin"
            :class="{
              'fs-25 mt-25': $q.screen.gt.sm,
              'fs-18 wp-50 q-mt-sm': $q.screen.lt.md
            }"
            v-text="$t('People.finalBanner.p')"
          />
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-65': $q.screen.gt.sm,
            }"
            class="no-margin  text-black"
            style=""
            v-html="$t('People.finalBanner.title')"
          />
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-65': $q.screen.gt.sm,
            }"
            class="no-margin  text-black"
            style=""
            v-html="$t('People.finalBanner.title2')"
          />
          <q-icon
            name="img:icons/thin-yellow-line.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '22em' : '22em'}`
                : `${((locale as readonly string[])).includes('es') ? '12em' : '9em'}`
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
            margin-top:  ${
              $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '-25px' : '-25px'}`
              : `${((locale as readonly string[])).includes('es') ? '-10px' : '-10px'}`
            };
            margin-left:  ${
              $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '130px' : '70px'}`
              : `${((locale as readonly string[])).includes('es') ? '58px' : '70px'}`
            };`"
          />
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-65': $q.screen.gt.sm,
            }"
            class="no-margin  text-black"
            style=""
            v-html="$t('People.finalBanner.title3')"
          />
          <div>
            <q-btn
              no-caps
              class="text-black q-mt-md"
              rounded
              unelevated
              color="vk-secondary"
              href="http://novapro.io:9000/#/sign-up"
              style="height: 35px; font-weight: bold; padding:  0px 50px;"
              :label="$t('People.finalBanner.btn')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white pb-100">

    </div>


  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import NavbarComponent from '../components/NavbarComponent.vue';


const { locale } = useI18n({ useScope: 'global' });


</script>

<style>
  .bg-people{
    background: url("../../assets/images/bg-people.webp"), #3a3a3a;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
  }
  .div-people-cols-1{
    background: url("../../assets/images/persons-imagecols-col1.webp");
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-people-cols-2{
    background: url("../../assets/images/persons-imagecols-col2.webp");
    aspect-ratio: 1;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-people-cols-3{
    background: url("../../assets/images/persons-imagecols-col3.webp");
    width: 100%;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-people-cols-4{
    background: url("../../assets/images/persons-imagecols-col4.webp");
    width: 100%;
    aspect-ratio: 2;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-people{
    background: url("../../assets/images/banner-persons.webp"), #ffffff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 110%;
    background-origin: content-box;
    width: calc(100% - 150px);
    aspect-ratio: 2;
    border-radius: 25px;
    position: relative;
    z-index: 1;
    box-shadow: 14px 15px 15px -4px rgba(0,0,0,0.3);
  }

  @media (max-width: 800px) {
    .banner-people{
      width: calc(100% - 50px);
    }
  }

  @media (max-width: 600px) {
    .banner-people{
      background:  #ffffff;
      padding: 15px;
      aspect-ratio: none;
    }
  }

  .receive-payments-1{
    aspect-ratio: 1.5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold !important;
    font-size: 30px;
    max-width: 28%;
    width: 100%;
  }

  .receive-payments-1 span {
    width: 30%;
    height: 60%;
    margin-right: 20px;
  }

  .receive-payments-2{
    background: url("../../assets/images/hand2.svg"), #000000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 33%;
    background-origin: content-box;
    aspect-ratio: 1.5;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 28%;
    width: 100%;
    padding: 0px 25px;
  }

  .receive-payments-3 span {
    width: 30%;
    height: 60%;
    margin-right: 40px;
  }


  .receive-payments-3{
    aspect-ratio: 1.5;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-weight: bold;
    font-size: 30px;
    max-width: 28%;
    width: 100%;
  }

  @media (max-width: 600px) {
    .receive-payments-1{
      max-width: 250px;
      margin-bottom: 40px;
    }
    .receive-payments-2{
      max-width: 250px;
      margin-bottom: 40px;
    }
    .receive-payments-3{
      max-width: 250px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 800px) {

  }

  .father-step-square{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 20px;
  }

  .father-step-square p{
    font-size: 18px;
  }

  .number-step-square{
    text-align: center;
    border-radius: 8px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 25px;
    max-height: 25px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    margin-right: 20px;
    margin-top: 5px;
  }

  .div-bg-hand{
    background: url("../../assets/images/hand-phone-persons.svg"), #000000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
    background-origin: content-box;
    width: 100%;
    aspect-ratio: 0.8;
  }
</style>