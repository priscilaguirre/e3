<template>
  <section id="post-body">
    <div class="sub-wrapper">
      <div class="post-body-main">
        <slot name="body">
          <!-- <p>
            En <b>E3</b> tenemos como propósito la contribución al desarrollo
            económico del país, a través de soluciones eficientes en el manejo y
            distribución de la energía, conversión de energía, productividad y
            preservación del medio ambiente.
          </p>

          <img src="~/assets/imgs/engineer.jpg" />
          <p>
            20 años de experiencia nos respaldan a nivel profesional colaborando
            con distintas empresas transncionales en los sectores: Eléctrico,
            Energía y Automatización Industrial.
          </p>

          <h6>¿Qué ofrecemos? H6</h6>

          <p>
            Proveer a los sectores de la industria y construcción optimizando la
            productividad y eficiencia energética asegurando a nuestros clientes
            una relación costo/beneficio con un alto valor agregado.
          </p>

          <h3>Un subtitulo H3</h3>

          <p>
            Proveer a los sectores de la industria y construcción optimizando la
            productividad y eficiencia energética asegurando a nuestros clientes
            una relación costo/beneficio con un alto valor agregado.
          </p>

          <p>
            Proveer a los sectores de la industria y construcción optimizando la
            productividad y eficiencia energética asegurando a nuestros clientes
            una relación costo/beneficio con un alto valor agregado.
          </p> -->
        </slot>
      </div>
    </div>
  </section>
</template>

<style>
#post-body {
  padding-top: 25vw;
  padding-bottom: 50px;
}

#post-body .sub-wrapper {
  padding-top: 50px;
}

.post-body-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1em;
}

.post-body-main > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.post-body-main p {
  line-height: 1.5;
  margin-bottom: 1em;
}

.post-body-main a {
  text-decoration: underline;
  color: var(--green);
  font-weight: 500;
}

.post-body-main a:hover {
  color: var(--blue);
}

.post-body-main h6 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1em;
}

.post-body-main h3 {
  font-weight: 800;
  font-size: 32px;
  letter-spacing: 0.05em;
  position: relative;
  line-height: 1.2;
  padding-bottom: 0.5em;
  margin-top: 2em;
  margin-bottom: 1em;
}

.post-body-main h3:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0px;
  display: block;
  width: 100px;
  height: 5px;
  background-color: var(--green);
}

.post-body-main img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  margin: 1em 0 2em;
}

.post-body-main .block-img {
  text-align: center;
  align-self: center;
}

.post-body-main iframe {
  width: 100%;
  height: 100%;
  position: absolute;
}

.post-body-main div[data-oembed] {
  align-self: center;
  width: 100%;
  position: relative;
  padding-bottom: 56%;
  margin: 2em 0;
  border-radius: 15px;
  overflow: hidden;
}

@media (min-width: 600px) {
  .post-body-main img,
  .post-body-main div[data-oembed] {
    width: 80%;
    max-width: 80%;
  }

  .post-body-main div[data-oembed] {
    padding-bottom: 45%;
  }
}

@media (min-width: 1000px) {
  #post-body {
    padding-top: 17.5vw;
  }

  #post-body .sub-wrapper {
    padding-top: 70px;
  }

  .post-body-main {
    width: 65%;
    align-self: flex-end;
  }

  .post-body-main img,
  .post-body-main div[data-oembed] {
    width: 70%;
    max-width: 70%;
  }

  .post-body-main div[data-oembed] {
    padding-bottom: 40%;
  }
}
</style>
