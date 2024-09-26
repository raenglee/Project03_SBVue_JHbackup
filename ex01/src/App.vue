<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <div class="flex">
          <div class="p-5">
            <RouterLink to="/informationlist">정보 공유</RouterLink>
          </div>
          <div class="p-5">
            <RouterLink to="/">동행 구인</RouterLink>
          </div>
          <div class="p-5">
            <RouterLink to="/">자유 게시판</RouterLink>
          </div>
        </div>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<style scoped></style>
