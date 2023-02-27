<template>
  <q-page
    :class="{
      'q-pb-lg' : $q.screen.gt.sm
     }">
    <div style="height: 95vh; contain: content">
      <div class="bg-vk-secondary hp-100 wp-50 flex flex-center" style="position: absolute; top: 0; right: 0; z-index: 0;">
        <q-icon name="img:icons/lady.svg" class="q-mb-xl" size="55vh" />

        <q-btn
          label="Escribenos"
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
            unelevated
            style="height: 30px;"
            :label="$t('Home.navbar.signUp')"
          />
        </div>
      </div>

      <div
        class="flex flex-center wp-50 hp-82"
        :class="{ 'q-pt-lg q-px-xl' : $q.screen.gt.sm }" style="z-index: 9;">
        <div>
          <div style="height: 18vh;">
            <p class="no-margin lh-40" :class="{ 'fs-26' : $q.screen.gt.sm }">Hello there!</p>
            <h3 class="no-margin text-bold lh-50">{{ $t('Home.thisIsNoBank') }} <br /> {{$t('Home.its')}}</h3>
            <q-icon name="img:icons/vank-line.svg" style="width: 22vh; height: 10vh; top: -55px; margin-left: 5.2vh;" />
          </div>

          <p
            class="text-center"
            :class="{
              'fs-25' : $q.screen.gt.sm
            }"
            v-text="$t('Home.manageYourMoney')" />

          <div class="q-mt-xl">
            <q-btn
              color="vk-secondary"
              class="text-vk-accent text-bold wp-40 q-mr-md"
              rounded
              :class="{
                'fs-16 q-py-sm' : $q.screen.gt.sm
              }"
              no-caps
              unelevated
              :label="$t('Home.navbar.login')"
            />
            <q-btn
              class="text-vk-accent text-bold"
              flat
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
  </q-page>
</template>

<script setup lang="ts">

</script>
