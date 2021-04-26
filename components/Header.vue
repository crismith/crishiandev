<template>
  <header class="header">
    <nav class="navbar-mobile navbar navbar-light bg-light d-flex">
      <a class="url-logo navbar-brand" href="/">
        <img class="img-logo" src="~/assets/images/logo.svg" />
      </a>
      <img @click="showMain" class="image-main" src="~/assets/images/menu.svg" />
      <div class="container-menu-desktop">
        <ul class="list-menu">
          <li class="item-menu">
            <a href="#about" class="url-section">
              <span class="number-item">
                01.
              </span>
              <span class="text-item">
                Sobre mí
              </span>
            </a>
          </li>

          <li class="item-menu">
            <a href="#service" class="url-section">
              <span class="number-item">
                02.
              </span>
              <span class="text-item">
                Servicios
              </span>
            </a>
          </li>

          <li class="item-menu">
            <a href="#project" class="url-section">
              <span class="number-item">
                03.
              </span>
              <span class="text-item">
                Proyectos
              </span>
            </a>
          </li>

          <li class="item-menu">
            <a href="#contact" class="url-section">
              <span class="number-item">
                04.
              </span>
              <span class="text-item">
                Contacto
              </span>
            </a>
          </li>
        </ul>
        <div class="container-button">
          <a href="https://wa.me/51929528840" target="_blank" class="btn btn-whatsapp">
            Escríbeme
          </a>
        </div>
      </div>
    </nav>
    <div class="menu-mobile" v-if="openMain">
      <div class="overflow-menu" @click="hideMain"></div>
      <div class="menu">
        <div class="div-close">
          <img @click="hideMain" class="img-close" src="~/assets/images/close.svg" />
        </div>
        <div class="container-menu">
          <ul class="list-menu">
            <li class="item-menu" @click="hideMain">
              <a href="#about" class="url-section">
                <span class="number-item">
                  01.
                </span>
                <span class="text-item">
                  Sobre mí
                </span>
              </a>
            </li>

            <li class="item-menu" @click="hideMain">
              <a href="#service" class="url-section">
                <span class="number-item">
                  02.
                </span>
                <span class="text-item">
                  Servicios
                </span>
              </a>
            </li>

            <li class="item-menu" @click="hideMain">
              <a href="#project" class="url-section">
                <span class="number-item">
                  03.
                </span>
                <span class="text-item">
                  Proyectos
                </span>
              </a>
            </li>

            <li class="item-menu" @click="hideMain">
              <a href="#contact" class="url-section">
                <span class="number-item">
                  04.
                </span>
                <span class="text-item">
                  Contacto
                </span>
              </a>
            </li>
          </ul>
          <div class="container-button">
            <a href="https://wa.me/51929528840" target="_blank" class="btn btn-whatsapp">
              Escríbeme
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        openMain: false
      };
    },
    methods: {
      showMain() {
        this.openMain = true;
        this.$emit('openMenu');
      },
      hideMain() {
        this.openMain = false;
      }
    }
  };
</script>
