<template>
  <modal-component
    :show="isShowen"
    @create="addRow"
    v-model:show="isShowen"
  />
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <custom-button @click="showModal">Add Row</custom-button>
    <search-and-sort
      v-model:searchValue="searchTerm"
      :modelValue="selectedSort"
      @update:modelValue="setSelectedSort"
    />
  </div>
  <table-component
    :rows="rows"
  /> 
  <pagination-component
    v-model:page="currentPage"
    :page="currentPage"
    :pages="totalPages"
  />
</template>

<script>
  import axios from 'axios';
  import TableComponent from './components/TableComponent.vue';
  import ModalComponent from './components/UI/ModalComponent.vue';
  import SearchAndSort from './components/UI/SearchAndSort.vue';
  import PaginationComponent from './components/PaginationComponent.vue'

  export default {
    name: 'App',
    components: {
      TableComponent,
      ModalComponent,
      SearchAndSort,
      PaginationComponent
    },
    data() {
      return {
        rows: [],
        isShowen: false,
        selectedSort: '',
        searchTerm: '',
        currentPage: 1,
        limit: 5,
        totalPages: 0,
        start: 0,
        end: 5
      }
    },
    methods: {
      async addRow (title, quantity, distance) {
        const $host = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        })

        // add data to SQL and refresh table on the page
        const data = await $host.post('api/table', {title, quantity, distance})
        this.fetchTable()
        return data
      },
      async fetchTable() {
        const $host = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        })

        // get data from SQL and render to the page
        const {data} = await $host.get('api/table')
        this.rows = this.sortedAndSearchedTodos(data).slice(this.start, this.end)

        // change count of pages
        this.totalPages = Math.ceil(data.length / this.limit)
      },

      // sort data
      sortTable(rows) {
        if (this.selectedSort === 'title') {
          return [...rows].sort((row1, row2) => row1[this.selectedSort].localeCompare(row2[this.selectedSort]))
        } else if (this.selectedSort) {

          // if quantity or distance the same, then sort will be done by title
          return [...rows].sort((row1, row2) => row1[this.selectedSort] === row2[this.selectedSort] 
            ? row1['title'].localeCompare(row2['title'])
            : row1[this.selectedSort] - row2[this.selectedSort])
        } else {
          return rows.reverse()
        }
      },

      // filter data
      sortedAndSearchedTodos(rows) {
          return this.sortTable(rows).filter(row => row.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
      },
      setSelectedSort(type) {
        this.selectedSort = type
      },
      showModal() {
        this.isShowen = true
      }
    },
    mounted() {
      this.fetchTable()
    },
    watch: {
      selectedSort() {
        this.fetchTable()
      },
      searchTerm() {
        this.fetchTable()
      },
      
      // when page is changed, then change indexes of table's data and refresh table
      currentPage(newVal) {
        this.start = this.limit * (newVal - 1)
        this.end = newVal * this.limit
        this.fetchTable()
      }
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }

  body {
    padding: 5% 10%;
    background: #f5f5f5;
  }
</style>
