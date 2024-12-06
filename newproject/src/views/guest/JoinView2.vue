<template>
    <div class="w-[1500px] mt-5 p-8 bg-white rounded shadow-2xl mb-12">
      <JoinHeader />
      <div class="flex justify-center mt-20">
        <div class="w-[800px]">
          <div class="my-6">
            <label for="role" class="inline mb-2 text-sm font-bold text-blue-900">3. 아이디/패스워드 설정</label>
            <hr class="mt-2">
            
            <!-- 아이디 입력 -->
            <div class="mt-10 mb-10">
              <label class="block mb-3 text-sm font-bold text-gray-700">아이디  <button class="border border-blue-900 bg-blue-900 text-white ml-5 p-1 px-3">중복확인</button></label> 
              <input 
                class="w-full px-3 py-2 border border-gray-300 rounded" 
                type="text" 
                id="bid" 
                placeholder="아이디 입력" 
              />
            </div>
  
            <!-- 비밀번호 입력 -->
            <div class="mb-10">
              <label class="block mb-3 text-sm font-bold text-gray-700">비밀번호</label>
              <input 
                class=" w-full px-3 py-2 border border-gray-300 rounded" 
                type="password" 
                id="bpa"
                placeholder="비밀번호 입력" 
              />
            </div>
  
            <!-- 비밀번호 확인 -->
            <div class="mb-10">
              <label class="block mb-3 text-sm font-bold text-gray-700">비밀번호 확인</label>
              <input 
                class="w-full px-3 py-2 border border-gray-300 rounded" 
                type="password" 
                id="bpa_confirm"
                placeholder="비밀번호 확인" 
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center my-4">
      <button
        @click="joinuser"
        class="mr-3 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
      >
        회원가입
      </button>
      <button
        @click="cansel"
        class="px-8 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
        type="button"
      >
        취소
      </button>
    </div>


    </div>
  </template>
<script setup>
import JoinHeader from '@/components/layout/JoinHeader.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const joinuser = () => {

router.push('joincomplete');    

}


const cansel = () => {
router.go(-1);    
}

</script>

<style lang="scss" scoped>

</style>