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
		'01-svelte-kezako/01-logo-rich-harris.md',
		'01-svelte-kezako/01-compiler.md',
		'01-svelte-kezako/01-dom-vs-virtual.md',
		'01-svelte-kezako/01-lets-go.md',
		'01-svelte-kezako/01-repl-link.md'
	];
}

function componentBaseSlides() {
	return [
		'02-component-base/02-TITLE.md',
		'02-component-base/02-component-file.md',
		'02-component-base/02-props-nested.md',
		'02-component-base/02-workshop-01.md',
    '02-component-base/02-slot-basic.md',
    '02-component-base/02-slot-named.md',
		'02-component-base/02-workshop-02.md'
	];
}

function componentMoreSlides() {
	return [
		'03-component-more/03-TITLE.md',
		'03-component-more/03-assignment.md',
		'03-component-more/03-mutation.md',
		'03-component-more/03-dollar.md',
		'03-component-more/03-event.md',
		'03-component-more/03-event-modifier.md',
		'03-component-more/03-event-component.md',
		'03-component-more/03-exercice.md'
	];
}

function storesSlides() {
	return ['04-stores/04-TITLE.md'];
}

function formSlides() {
	return ['05-form/05-TITLE.md'];
}

function svelteKitSlides() {
	return ['06-sveltekit/06-TITLE.md'];
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
	].map((slidePath) => {
		return { path: slidePath };
	});
}

SfeirThemeInitializer.init(formation);
