<script setup lang="ts">
import { BContainer } from 'bootstrap-vue-next'

defineOptions({
  name: 'PressPage',
})

const pressLinks = [
  {
    year: 2026,
    articles: [
      {
        title:
          'Roll & Skate club Leuven vraagt structurele oplossing voor vervallen skeelerpiste in Kessel-Lo',
        source: 'VRT',
        url: 'https://www.vrt.be/vrtnws/nl/2026/05/28/kessel-lo-skeelerpiste-roll-skate-bart-swings-piste-versleten-tr/',
      },
      {
        title:
          'Rolschaatsclub vraagt structurele oplossing voor versleten piste in Kessel-Lo: "Afbraak aan topsport binnen skeeleren"',
        source: 'ROBtv',
        url: 'https://www.robtv.be/nieuws/rolschaatsclub-vraagt-structurele-oplossing-voor-versleten-piste-in-kessel-lo-afbraak-aan-topsport-binnen-skeeleren-211085',
      },
      {
        title:
          'Bart Swings trekt mee aan alarmbel: "Zonder piste sterft een topsporttraditie in Leuven"',
        source: 'Leuven Actueel',
        url: 'https://www.leuvenactueel.be/sport/sport/54589/bart-swings-trekt-mee-aan-alarmbel-zonder-piste-sterft-een-to',
      },
      {
        title:
          'Skeelerclub vraagt structurele oplossing nadat vervallen piste weer werd afgesloten: We verliezen een generatie topsporters door politieke onwil',
        source: 'Nieuwsblad',
        url: 'https://www.nieuwsblad.be/regio/vlaams-brabant/oost-brabant/leuven/skeelerclub-vraagt-structurele-oplossing-nadat-vervallen-piste-weer-werd-afgesloten-we-verliezen-een-generatie-topsporters-door-politieke-onwil/153744733.html',
      },
    ],
  },
  {
    year: 2024,
    articles: [
      {
        title:
          'Barsten in skeelerpiste in Kessel-Lo hersteld met snelbeton, rolschaatsclub Roll & Skate kan trainingen voorlopig hervatten',
        source: 'ROBtv',
        url: 'https://www.robtv.be/nieuws/barsten-in-skeelerpiste-in-kessel-lo-hersteld-met-snelbeton-rolschaatsclub-roll-skate-kan-trainingen-voorlopig-hervatten-192158',
      },
      {
        title:
          'Skeelerpiste in Kessel-Lo voorlopig dicht omdat ze te onveilig is: "Bart Swings en Jason Suttels moeten nu uitwijken naar andere pistes"',
        source: 'VRT',
        url: 'https://www.vrt.be/vrtnws/nl/2024/07/02/skeerlerpiste-in-kessel-lo-voorlopig-dicht-omdat-ze-te-onveilig/',
      },
    ],
  },
  {
    year: 2022,
    articles: [
      {
        title: 'Skeelerpiste in Provinciedomein Kessel-Lo komt er niet, zo beslist provincie',
        source: 'Leuven Actueel',
        url: 'https://www.leuvenactueel.be/nieuws/nieuws/22229/skeelerpiste-in-provinciedomein-kessel-lo-komt-er-niet-zo-beslist-provincie',
      },
      {
        title:
          'Nieuwe skeelerpiste op provinciaal domein geweigerd tot wanhoop van de club: Nu moeten onze leden soms op de openbare weg oefenen',
        source: 'Nieuwsblad',
        url: 'https://www.nieuwsblad.be/regio/vlaams-brabant/oost-brabant/leuven/nieuwe-skeelerpiste-op-provinciaal-domein-geweigerd-tot-wanhoop-van-de-club-nu-moeten-onze-leden-soms-op-de-openbare-weg-oefenen/56583881.html',
      },
      {
        title:
          'Jeugdclub van Bart Swings krijgt toch geen vernieuwde piste: "Trainen voor wedstrijden kan amper"',
        source: 'VRT',
        url: 'https://www.vrt.be/vrtnws/nl/2022/02/20/jeugdclub-van-bart-swings-krijgt-toch-geen-vernieuwde-piste-tr/',
      },
      {
        title:
          'Er komt geen nieuwe rolschaatspiste in het provinciaal domein in Kessel-Lo: "We blijven knoeien en prullen op deze manier"',
        source: 'ROBtv',
        url: 'https://www.robtv.be/nieuws/er-komt-geen-nieuwe-rolschaatspiste-in-het-provinciaal-domein-in-kessel-lo-we-blijven-knoeien-en-prullen-op-deze-manier-134571',
      },
    ],
  },
  {
    year: 2019,
    articles: [
      {
        title: 'Rolschaatspiste in provinciaal domein Kessel-Lo opnieuw open na renovatiewerken',
        source: 'ROBtv',
        url: 'https://www.robtv.be/nieuws/rolschaatspiste-in-provinciaal-domein-kessel-lo-opnieuw-open-na-renovatiewerken-83855',
      },
      {
        title: 'Rolschaatspiste domein Kessel-Lo terug open',
        source: 'Leuven Actueel',
        url: 'https://www.leuvenactueel.be/nieuws/nieuws/16453/rolschaatspiste-domein-kessel-lo-terug-open',
      },
      {
        title: 'Swings over boomstammen: "Provincie wil niet dat we trainen op gevaarlijke piste"',
        source: 'Sporza',
        url: 'https://sporza.be/nl/2019/05/15/bart-swings-kan-niet-rainen-voor-wk-skeeleren-door-bomen-op-baan/',
      },
      {
        title:
          'Bart Swings niet te spreken over sluiting rolschaatspiste Kessel-Lo: "Nu hebben we niks om op te trainen"',
        source: 'ROBtv',
        url: 'https://www.robtv.be/nieuws/bart-swings-niet-te-spreken-over-sluiting-rolschaatspiste-kessel-lo-nu-hebben-we-niks-om-op-te-trainen-78448',
      },
    ],
  },
  {
    year: 2013,
    articles: [
      {
        title: 'Rolschaatspiste Kessel-Lo krijgt opknapbeurt',
        source: 'Nieuwsblad',
        url: 'https://www.nieuwsblad.be/cnt/dmf20130212_00467122',
      },
    ],
  },
]
</script>

<template>
  <BContainer class="py-5">
    <h1 class="fw-bold mb-4">{{ $t('press') }}</h1>

    <div v-for="yearGroup in pressLinks" :key="yearGroup.year" class="press-year mb-5">
      <h2 class="press-year-title">{{ yearGroup.year }}</h2>
      <ul class="press-list list-unstyled">
        <li v-for="article in yearGroup.articles" :key="article.url">
          <a :href="article.url" target="_blank" rel="noopener noreferrer"
            >{{ article.title }} ({{ article.source }})</a
          >
        </li>
      </ul>
    </div>
  </BContainer>
</template>

<style scoped>
.press-year-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e30713;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ffcc01;
}

.press-list li {
  margin-bottom: 0.75rem;
}

.press-list a {
  color: #1d1d1b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
}

.press-list a:hover {
  color: #e30713;
  text-decoration: underline;
}
</style>
