<template>
    <section class="vh" style="background-color: #0b222e">
      <navbar-comp></navbar-comp>
  
      <div class="container">
        <div class="container">
          <div class="row mid">
            <div class="mt-5 table-responsive mb-5">
              <table class="table mt-5">
                <thead>
                  <tr class="table-active">
                    <th scope="col" class="text-light text-center">Kira</th>
                    <th scope="col" class="text-light text-center">Isıtma</th>
                    <th scope="col" class="text-light text-center">
                      Eşya Durumu
                    </th>
                    <th scope="col" class="text-light text-center">
                      Balkon Durumu
                    </th>
                    <th scope="col" class="text-light text-center">Açıklama</th>
                    <th scope="col" class="text-light text-center">İletişim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center text-light">{{ ilan.kira }}</td>
                    <td class="text-center text-light">{{ ilan.isitma }}</td>
                    <td class="text-center text-light">{{ ilan.esyaDurumu }}</td>
                    <td class="text-center text-light">
                      {{ ilan.balkonDurumu }}
                    </td>
                    <td class="text-center text-light">{{ ilan.aciklama }}</td>
                    <td class="text-center text-light">
                      <button :on-click="onayla()" class="btn-rounded">Onayla</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          -->
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  import NavbarComp from "@/components/NavbarComp.vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  import { onMounted, reactive, ref } from "vue";
  import { URL } from "../utilty/config";
  export default {
    name:"adminIlanDetay",
    components: {
      NavbarComp,
    },
    setup() {
      const router = useRouter();
    },
  
    data: () => ({
      ilan: reactive({}),
    }),
  
    methods: {
      // git(){
      //   this.$router.push("/profil/"+this.user[0].user_id._id);
      // },
      getAds() {
        axios
          .get(URL + "projects/" + `${this.$route.params.id}`)
          .then((response) => {
            this.ilan = response.data;
            console.log(this.ilan);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      onayla(){
        axios
          .patch(URL + "admin/adminIlan/" + `${this.$route.params.id}`)
          .then((response) => {
            this.ilan = response.data;
            console.log(this.ilan);
          })
          .catch((error) => {
            console.log(error);
          });
  
      }
    },
    mounted() {
      this.getAds();
    
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 100vh;
  }
  .btn-rounded {
    border-radius: 10px;
  }
  .carousel .item {
    height: 300px;
  }
  
  .item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 300px;
  }
  .mid {
    place-content: center;
  }
  .vh {
    min-height: 100vh;
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
  </style>
  