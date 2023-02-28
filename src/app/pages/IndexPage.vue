<template>
  <q-page
    :class="{
      'q-pb-lg' : $q.screen.gt.sm
     }">
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content">
      <!-- YELLOW SECTION --->
      <div class="bg-vk-secondary hp-100 wp-50 flex flex-center" style="position: absolute; top: 0; right: 0; z-index: 0;">
        <q-icon name="img:icons/lady.svg" class="q-mb-xl" size="55vh" />
        <!-- TEXT US BTN --->
        <q-btn
          :label="$t('Home.textUs')"
          no-caps
          icon="fa-brands fa-whatsapp"
          color="vk-accent"
          rounded
          unelevated
          :class="{
            'fs-16' : $q.screen.gt.sm
          }"
          class="text-bold q-px-lg absolute-bottom-right mb-50 q-mr-xl"
          />
      </div>
      <!-- NAVBAR -->
      <div
        class="flex flex-inline justify-between"
        :class="{ 'q-pt-lg q-px-xl' : $q.screen.gt.sm }" style="z-index: 9;">
        <q-icon name="img:icons/vank-black.svg" style="width: 10vh; height: 5vh;" />
        <div style="z-index: 9" class="flex flex-center q-gutter-x-lg wp-60 pl-108">
          <span v-text="$t('Home.navbar.people')" />
          <span v-text="$t('Home.navbar.business')" />
          <span v-text="$t('Home.navbar.vankCard')" />
          <span v-text="$t('Home.navbar.vankVersity')" />
          <span v-text="$t('Home.navbar.company')" />
          <span v-text="$t('Home.navbar.contact')" />
        </div>
        <div class="flex flex-inline items-center">
          <q-btn
            rounded
            no-caps
            color="vk-accent"
            unelevated
            :class="{
              'q-mr-sm' : $q.screen.gt.sm
             }"
            class="text-bold"
            style="min-width: 10vh; height: 30px;"
            :label="$t('Home.navbar.login')"
          />
          <q-btn
            no-caps
            flat
            rounded
            unelevated
            style="height: 30px;"
            :label="$t('Home.navbar.signUp')"
          />
        </div>
      </div>

      <!-- GREETING -->
      <div
        class="flex flex-center wp-50 hp-82"
        :class="{ 'q-pt-lg q-px-xl' : $q.screen.gt.sm }" style="z-index: 9;">
        <div>
          <div style="height: 18vh;">
            <p class="no-margin lh-40 text-vk-grey" :class="{ 'fs-26' : $q.screen.gt.sm }">Hello there!</p>
            <h3 class="no-margin lh-50">{{ $t('Home.thisIsNoBank') }} <br /> {{$t('Home.its')}}</h3>
            <q-icon name="img:icons/vank-line.svg" style="width: 22vh; height: 10vh; top: -55px; margin-left: 5em;" />
          </div>

          <p
            class="text-center text-vk-grey"
            :class="{
              'fs-25' : $q.screen.gt.sm
            }"
            v-text="$t('Home.manageYourMoney')" />

          <div class="q-mt-xl">
            <q-btn
              color="vk-secondary"
              class="text-vk-accent text-semi-bold wp-40 q-mr-md"
              rounded
              :class="{
                'fs-16 q-py-sm' : $q.screen.gt.sm
              }"
              no-caps
              unelevated
              :label="$t('Home.navbar.login')"
            />
            <q-btn
              class="text-vk-accent text-semi-bold q-px-lg"
              flat
              rounded
              :class="{
                'fs-16' : $q.screen.gt.sm
              }"
              no-caps
              :label="$t('Home.navbar.signUp')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- TRANSFER, RECEIVE AND SAVE SECTION -->
    <div
      :class="{
        'flex flex-center' : $q.screen.gt.sm
      }"
      class="bg-white">
      <div class="wp-60 column items-center justify-between hp-100">
        <div class="wp-70 row" :class="{ 'mt-90' : $q.screen.gt.sm }">
          <h3
            class="text-regular q-mb-xl q-mt-none text-center col-12"
            :class="{ 'fs-40' : $q.screen.gt.sm }" v-text="$t('Home.tranfer')" />

          <div class="col-12 col-sm-6">
            <p class="text-vk-grey no-margin" :class="{ 'fs-25' : $q.screen.gt.sm }" v-text="$t('Home.withAnApp')" />
            <p class="no-margin text-bold" :class="{ 'text-h3 q-mt-none lh-60' : $q.screen.gt.sm }">
              <span v-text="$t('Home.a').concat(' ')" />
              <span class="text-vk-secondary" v-text="$t('Home.b')" />
              <span v-text="$t('Home.ank')" /> <br />
              <q-icon name="img:icons/v.svg" size="48px" :style="`position: absolute; margin-top: -56px; margin-left: ${locale.includes('es') ? '1.3em' : '0.65em'};`" />
              <span v-text="$t('Home.intoMusic')" /> <br />
              <span v-text="$t('Home.forYourEars')" />
            </p>
          </div>

          <p
            class="text-vk-grey col-12 col-sm-6 flex justify-end items-center"
            :class="{ 'fs-16 lh-25' : $q.screen.gt.sm }"
            v-html="$t('Home.weAreTheSolution').replace(/\n/g, '<br />')" />
        </div>

        <div class="mt-80">
          <p
            :class="{
            'fs-40 q-mb-lg' : $q.screen.gt.sm
          }"
            v-text="$t('Home.hereWeAllFit')" />
          <q-tabs
            v-model="tab"
            active-class="text-bold bg-vk-tertiary"
            indicator-color="transparent"
            class="custom-tab-label"
            no-caps
          >
            <q-tab
              name="natural" icon="img:icons/happy.svg"
              :label="$t('Home.naturalPerson')" />
            <q-tab
              name="business" icon="img:icons/dollar.svg"
              :label="$t('Home.navbar.business')" />
            <q-tab
              name="minors" icon="img:icons/cool.svg"
              :label="$t('Home.minors')" />
          </q-tabs>
        </div>

      </div>
    </div>

    <!-- TABS -->
    <!-- NATURAL PERSON TAB --->
    <div style="height: 39vh;" class="wp-100 flex justify-center q-pb-none">
      <div
        :class="{
            'q-mt-xl wp-80' : $q.screen.gt.sm
          }"
        style="position: absolute; margin-top: 5vh;"
        class="flex justify-center">
        <div class="flex flex-inline q-gutter-x-lg">
        <q-img
          height="38vh" width="32vh"
          v-if="tab === 'natural'"
          class="fadeInImg"
          key="natural"
          src="../../assets/images/natural-person.webp" />
        <q-img
          height="38vh" width="32vh"
          v-if="tab === 'business'"
          key="business"
          class="fadeInImg"
          src="../../assets/images/business.webp" />
        <q-img
          height="38vh" width="32vh"
          v-if="tab === 'minors'"
          key="minors"
          class="fadeInImg"
          src="../../assets/images/minors.webp" />

          <div
            v-if="tab === 'natural'"
            class="flex flex-inline q-mt-md q-pl-xl fadeInText">
            <q-icon name="img:icons/steps.svg" style="height: 25vh; width: 5vh" class="q-mt-md" />
            <div :style="`font-size: 2vh; line-height: 4.4vh;`">
              <p v-text="$t('Home.naturalSteps.one')" />
              <p v-text="$t('Home.naturalSteps.two')" />
              <p v-text="$t('Home.naturalSteps.three')" />
              <p v-text="$t('Home.naturalSteps.four')" />
              <p v-text="$t('Home.naturalSteps.five')" />
            </div>

            <div class="wp-100 q-ml-lg">
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl q-py-sm"
              />
            </div>
          </div>

          <div
            v-if="tab === 'business'"
            class="flex flex-inline q-mt-md q-pl-xl fadeInText">
            <q-icon name="img:icons/steps.svg" style="height: 25vh; width: 5vh" class="q-mt-md" />
            <div :style="`font-size: 2vh; line-height: 4.4vh;`">
              <p v-text="$t('Home.businessSteps.one')" />
              <p v-text="$t('Home.businessSteps.two')" />
              <p v-text="$t('Home.businessSteps.three')" />
              <p v-text="$t('Home.businessSteps.four')" />
              <p v-text="$t('Home.businessSteps.five')" />
            </div>

            <div class="wp-100 q-ml-lg">
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl q-py-sm"
              />
            </div>
          </div>

          <div
            v-if="tab === 'minors'"
            class="flex flex-inline q-mt-md q-pl-xl fadeInText">
            <q-icon name="img:icons/steps.svg" style="height: 25vh; width: 5vh" class="q-mt-md" />
            <div :style="`font-size: 2vh; line-height: 4.4vh;`">
              <p v-text="$t('Home.minorsSteps.one')" />
              <p v-text="$t('Home.minorsSteps.two')" />
              <p v-text="$t('Home.minorsSteps.three')" />
              <p v-text="$t('Home.minorsSteps.four')" />
              <p v-text="$t('Home.minorsSteps.five')" />
            </div>

            <div class="wp-100 q-ml-lg">
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl q-py-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- APP WITH A HIGH PERCENTAGE OF WELLNESS SECTION --->
    <div class="bg-white flex flex-center">
      <div
          class="mt-90"
           :class="{
              'wp-70' : $q.screen.gt.md,
              'wp-80' : $q.screen.lt.lg && $q.screen.gt.sm,
              'wp-100' : $q.screen.lt.md
           }">
        <h3 class="no-margin text-center" v-html="$t('Home.highWellness').replace(/\n/g, '<br />')" />
        <q-icon
          name="img:icons/yellow-line.svg"
          :style="`
          position: absolute;
          width: ${locale.includes('es') ? '22em' : '19em'};
          margin-left: ${locale.includes('es') ? '30vw' : '30vw'};
          margin-top: ${locale.includes('es') ? '-8px' : '-3px'};`" />

        <p
          class="text-vk-grey text-center wp-100"
          :class="{
            'fs-18 q-mt-lg' : $q.screen.gt.sm
          }"
          v-html="$t('Home.anIntuitivePlatform').replace(/\n/g, '<br />')" />

        <div
          class="q-mx-auto flex flex-inline justify-between mb-90"
          :class="{
            'mt-70' : $q.screen.gt.sm,
            'wp-75' : $q.screen.gt.md,
            'wp-100' : $q.screen.lt.lg
          }">
          <q-card
            flat
            :style="`height: 16vh; width: ${$q.screen.gt.md ? '10vw' : '16vw'}`"
            :class="`bg-${card.color}`"
            class="br-12 flex flex-center"
            v-for="(card, index) in cards" :key="index">
            <q-card-section class="no-padding flex flex-center">
              <q-icon :name="`img:icons/${card.icon}`" size="45px" />
              <p
                class="text-center wp-100 text-bold lh-18 q-mt-sm q-mb-none"
                v-html="$t(card.titleKey).replace(/\n/g, '<br />')" />
              <p
                class="text-center wp-100 lh-14 fs-12 q-mt-xs q-mb-none"
                v-html="$t(card.textKey).replace(/\n/g, '<br />')" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- VANK CARD SECTION --->
    <div
        class="flex flex-center">
        <div class="flex flex-inline q-gutter-x-xl">
          <q-img
            height="36vh" width="36vh" class="my-80"
            src="../../assets/images/card.webp" />
          <div class="mt-120 q-pl-xl">
            <h3 class="q-mt-none q-mb-lg" v-text="$t('Home.vankCard')" />
            <p
              :class="{
                'fs-18 lh-30' : $q.screen.gt.sm
              }"
              class="no-margin text-vk-grey" v-html="$t('Home.discoverNewWays').replace(/\n/g, '<br />')" />

            <q-btn
              no-caps
              rounded
              color="vk-secondary"
              unelevated
              :label="$t('Home.navbar.signUp')"
              :class="{
                'mt-60' : $q.screen.gt.sm
              }"
              class="text-vk-accent text-bold q-px-xl q-py-sm"
            />
          </div>
        </div>
    </div>

    <!-- HERE EVERYTHING IS EASY SECTION --->
    <div
      style="height: 40vh;"
      class="flex flex-center bg-white">
      <div class="flex flex-inline items-center q-gutter-x-xl q-mt-xl">
        <div>
          <p
            class="no-margin text-vk-grey lh-40"
            :class="{ 'fs-33' : $q.screen.gt.sm }" v-text="$t('Home.hereEverythingIs')" />
          <h3
            class="no-margin lh-60"
            v-html="$t('Home.soEasy').replace(/\n/g, '<br />')"/>
            <q-icon name="img:icons/yellow-line-ticker.svg" style="width: 14vh; height: 30px; position: absolute; margin-top: -80px;" />
        </div>

        <div class="mt-60 flex flex-inline q-gutter-x-xl">
          <q-card class="bg-vk-tertiary br-10" flat style="width: 200px; height: 200px;">
            <q-card-section class="q-py-lg flex justify-center">
              <p
                class="text-center text-vk-grey"
                :class="{
                  'fs-20 lh-20' : $q.screen.gt.sm
                }"
                v-html="$t('Home.registerAndCreateAccount').replace(/\n/g, '<br />')" />
              <q-icon name="img:icons/stepOne.svg" size="80px" />
            </q-card-section>
          </q-card>

          <q-card class="bg-vk-tertiary br-10" flat style="width: 200px; height: 200px;">
            <q-card-section class="q-py-lg flex justify-center">
              <p
                class="text-center text-vk-grey"
                :class="{
                  'fs-20 lh-20' : $q.screen.gt.sm
                }"
                v-html="$t('Home.depositAndEnjoy').replace(/\n/g, '<br />')" />
              <q-icon class="mt-20" name="img:icons/stepTwo.svg" size="80px" />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="wp-100 flex justify-center">
        <q-btn
          no-caps
          rounded
          color="vk-secondary"
          unelevated
          :label="$t('Home.navbar.signUp')"
          class="text-vk-accent text-bold q-px-xl q-py-sm"
        />
      </div>
    </div>

    <!-- CONTACT US NOW --->
    <div class="flex flex-center py-90">
      <h3  class="no-margin text-center wp-100" v-text="$t('Home.contactUsNow')" />
      <div
        class="flex flex-inline justify-center q-mt-xl"
        :class="{
          'wp-63' : $q.screen.gt.lg,
          'wp-90' : $q.screen.lt.xl
        }">
        <q-img src="../../assets/images/coffee.webp" height="34vh" width="28vh" />
        <q-card flat class="ml-110 wp-60 br-15 bg-vk-secondary">
          <q-card-section class="q-pa-xl">
            <q-form class="row no-margin rounded-white-border-input">
              <div class="col-12 col-md-6" :class="{ 'q-pr-xl' : $q.screen.gt.sm }">
                <p class="fs-16 no-margin" v-text="$t('Fields.fullName')" />
                <q-input
                  dense
                  rounded
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 col-md-6" :class="{ 'q-pl-xl' : $q.screen.gt.sm }">
                <p class="fs-16 no-margin" v-text="$t('Fields.email').concat(' *')" />
                <q-input
                  dense
                  rounded
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 col-md-6 q-mt-lg" :class="{ 'q-pr-xl' : $q.screen.gt.sm }">
                <p class="fs-16 no-margin" v-text="$t('Fields.contactNumber').concat(' *')" />
                <q-input
                  dense
                  rounded
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 col-md-6 q-mt-lg" :class="{ 'q-pl-xl' : $q.screen.gt.sm }">
                <p class="fs-16 no-margin" v-text="$t('Fields.availableTime')" />
                <q-input
                  dense
                  rounded
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 q-mt-lg">
                <p class="fs-16 no-margin" v-text="$t('Fields.message')" />
                <q-input
                  dense
                  rounded
                  outlined
                  color="white"
                  type="textarea"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <q-btn
                :label="$t('Home.sendNow')"
                color="vk-accent"
                no-caps
                rounded
                class="q-mt-xl q-px-xl text-semi-bold"
                unelevated
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';

const { locale } = useI18n({ useScope: 'global' });
const tab = ref<'natural' | 'business' | 'minors'>('natural');
const cards: {icon: string; titleKey: string; textKey: string; color: string;}[] = [
  {
    icon: 'one.svg',
    titleKey: 'Home.cards.simplifiedProcess',
    textKey: 'Home.cards.easy',
    color: 'vk-secondary'
  },
  {
    icon: 'two.svg',
    titleKey: 'Home.cards.forEveryone',
    textKey: 'Home.cards.anyPerson',
    color: 'vk-tertiary'
  },
  {
    icon: 'three.svg',
    titleKey: 'Home.cards.racoonProof',
    textKey: 'Home.cards.moreSecurity',
    color: 'vk-secondary'
  },
  {
    icon: 'four.svg',
    titleKey: 'Home.cards.welcomeToFuture',
    textKey: 'Home.cards.hereWeMakeChanges',
    color: 'vk-tertiary'
  }
];

// FUNCTIONS
const GetImageURL = (name: string) =>
{
  return new URL(`../../assets/images/${name}.png`, import.meta.url).href;
};
</script>

<style lang="scss">
.custom-tab-label {
  .q-tab__label {
    line-height: 2em !important;
    font-size: 12px !important;
  }

  .q-tab__content {
    padding-bottom: 0 !important;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
  }
}

.fadeInImg {
  animation: fadeInLeft 1s ease-in-out;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
  }
}

.fadeInText {
  animation: fadeInRight 1s ease-in-out;
}
</style>
