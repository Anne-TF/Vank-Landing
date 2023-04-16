<template>
    <div
        class="flex flex-inline justify-between"
        v-if="$q.screen.gt.sm"
        :class="{ 'q-pt-lg q-px-xl': $q.screen.gt.sm }"
        style="z-index: 9"
      >
        <q-icon
          name="img:icons/vank-black.svg"
          style="width: 10vh; height: 5vh; cursor: pointer"
          v-if="!dark"
          @click="$router.push('/')"
        />
        <q-icon
          name="img:icons/vank-white.svg"
          style="width: 10vh; height: 5vh; cursor: pointer"
          v-if="dark"
          @click="$router.push('/')"
        />
        <div
          style="z-index: 9"
          class="flex flex-center q-gutter-x-lg wp-60 pl-108"
        >
          <span
            v-text="$t('Home.navbar.people')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/people')"
          />
          <span
            v-text="$t('Home.navbar.minors')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/minors')"
          />
          <span
            v-text="$t('Home.navbar.business')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/')"
          />
          <span
            v-text="$t('Home.navbar.vankcard')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/vankcard')"
          />
          <span
            v-text="$t('Home.navbar.vankversity')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/vankversity')"
          />
          <span
            v-text="$t('Home.navbar.company')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/company')"
          />
          <span
            v-text="$t('Home.navbar.contact')"
            style="cursor: pointer"
            :class="!dark ? 'text-black' : 'text-white'"
            @click="$router.push('/contact')"
          />
        </div>
        <div class="flex flex-inline items-center">
          <q-btn
            rounded
            no-caps
            :color="!dark ? 'vk-accent' : 'vk-secondary'"
            unelevated
            :class="{
              'q-mr-sm': $q.screen.gt.sm,
              'text-black': dark
            }"
            class="text-bold"
            href="http://novapro.io:9000/#/login?mode=email"
            style="min-width: 10vh; height: 30px"
            :label="$t('Home.navbar.login')"
          />
          <q-btn
            no-caps
            flat
            rounded
            unelevated
            :color="!dark ? 'black' : 'white'"
            href="http://novapro.io:9000/#/sign-up"
            style="height: 30px"
            :label="$t('Home.navbar.signUp')"
          />
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';

export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(props)
  {

    // LIFECYCLE HOOKS


    // WATCHERS


    return {

    };
  }
};
</script>
