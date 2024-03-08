<template>
  <div id="container"></div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  name: 'MapView',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initAMap()
  },
  unmounted() {
    this.map?.destroy()
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: '5d9ce9c28f7faa97523a18cae30f2980', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          'AMap.Scale',
          'AMap.Geolocation',
          'AMap.PlaceSearch',
          'AMap.AutoComplete',
          'AMap.Geocoder',
          'AMap.CitySearch',
          'AMap.ControlBar',
          'AMap.MapType',
          'AMap.HawkEye',
          'AMap.DistrictSearch',
          'AMap.MarkerClusterer',
          'AMap.LabelMarker',
          'AMap.LabelsLayer',
          'AMap.Circle'
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        AMapUI: {
          // 是否加载 AMapUI，缺省不加载
          version: '1.1', // AMapUI 缺省 1.1
          plugins: [] // 需要加载的 AMapUI ui插件
        },
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: '2.0.0' // Loca 版本，缺省 1.3.2
        }
      })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            // 设置地图容器id
            viewMode: '2D', // 是否为3D地图模式
            center: [120.59, 31.3],
            zoom: 10
          })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
#container {
  width: 100%;
  height: 439px;
}
</style>
