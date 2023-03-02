<template>
  <q-icon v-show="$q.screen.gt.sm" name="img:icons/language.svg" size="40px" >
    <q-menu :offset="[-10, 10]">
      <q-list>
        <q-item
          v-for="(opt, index) in localeOptions"
          :key="index"
          dense
          clickable
          class="cursor-pointer small-padding-item-section"
          :active="locale === opt.value"
          active-class="text-bold text-vk-accent"
          @click="setLang(opt.value)">
          <q-item-section side>
            <q-avatar>
              <q-icon
                size="=20px"
                class="br-20"
                :name="`img:flags/${opt.icon}.svg`"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section class="pr-4">
            <q-item-label> {{ opt.label }} </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-icon>

  <q-expansion-item
    :icon="`img:flags/${getIcon}.svg`"
    :label="localeOptions.find((e => e.value === locale))?.label"
    header-class="text-medium fs-14"
    v-show="$q.screen.lt.md">
    <q-list class="mx-10">
      <q-item
        v-for="opt in localeOptions"
        :key="opt.value"
        clickable
        @click="setLang(opt.value)"
        class="q-px-md q-py-xs br-28"
        :class="opt.value === locale ? 'bg-vk-secondary' : 'text-vk-accent'">
        <q-item-section side>
          <q-avatar class="ml-4">
            <q-icon
              size="=20px"
              class="br-20"
              :name="`img:flags/${opt.icon}.svg`"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="fs-14"> {{ opt.label }} </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, watchEffect, onMounted } from 'vue';
import { useQuasar } from 'quasar';
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup()
  {
    // VARIABLES AND CONSTANTS
    const { locale } = useI18n({ useScope: 'global' });

    const localeOptions: { value: string, label: string; icon: string }[] = [
      {
        value: 'en-US',
        label: 'English',
        icon: 'usa'
      },
      {
        value: 'es-ES',
        label: 'Español',
        icon: 'spain'
      }
     /* {
        value: 'pt-BR',
        label: 'Por',
        icon: 'brazil'
      }*/
    ];

    const $q = useQuasar();

    // FUNCTIONS
    const setLang = (lang: string): void =>
    {
      if (lang.includes('es'))
      {
        locale.value = 'es-ES';
      }
      else if (lang.includes('en'))
      {
        locale.value = 'en-US';
      }
      else
      {
        locale.value = 'pt-BR';
      }
    };

    // COMPUTED
    const getIcon = computed<string>(() =>
    {
      const lang = localeOptions.find((e) =>
        {
         return e.value === locale.value;
        });
      return lang.icon;
    });

    // LIFECYCLE HOOKS
    onMounted(() =>
    {
      locale.value = locale.value ?? $q.lang.getLocale();
    });

    // WATCHERS
    watchEffect(() => setLang(locale.value));

    return {
      locale,
      localeOptions,
      getIcon,
      setLang
    };
  }
};
</script>

<style lang="scss">
.small-padding-item-section {
  .q-item__section--side {
    padding-right: 5px;
  }
}
</style>
