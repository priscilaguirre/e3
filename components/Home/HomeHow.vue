<template>
  <section id="como" class="home-how">
    <div class="sub-wrapper">
      <div class="home-how-info">
        <div class="home-how-title title-line blue">
          <slot name="title">
            <h3>¿CÓMO LO HACEMOS?</h3>
          </slot>
        </div>
        <div class="home-how-body">
          <slot name="body">
            <p>
              Visión y experiencia profesional de más de 20 años, soporte
              técnico-comercial y servicio post-venta local, contacto estrecho
              con los clientes, rápida respuesta y disponibilidad de inventario,
              identificación del mercado como proveedores de soluciones
              confiables de las marcas que representamos.
            </p>
          </slot>
        </div>
      </div>
      <div class="home-how-img">
        <slot name="img">
          <img class="full" src="~/assets/imgs/electrician-6.jpg" />
        </slot>
      </div>
    </div>
  </section>
</template>

<style>
.home-how {
  padding-top: 90px;
  background-color: var(--navy);
  color: var(--white);
}
.home-how .sub-wrapper {
  padding: 0;
}

.home-how-info {
  padding: 0 25px 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.home-how-body {
  width: 100%;
  line-height: 1.5;
}

.home-how-body p {
  margin-bottom: 1em;
}

.home-how-img {
  width: 100%;
  height: 90vw;
}

@media (min-width: 600px) {
  .home-how-info {
    padding: 0px 40px 70px;
  }

  .home-how-img {
    height: 55vw;
  }
}

@media (min-width: 1000px) {
  .home-how {
    padding-top: 120px;
    padding-bottom: 120px;
    background: linear-gradient(180deg, var(--navy) 70%, var(--white) 70%);
  }

  .home-how .sub-wrapper {
    padding-left: 50px;
    flex-direction: row;
    align-items: flex-start;
  }

  .home-how-info {
    flex-shrink: 0;
    width: 42%;
    min-width: 500px;
    padding: 0 2em 80px 0;
  }

  .home-how-img {
    margin-top: 130px;
    width: 58%;
    height: 40vw;
    border-radius: 15px 0 0 15px;
    overflow: hidden;
  }
}

@media (min-width: 1300px) {
  .home-how-body {
    font-size: 24px;
  }
}
</style>
