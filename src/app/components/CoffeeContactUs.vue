<template>
    <!-- CONTACT US NOW --->
    <div
      class="flex flex-center"
      :class="{ 'py-90': $q.screen.gt.sm, 'py-40': $q.screen.lt.md }"
    >
      <h3
        class="no-margin text-center wp-100"
        :class="{ 'fs-25': $q.screen.lt.md }"
        v-text="$t('Home.contactUsNow')"
      />
      <div
        class="flex flex-inline justify-center"
        :class="{
          'wp-63': $q.screen.gt.lg,
          'wp-90': $q.screen.lt.xl,
          'q-mt-xl': $q.screen.gt.sm,
          'q-mt-md': $q.screen.lt.md
        }"
      >
        <q-img
          src="../../assets/images/coffee.webp"
          height="34vh"
          width="28vh"
        />
        <q-card
          flat
          class="br-15 bg-vk-secondary"
          :class="{
            'ml-110 wp-60': $q.screen.gt.sm,
            'q-mt-lg': $q.screen.lt.md
          }"
        >
          <q-card-section
            :class="{
              'q-pa-xl': $q.screen.gt.sm,
              'q-py-lg q-px-lg': $q.screen.lt.md
            }"
          >
            <q-form class="row no-margin rounded-white-border-input">
              <div
                class="col-12 col-md-6"
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
                class="col-12 col-md-6"
                :class="{
                  'q-pr-xl': $q.screen.gt.sm,
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
                class="col-12 col-md-6"
                :class="{
                  'q-pr-xl q-mt-lg': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.contactNumber').concat(' *')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-input
                  dense
                  rounded
                  v-model="contactNumber"
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
                class="col-12 col-md-6"
                :class="{
                  'q-pr-xl q-mt-lg': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.availableTime')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-input
                  dense
                  rounded
                  outlined
                  v-model="availableTime"
                  :class="{
                    'ultra-dense-input': $q.screen.lt.md
                  }"
                  color="white"
                  class="q-mt-sm"
                  bg-color="white"
                />
              </div>

              <div
                class="col-12"
                :class="{
                  'q-pr-xl q-mt-lg': $q.screen.gt.sm,
                  'q-mt-md': $q.screen.lt.md
                }"
              >
                <p
                  class="no-margin"
                  v-text="$t('Fields.message')"
                  :class="{
                    'fs-16': $q.screen.gt.sm,
                    'fs-14': $q.screen.lt.md
                  }"
                />
                <q-input
                  dense
                  rounded
                  outlined
                  v-model="message"
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
                  'wp-100': $q.screen.lt.md
                }"
                class="q-mt-xl q-px-xl text-semi-bold"
                unelevated
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const message = ref<string>('');
const availableTime = ref<string>('');
const contactNumber = ref<string>('');
const email = ref<string>('');
const fullName = ref<string>('');

</script>