<template>
  <section id="contacto" class="contact-sect">
    <div class="sub-wrapper">
      <div class="contact-title title-line blue">
        <slot name="title"><h3>CONTACTO</h3></slot>
      </div>
      <form
        id="the-contact-form"
        ref="contactForm"
        @submit.prevent="formSubmit"
      >
        <div class="form-step one">
          <div class="form-step-label">
            <slot name="step-one-label">PASO 1 </slot>
          </div>
          <div class="form-step-title">
            <slot name="step-one-title">
              Selecciona el o los servicios que te interesan
            </slot>
          </div>
          <input type="hidden" name="services" />
          <div
            class="form-group checkbox"
            :class="{ error: $v.servicios.$error }"
          >
            <div
              v-for="(item, i) in servicesList"
              :key="`service-${i}`"
              class="check-wrap"
            >
              <input
                :id="`servicio-${i}`"
                v-model="servicios"
                type="checkbox"
                :name="`servicio${i}`"
                :value="item.title"
              />
              <label :for="`servicio-${i}`">{{ item.title }}</label>
            </div>
            <transition name="error">
              <div
                v-if="!$v.servicios.required && $v.servicios.$error"
                class="cf-error"
              >
                {{ servicesError }}
              </div>
            </transition>
          </div>
        </div>
        <div class="form-step two">
          <div class="form-step-label">
            <slot name="step-two-label">PASO 2</slot>
          </div>
          <div class="form-step-title">
            <slot name="step-two-title">Llena tus datos </slot>
          </div>
          <div class="form-group" :class="{ error: $v.nombre.$error }">
            <input
              id="nombre"
              v-model.trim.lazy="$v.nombre.$model"
              type="text"
              name="nombre"
              class="field"
              :placeholder="nameField"
            />
            <transition name="error">
              <div
                v-if="!$v.nombre.required && $v.nombre.$error"
                class="cf-error"
              >
                {{ nameError }}
              </div>
            </transition>
          </div>
          <div class="form-group" :class="{ error: $v.email.$error }">
            <input
              id="email"
              v-model.trim.lazy="$v.email.$model"
              type="email"
              name="email"
              class="field"
              :placeholder="emailField"
            />
            <transition name="error">
              <div
                v-if="!$v.email.required && $v.email.$error"
                class="cf-error"
              >
                {{ emailErrorReq }}
              </div>
            </transition>
            <transition name="error">
              <div v-if="!$v.email.email && $v.email.$error" class="cf-error">
                {{ emailErrorFormat }}
              </div>
            </transition>
          </div>
          <div class="form-group" :class="{ error: $v.origen.$error }">
            <input
              v-model.trim="$v.origen.$model"
              type="text"
              name="origen"
              class="field"
              :placeholder="originField"
            />
            <transition name="error">
              <div
                v-if="!$v.origen.required && $v.origen.$error"
                class="cf-error"
              >
                {{ originError }}
              </div>
            </transition>
          </div>
          <div class="submit-group">
            <input
              type="submit"
              :value="submitLabel"
              :disabled="submitStatus === 'PENDING'"
            />
            <transition name="error">
              <div v-if="submitStatus === 'OK'" class="cf-error">
                <slot name="success"> ¡Gracias por contactarnos! </slot>
              </div>
            </transition>
            <transition name="error">
              <div v-if="submitStatus === 'ERROR'" class="cf-error">
                <slot name="user-error"> Por favor completa la forma. </slot>
              </div>
            </transition>
            <transition name="error">
              <div v-if="submitStatus === 'PENDING'" class="cf-error">
                <slot name="pending"> Enviando... </slot>
              </div>
            </transition>
            <transition name="error">
              <div v-if="submitStatus === 'SUBMIT_ERROR'" class="cf-error">
                <slot name="submit-error">
                  Ha ocurrido un error. Intente de nuevo.
                </slot>
              </div>
            </transition>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'
import { required, email } from 'vuelidate/lib/validators'

export default {
  props: {
    nameField: {
      type: String,
      default: 'Nombre completo',
    },
    emailField: {
      type: String,
      default: 'E-mail',
    },
    originField: {
      type: String,
      default: '¿Cómo te enteraste de nosotros?',
    },
    nameError: {
      type: String,
      default: '* Tu nombre es requerido.',
    },
    emailErrorReq: {
      type: String,
      default: '* Tu e-mail es requerido.',
    },
    emailErrorFormat: {
      type: String,
      default:
        '* Por favor ingresa un correo válido (como nombre@dominio.com).',
    },
    originError: {
      type: String,
      default: '* Este campo es requerido.',
    },
    servicesList: {
      type: Array,
      default: () => [],
    },
    servicesError: {
      type: String,
      default: '* Selecciona por lo menos una.',
    },
    submitLabel: {
      type: String,
      default: 'Enviar',
    },
  },
  data() {
    return {
      nombre: '',
      email: '',
      origen: '',
      servicios: [],
      submitStatus: null,
    }
  },
  validations: {
    nombre: {
      required,
    },
    email: {
      required,
      email,
    },
    origen: {
      required,
    },
    servicios: {
      required,
    },
  },
  methods: {
    formSubmit(e) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        this.$refs.contactForm.services.value = this.servicios
        emailjs
          .sendForm(
            'test_contact',
            'e3_contact_form',
            e.target,
            'user_OJmJtjbfdEcCp59NbhLvK'
          )
          .then(
            (result) => {
              this.submitStatus = 'OK'
              console.log('SUCCESS!', result.status, result.text)
            },
            (error) => {
              this.submitStatus = 'SUBMIT_ERROR'
              console.log('FAILED...', error)
            }
          )
      }
    },
  },
}
</script>

<style>
.contact-sect {
  color: var(--white);
  background-color: var(--green);
  padding-top: 80px;
  padding-bottom: 80px;
}

#the-contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--white);
}

.form-step {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.form-step-label {
  font-weight: 700;
  color: var(--white-60);
  letter-spacing: 0.1em;
  font-size: 14px;
}

.form-step-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1em;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5em;
}

.form-group.error {
  animation: shake 0.5s ease-in-out;
}

.cf-error {
  display: block;
  width: 100%;
  transition: all 0.5s ease;
  font-size: 14px;
  margin: 0.5em 0 1em;
  font-weight: 400;
  color: var(--blue);
  animation: shake 0.5s ease-in-out;
}

.error .field {
  border-color: var(--blue);
}

.field,
input.field {
  border-bottom: 1px solid var(--white-60);
  padding: 0.3em 0.3em 0.5em;
  width: 100%;
  transition: all 0.5s ease;
  font-weight: 400;
}

.field:focus {
  border-bottom: 1px solid var(--white);
}

.field::placeholder {
  opacity: 1;
  color: var(--white-60);
}

.field::-moz-placeholder {
  font-weight: 300;
  opacity: 1;
  color: var(--white-60);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  font-family: 'Poppins', 'Helvetica Neue', sans-serif !important;
  font-weight: 500 !important;
  -webkit-text-fill-color: var(--white) !important;
  box-shadow: 0 0 0px 1000px var(--green) inset !important;
  -webkit-box-shadow: 0 0 0px 1000px var(--green) inset !important;
  transition: background-color 5000s ease-in-out 0s !important;
}

input:autofill,
input:autofill:hover,
input:autofill:focus {
  background-image: none !important;
  background-color: var(--green) !important;
  color: var(--white) !important;
}

/* checkboxes */

.check-wrap {
  margin-bottom: 0.8em;
  padding-left: 0.3em;
  color: var(--white-60);
  transition: all 0.5s ease;
  font-weight: 500;
}

.check-wrap input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
}

.check-wrap label {
  display: flex;
  align-items: flex-start;

  cursor: pointer;
  line-height: 1.2;
}

.check-wrap label:before {
  content: '';
  display: block;
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  margin-top: 0.1em;
  flex-shrink: 0;
  border-radius: 100%;
  border: 2px solid;
  transition: background-color 0.5s ease;
  cursor: pointer;
}

.error .check-wrap label:before {
  border-color: var(--blue);
}

.check-wrap input:checked + label:before {
  background-color: var(--white);
}

.check-wrap input:checked ~ label {
  color: var(--white);
}

.check-wrap:hover {
  color: var(--white);
}

/* submit */

.submit-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit-group .cf-error {
  margin: 0;
  font-weight: 500;
  align-self: center;
  color: inherit;
}

input[type='submit'] {
  width: auto;
  padding: 0.8em 1.5em;
  font-weight: 700;
  letter-spacing: 0.1em;
  background-color: var(--blue);
  margin-right: 1em;
}

input[type='submit']:hover {
  background-color: var(--teal);
}

input[type='submit']:disabled {
  opacity: 0.5;
}

@media (min-width: 600px) {
  .form-step-label {
    font-size: 16px;
  }

  .form-step-title {
    font-size: 30px;
  }

  .form-group.checkbox {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .check-wrap {
    width: 50%;
    padding: 0 0.5em;
  }
}

@media (min-width: 1000px) {
  #the-contact-form {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .form-step.one {
    width: 60%;
    height: auto;
    padding-right: 70px;
  }

  .form-step.two {
    width: 40%;
  }
}

/* transitions / animations */

.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}

.error-enter,
.error-leave-to {
  opacity: 0;
  transform: translateX(-1em);
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(0.25em);
  }
  40%,
  80% {
    transform: translateX(-0.25em);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
