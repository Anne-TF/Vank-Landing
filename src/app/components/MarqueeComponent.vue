<template>
  <div class="wp-100">
    <div class="marquee bg-black ">
        <div>
            <span>{{ $t('Company.takeYourFinances') }}</span>
            <span>{{ $t('Company.takeYourFinances') }}</span>
        </div>
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

@media (max-width: 1600px) {
  .marquee span {
    font-size: 60px;
  }
  .marquee {
    height: 95px;
  }
}

@media (max-width: 1200px) {
  .marquee {
    width: 150%;
    left: -25%;
  }
}

@media (max-width: 830px) {
  .marquee {
    width: 200%;
    left: -50%;
  }
}

@media (max-width: 600px) {
  .marquee span {
    font-size: 30px;
  }
  .marquee {
    height: 47.5px;
  }
}
</style>