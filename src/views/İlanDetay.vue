<template>
  <layout-default>
    <div class="container">
      <div class="row mid">

        <div class="col-8 mb-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide mt-5"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/görseller/oda1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/görseller/oda1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/görseller/oda1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="mt-5 table-responsive mb-5 col-4">
          <table class="table mt-5">
            <thead>
              <tr class="table-active">
                <th scope="col" class=" text-center">Kira</th>
                <th scope="col" class=" text-center">Isitma</th>
                <th scope="col" class=" text-center">Eşya Durumu</th>
                <th scope="col" class=" text-center">
                  Balkon Durumu
                </th>
                <th scope="col" class=" text-center">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center ">{{ ilan.kira }}</td>
                <td class="text-center ">{{ ilan.isitma }}</td>
                <td class="text-center ">{{ ilan.esyaDurumu }}</td>
                <td class="text-center ">
                  {{ ilan.balkonDurumu }}
                </td>
                <td class="text-center ">{{ ilan.aciklama }}</td>
              </tr>
              
            </tbody>
            
          </table>
          
        </div>
      </div>
    </div>
  </layout-default>
</template>
<script>
import LayoutDefault from "../layouts/DefauldLayout.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { URL } from "../utilty/config";
export default {
  components: {
    LayoutDefault,
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
        .get(URL + "projects/"+`${this.$route.params.id}`)
        .then((response) => {
          this.ilan = response.data;
          console.log(this.ilan);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
