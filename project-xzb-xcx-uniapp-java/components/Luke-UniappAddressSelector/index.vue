<!-- 地址 -->
<template>
  <view class="page-index">
    <UniAddressSelector
      v-if="showUniAddressSelector"
      :areaInfoSelected="areaInfoObj"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
    </UniAddressSelector>
  </view>
</template>

<script>
import 'UniAddressSelector' from './components/UniAddressSelector.vue';

export default {
    name: 'index',
    components: {
        UniAddressSelector
    },
    data() {
        return {
            showUniAddressSelector: false,
            areaInfoObj: {
                provinceObj: {
                    areaCode: '',
                    areaName: '',
                },
                cityObj: {
                    areaCode: '',
                    areaName: '',
                },
                cityObj: {
                    areaCode: '',
                    areaName: '',
                },
                areaObj: {
                    areaCode: '',
                    areaName: '',
                },
                streetObj: {
                    areaCode: '',
                    areaName: '',
                },
            }
        }
    },
    methods: {
        handleCancel() {
            this.showUniAddressSelector = false;
        },
        handleConfirm(areaInfoObj) {
            this.showUniAddressSelector = false;
            this.areaInfoObj = areaInfoObj;
        },
    }
}
</script>

<style lang="scss" scoped></style>
