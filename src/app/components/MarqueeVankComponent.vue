<template>
    <div class="wp-100 q-pt-lg overflow-fix">
        <div class="marquee2 bg-vk-secondary  text-black marquee-secondary">
            <div>
                <span class="flex flex-center">
                    <span :style="`width: ${((locale as readonly string[])).includes('es') ? '940px' : '840px'};`">
                        {{ $t('ContactUs.thisItsNot') }}
                    </span>
                    <q-icon style="max-width: 180px;" name="img:icons/vank-black.svg" size="10vh" />
                </span>
                <span class="flex flex-center">
                    <span :style="`width: ${((locale as readonly string[])).includes('es') ? '940px' : '840px'};`">
                        {{ $t('ContactUs.thisItsNot') }}
                    </span>
                    <q-icon style="max-width: 180px;" name="img:icons/vank-black.svg" size="10vh" />
                </span>
            </div>
        </div>
        <div class="marquee2reverse bg-black  text-vk-secondary marquee-black">
            <div>
                <span class="flex flex-center">
                    <span :style="`width: ${((locale as readonly string[])).includes('es') ? '940px' : '840px'};`">
                        {{ $t('ContactUs.thisItsNot') }}
                    </span>
                    <q-icon style="max-width: 180px;" name="img:icons/vank-yellow.svg" size="10vh" />
                </span>
                <span class="flex flex-center">
                    <span :style="`width: ${((locale as readonly string[])).includes('es') ? '940px' : '840px'};`">
                        {{ $t('ContactUs.thisItsNot') }}
                    </span>
                    <q-icon style="max-width: 180px;" name="img:icons/vank-yellow.svg" size="10vh" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
</script>

<style lang="scss">
.marquee2 {
  overflow: hidden;
  position: relative;
  height: 120px;
  width: 105%;
  left: -2.5%;

}

.marquee2 div {
  display: block;
  width: 200%;
  position: absolute;
  overflow: hidden;
  animation: marquee 15s linear infinite;
}

.marquee2 span {
  float: left;
  width: 50%;
  font-weight: bolder;
  font-size: 80px;

}

.marquee2reverse {
  overflow: hidden;
  position: relative;
  height: 120px;
  width: 105%;
  left: -2.5%;

}

.marquee2reverse div {
  display: block;
  width: 200%;
  position: absolute;
  overflow: hidden;
  animation: marqueeOtherSide 15s linear infinite;
}

.marquee2reverse span {
  float: left;
  width: 50%;
  font-weight: bolder;
  font-size: 80px;

}

@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}

@keyframes marqueeOtherSide {
  0% { right: 0; }
  100% { right: -100%; }
}

.marquee-secondary{
    z-index: 1;
    transform: rotate(2deg);
}

.marquee-black{
    z-index: 2;
    transform: rotate(-2deg);
}

</style>