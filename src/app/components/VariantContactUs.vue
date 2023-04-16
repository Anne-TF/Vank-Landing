<template>
    <!-- CONTACT US NOW --->
    <div
      class="flex flex-center"
    >
      <div
        class="flex flex-inline justify-center"
        :class="{
          'wp-85': $q.screen.gt.lg,
          'wp-90': $q.screen.lt.xl,
        }"
      >

        <q-card
          flat
          class="br-15 bg-card-contact-variant"
          :class="{
            'wp-80': $q.screen.gt.sm,
            'q-mt-lg': $q.screen.lt.md
          }"
        >
          <q-card-section
            :class="{
              'q-pa-xl': $q.screen.gt.sm,
              'q-py-lg q-px-lg': $q.screen.lt.md
            }"
            style="position: relative;"
          >
            <q-form class="row no-margin rounded-white-border-input">
              <div
                class="col-12 col-md-7"
                :class="{ 'q-pr-xl': $q.screen.gt.sm }"
              >
                <p
                  class="no-margin"
                  :class="{
                    'fs-14': $q.screen.lt.md,
                    'fs-16': $q.screen.gt.sm
                  }"
                  v-text="$t('Fields.fullName').concat(' *')"
                />
                <q-input
                  dense
                  v-model="fullName"
                  rounded
                  :class="{
                    'ultra-dense-input': $q.screen.lt.md
                  }"
                  outlined
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div
                class="col-12 col-md-5"
                :class="{
                  'q-pr-xl': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.country').concat(' *')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-select 
                  dense
                  rounded
                  :option-label="((locale as readonly string[])).includes('es') ? 'name_es' : 'name_en' "
                  option-value="code"
                  :options="countriesData"
                  outlined
                  v-model="country"
                  :class="{
                    'ultra-dense-input': $q.screen.lt.md
                  }"
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div
                class="col-12 "
                :class="{
                  'q-pr-xl q-mt-lg': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.companyOrIndividual').concat(' *')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-input
                  dense
                  rounded
                  outlined
                  v-model="companyOrIndividual"
                  :class="{
                    'ultra-dense-input': $q.screen.lt.md
                  }"
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div
                class="col-12 col-md-7"
                :class="{
                  'q-pr-xl q-mt-lg': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.email').concat(' *')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-input
                  dense
                  rounded
                  outlined
                  v-model="email"
                  :class="{
                    'ultra-dense-input': $q.screen.lt.md
                  }"
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div
                class="col-12 col-md-5"
                :class="{
                  'q-pr-xl q-mt-lg': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.phoneNumber')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-input
                  dense
                  rounded
                  v-model="phoneNumber"
                  :class="{
                    'ultra-dense-input': $q.screen.lt.md
                  }"
                  outlined
                  color="white"
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
                  'wp-100': $q.screen.lt.md
                }"
                class="q-mt-xl q-px-xl text-semi-bold"
                unelevated
              />
            </q-form>
            <q-img
              width="20vh"
              style="position: absolute; z-index: 1;right: -60px;bottom: -60px;"
              src="../../assets/images/card-contact.webp"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>

<script setup lang="ts">
import GetCountriesLocal from 'src/helpers/GetCountriesLocal';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { locale } = useI18n({ useScope: 'global' });

const countriesData = GetCountriesLocal()

console.log(countriesData)

const country = ref<string>('');
const companyOrIndividual = ref<string>('');
const phoneNumber = ref<string>('');
const email = ref<string>('');
const fullName = ref<string>('');

</script>

<style>
  .bg-card-contact-variant{
    background: url("../../assets/images/bg-form-contact.webp"), #f9eb37;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 65%;
    background-origin: content-box;
  }
</style>