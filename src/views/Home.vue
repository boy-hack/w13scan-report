<template>
  <div>
    <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      :trigger="null" collapsible v-model="collapsed"
    >
      <div class="logo">
        <span>W13SCAN</span></div>
      <a-menu theme="dark" mode="vertical" :defaultSelectedKeys="['1']" v-model="menuselect">
        <a-menu-item key="1">
          <a-icon type="info-circle" />
          <span class="nav-text">漏洞详情</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="github" />
          <span class="nav-text">关于</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding-left: 15px;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '620px' }">
          <div v-if="menuselect[0] == '1'">
            <web-vulnerability
                           :data="webData"
                           :loading="loading"
                           style="margin-bottom: 48px;">
            </web-vulnerability>
          </div>
          <div v-else-if="menuselect[0] == '2'">
            <p>W13Scan Version:<span>^w13scan_version^</span></p>
            <p>问题反馈: <a href="https://github.com/w-digital-scanner/w13scan/issues" target="_blank">https://github.com/w-digital-scanner/w13scan/issues</a></p>
            <p>Github: <a-icon type="github" /><a href="https://github.com/boy-hack/"> Follow My Github</a> </p>
            <p><a href="https://i.hacking8.com" target="_blank">Hacking8安全信息流</a></p>
          </div>
          
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Powered by w8ay
      </a-layout-footer>
    </a-layout>
  </a-layout>


  </div>
</template>

<script>
  import WebVulnerability from "../components/WebVulnerability";
  // import ServiceVulnerability from "../components/ServiceVulnerability";

  export default {
    name: "Home",
    components: {
      WebVulnerability,
    },
    created () {
      if (document.readyState === 'complete') {
        this.loadVulns(0)
      } else {
        window.addEventListener("load", () => {
          this.loadVulns(0)
        });
      }
    },
    mounted () {
      if (!window.fetch) {
        alert("Please use modern browser like Chrome, Firefox, Safari to open the report.")
      }
    },
    data () {
      return {
        collapsed: false,
        loading: true,
        webData: [],
        modalVisible:false,
        menuselect:['1'],
      };
    },
    methods: {
      loadVulns () {
        for (let data of [window.webVulns]) {
          for (let [i, obj] of data.entries()) {
            obj.id = i
          }
        }
        this.webData = window.webVulns
        this.loading = false
      },
      submitSentry () {
      }
    }
  };
</script>

<style lang="less" scoped>
#components-layout-demo-responsive{
  height: 100%;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  // background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  // padding-left:20px;
  font-size:20px;
  font-weight: bold;
  color:#fff;
  padding-left:15px;
  text-align: left;
}
</style>
