<template>
  <footer class="footer">
    <div class="text-center">©2019  <a href="https://learnblockchain.cn/">深入浅出区块链</a> </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
  mounted() {
     // 创建cnzz统计js
    const script = document.createElement('script')
    script.src = `https://s22.cnzz.com/z_stat.php?id=1265946080&web_id=1265946080`
    script.language = 'JavaScript'
    script.type = 'text/javascript'
    document.body.appendChild(script)
  }
}
</script>
