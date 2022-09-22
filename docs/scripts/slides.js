import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/00-speaker-romain.md',
    '00-school/00-speaker-antoine.md',
    '00-school/00-participant.md',
    '00-school/00-deroulement.md',
    '00-school/00-slides.md',
    '00-school/00-repository.md',
    '00-school/00-sfeir-people.md',
    '00-school/00-plan.md'
  ];
}

function svelteSlides() {
  return [
    '01-svelte-kezako/01-TITLE.md',
  ];
}

function componentBaseSlides() {
  return [
    '02-component-base/02-TITLE.md',
  ];
}

function componentMoreSlides() {
  return [
    '03-component-more/03-TITLE.md',
  ];
}

function storesSlides() {
  return [
    '04-stores/04-TITLE.md',
  ];
}

function formSlides() {
  return [
    '05-form/05-TITLE.md',
  ];
}

function svelteKitSlides() {
  return [
    '06-sveltekit/06-TITLE.md',
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...svelteSlides(), //
    ...componentBaseSlides(), //
    ...componentMoreSlides(), //
    ...storesSlides(), //
    ...formSlides(), //
    ...svelteKitSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
