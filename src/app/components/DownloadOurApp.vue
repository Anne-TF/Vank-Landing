<template>
    <div class="wp-100 bg-black flex justify-center q-pt-xl q-pb-xl" >
        <div>
            <q-icon name="img:icons/rounded-v-yellow.svg" size="15em" />
        </div>
        <div class="flex justify-center">
            <div class="wp-100" style="position: relative;">
                <p
                    :class="{
                    'fs-40': $q.screen.gt.sm,
                    'fs-25': $q.screen.lt.md,
                    }"
                    class="q-mt-none text-bold text-center text-white"
                    v-text="$t(`Home.footer.downloadOurApp`)"
                />
                <div class="wp-100 flex flex-center" style="position: absolute; margin-top: -31px;">
                    <q-icon
                    name="img:icons/yellow-bar-contact.svg"
                    :style="`
                    width: ${$q.screen.gt.sm ? '24em' : '16em'};
                    height: ${$q.screen.gt.sm ? '1em' : '1em'};
                    margin-top: ${$q.screen.gt.sm ? '0' : '5px'};
                    `"
                    />
                </div>
            </div>
            <div class="wp-100 flex flex-center" v-if="((locale as readonly string[])).includes('es')">
                <q-img
                    width="22vh"
                    class=" mb-8 "
                    src="../../assets/images/get-app-store-spanish.webp"
                />
                <q-img
                    width="19.5vh"
                    class=" mb-8 "
                    src="../../assets/images/get-in-google-play-spanish.webp"
                />
            </div>
            <div class="wp-100 flex flex-center mb-8 " v-else>
                <q-img
                    width="19.5vh"
                    class="mr-15 ml-15  mb-8 "
                    src="../../assets/images/get-app-store-english.webp"
                />
                <q-img
                    width="19.5vh"
                    class=" mb-8 "
                    src="../../assets/images/get-in-google-play-english.webp"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';

    const { locale } = useI18n({ useScope: 'global' });
</script>
