<template>
    <div class="marquee bg-black wp-100">
        <div>
            <span>{{ $t('Company.takeYourFinances') }}</span>
            <span>{{ $t('Company.takeYourFinances') }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.marquee {
  overflow: hidden;
  position: relative;
  height: 130px;
}

.marquee div {
  display: block;
  width: 200%;
  position: absolute;
  overflow: hidden;
  animation: marquee 15s linear infinite;
}

.marquee span {
  float: left;
  width: 50%;
  font-weight: bolder;
  font-size: 80px;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}
</style>