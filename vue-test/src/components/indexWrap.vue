<template>
  <div >
    <div>
      <!-- flah展示框 -->
      <van-cell-group>
        <van-cell title="我要找工作" value="点击查看" size="large" icon="location-o" />
        <van-cell title="单元格" value="点击查看" size="large" icon="service-o"/>
        <van-cell value="点击查看" is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">调整生物钟</span>
            <van-tag type="danger">紧急</van-tag>
          </template>
        </van-cell>
        <van-cell title="单元格" value="内容" size="large" />
      </van-cell-group>
    </div>

    <!-- 添加新的flag按钮 -->
    <div>
      <van-button type="info">我要立新的falg</van-button>
    </div>

    <!-- footer组件 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">详情</van-tabbar-item>
      <van-tabbar-item icon="add-o">生成</van-tabbar-item>
      <van-tabbar-item icon="coupon-o">统计</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'indexWrap',
  props: {
    active:0,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
