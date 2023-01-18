<template>
     <layout-default>
        <v-card
        class="mx-auto my-5 rounded-lg shadow"
        max-width="800"
        max-height="1200"
    >
       <div class="row mid pt-2">
        <img
            src="../assets/görseller/loginLogo.png"
            class="w-25"
            alt="Sample photo"
        />
       </div>
      <v-container v-for="card in displayedCards" :key="card._id">
        <v-text-field label="Başlık" variant="outlined" clearable v-model="card.name"></v-text-field>
        <v-text-field label="Kira" variant="outlined" clearable v-model="card.kira"></v-text-field>
        <v-text-field label="Isıtma" variant="outlined" clearable v-model="card.isitma"></v-text-field>
        <v-text-field label="Oda Sayısı" variant="outlined" clearable v-model="card.odaSayisi"></v-text-field>
        <v-text-field label="Eşya Durumu" variant="outlined" clearable v-model="card.esyaDurumu"></v-text-field>
        <v-text-field label="Balkon Durumu" variant="outlined" clearable v-model="card.balkonDurumu"></v-text-field>
        <v-textarea label="Açıklama" variant="outlined" clearable v-model="card.aciklama"></v-textarea>
       
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <button class="cta" @click="ilanGuncelle()">
          <span>Güncelle</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </v-card-actions>
      <div>
      <button v-for="page in pages" :key="page" @click="currentPage = page">
        {{ page }}
      </button>
    </div>
    </v-card>
   
</layout-default>
</template>

<script>
import axios from "axios";
import LayoutDefault from "../layouts/DefauldLayout.vue";
import { URL } from "../utilty/config";
import { useRouter } from "vue-router";

export default {
  name: "userIlan",
  components: {
    LayoutDefault,
  },
  data() {
    return {
      currentPage: 1,
      cardsPerPage: 5,
      cards: [],
      favori: [],
    };
  },
  setup() {
    const router = useRouter();
  },
  methods: {
    ilanGuncelle() {
        axios.patch(URL+"projects/"+`${this.$route.params._id}`,{
            name:this.cards.name,
            kira:this.cards.kira,
            isitma:this.cards.isitma,
            odaSayisi:this.cards.odaSayisi,
            esyaDurumu:this.cards.esyaDurumu,
            balkonDurumu:this.cards.balkonDurumu,
            aciklama:this.cards.aciklama

        }).then((response)=>{
            console.log(response)
           
          

        });
      
    },
  },
  created() {
    axios.get(URL + "users/projects").then((response) => {
        this.cards = response.data;
        
      });
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
  box-shadow: 0 4px 21px -12px #D3E4CD;
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: black;

  &.dark {
    // background-color: #18151f;
    background-color: #D3E4CD;
  }
  &.light {
    background-color: #99A799;
  }

  .t-dark {
    color: #D3E4CD;
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
    background-color: #99A799;
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
      background: #D3E4CD;
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
      background: #D3E4CD;
    }
  }
  .postcard.light {
    .postcard__text:before {
      background: #9faf9a;
    }
  }
}
/* COLORS */
</style>