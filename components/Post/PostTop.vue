<template>
  <section id="post-top" class="first-section">
    <div class="sub-wrapper">
      <div class="post-top-info">
        <div class="post-top-label">NOTICIAS</div>
        <div class="post-top-title">
          <slot name="title"><h1>Titulo del blog va aqui</h1></slot>
        </div>
        <div class="post-top-subtitle">
          <slot name="subtitle">
            <p>Subtítulo del blog, aquí va un pequeño texto sobre el tema.</p>
          </slot>
        </div>
      </div>
      <div class="post-top-img">
        <slot name="img">
          <img class="full" src="~/assets/imgs/city-network.jpg" />
        </slot>
      </div>
    </div>
  </section>
</template>

<style>
#post-top {
  background-color: var(--navy);
  color: var(--white);
}

#post-top .sub-wrapper {
  padding-top: 25px;
}

.post-top-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.post-top-label {
  font-size: 14px;
  font-weight: 800;
  color: var(--mid-grey);
  letter-spacing: 0.05em;
  margin-bottom: 1em;
}

.post-top-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

.post-top-subtitle {
  padding: 0 1em;
  margin-bottom: 1em;
}

#post-top p {
  line-height: 1.5;
  margin-bottom: 1em;
}

.post-top-img {
  width: 100%;
  height: 50vw;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: -25vw;
}

@media (min-width: 600px) {
  .post-top-label {
    font-size: 16px;
  }

  .post-top-title {
    font-size: 45px;
  }

  .post-top-subtitle {
    font-size: 1em;
  }
}

@media (min-width: 1000px) {
  #post-top .sub-wrapper {
    padding-top: 120px;
    flex-direction: row;
  }

  .post-top-info {
    width: 35%;
    min-width: 450px;
    flex-shrink: 0;
    padding-right: 50px;
    align-items: flex-start;
    text-align: left;
  }

  .post-top-img {
    align-self: flex-end;
    margin-top: 1em;
    width: 65%;
    height: 35vw;
    margin-bottom: -17.5vw;
  }

  .post-top-subtitle {
    padding: 0;
  }
}
</style>
