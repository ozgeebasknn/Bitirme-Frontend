<template>
    <div class="" id="sidebar">
      <aside class="menu ml-4 pt-4 has-text-white">
        <ul class="menu-list mt-4">
          
          <li>
            <p class="menu-label has-text-white"> Balkon </p>
            <div class="control">
              <ul>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    Evet
                  </label>
                </li>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    Hayır
                  </label>
                </li>
              </ul>
            </div>
            <p class="menu-label has-text-white">Isıtma</p>
            <div class="control">
              <ul>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    Doğalgaz
                  </label>
                </li>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    Klima
                  </label>
                </li>
              </ul>
            </div>
            <p class="menu-label has-text-white"> Evcil Hayvan </p>
            <div class="control">
              <ul>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    Evet
                  </label>
                </li>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    Hayır
                  </label>
                </li>
              </ul>
            </div>
            <p class="menu-label has-text-white"> Oda Sayısı </p>
            <div class="control">
              <ul>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    1+1
                  </label>
                </li>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    2+1
                  </label>
                </li>
                <li>
                  <label class="radio">
                    <input type="radio" name="answer" />
                    2+0
                  </label>
                </li>
                
                
                
              </ul>
            </div>
            
          </li>
        </ul>
        <router-link to="/ilanlar" class="button is-success is-light mt-5">Filtrele</router-link>
      </aside>
    </div>
  </template>
  <style scoped>
  #sidebar {
    width: 200px;
    background-color: #00947e;
    min-height: 100vh;
  }
  </style>
  