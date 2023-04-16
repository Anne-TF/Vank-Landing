<template>
  <q-page
    :class="{
      'q-pb-lg': $q.screen.gt.sm
    }"
  >
    <!-- FIRST SECTION --->
    <div style="height: 96vh; contain: content">
      <!-- YELLOW SECTION FOR DESKTOP --->
      <div
        v-if="$q.screen.gt.sm"
        class="bg-vk-secondary hp-100 wp-50 flex flex-center"
        style="position: absolute; top: 0; right: 0; z-index: 0"
      >
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
            'fs-16': $q.screen.gt.sm
          }"
          class="text-bold q-px-lg absolute-bottom-right mb-50 q-mr-xl"
        />
      </div>
      <!-- NAVBAR FOR DESKTOP -->
      <navbar-component/>

      <!-- GREETING MOBILE/DESKTOP -->
      <div
        :class="{
          'q-pt-lg q-px-xl wp-50 flex flex-center hp-82': $q.screen.gt.sm,
          'wp-100 mt-90': $q.screen.lt.md
        }"
        style="z-index: 9"
      >
        <div :class="{ 'flex justify-center': $q.screen.lt.md }">
          <div
            :class="{ 'flex justify-center': $q.screen.lt.md }"
            :style="`${$q.screen.gt.sm ? 'height: 18vh;' : ''}`"
          >
            <p
              class="no-margin lh-40 text-vk-grey"
              :class="{
                'fs-26': $q.screen.gt.sm,
                'fs-22 text-center': $q.screen.lt.md
              }"
            >
              Hello there!
            </p>
            <h3
              :class="{
                'fs-25 wp-100 lh-20 text-center': $q.screen.lt.md,
                'lh-50': $q.screen.gt.sm
              }"
              class="no-margin"
            >
              {{ $t('Home.thisIsNoBank') }} <br v-if="$q.screen.gt.sm" />
              {{ $t('Home.its') }}
            </h3>
            <q-icon
              name="img:icons/vank-line.svg"
              :class="{ 'q-mt-sm': $q.screen.lt.md }"
              :style="`width: ${
                $q.screen.gt.sm ? '22vh' : '11em'
              }; height: 10vh; ${
                $q.screen.gt.sm ? 'top: -55px; margin-left: 5em;' : ''
              }`"
            />
          </div>

          <p
            class="text-center text-vk-grey"
            :class="{
              'fs-25': $q.screen.gt.sm,
              'fs-18 wp-50 q-mt-sm': $q.screen.lt.md
            }"
            v-text="$t('Home.manageYourMoney')"
          />

          <div
            :class="{
              'wp-100 flex flex-inline justify-center q-mt-sm': $q.screen.lt.md,
              'q-mt-xl': $q.screen.gt.sm
            }"
          >
            <q-btn
              color="vk-secondary"
              class="text-vk-accent text-semi-bold q-mr-md"
              rounded
              :class="{
                'fs-16 q-py-sm wp-40': $q.screen.gt.sm,
                'wp-30 q-py-none': $q.screen.lt.md
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
                'fs-16': $q.screen.gt.sm
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
        class="bg-vk-secondary wp-100 flex q-mt-xl flex-center"
        style="height: 50vh"
      >
        <q-icon name="img:icons/lady.svg" size="30vh" />
      </div>
    </div>

    <!-- TRANSFER, RECEIVE AND SAVE SECTION -->
    <div
      :class="{
        'flex flex-center': $q.screen.gt.sm
      }"
      class="bg-white"
    >
      <div
        class="hp-100"
        :class="{
          'column items-center justify-between': $q.screen.gt.sm,
          'wp-65': $q.screen.gt.md,
          'wp-80': $q.screen.lt.lg && $q.screen.gt.sm,
          'q-px-md': $q.screen.lt.md
        }"
      >
        <div
          :class="{
            'mt-90 wp-70 row': $q.screen.gt.sm,
            'q-pt-lg': $q.screen.lt.md
          }"
        >
          <h3
            class="text-regular q-mt-none text-center col-12"
            :class="{
              'fs-40 q-mb-xl': $q.screen.gt.sm,
              'fs-25 q-mb-md': $q.screen.lt.md
            }"
            v-text="$t('Home.tranfer')"
          />

          <div class="col-12 col-sm-6">
            <p
              class="text-vk-grey no-margin"
              :class="{ 'fs-25': $q.screen.gt.sm, 'fs-18': $q.screen.lt.md }"
              v-text="$t('Home.withAnApp')"
            />
            <p
              class="text-bold"
              :class="{
                'text-h3 q-mt-none lh-60 no-margin': $q.screen.gt.sm,
                'fs-40 lh-50 q-mt-sm q-mb-none': $q.screen.lt.md
              }"
            >
              <span v-text="$t('Home.a').concat(' ')" />
              <span class="text-vk-secondary" v-text="$t('Home.b')" />
              <span v-text="$t('Home.ank')" /> <br />
              <q-icon
                name="img:icons/v.svg"
                :size="$q.screen.gt.sm ? '48px' : '41px'"
                :style="`position: absolute; margin-top: ${
                  $q.screen.gt.sm ? '-56px' : '-50px'
                }; margin-left: ${((locale as readonly string[])).includes('es') ? '1.3em' : '0.65em'};`"
              />
              <span v-text="$t('Home.intoMusic')" /> <br />
              <span v-text="$t('Home.forYourEars')" />
            </p>
          </div>

          <p
            class="text-vk-grey"
            :class="{
              'fs-16 lh-25 col-12 col-sm-6 flex justify-end items-center':
                $q.screen.gt.sm,
              'fs-16 q-mt-xl text-right': $q.screen.lt.md
            }"
            v-html="$t('Home.weAreTheSolution').replace(/\n/g, '<br />')"
          />
        </div>

        <div class="mt-80">
          <p
            class="q-mb-lg"
            :class="{
              'fs-40': $q.screen.gt.sm,
              'fs-25 text-center': $q.screen.lt.md
            }"
            v-text="$t('Home.hereWeAllFit')"
          />
          <q-tabs
            v-model="tab"
            active-class="text-bold bg-vk-tertiary"
            indicator-color="transparent"
            class="custom-tab-label"
            no-caps
          >
            <q-tab
              name="natural"
              icon="img:icons/happy.svg"
              :label="$t('Home.naturalPerson')"
            />
            <q-tab
              name="business"
              icon="img:icons/dollar.svg"
              :label="$t('Home.navbar.business')"
            />
            <q-tab
              name="minors"
              icon="img:icons/cool.svg"
              :label="$t('Home.minors')"
            />
          </q-tabs>
        </div>
      </div>
    </div>

    <!-- TABS -->
    <div
      :style="`${$q.screen.gt.sm ? 'height: 39vh;' : ''}`"
      class="wp-100 flex justify-center q-pb-none"
    >
      <div
        :class="{
          'q-mt-xl wp-80': $q.screen.gt.md,
          'q-mt-xl wp-98': $q.screen.gt.sm && $q.screen.lt.lg
        }"
        :style="`${
          $q.screen.gt.sm ? 'position: absolute; margin-top: 5vh;' : ''
        }`"
        class="flex justify-center"
      >
        <div
          :class="{
            'flex-inline q-gutter-x-lg': $q.screen.gt.sm,
            'justify-center q-mt-md wp-100': $q.screen.lt.md
          }"
          class="flex"
        >
          <q-img
            height="38vh"
            width="32vh"
            v-if="tab === 'natural'"
            class="fadeInImg"
            key="natural"
            src="../../assets/images/natural-person.webp"
          />
          <q-img
            height="38vh"
            width="32vh"
            v-if="tab === 'business'"
            key="business"
            class="fadeInImg"
            src="../../assets/images/business.webp"
          />
          <q-img
            height="38vh"
            width="32vh"
            v-if="tab === 'minors'"
            key="minors"
            class="fadeInImg"
            src="../../assets/images/minors.webp"
          />

          <div
            v-if="tab === 'natural'"
            :class="{
              'q-pl-xl': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-55': $q.screen.lt.xl && $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
            <q-icon
              name="img:icons/steps.svg"
              style="height: 26vh; width: 5vh"
              :class="{ 'q-mt-md': $q.screen.gt.sm, 'mt-13': $q.screen.lt.md }"
            />
            <div :style="`font-size: 2vh; line-height: 4.4vh;`" class="wp-80">
              <p v-text="$t('Home.naturalSteps.one')" />
              <p
                :style="`${
                  $q.screen.lt.md && ((locale as readonly string[])).includes('es')
                    ? 'line-height: 1.2em;'
                    : ''
                }`"
                v-text="$t('Home.naturalSteps.two')"
              />
              <p
                :style="`${
                  $q.screen.lt.sm && ((locale as readonly string[])).includes('es')
                    ? 'line-height: 1.2em;'
                    : ''
                }`"
                v-text="$t('Home.naturalSteps.three')"
              />
              <p
                :style="`${
                  $q.screen.lt.sm && ((locale as readonly string[])).includes('es')
                    ? 'line-height: 1.2em;'
                    : ''
                }`"
                v-text="$t('Home.naturalSteps.four')"
              />
              <p
               
                v-text="$t('Home.naturalSteps.five')"
              />
            </div>

            <div
              class="wp-80"
              :class="{
                'q-ml-lg': $q.screen.gt.sm,
                'ml-56 q-mb-md': $q.screen.lt.md
              }"
            >
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                href="http://novapro.io:9000/#/sign-up"
                :class="{
                  'q-py-sm': $q.screen.gt.sm,
                  'fs-13 q-mt-lg': $q.screen.lt.md
                }"
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl"
              />
            </div>
          </div>

          <div
            v-if="tab === 'business'"
            :class="{
              'q-pl-xl': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-55': $q.screen.lt.xl && $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
            <q-icon
              name="img:icons/steps.svg"
              style="height: 26vh; width: 5vh"
              :class="{ 'q-mt-md': $q.screen.gt.sm, 'mt-13': $q.screen.lt.md }"
            />
            <div :style="`font-size: 2vh; line-height: 4.3vh;`" class="wp-80">
              <p v-text="$t('Home.businessSteps.one')" />
              <p v-text="$t('Home.businessSteps.two')" />
              <p v-text="$t('Home.businessSteps.three')" />
              <p v-text="$t('Home.businessSteps.four')" />
              <p
                
                v-text="$t('Home.businessSteps.five')"
              />
            </div>

            <div
              class="wp-100"
              :class="{
                'q-ml-lg': $q.screen.gt.sm,
                'ml-80 q-mb-md': $q.screen.lt.md
              }"
            >
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                href="http://novapro.io:9000/#/sign-up"
                :class="{
                  'q-py-sm': $q.screen.gt.sm,
                  'fs-13 q-mt-lg': $q.screen.lt.md
                }"
                :label="$t('Home.navbar.signUp')"
                class="text-vk-accent text-bold q-px-xl"
              />
            </div>
          </div>

          <div
            v-if="tab === 'minors'"
            :class="{
              'q-pl-xl': $q.screen.gt.md,
              'justify-center': $q.screen.lt.md,
              'wp-55': $q.screen.lt.xl && $q.screen.gt.sm
            }"
            class="flex flex-inline q-mt-md fadeInText"
          >
            <q-icon
              name="img:icons/steps.svg"
              style="height: 26vh; width: 5vh"
              :class="{ 'q-mt-md': $q.screen.gt.sm, 'mt-13': $q.screen.lt.md }"
            />
            <div
              :style="`font-size: 1.9vh; line-height: ${
                $q.screen.lt.md ? '3.5vh' : '4.3vh'
              };`"
              class="wp-80"
            >
              <p
                :class="{ 'mt-5': $q.screen.lt.md }"
                v-text="$t('Home.minorsSteps.one')"
              />
              <p v-text="$t('Home.minorsSteps.two')" />
              <p
                :style="`${$q.screen.lt.lg ? 'line-height: 1.7em;' : ''}`"
                v-text="$t('Home.minorsSteps.three')"
              />
              <p
                :class="{ 'mt-15': $q.screen.gt.md }"
                v-text="$t('Home.minorsSteps.four')"
              />
              <p
                :class="{ 'mt-15': $q.screen.gt.md, 'mt-25': $q.screen.lt.md }"
                v-text="$t('Home.minorsSteps.five')"
              />
            </div>

            <div
              class="wp-100"
              :class="{
                'q-ml-lg': $q.screen.gt.sm,
                'ml-80 q-mb-md': $q.screen.lt.md
              }"
            >
              <q-btn
                no-caps
                rounded
                color="vk-secondary"
                unelevated
                href="http://novapro.io:9000/#/sign-up"
                :class="{
                  'q-py-sm': $q.screen.gt.sm,
                  'fs-13 q-mt-lg': $q.screen.lt.md
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
          'wp-70': $q.screen.gt.md,
          'wp-80': $q.screen.lt.lg && $q.screen.gt.sm,
          'wp-100': $q.screen.lt.md,
          'mt-90': $q.screen.gt.sm,
          'q-mt-xl q-px-md': $q.screen.lt.md
        }"
      >
        <h3
          :class="{
            'fs-25 lh-30': $q.screen.lt.md
          }"
          class="no-margin text-center"
          v-html="$t('Home.highWellness').replace(/\n/g, '<br />')"
        />
        <q-icon
          name="img:icons/yellow-line.svg"
          :style="`
          position: absolute;
          width: ${
            $q.screen.gt.sm
              ? `${((locale as readonly string[])).includes('es') ? '22em' : '19em'}`
              : `${((locale as readonly string[])).includes('es') ? '14em' : '11em'}`
          };
          margin-left: ${$q.screen.gt.sm ? '30vw' : '33vw'};
          margin-top: ${((locale as readonly string[])).includes('es') ? '-8px' : '-3px'};`"
        />

        <p
          class="text-vk-grey text-center wp-100 q-mt-lg"
          :class="{
            'fs-18': $q.screen.gt.sm,
            'fs-16': $q.screen.lt.md
          }"
          v-html="
            $q.screen.gt.sm
              ? $t('Home.anIntuitivePlatform').replace(/\n/g, '<br />')
              : $t('Home.anIntuitivePlatform')
          "
        />

        <div
          class="q-mx-auto flex flex-inline justify-between mb-90"
          :class="{
            'mt-70': $q.screen.gt.sm,
            'wp-75': $q.screen.gt.md,
            'wp-100': $q.screen.lt.lg,
            'mt-30': $q.screen.lt.md
          }"
        >
          <q-card
            flat
            :style="`height: 16vh; width: ${
              $q.screen.gt.md ? '10.5vw' : '48%'
            }`"
            :class="`bg-${card.color} ${
              $q.screen.lt.md && index <= 1 ? 'q-mb-md' : ''
            }`"
            class="br-12 flex flex-center"
            v-for="(card, index) in cards"
            :key="index"
          >
            <q-card-section class="no-padding flex flex-center">
              <q-icon :name="`img:icons/${card.icon}`" size="45px" />
              <p
                class="text-center wp-100 text-bold lh-18 q-mt-sm q-mb-none"
                v-html="$t(card.titleKey).replace(/\n/g, '<br />')"
              />
              <p
                class="text-center wp-100 lh-14 fs-12 q-mt-xs q-mb-none"
                v-html="$t(card.textKey).replace(/\n/g, '<br />')"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- VANK CARD SECTION --->
    <div class="flex flex-center">
      <div
        class="flex"
        :class="{
          'flex-inline q-gutter-x-xl': $q.screen.gt.sm,
          'column items-center q-px-md': $q.screen.lt.md
        }"
      >
        <q-img
          height="36vh"
          width="39vh"
          :class="{ 'my-80': $q.screen.gt.sm, 'mt-20': $q.screen.lt.md }"
          src="../../assets/images/vank-card-black.webp"
        />
        <div
          :class="{
            'mt-120 q-pl-xl': $q.screen.gt.sm,
            'mt-30 flex justify-center': $q.screen.lt.md
          }"
        >
          <h3
            class="q-mt-none"
            :class="{
              'text-center fs-30 q-mb-sm': $q.screen.lt.md,
              'q-mb-lg': $q.screen.gt.sm
            }"
            v-text="$t('Home.vankCard')"
          />
          <p
            :class="{
              'fs-18 lh-30': $q.screen.gt.sm,
              'fs-16 text-center': $q.screen.lt.md
            }"
            class="no-margin text-vk-grey"
            v-html="
              $q.screen.gt.sm
                ? $t('Home.discoverNewWays').replace(/\n/g, '<br />')
                : $t('Home.discoverNewWays')
            "
          />

          <q-btn
            no-caps
            rounded
            color="vk-secondary"
            unelevated
            :label="$t('Home.navbar.signUp')"
            :class="{
              'mt-60': $q.screen.gt.sm,
              'mt-50 q-mb-lg': $q.screen.lt.md
            }"
            class="text-vk-accent text-bold q-px-xl q-py-sm"
          />
        </div>
      </div>
    </div>

    <!-- HERE EVERYTHING IS EASY SECTION --->
    <div

      :class="{
        'q-px-md': $q.screen.lt.md
      }"
      class="flex flex-center bg-white"
    >
      <div class="flex flex-inline items-center q-gutter-x-xl q-mt-xl">
        <div>
          <p
            class="no-margin text-vk-grey"
            :class="{
              'fs-33 lh-40': $q.screen.gt.sm,
              'fs-20 lh-30': $q.screen.lt.md
            }"
            v-text="$t('Home.hereEverythingIs')"
          />
          <h3
            class="no-margin"
            :class="{
              'fs-35': $q.screen.lt.md,
              'lh-60': $q.screen.gt.sm
            }"
            v-html="$t('Home.soEasy').replace(/\n/g, '<br />')"
          />
          <q-icon
            name="img:icons/yellow-line-ticker.svg"
            :style="`width: 14vh; height: 30px; position: absolute; margin-top: ${
              $q.screen.gt.sm ? '-80px' : '-68px'
            };`"
          />
        </div>

        <div
          class="flex flex-inline"
          :class="{
            'mt-60 q-gutter-x-xl': $q.screen.gt.sm,
            'wp-88 q-mt-lg': $q.screen.lt.md,
            'q-gutter-x-md justify-center': $q.screen.gt.xs && $q.screen.lt.md,
            'justify-between': $q.screen.lt.sm
          }"
        >
          <q-card
            class="bg-vk-tertiary br-10"
            flat
            :style="`width: ${$q.screen.gt.sm ? '200px' : '170px'}; height: ${
              $q.screen.gt.sm ? '200px' : '170px'
            };`"
          >
            <q-card-section class="q-py-lg flex justify-center">
              <p
                class="text-center text-vk-grey"
                :class="{
                  'fs-20 lh-20': $q.screen.gt.sm,
                  'fs-12 wp-100': $q.screen.lt.sm
                }"
                v-html="
                  $t('Home.registerAndCreateAccount').replace(/\n/g, '<br />')
                "
              />
              <q-icon
                name="img:icons/stepOne.svg"
                :size="$q.screen.gt.xs ? '80px' : '60px'"
              />
            </q-card-section>
          </q-card>

          <q-card
            class="bg-vk-tertiary br-10"
            flat
            :style="`width: ${$q.screen.gt.sm ? '200px' : '170px'}; height: ${
              $q.screen.gt.sm ? '200px' : '170px'
            };`"
          >
            <q-card-section class="q-py-lg flex justify-center">
              <p
                class="text-center text-vk-grey"
                :class="{
                  'fs-20 lh-20': $q.screen.gt.sm,
                  'fs-12 wp-100': $q.screen.lt.sm
                }"
                v-html="$t('Home.depositAndEnjoy').replace(/\n/g, '<br />')"
              />
              <q-icon
                class="mt-20"
                name="img:icons/stepTwo.svg"
                :size="$q.screen.gt.xs ? '80px' : '60px'"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div
        class="wp-100 flex justify-center q-mt-xl q-mb-xl"
        :class="{ 'q-my-lg': $q.screen.lt.md }"
      >
        <q-btn
          no-caps
          href="http://novapro.io:9000/#/sign-up"
          rounded
          color="vk-secondary"
          unelevated
          :label="$t('Home.navbar.signUp')"
          class="text-vk-accent text-bold q-px-xl q-py-sm q-mb-xl"
        />
      </div>

      <div class="wp-100" style="position: relative; top: 28px;">
        <marquee-vank-component class=""/>
      </div>
    </div>

    <!-- TRANSACTIONS  --->
    <div class="bg-white flex flex-center q-pb-xl" style="min-height: 600px;">
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
          v-html="$t('Home.transactions')"
        />
        <div class="wp-100 flex justify-center">
          <q-icon
            name="img:icons/yellow-line.svg"
            :style="`
            position: absolute;
            width: ${
              $q.screen.gt.sm
                ? `${((locale as readonly string[])).includes('es') ? '26em' : '24em'}`
                : `${((locale as readonly string[])).includes('es') ? '14em' : '11em'}`
            };
            margin-top:-10px`"
          />
        </div>
        <h3
          :class="{
            'fs-25 lh-30': $q.screen.lt.md,
            'lh-60': $q.screen.gt.sm
          }"
          class="text-center q-mb-xl q-mt-none"
          v-html="$t('Home.foreignTrade')"
        />
        <div class="wp-100 flex justify-center q-mt-xl q-pt-xl q-pb-xl" >
          <div class="q-px-lg" style="position: relative;">
            <h3
              :class="{
                'fs-25 lh-30': $q.screen.lt.md
              }"
              class="no-margin text-center"
              style="min-width: 370px;"
            >+ <span class="counter-payments counter">
              <number
                class="bold transition-numbers"
                :class="{ scaleBig: scaleClassPayments }"
                ref="numberPayments"
                :from="numberFromPayments"
                :format="theFormatLocaleCurrency"
                animationPaused
                :to="numberToPayments"
                :duration="durationPayments"
                easing="Power0.easeNone"
                @complete="completedPayments"
              />
            </span>M
            </h3>
            <p
              class="no-margin text-vk-grey text-center"
              :class="{
                'fs-33 lh-40': $q.screen.gt.sm,
                'fs-20 lh-30': $q.screen.lt.md
              }"
              v-text="$t('Home.inPayments')"
            />
            <q-icon
              name="img:icons/pointing-person-yellow.svg"
              :style="`width: 40px;height: 100px; position: absolute; left:-70px;top:60px`"
            />
          </div>
          <div  class="q-px-xl">
            <h3
              :class="{
                'fs-25 lh-30': $q.screen.lt.md
              }"
              class="no-margin text-center"
            >+ <span class="counter-transactions counter">
              <number
                class="bold transition-numbers"
                :class="{ scaleBig: scaleClassTransactions }"
                ref="numberTransactions"
                :from="numberFromTransactions"
                :format="theFormat"
                animationPaused
                :to="numberToTransactions"
                :duration="durationTransactions"
                easing="Power0.easeNone"
                @complete="completedTransactions"
              />
            </span>
            </h3>
            <p
              class="no-margin text-vk-grey text-center"
              :class="{
                'fs-33 lh-40': $q.screen.gt.sm,
                'fs-20 lh-30': $q.screen.lt.md
              }"
              v-text="$t('Home.transactions')"
            />
          </div>
          <div  class="q-px-lg">
            <h3
              :class="{
                'fs-25 lh-30': $q.screen.lt.md
              }"
              class="no-margin text-center"
            ><span class="counter-countries counter">
              <number
                class="bold transition-numbers"
                :class="{ scaleBig: scaleClassCountries }"
                ref="numberCountries"
                :from="numberFromCountries"
                :format="theFormat"
                animationPaused
                :to="numberToCountries"
                :duration="durationCountries"
                easing="Power0.easeNone"
                @complete="completedCountries"
              />
            </span>
            </h3>
            <p
              class="no-margin text-vk-grey text-center"
              :class="{
                'fs-33 lh-40': $q.screen.gt.sm,
                'fs-20 lh-30': $q.screen.lt.md
              }"
              v-text="$t('Home.countries')"
            />
          </div>
        </div>
      </div>
    </div>

    <download-our-app></download-our-app>
    <coffee-contact-us></coffee-contact-us>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import CoffeeContactUs from '../components/CoffeeContactUs.vue';
import MarqueeVankComponent from '../components/MarqueeVankComponent.vue';
import DownloadOurApp from '../components/DownloadOurApp.vue';

const { locale } = useI18n({ useScope: 'global' });
const tab = ref<'natural' | 'business' | 'minors'>('natural');
const cards: {
  icon: string;
  titleKey: string;
  textKey: string;
  color: string;
}[] = [
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

const numberFromPayments  = ref<number>(58468461);
const numberToPayments = ref<number>(58478461);
const durationPayments = ref<number>(4000);
const scaleClassPayments = ref<boolean>(false);
const numberPayments = ref<any>(null);

const numberFromTransactions  = ref<number>(6000);
const numberToTransactions = ref<number>(6500);
const durationTransactions = ref<number>(1000);
const scaleClassTransactions = ref<boolean>(false);
const numberTransactions = ref<any>(null);

const numberFromCountries = ref<number>(4);
const numberToCountries = ref<number>(8);
const durationCountries = ref<number>(500);
const scaleClassCountries = ref<boolean>(false);
const numberCountries = ref<any>(null);


// FUNCTIONS
const GetImageURL = (name: string) =>
{
  return new URL(`../../assets/images/${name}.png`, import.meta.url).href;
};

const theFormat = (number: number) =>
{
  return number.toFixed(0);
};

const theFormatLocaleCurrency = (number: number) =>
{
  const numberFixed = number.toFixed(0);
  if (((locale.value as readonly string[])).includes('es'))
  {
    return Number(numberFixed).toLocaleString('es', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  return Number(numberFixed).toLocaleString('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const completedPayments = () =>
{
  scaleClassPayments.value = true;
};

const playAnimationPayments = () =>
{
  scaleClassPayments.value = false;
  numberPayments.value.play();
};

const completedTransactions = () =>
{
  scaleClassTransactions.value = true;
};

const playAnimationTransactions = () =>
{
  scaleClassTransactions.value = false;
  numberTransactions.value.play();
};

const completedCountries = () =>
{
  scaleClassCountries.value = true;
};

const playAnimationCountries = () =>
{
  scaleClassCountries.value = false;
  numberCountries.value.play();
};


onMounted(() =>
  {
    playAnimationPayments();
    playAnimationTransactions();
    playAnimationCountries();
});
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

.transition-numbers {
  transition: all 0.3s ease-in;
}
</style>
