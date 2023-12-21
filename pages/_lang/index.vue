<template>
  <div class="wrapper home">
    <HomeTop :bg="home.data.hero_bg_image.url">
      <template #title>
        <prismic-rich-text :field="home.data.hero_title" />
      </template>
      <template #desc>
        <prismic-rich-text :field="home.data.hero_desc" />
      </template>
    </HomeTop>
    <HomeAbout>
      <template #title>
        <prismic-rich-text :field="home.data.nosotros_title" />
      </template>
      <template #body>
        <prismic-rich-text :field="home.data.nosotros_body" />
      </template>
      <template #img>
        <img
          class="full"
          :src="home.data.nosotros_image.url"
          :alt="home.data.nosotros_image.alt"
        />
      </template>
    </HomeAbout>
    <HomeCulture>
      <template #m-title>
        <prismic-rich-text :field="home.data.mision_title" />
      </template>
      <template #m-body>
        <prismic-rich-text :field="home.data.mision_body" />
      </template>
      <template #v-title>
        <prismic-rich-text :field="home.data.vision_title" />
      </template>
      <template #v-body>
        <prismic-rich-text :field="home.data.vision_body" />
      </template>
    </HomeCulture>
    <HomeWhat
      :group-one="home.data.group_one"
      :group-two="home.data.group_two"
      :title-one="$prismic.asText(home.data.group_one_title)"
      :title-two="$prismic.asText(home.data.group_two_title)"
    >
      <template #title>
        <prismic-rich-text :field="home.data.que_title" />
      </template>
      <template #body>
        <prismic-rich-text :field="home.data.que_body" />
      </template>
    </HomeWhat>
    <HomeHow>
      <template #title>
        <prismic-rich-text :field="home.data.como_title" />
      </template>
      <template #body>
        <prismic-rich-text :field="home.data.como_body" />
      </template>
      <template #img>
        <img
          class="full"
          :src="home.data.como_image.url"
          :alt="home.data.como_image.alt"
        />
      </template>
    </HomeHow>
    <HomeLinks
      id="productos"
      :invert="true"
      :links="home.data.productos_links"
      class="push-up"
    >
      <template #title>
        <prismic-rich-text :field="home.data.productos_title" />
      </template>
      <template #image>
        <img
          class="full"
          :src="home.data.productos_image.url"
          :alt="home.data.productos_image.alt"
        />
      </template>
    </HomeLinks>
    <HomeLinks id="servicios" :links="home.data.servicios_links">
      <template #title>
        <prismic-rich-text :field="home.data.servicios_title" />
      </template>
      <template #image>
        <img
          class="full"
          :src="home.data.servicios_image.url"
          :alt="home.data.servicios_image.alt"
        />
      </template>
    </HomeLinks>
    <!-- <HomeTeam :team="home.data.equipo_list">
      <template #title>
        <prismic-rich-text :field="home.data.equipo_title" />
      </template>
    </HomeTeam> -->
    <ContactForm
      :name-field="home.data.contact_name_field"
      :email-field="home.data.contact_email_field"
      :origin-field="home.data.contact_origen_field"
      :name-error="home.data.contact_name_error"
      :email-error-req="home.data.contact_email_error_required"
      :email-error-format="home.data.contact_email_error_format"
      :origin-error="home.data.contact_origen_error"
      :services-list="home.data.contact_services_list"
      :services-error="home.data.contact_services_error"
      :submit-label="home.data.contact_submit_label"
    >
      <template #title>
        <prismic-rich-text :field="home.data.contact_title" />
      </template>
      <template #step-one-label>
        <prismic-rich-text :field="home.data.contact_step_one_label" />
      </template>
      <template #step-one-title>
        <prismic-rich-text :field="home.data.contact_step_one_title" />
      </template>
      <template #step-two-label>
        <prismic-rich-text :field="home.data.contact_step_two_label" />
      </template>
      <template #step-two-title>
        <prismic-rich-text :field="home.data.contact_step_two_title" />
      </template>
      <template #success>
        {{ home.data.contact_message_success }}
      </template>
      <template #pending>
        {{ home.data.contact_message_sending }}
      </template>
      <template #user-error>
        {{ home.data.contact_message_user_error }}
      </template>
      <template #submit-error>
        {{ home.data.contact_message_submit_error }}
      </template>
    </ContactForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    try {
      const home = await $prismic.api.getSingle('homepage', {
        lang: params.lang,
      })
      return { home }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.home.data.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: this.home.data.meta_description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.home.data.meta_title,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: 'E3',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          itemprop: 'image',
          content: this.home.data.meta_thumbnail.url,
        },
      ],
    }
  },
  mounted() {
    // console.log(this.home)
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // }
    // const sections = document.querySelectorAll('.wrapper.home section')
    // // console.log(sections)
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       const navSection = document.querySelectorAll(
    //         `header a[href="/#${entry.target.id}`
    //       )
    //       if (entry.isIntersecting) {
    //         // alert(entry.target)
    //         navSection.classList.add('observer-active')
    //       } else {
    //         navSection.classList.remove('observer-active')
    //       }
    //     })
    //   },
    //   {
    //     rootMargin: '0px',
    //   }
    // )
    // sections.forEach((entry) => {
    //   observer.observe(entry)
    // })
  },
}
</script>
