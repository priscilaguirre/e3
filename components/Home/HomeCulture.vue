<template>
  <section id="cultura" class="home-culture">
    <div class="sub-wrapper">
      <div class="culture-card-wrap">
        <div class="culture-card">
          <div class="c-card-icon icon">
            <SVGLightStrike />
          </div>
          <div class="c-card-title">
            <slot name="m-title">
              <h6>MISIÓN</h6>
            </slot>
          </div>
          <div class="c-card-desc">
            <slot name="m-body">
              <p>
                Proveer soluciones eficientes en el manejo y conversión de
                energía así como de impacto en beneficio del medio ambiente a
                los sectores de la Industria y Construcción.
              </p>
            </slot>
          </div>
        </div>
      </div>
      <div class="culture-card-wrap">
        <div class="culture-card">
          <div class="c-card-icon icon">
            <SVGWorld />
          </div>
          <div class="c-card-title">
            <slot name="v-title">
              <h6>VISIÓN</h6>
            </slot>
          </div>
          <div class="c-card-desc">
            <slot name="v-body">
              <p>
                Contribuir al desarrollo económico del país, a través de
                soluciones eficientes en el manejo y conversión de la energía,
                optimización de la productividad, buscando siempre un impacto en
                beneficio de la sustentabilidad del planeta.
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.home-culture {
  padding-top: 50px;
  padding-bottom: 60px;
  background-color: var(--light-grey);
}

.culture-card-wrap {
  width: 100%;
}

.culture-card {
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  color: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3em 1.5em;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1.5em;
}

.culture-card:hover {
  background-color: var(--green);
}

.c-card-icon {
  width: 30vw;
  height: 30vw;
  margin-bottom: 1.5em;
}

.c-card-title {
  font-weight: 800;
  font-size: 24px;
  padding: 0 1.5em 0.5em;
  line-height: 1;
  letter-spacing: 0.15em;
  position: relative;
  margin-bottom: 1em;
}

.c-card-title:after {
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--blue);
  height: 5px;
}

.c-card-desc {
  font-size: 14px;
  font-weight: 500;
}

@media (min-width: 600px) {
  .home-culture {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .home-culture .sub-wrapper {
    flex-direction: row;
    align-items: stretch;
  }

  .culture-card-wrap {
    width: 50%;
    padding: 0 0.75em;
  }

  .c-card-icon {
    width: 20vw;
    height: 20vw;
  }
}

@media (min-width: 600px) {
  .culture-card {
    padding: 3em;
  }

  .c-card-icon {
    width: 15vw;
    height: 15vw;
    margin-bottom: 2.5em;
  }

  .c-card-title {
    font-size: 32px;
  }

  .c-card-desc {
    font-size: 1em;
  }
}
</style>
