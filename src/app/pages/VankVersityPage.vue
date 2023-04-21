<template>
  <q-page

  >
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content" class="bg-vank-versity">
      <!-- NAVBAR FOR DESKTOP -->
      <navbar-component :dark="true" class="q-mb-xl" />
      <!-- UNLIMITED MOBILE/DESKTOP -->
      <div class="flex flex-start q-mt-xl" style="padding-top: 180px;"
        :class="{
            'ml-30': $q.screen.lt.md,
            'ml-170': $q.screen.gt.sm
        }">

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
              v-html="$t('VankVersity.firstAlly')"
            />
          </div>

          <h1
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-60 lh-80': $q.screen.gt.sm
            }"
            class="no-margin  text-white"
            style=""
            v-html="$t('VankVersity.weAre')"
          />
          <p
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,
                'fs-30 lh-30': $q.screen.gt.sm
              }"
              class="no-margin text-left text-vk-secondary"
              style="font-weight: 400 !important;"
              v-html="$t('VankVersity.takingCare')"
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

    <div class="row bg-white flex justify-center pt-30 pb-30">
      <div class="col-10 col-md-6 flex justify-center">
        <q-img
            width="70%"
            class="fadeInImg"
            key="natural"
            src="../../assets/images/1-image-vankversity.webp"
          />
      </div>
      <div class="col-10 col-md-5 flex justify-center items-center">
        <div :class="{ 'flex justify-center': $q.screen.lt.md }" style="height: fit-content;">
          <div
            :class="{ 'flex justify-center': $q.screen.lt.md }"
            class="mb-15 mt-20"
          >
            <h2
              :class="{
                'fs-25 lh-30': $q.screen.lt.md,

              }"
              class="no-margin  text-vk-black"
              style=""
              v-html="'VankVersity'"
            />
            <q-icon
              name="img:icons/yellow-vank-line-big.svg"
              :style="`
              position: absolute;
              width: ${
                $q.screen.gt.sm
                  ? `12.5em`
                  : `10em`
              };
              height: ${
                $q.screen.gt.sm
                  ? `1em`
                  : `1em`
              };
              margin-left: ${
                $q.screen.gt.sm
                ? `0vw`
                : `0vw`
              };
              margin-top: ${
                $q.screen.gt.sm
                ? `-8px`
                : `25px`
              };`"
            />
          </div>

          <p
            class="text-vk-grey text-justify"
            :class="{
              'fs-20 mt-20 lh-35': $q.screen.gt.sm,
            }"
            v-text="$t('VankVersity.itIs')"
          />

          <div class="flex justify-between mt-50" :class="{
            'column': $q.screen.lt.sm
            }"  style="position: relative;">
            <div class="box-svg-black">
              <q-icon
                name="img:icons/versity-cards-one.svg"
              />
              <p class="text-vk-secondary no-margin">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div class="box-svg-white">
              <q-icon
                name="img:icons/versity-cards-two.svg"
              />
              <p class="no-margin">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div class="box-svg-white">
              <q-icon
                name="img:icons/versity-cards-three.svg"
              />
              <p class="no-margin">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- THIRD SECTION --->

    <div class="wp-100 flex flex-center bg-white">
      <div class="mt-80">
          <q-tabs
            v-model="tab"
            active-class="text-bold bg-vk-tertiary"
            indicator-color="transparent"
            class="custom-tab-label"
            no-caps
          >
            <q-tab
              name="target"
              icon="img:icons/invididuals-tab.svg"
              :label="$t('VankVersity.target')"
            />
            <q-tab
              name="information"
              icon="img:icons/company-tab.svg"
              :label="$t('VankVersity.information')"
            />
            <q-tab
              name="service"
              icon="img:icons/company-tab.svg"
              :label="$t('VankVersity.service')"
            />
          </q-tabs>
        </div>
    </div>

    <!-- TABS -->
    <div
      :class="`${$q.screen.gt.sm ? 'pt-50 pb-80' : ''}`"
      class="wp-100 flex justify-center q-pb-none bg-vk-tertiary"
    >
      <div
        :class="{
          'q-mt-xl wp-100': $q.screen.gt.md,
          'q-mt-xl wp-99': $q.screen.gt.sm && $q.screen.lt.lg
        }"
        :style="`${
          $q.screen.gt.sm ? ' margin-top: 5vh;' : ''
        }`"
        class="flex justify-center"
      >
        <div
          :class="{
            'flex-inline justify-center q-gutter-x-lg': $q.screen.gt.sm,
            'justify-center q-mt-md wp-100': $q.screen.lt.md
          }"
          class="flex items-center"
        >
          <q-img
            :width="$q.screen.gt.sm ? '40vh' : '22vh'"
            :height="$q.screen.gt.sm ? '51vh' : '30vh'"
            v-if="tab === 'target'"
            class="fadeInImg"
            key="individuals"
            src="../../assets/images/tabs-vankversity.webp"
          />
          <q-img
            :width="$q.screen.gt.sm ? '40vh' : '22vh'"
            :height="$q.screen.gt.sm ? '51vh' : '30vh'"
            v-if="tab === 'information'"
            class="fadeInImg"
            key="companies"
            src="../../assets/images/tabs-vankversity.webp"
          />
          <q-img
            :width="$q.screen.gt.sm ? '40vh' : '22vh'"
            :height="$q.screen.gt.sm ? '51vh' : '30vh'"
            v-if="tab === 'service'"
            class="fadeInImg"
            key="companies"
            src="../../assets/images/tabs-vankversity.webp"
          />

          <div
            v-if="tab === 'target'"
            :class="{
              'q-pl-xl pl-100': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-40':  $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
            <div class="flex">
              <div
                :class="{
                    '': $q.screen.gt.sm,
                    'q-pa-md': $q.screen.lt.md
                  }">
                <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                  v-html="$t('VankVersity.target')"
                />
                <q-icon
                  name="img:icons/thin-yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '15.5em' : '13em'}`
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
                  margin-top:${
                    $q.screen.gt.sm
                    ? `${((locale as readonly string[])).includes('es') ? '-30px' : '-25px'}`
                    : `${((locale as readonly string[])).includes('es') ? '-5px' : '-5px'}`
                  };`"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetOne')"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetTwo')"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetThree')"
                />
              </div>
            </div>
          </div>


          <div
            v-if="tab === 'information'"
            :class="{
              'q-pl-xl pl-100': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-40':  $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
          <div class="flex">
              <div
                :class="{
                    '': $q.screen.gt.sm,
                    'q-pa-md': $q.screen.lt.md
                  }">
                <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                  v-html="$t('VankVersity.target')"
                />
                <q-icon
                  name="img:icons/thin-yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '15.5em' : '13em'}`
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
                  margin-top:${
                    $q.screen.gt.sm
                    ? `${((locale as readonly string[])).includes('es') ? '-30px' : '-25px'}`
                    : `${((locale as readonly string[])).includes('es') ? '-5px' : '-5px'}`
                  };`"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetOne')"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetTwo')"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetThree')"
                />
              </div>
            </div>
          </div>


          <div
            v-if="tab === 'service'"
            :class="{
              'q-pl-xl pl-100': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-40':  $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
          <div class="flex">
              <div
                :class="{
                    '': $q.screen.gt.sm,
                    'q-pa-md': $q.screen.lt.md
                  }">
                <h4
                  :class="{
                    'fs-25 lh-30': $q.screen.lt.md,
                    'fs-50 lh-80': $q.screen.gt.sm,
                  }"
                  class="no-margin  text-vk-black"
                  style=""
                  v-html="$t('VankVersity.target')"
                />
                <q-icon
                  name="img:icons/thin-yellow-line.svg"
                  :style="`
                  position: absolute;
                  width: ${
                    $q.screen.gt.sm
                      ? `${((locale as readonly string[])).includes('es') ? '15.5em' : '13em'}`
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
                  margin-top:${
                    $q.screen.gt.sm
                    ? `${((locale as readonly string[])).includes('es') ? '-30px' : '-25px'}`
                    : `${((locale as readonly string[])).includes('es') ? '-5px' : '-5px'}`
                  };`"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetOne')"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetTwo')"
                />
                <p
                  class="text-vk-grey text-justify"
                  :class="{
                    'fs-18 mt-20 lh-30': $q.screen.gt.sm,
                    'fs-18 q-mt-sm': $q.screen.lt.md
                  }"
                  v-html="$t('VankVersity.targetThree')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- FOURTH SECTION -->

    <div class=" flex flex-center bg-white"
        :class="{
              'q-pa-xl': $q.screen.gt.sm,
              'q-pa-md': $q.screen.lt.md,

            }"
    >
      <div class="flex flex-center row " :class="{
              'q-pa-xl': $q.screen.gt.sm,

            }" style="max-width: 1400px;">
        <div class="col-12 col-md-6  ">
          <p
            :class="{
              'fs-20 lh-30': $q.screen.lt.md,
              'fs-25 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black no-margin  text-vk-grey text-justify"
            style="font-weight: 400 !important;"
            v-html="$t('VankVersity.inShort')"
          />
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-80': $q.screen.gt.sm,
            }"
            class="no-margin text-vk-black flex"
            style=""
          >
            <span v-html="$t('VankVersity.with')"></span>
            <div class="ml-15" >
              <span class="text-vk-secondary" v-text="'B'" />
              <span v-text="'ankVersity'" /> <br />
              <q-icon
                name="img:icons/v.svg"
                :size="$q.screen.gt.sm ? '48px' : '25px'"
                :style="`position: absolute; margin-top: ${
                  $q.screen.gt.sm ? '-68px' : '-30px'
                }; margin-left: ${((locale as readonly string[])).includes('es') ? '-0.1em' : '-0.1em'};`"
              />
            </div>
          </h4>

          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-16 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black q-mt-lg text-vk-grey text-justify"
            style="font-weight: 400 !important;"
            v-html="$t('VankVersity.with1')"
          />

          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-16 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-black q-mt-lg text-vk-grey text-justify"
            style="font-weight: 400 !important;"
            v-html="$t('VankVersity.with2')"
          />

        </div>
        <div class="col-12 col-md-6 flex flex-center" :class="{
              'q-pa-md': $q.screen.gt.sm,
            }">
          <q-img
            width="100%"
            class="fadeInImg"
            key="companies"
            src="../../assets/images/in-resume.webp"
          />
        </div>

      </div>
    </div>

    <!-- FOURTH SECTION -->

    <div class="wp-100 flex justify-center bg-white" style="position: relative;">
      <div class="bg-vk-secondary div-yellow"></div>
      <div class="banner-vankversity flex justify-end items-center">
        <div  :style="`
            min-width: ${ $q.screen.gt.xs ? '45%' : '100%'};
            max-width: ${ $q.screen.gt.xs ? '50%' : '100%'};
            `" >
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-65': $q.screen.gt.sm,
            }"
            class="no-margin  text-white"
            style=""
            v-html="$t('VankVersity.betPart')"
          />
          <h4
            :class="{
              'fs-25 lh-30': $q.screen.lt.md,
              'fs-50 lh-65': $q.screen.gt.sm,
            }"
            class="no-margin  text-white"
            style=""
            v-html="$t('VankVersity.family')"
          />
          <q-icon
            name="img:icons/thin-yellow-line.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '22em' : '22em'}`
                : `${((locale as readonly string[])).includes('es') ? '12em' : '12em'}`
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
            margin-top: ${
              $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '-25px' : '-25px'}`
              : `${((locale as readonly string[])).includes('es') ? '-10px' : '-10px'}`
            };
            `"
          />
          <p
            :class="{
              'fs-12 lh-30': $q.screen.lt.md,
              'fs-18 lh-30': $q.screen.gt.sm
            }"
            class="text-justify text-white q-mt-lg "
            style="font-weight: 400 !important;"
            :style="`
            max-width: ${ $q.screen.gt.xs ? '70%' : '100%'};
            `"
            v-html="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'"
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
              :style="`
              padding: ${ $q.screen.gt.xs ? '  0px 50px' : '  0px 30px'};
              `"
              :label="$t('Home.navbar.signUpNow')"
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
import { ref } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';

const { locale } = useI18n({ useScope: 'global' });

const tab = ref<'target' | 'information' | 'service' >('target');
</script>

<style>
  .bg-vank-versity{
    background: url("../../assets/images/bg-vank-versity.webp"), #3a3a3a;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
  }
  .box-svg-black{
    aspect-ratio: 1;
    background-color: #000000;
    width: 30%;
    border-radius: 6%;
    text-align: center;
    font-size: 20px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: lighter;
    position: relative;
  }

  .box-svg-black span{
    width: 50%;
    height: 40%;
    aspect-ratio: 1;
    margin-bottom: 10px;
  }
  .box-svg-black img{
    width: 100%;
    aspect-ratio: 1;
  }
  .box-svg-white span{
    width: 50%;
    height: 40%;
    aspect-ratio: 1;
    margin-bottom: 10px;
  }
  .box-svg-white img{
    width: 100%;
    aspect-ratio: 1;
  }
  .box-svg-white{
    aspect-ratio: 1;
    background-color: #ffffff;
    color:#000000;
    width: 30%;
    border-radius: 6%;
    text-align: center;
    font-size: 20px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }


  @media (max-width: 600px) {
    .box-svg-white{
      max-width: 250px;
      width: 250px;
      margin-bottom: 40px;
    }
    .box-svg-black{
      max-width: 250px;
      width: 250px;
      margin-bottom: 40px;
    }
  }

  .banner-vankversity{
    background: url("../../assets/images/banner-vankversity.webp"), #000000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    width: calc(100% - 150px);
    aspect-ratio: 3;
    border-radius: 25px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 800px) {
    .banner-vankversity{
      width: calc(100% - 50px);
      margin-top: 80px

    }
    .div-yellow{
      display: none;
    }
  }

  @media (max-width: 600px) {
    .banner-vankversity{
      padding: 15px;
      aspect-ratio: none;
      height: 400px;
    }
  }

  .div-yellow{
    width: 100%;
    aspect-ratio: 9;
    z-index: 0;
    position: absolute;
    top: calc(100% - 70%);
  }
</style>