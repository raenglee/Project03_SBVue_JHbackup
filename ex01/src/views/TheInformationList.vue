<template>
  <div>
    <!--🔍검색-->
    <div>
      검색
      <input type="text" class="border rounded-full">
      </div>


    <!--🐎말머리 선택-->
    <div class="border-y grid place-items-center divide-y">
      <div class="text-center">
        <input type="checkbox" />전체 <input type="checkbox" />동티모르
        <input type="checkbox" />라오스 <input type="checkbox" />말레이시아
        <input type="checkbox" />미얀마 <input type="checkbox" />베트남
        <input type="checkbox" />브루나이 <input type="checkbox" />싱가포르
        <input type="checkbox" />인도네시아 <input type="checkbox" />캄보디아
        <input type="checkbox" />태국 <input type="checkbox" />필리핀
      </div>

      <div class=" text-center">
        <input type="checkbox" />전체 <input type="checkbox" />교통 <input type="checkbox" />맛집
        <input type="checkbox" />문화 체험 <input type="checkbox" />쇼핑
        <input type="checkbox" />숙박 <input type="checkbox" />액티비티
        <input type="checkbox" />여행 스팟 <input type="checkbox" />항공권
        <input type="checkbox" />후기 <input type="checkbox" />기타
      </div>
    </div>
    <!--📃게시글 목록-->
    <div>
      <table>
        <thead>
          <tr>
            <th class="p-5">말머리</th>
            <th class="p-5">제목</th>
            <th class="p-5">작성자</th>
            <th class="p-5">작성일</th>
            <th class="p-5">추천</th>
            <th class="p-5">조회</th>
          </tr>
        </thead>
        <tbody class="border-y divide-y">
          <!-- <tr v-for="item in arr" :key="item.idx" @click="viewPage(item.idx)"> -->
          <tr>
            <td>[국가][ㅎㅎ]</td>
            <td>베트남 여행 후기</td>
            <td>바다코끼리</td>
            <td>2024-09-25</td>
            <td>34</td>
            <td>374</td>
            <!-- <td>{{ item.idx }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.creAuthor }}</td>
              <td>{{ item.regDate }}</td>
              <td>{{ item.viewCount }}</td> -->
          </tr>
          <tr>
            <td>[국가][ㅎㅎ]</td>
            <td>베트남 여행 후기</td>
            <td>바다코끼리</td>
            <td>2024-09-25</td>
            <td>34</td>
            <td>374</td>
          </tr>
          <tr>
            <td>[국가][ㅎㅎ]</td>
            <td>베트남 여행 후기</td>
            <td>바다코끼리</td>
            <td>2024-09-25</td>
            <td>34</td>
            <td>374</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <button>글쓰기</button>
    </div>

    <!--⏩최하단 전체 페이지 수-->
    <div>
      <ul>
        <li v-for="num in totalPages" v-bind:key="num" @click="setPageNum(num - 1)">
          {{ num }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
//    import axios from 'axios'
//    import { ref } from 'vue';
//    import {useRouter} from 'vue-router';

//    const router = useRouter();
//    const arr = ref ([ ]);
//    const totalPages = ref(10);
//    const pageNum = ref(0);

//    const setPageNum = (num) => {
//      pageNum.value = num;
//      getFreeBoard(num);
//    }

//    const viewPage = (idx) => {
//      const data = {name:'freeboardview', params: {idx:idx}};
//      router.push(data);
//    }

//    const getFreeBoard = (pageNum) => {
//      if (pageNum == undefined) pageNum = 0;
//      axios.get(`http://localhost:10000/freeboard?pageNum=${pageNum}`)
//        .then(res => {
//          arr.value = res.data.list;
//          totalPages.value = res.data.totalPages;
//        })
//        .catch(e => {
//          console.log(e);
//        })
//    }
//    // page 호출되자 마자 자동 실행
//    getFreeBoard();
</script>

<style>

</style>
