<template>
  <q-page
    :class="{
      'q-pb-lg' : $q.screen.gt.sm
     }">
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content">
      <!-- YELLOW SECTION FOR DESKTOP --->
      <div
        v-if="$q.screen.gt.sm"
        class="bg-vk-secondary hp-100 wp-50 flex flex-center" style="position: absolute; top: 0; right: 0; z-index: 0;">
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
      <!-- NAVBAR FOR DESKTOP -->
      <div
        class="flex flex-inline justify-between"
        v-if="$q.screen.gt.sm"
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
            href="http://novapro.io:9000/#/login?mode=email"
            style="min-width: 10vh; height: 30px;"
            :label="$t('Home.navbar.login')"
          />
          <q-btn
            no-caps
            flat
            rounded
            unelevated
            href="http://novapro.io:9000/#/sign-up"
            style="height: 30px;"
            :label="$t('Home.navbar.signUp')"
          />
        </div>
      </div>

      <!-- GREETING MOBILE/DESKTOP -->
      <div
        :class="{
          'q-pt-lg q-px-xl wp-50 flex flex-center hp-82' : $q.screen.gt.sm,
          'wp-100 mt-90' : $q.screen.lt.md
        }" style="z-index: 9;">
        <div :class="{ 'flex justify-center' : $q.screen.lt.md }">
          <div :class="{ 'flex justify-center' : $q.screen.lt.md }" :style="`${ $q.screen.gt.sm ? 'height: 18vh;' : ''}`">
            <p class="no-margin lh-40 text-vk-grey"
               :class="{
                  'fs-26' : $q.screen.gt.sm,
                  'fs-22 text-center' : $q.screen.lt.md
                }">
              Hello there!</p>
            <h3
              :class="{
                'fs-25 wp-100 lh-20 text-center' : $q.screen.lt.md,
                'lh-50' : $q.screen.gt.sm
              }"
              class="no-margin">{{ $t('Home.thisIsNoBank') }}
              <br v-if="$q.screen.gt.sm" /> {{$t('Home.its')}}</h3>
            <q-icon
              name="img:icons/vank-line.svg"
              :class="{ 'q-mt-sm' : $q.screen.lt.md }"
              :style="`width: ${$q.screen.gt.sm ? '22vh' : '11em'}; height: 10vh; ${$q.screen.gt.sm ? 'top: -55px; margin-left: 5em;' : ''}`" />
          </div>

          <p
            class="text-center text-vk-grey"
            :class="{
              'fs-25' : $q.screen.gt.sm,
              'fs-18 wp-50 q-mt-sm' : $q.screen.lt.md
            }"
            v-text="$t('Home.manageYourMoney')" />

          <div :class="{ 'wp-100 flex flex-inline justify-center q-mt-sm' : $q.screen.lt.md, 'q-mt-xl' : $q.screen.gt.sm }">
            <q-btn
              color="vk-secondary"
              class="text-vk-accent text-semi-bold q-mr-md"
              rounded
              :class="{
                'fs-16 q-py-sm wp-40' : $q.screen.gt.sm,
                'wp-30 q-py-none' : $q.screen.lt.md
              }"
              no-caps
              href="http://novapro.io:9000/#/login?mode=email"
              unelevated
              :label="$t('Home.navbar.login')"
            />
            <q-btn
              class="text-vk-accent text-semi-bold q-px-lg"
              flat
              rounded
              href="http://novapro.io:9000/#/sign-up"
              :class="{
                'fs-16' : $q.screen.gt.sm
              }"
              no-caps
              :label="$t('Home.navbar.signUp')"
            />
          </div>
        </div>
      </div>

      <!-- YELLOW SECTION MOBILE --->
      <div
        v-if="$q.screen.lt.md"
        class="bg-vk-secondary wp-100 flex q-mt-xl flex-center" style="height: 50vh;">
        <q-icon name="img:icons/lady.svg" size="30vh" />
      </div>
    </div>

    <!-- TRANSFER, RECEIVE AND SAVE SECTION -->
    <div
      :class="{
        'flex flex-center' : $q.screen.gt.sm
      }"
      class="bg-white">
      <div
          class="hp-100"
         :class="{
            'column items-center justify-between' : $q.screen.gt.sm,
            'wp-65' : $q.screen.gt.md,
            'wp-80' : $q.screen.lt.lg && $q.screen.gt.sm,
            'q-px-md' : $q.screen.lt.md
         }">
        <div :class="{ 'mt-90 wp-70 row' : $q.screen.gt.sm, 'q-pt-lg' : $q.screen.lt.md }">
          <h3
            class="text-regular q-mt-none text-center col-12"
            :class="{ 'fs-40 q-mb-xl' : $q.screen.gt.sm, 'fs-25 q-mb-md' : $q.screen.lt.md }" v-text="$t('Home.tranfer')" />

          <div class="col-12 col-sm-6">
            <p
              class="text-vk-grey no-margin" :class="{ 'fs-25' : $q.screen.gt.sm, 'fs-18' : $q.screen.lt.md }"
              v-text="$t('Home.withAnApp')" />
            <p class="text-bold"
               :class="{ 'text-h3 q-mt-none lh-60 no-margin' : $q.screen.gt.sm, 'fs-40 lh-50 q-mt-sm q-mb-none' : $q.screen.lt.md }">
              <span v-text="$t('Home.a').concat(' ')" />
              <span class="text-vk-secondary" v-text="$t('Home.b')" />
              <span v-text="$t('Home.ank')" /> <br />
              <q-icon
                name="img:icons/v.svg" :size="$q.screen.gt.sm ? '48px' : '41px'"
                :style="`position: absolute; margin-top: ${ $q.screen.gt.sm ? '-56px' : '-50px'}; margin-left: ${locale.includes('es') ? '1.3em' : '0.65em'};`" />
              <span v-text="$t('Home.intoMusic')" /> <br />
              <span v-text="$t('Home.forYourEars')" />
            </p>
          </div>

          <p
            class="text-vk-grey"
            :class="{
              'fs-16 lh-25 col-12 col-sm-6 flex justify-end items-center' : $q.screen.gt.sm,
              'fs-16 q-mt-xl text-right' : $q.screen.lt.md
            }"
            v-html="$t('Home.weAreTheSolution').replace(/\n/g, '<br />')" />
        </div>

        <div class="mt-80">
          <p
            class="q-mb-lg"
            :class="{
              'fs-40' : $q.screen.gt.sm,
              'fs-25 text-center' : $q.screen.lt.md
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
    <div :style="`${$q.screen.gt.sm ? 'height: 39vh;' : ''}`" class="wp-100 flex justify-center q-pb-none">
      <div
        :class="{
            'q-mt-xl wp-80' : $q.screen.gt.md,
            'q-mt-xl wp-98' : $q.screen.gt.sm && $q.screen.lt.lg,
          }"
        :style="`${$q.screen.gt.sm ? 'position: absolute; margin-top: 5vh;' : ''}`"
        class="flex justify-center">
        <div :class="{ 'flex-inline q-gutter-x-lg' : $q.screen.gt.sm, 'justify-center q-mt-md wp-100' : $q.screen.lt.md }" class="flex">
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
            :class="{
              'q-pl-xl' : $q.screen.gt.md,
              'justify-center' : $q.screen.lt.md,
              'wp-55' : $q.screen.lt.xl && $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText">
            <q-icon name="img:icons/steps.svg" style="height: 26vh; width: 5vh" :class="{ 'q-mt-md' : $q.screen.gt.sm, 'mt-13' : $q.screen.lt.md }" />
            <div :style="`font-size: 2vh; line-height: 4.4vh;`" class="wp-80">
              <p v-text="$t('Home.naturalSteps.one')" />
              <p :style="`${$q.screen.lt.md && locale.includes('es') ? 'line-height: 1.2em;' : ''}`" v-text="$t('Home.naturalSteps.two')" />
              <p :style="`${$q.screen.lt.sm && locale.includes('es') ? 'line-height: 1.2em;' : ''}`" v-text="$t('Home.naturalSteps.three')" />
              <p :style="`${$q.screen.lt.sm && locale.includes('es') ? 'line-height: 1.2em;' : ''}`" v-text="$t('Home.naturalSteps.four')" />
              <p :class="{ 'mt-30' : $q.screen.gt.sm }" v-text="$t('Home.naturalSteps.five')" />
            </div>

            <div class="wp-80" :class="{ 'q-ml-lg' : $q.screen.gt.sm, 'ml-56 q-mb-md' : $q.screen.lt.md }">
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                href="http://novapro.io:9000/#/sign-up"
                :class="{
                  'q-py-sm' : $q.screen.gt.sm,
                  'fs-13 q-mt-lg' : $q.screen.lt.md
                }"
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl"
              />
            </div>
          </div>

          <div
            v-if="tab === 'business'"
            :class="{
              'q-pl-xl' : $q.screen.gt.md,
              'justify-center' : $q.screen.lt.md,
              'wp-55' : $q.screen.lt.xl && $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText">
            <q-icon name="img:icons/steps.svg" style="height: 26vh; width: 5vh" :class="{ 'q-mt-md' : $q.screen.gt.sm, 'mt-13' : $q.screen.lt.md }" />
            <div :style="`font-size: 2vh; line-height: 4.3vh;`" class="wp-80">
              <p v-text="$t('Home.businessSteps.one')" />
              <p v-text="$t('Home.businessSteps.two')" />
              <p v-text="$t('Home.businessSteps.three')" />
              <p v-text="$t('Home.businessSteps.four')" />
              <p :class="{ 'mt-35' : $q.screen.gt.md }" v-text="$t('Home.businessSteps.five')" />
            </div>

            <div class="wp-100" :class="{ 'q-ml-lg' : $q.screen.gt.sm, 'ml-80 q-mb-md' : $q.screen.lt.md }">
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                href="http://novapro.io:9000/#/sign-up"
                :class="{
                  'q-py-sm' : $q.screen.gt.sm,
                  'fs-13 q-mt-lg' : $q.screen.lt.md
                }"
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl"
              />
            </div>
          </div>

          <div
            v-if="tab === 'minors'"
            :class="{
              'q-pl-xl' : $q.screen.gt.md,
              'justify-center' : $q.screen.lt.md,
              'wp-55' : $q.screen.lt.xl && $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText">
            <q-icon name="img:icons/steps.svg" style="height: 26vh; width: 5vh" :class="{ 'q-mt-md' : $q.screen.gt.sm, 'mt-13' : $q.screen.lt.md }" />
            <div :style="`font-size: 1.9vh; line-height: ${$q.screen.lt.md ? '3.5vh' : '4.3vh'};`" class="wp-80">
              <p :class="{ 'mt-5' : $q.screen.lt.md }" v-text="$t('Home.minorsSteps.one')" />
              <p v-text="$t('Home.minorsSteps.two')" />
              <p :style="`${$q.screen.lt.lg ? 'line-height: 1.7em;' : ''}`" v-text="$t('Home.minorsSteps.three')" />
              <p :class="{ 'mt-28' : $q.screen.gt.md }"  v-text="$t('Home.minorsSteps.four')" />
              <p :class="{ 'mt-28' : $q.screen.gt.md, 'mt-25' : $q.screen.lt.md }" v-text="$t('Home.minorsSteps.five')" />
            </div>

            <div class="wp-100" :class="{ 'q-ml-lg' : $q.screen.gt.sm, 'ml-80 q-mb-md' : $q.screen.lt.md }">
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                href="http://novapro.io:9000/#/sign-up"
                :class="{
                  'q-py-sm' : $q.screen.gt.sm,
                  'fs-13 q-mt-lg' : $q.screen.lt.md
                }"
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- APP WITH A HIGH PERCENTAGE OF WELLNESS SECTION --->
    <div class="bg-white flex flex-center">
      <div
           :class="{
              'wp-70' : $q.screen.gt.md,
              'wp-80' : $q.screen.lt.lg && $q.screen.gt.sm,
              'wp-100' : $q.screen.lt.md,
              'mt-90' : $q.screen.gt.sm,
              'q-mt-xl q-px-md' : $q.screen.lt.md
           }">
        <h3
          :class="{
            'fs-25 lh-30' : $q.screen.lt.md
          }"
          class="no-margin text-center" v-html="$t('Home.highWellness').replace(/\n/g, '<br />')" />
        <q-icon
          name="img:icons/yellow-line.svg"
          :style="`
          position: absolute;
          width: ${$q.screen.gt.sm ? `${locale.includes('es') ? '22em' : '19em'}` : `${locale.includes('es') ? '14em' : '11em'}`};
          margin-left: ${$q.screen.gt.sm ? '30vw' : '33vw'};
          margin-top: ${locale.includes('es') ? '-8px' : '-3px'};`" />

        <p
          class="text-vk-grey text-center wp-100 q-mt-lg"
          :class="{
            'fs-18' : $q.screen.gt.sm,
            'fs-16' : $q.screen.lt.md
          }"
          v-html="$q.screen.gt.sm ? $t('Home.anIntuitivePlatform').replace(/\n/g, '<br />') : $t('Home.anIntuitivePlatform')" />

        <div
          class="q-mx-auto flex flex-inline justify-between mb-90"
          :class="{
            'mt-70' : $q.screen.gt.sm,
            'wp-75' : $q.screen.gt.md,
            'wp-100' : $q.screen.lt.lg,
            'mt-30' : $q.screen.lt.md
          }">
          <q-card
            flat
            :style="`height: 16vh; width: ${$q.screen.gt.md ? '10.5vw' : '48%'}`"
            :class="`bg-${card.color} ${$q.screen.lt.md && index <= 1 ? 'q-mb-md' : ''}`"
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
        <div class="flex" :class="{ 'flex-inline q-gutter-x-xl' : $q.screen.gt.sm, 'column items-center q-px-md' : $q.screen.lt.md }">
          <q-img
            height="36vh" width="36vh" :class="{ 'my-80' : $q.screen.gt.sm, 'mt-20' : $q.screen.lt.md }"
            src="../../assets/images/card.webp" />
          <div :class="{ 'mt-120 q-pl-xl' : $q.screen.gt.sm, 'mt-30 flex justify-center' : $q.screen.lt.md }">
            <h3 class="q-mt-none" :class="{ 'text-center fs-30 q-mb-sm' : $q.screen.lt.md, 'q-mb-lg' : $q.screen.gt.sm }" v-text="$t('Home.vankCard')" />
            <p
              :class="{
                'fs-18 lh-30' : $q.screen.gt.sm,
                'fs-16 text-center' : $q.screen.lt.md
              }"
              class="no-margin text-vk-grey" v-html="$q.screen.gt.sm ? $t('Home.discoverNewWays').replace(/\n/g, '<br />') : $t('Home.discoverNewWays')" />

            <q-btn
              no-caps
              rounded
              color="vk-secondary"
              unelevated
              :label="$t('Home.navbar.signUp')"
              :class="{
                'mt-60' : $q.screen.gt.sm,
                'mt-50 q-mb-lg' : $q.screen.lt.md
              }"
              class="text-vk-accent text-bold q-px-xl q-py-sm"
            />
          </div>
        </div>
    </div>

    <!-- HERE EVERYTHING IS EASY SECTION --->
    <div
      :style="`${$q.screen.gt.sm ? 'height: 40vh;' : '' }`"
      :class="{
          'q-px-md' : $q.screen.lt.md
      }"
      class="flex flex-center bg-white">
      <div class="flex flex-inline items-center q-gutter-x-xl q-mt-xl">
        <div>
          <p
            class="no-margin text-vk-grey"
            :class="{ 'fs-33 lh-40' : $q.screen.gt.sm, 'fs-20 lh-30' : $q.screen.lt.md }" v-text="$t('Home.hereEverythingIs')" />
          <h3
            class="no-margin"
            :class="{
              'fs-35' : $q.screen.lt.md,
              'lh-60' : $q.screen.gt.sm
            }"
            v-html="$t('Home.soEasy').replace(/\n/g, '<br />')"/>
            <q-icon name="img:icons/yellow-line-ticker.svg"
                    :style="`width: 14vh; height: 30px; position: absolute; margin-top: ${$q.screen.gt.sm ? '-80px' : '-68px'};`" />
        </div>

        <div class="flex flex-inline"
             :class="{
                'mt-60 q-gutter-x-xl' : $q.screen.gt.sm,
                'wp-88 q-mt-lg' : $q.screen.lt.md,
                'q-gutter-x-md justify-center' : $q.screen.gt.xs && $q.screen.lt.md,
                'justify-between' : $q.screen.lt.sm
             }">
          <q-card class="bg-vk-tertiary br-10" flat :style="`width: ${$q.screen.gt.sm ? '200px' : '170px'}; height: ${$q.screen.gt.sm ? '200px' : '170px'};`">
            <q-card-section class="q-py-lg flex justify-center">
              <p
                class="text-center text-vk-grey"
                :class="{
                  'fs-20 lh-20' : $q.screen.gt.sm,
                  'fs-12 wp-100' : $q.screen.lt.sm
                }"
                v-html="$t('Home.registerAndCreateAccount').replace(/\n/g, '<br />')" />
              <q-icon name="img:icons/stepOne.svg" :size="$q.screen.gt.xs ? '80px' : '60px'" />
            </q-card-section>
          </q-card>

          <q-card class="bg-vk-tertiary br-10" flat :style="`width: ${$q.screen.gt.sm ? '200px' : '170px'}; height: ${$q.screen.gt.sm ? '200px' : '170px'};`">
            <q-card-section class="q-py-lg flex justify-center">
              <p
                class="text-center text-vk-grey"
                :class="{
                  'fs-20 lh-20' : $q.screen.gt.sm,
                  'fs-12 wp-100' : $q.screen.lt.sm
                }"
                v-html="$t('Home.depositAndEnjoy').replace(/\n/g, '<br />')" />
              <q-icon class="mt-20" name="img:icons/stepTwo.svg" :size="$q.screen.gt.xs ? '80px' : '60px'" />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="wp-100 flex justify-center" :class="{ 'q-my-lg' : $q.screen.lt.md }">
        <q-btn
          no-caps
          href="http://novapro.io:9000/#/sign-up"
          rounded
          color="vk-secondary"
          unelevated
          :label="$t('Home.navbar.signUp')"
          class="text-vk-accent text-bold q-px-xl q-py-sm"
        />
      </div>
    </div>

    <!-- CONTACT US NOW --->
    <div class="flex flex-center" :class="{ 'py-90' : $q.screen.gt.sm, 'py-40' : $q.screen.lt.md }">
      <h3 class="no-margin text-center wp-100" :class="{ 'fs-25' : $q.screen.lt.md }" v-text="$t('Home.contactUsNow')" />
      <div
        class="flex flex-inline justify-center"
        :class="{
          'wp-63' : $q.screen.gt.lg,
          'wp-90' : $q.screen.lt.xl,
          'q-mt-xl' : $q.screen.gt.sm,
          'q-mt-md' : $q.screen.lt.md
        }">
        <q-img src="../../assets/images/coffee.webp" height="34vh" width="28vh" />
        <q-card flat class="br-15 bg-vk-secondary"
                :class="{ 'ml-110 wp-60' : $q.screen.gt.sm, 'q-mt-lg' : $q.screen.lt.md }">
          <q-card-section :class="{ 'q-pa-xl' : $q.screen.gt.sm, 'q-py-lg q-px-lg' : $q.screen.lt.md }">
            <q-form class="row no-margin rounded-white-border-input">
              <div class="col-12 col-md-6" :class="{ 'q-pr-xl' : $q.screen.gt.sm }">
                <p class="no-margin" :class="{ 'fs-14' : $q.screen.lt.md, 'fs-16' : $q.screen.gt.sm }" v-text="$t('Fields.fullName').concat(' *')" />
                <q-input
                  dense
                  rounded
                  :class="{
                    'ultra-dense-input' : $q.screen.lt.md
                  }"
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 col-md-6" :class="{ 'q-pl-xl' : $q.screen.gt.sm, 'q-mt-md' : $q.screen.lt.md }">
                <p class="no-margin" v-text="$t('Fields.email').concat(' *')"
                   :class="{ 'fs-16' : $q.screen.gt.sm, 'fs-14' : $q.screen.lt.md }" />
                <q-input
                  dense
                  rounded
                  outlined
                  :class="{
                    'ultra-dense-input' : $q.screen.lt.md
                  }"
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 col-md-6" :class="{ 'q-pr-xl q-mt-lg' : $q.screen.gt.sm, 'q-mt-md' : $q.screen.lt.md  }">
                <p class="no-margin" v-text="$t('Fields.contactNumber').concat(' *')" :class="{ 'fs-16' : $q.screen.gt.sm, 'fs-14' : $q.screen.lt.md }" />
                <q-input
                  dense
                  rounded
                  :class="{
                    'ultra-dense-input' : $q.screen.lt.md
                  }"
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12 col-md-6" :class="{ 'q-pr-xl q-mt-lg' : $q.screen.gt.sm, 'q-mt-md' : $q.screen.lt.md  }">
                <p class="no-margin" v-text="$t('Fields.availableTime')" :class="{ 'fs-16' : $q.screen.gt.sm, 'fs-14' : $q.screen.lt.md }" />
                <q-input
                  dense
                  rounded
                  outlined
                  :class="{
                    'ultra-dense-input' : $q.screen.lt.md
                  }"
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div class="col-12" :class="{ 'q-pr-xl q-mt-lg' : $q.screen.gt.sm, 'q-mt-md' : $q.screen.lt.md  }">
                <p class="no-margin" v-text="$t('Fields.message')" :class="{ 'fs-16' : $q.screen.gt.sm, 'fs-14' : $q.screen.lt.md }" />
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
                :class="{
                    'wp-100' : $q.screen.lt.md
                }"
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
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

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
