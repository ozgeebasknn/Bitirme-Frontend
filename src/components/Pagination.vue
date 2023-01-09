<!-- <template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="currentPage > 1">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" v-if="currentPage < totalPages">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: ['totalPages', 'currentPage'],
    computed: {
      pages() {
        let pages = []
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i)
        }
        return pages
      },
    },
    methods: {
      goToPage(page) {
        this.$emit('page-changed', page)
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.$emit('page-changed', this.currentPage - 1)
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$emit('page-changed', this.currentPage + 1)
        }
      },
    },
  }
  </script>
  
  <style>
  .pagination {
    margin-top: 20px;
  }
  </style>
   -->

   <template>
    <div class="row">

    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        currentPage: 1
      }
    },
    computed: {
      pages() {
        return Array(Math.ceil(this.totalItems / this.itemsPerPage)).fill().map((_, i) => i + 1)
      }
    }
  }
  </script>
  
  <style>
  button {
    border: none;
    background-color: white;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: lightgray;
  }
  </style>
  