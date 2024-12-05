<template>
  <header>
    <div id="headercontainer">
      <span id="headeruser">{{ userType }}</span>
      <ul id="headermenu">
        <li v-for="(item, index) in menuItems" :key="index">
          <a v-if="item.text === '로그아웃'" href="#" @click.prevent="handleLogout">{{ item.text }}</a>
          <router-link v-else :to="item.path">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const props = defineProps({
  userType: {
    type: String,
    default: '학생용'
  }
});

const router = useRouter();

const handleLogout = () => {
  Cookies.remove('token');  // 쿠키에서 토큰 제거
  router.push({ name: 'loginview' });  // 로그인 페이지로 이동
};

const menuItems = ref([
  { text: '로그인', path: '/login' },
  { text: '회원가입', path: '/jointermsofuse' },
  { text: '로그아웃', path: '#' },
  { text: '마이페이지', path: '/mypage' },
  { text: '알림마당', path: '/notice' }
]);
</script>

<style scoped>
#headercontainer {
  display: flex;
  width: 100vw;
  align-items: top;
}

#headeruser {
  border-left: 3.4px solid #3c4983;
  padding-left: 10px;
  color: #3c4983;
  margin: 52px;
  margin-left: 87px;
  font-size: 2vh;
}

#headermenu {
  display: flex;
  list-style: none;
  margin: 2.22vh 7.24vw 0 auto;
  padding: 0;
}

#headermenu li {
  margin-left: 1.04vw;
  font-size: 2.19vh;
}

#headermenu a {
  position: relative;
  text-decoration: none;
  color: #3c4983;
  padding-left: 10px;
}

#headermenu a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 55%;
  transform: translateY(-50%);
  height: 70%;
  width: 3.2px;
  background-color: #3c4983;
}
</style>
  