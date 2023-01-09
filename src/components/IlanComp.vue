<template>
  <div class="card">
    <article
      class="postcard dark blue"
      v-for="card in displayedCards"
      :key="card._id"
    >
      <a class="postcard__img_link" href="#">
        <img
          class="postcard__img"
          src="../assets/görseller/oda1.jpg"
          alt="Image Title"
        />
      </a>
      <div class="postcard__text">
        <h1 class="postcard__title blue">
          <router-link :to="{ name: 'ilanDetay', params: { id: card._id } }">
            <strong>{{ card.name }} </strong>
          </router-link>
        </h1>
        <div class="postcard__subtitle small">
          <time datetime="2020-05-25 12:00:00">
            {{ card.createdAt }}
          </time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">{{ card.aciklama }}</div>
        <ul class="postcard__tagbox">
          <li class="tag__item">{{ card.kira }}</li>
          <li class="tag__item">{{ card.esyaDurumu }}</li>
          <li class="tag__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </article>
 

    <div>
      <button v-for="page in pages" :key="page" @click="currentPage = page">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";
import { URL } from "../utilty/config";
export default {
  data() {
    return {
      currentPage: 1,
      cardsPerPage: 5,
      cards: [],
    };
  },
  methods: {
    getAds() {
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      //   },
      // };
      axios
        .get(URL + "projects")
        .then((response) => {
          this.cards = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // goToDetailPage(_id) {
    //   // Vue Router'ı kullanarak yönlendirme yapın
    //   this.$router.push({
    //     name: "ilanDetay", // Yönlendirme yapılacak sayfanın adı
    //     params: { _id }, // Yönlendirme yapılacak sayfaya gönderilecek parametreler
    //   });
    // },
  },
  created() {
    this.getAds();
  },
  setup() {
    const router = useRouter();
  },
  computed: {
    displayedCards() {
      const start = (this.currentPage - 1) * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      return this.cards.slice(start, end);
    },
    pages() {
      return Array(Math.ceil(this.cards.length / this.cardsPerPage))
        .fill()
        .map((_, i) => i + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.bi bi-heart{
  color: red;
}
.postcard {
  flex-wrap: wrap;
  display: flex;

  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #ffffff;

  &.dark {
    background-color: #18151f;
  }
  &.light {
    background-color: #e1e5ea;
  }

  .t-dark {
    color: #18151f;
  }

  a {
    color: inherit;
  }

  h1,
  .h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .small {
    font-size: 80%;
  }

  .postcard__title {
    font-size: 1.75rem;
  }

  .postcard__img {
    max-height: 180px;
    width: 100%;
    object-fit: cover;
    position: relative;
  }

  .postcard__img_link {
    display: contents;
  }

  .postcard__bar {
    width: 50px;
    height: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #424242;
    transition: width 0.2s ease;
  }

  .postcard__text {
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .postcard__preview-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    height: 100%;
  }

  .postcard__tagbox {
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    margin: 20px 0 0 0;
    padding: 0;
    justify-content: center;

    .tag__item {
      display: inline-block;
      background: rgba(83, 83, 83, 0.4);
      border-radius: 3px;
      padding: 2.5px 10px;
      margin: 0 5px 5px 0;
      cursor: default;
      user-select: none;
      transition: background-color 0.3s;

      &:hover {
        background: rgba(83, 83, 83, 0.8);
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-70deg, #424242, transparent 50%);
    opacity: 1;
    border-radius: 10px;
  }

  &:hover .postcard__bar {
    width: 100px;
  }
}

@media screen and (min-width: 769px) {
  .postcard {
    flex-wrap: inherit;

    .postcard__title {
      font-size: 2rem;
    }

    .postcard__tagbox {
      justify-content: start;
    }

    .postcard__img {
      max-width: 300px;
      max-height: 100%;
      transition: transform 0.3s ease;
    }

    .postcard__text {
      padding: 3rem;
      width: 100%;
    }

    .media.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: #18151f;
      top: -20%;
      height: 130%;
      width: 55px;
    }

    &:hover .postcard__img {
      transform: scale(1.1);
    }

    &:nth-child(2n + 1) {
      flex-direction: row;
    }

    &:nth-child(2n + 0) {
      flex-direction: row-reverse;
    }

    &:nth-child(2n + 1) .postcard__text::before {
      left: -12px !important;
      transform: rotate(4deg);
    }

    &:nth-child(2n + 0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
}
@media screen and (min-width: 1024px) {
  .postcard__text {
    padding: 2rem 3.5rem;
  }

  .postcard__text:before {
    content: "";
    position: absolute;
    display: block;

    top: -20%;
    height: 130%;
    width: 55px;
  }

  .postcard.dark {
    .postcard__text:before {
      background: #18151f;
    }
  }
  .postcard.light {
    .postcard__text:before {
      background: #e1e5ea;
    }
  }
}
/* COLORS */
</style>

