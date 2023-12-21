<template>
  <section id="nosotros" class="home-about">
    <div class="sub-wrapper">
      <div class="home-about-info">
        <div class="home-about-title title-line green">
          <slot name="title">
            <h3>NOSOTROS</h3>
          </slot>
        </div>
        <div class="home-about-body">
          <slot name="body">
            <p>
              E-3 surge en 2014 con el firme propósito de contribuir al
              desarrollo económico del país teniendo como prioridades la
              eficiencia y conversión de energía, optimizar la productividad y
              el impacto en la sustentabilidad del planeta.
            </p>
            <p>
              Nuestro enfoque es proveer a los sectores de la Industria y
              Construcción, soluciones eficientes en el manejo y distribución de
              la energía, conversión de la misma, productividad y preservación
              del medio ambiente.
            </p>
          </slot>
        </div>
      </div>
      <div class="home-about-img">
        <slot name="img">
          <img class="full" src="~/assets/imgs/electrician-5.jpg" />
        </slot>
      </div>
    </div>
  </section>
</template>

<style>
.home-about {
  padding-top: 90px;
  padding-bottom: 60px;
  background: linear-gradient(180deg, var(--white) 70%, var(--light-grey) 70%);
}

.home-about .sub-wrapper {
  padding: 0;
}

.home-about-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px 70px;
}

.home-about-body {
  width: 100%;
  line-height: 1.5;
}

.home-about-body p {
  margin-bottom: 1em;
}

.home-about-img {
  width: 100%;
  height: 90vw;
}

@media (min-width: 600px) {
  .home-about-info {
    padding: 0 40px 70px;
  }

  .home-about-img {
    height: 60vw;
  }
}

@media (min-width: 1000px) {
  .home-about {
    background: linear-gradient(
      180deg,
      var(--white) 55%,
      var(--light-grey) 55%
    );
    padding-top: 150px;
    padding-bottom: 90px;
  }

  .home-about .sub-wrapper {
    padding: 50px;
    flex-direction: row;
    align-items: stretch;
  }

  .home-about-info {
    align-self: flex-start;
    flex-shrink: 0;
    z-index: 2;
    width: 50%;
    margin-top: 3em;
    margin-bottom: 80px;
    padding: 1.5em;
    border-radius: 15px;
    background-color: var(--white-60);
    backdrop-filter: blur(20px);
    will-change: filter;
    transform: translate3D(0, 0, 0);
    box-shadow: 0 20px 20px var(--navy-10);
  }

  .home-about-body {
    line-height: 1.5;
  }

  .home-about-body p {
    margin-bottom: 1em;
  }

  .home-about-img {
    width: auto;
    flex-grow: 1;
    margin-left: -15%;
    height: 100%;
    height: auto;
    max-height: 50vw;
    border-radius: 15px;
    overflow: hidden;
    line-height: 0;
  }
}
</style>
