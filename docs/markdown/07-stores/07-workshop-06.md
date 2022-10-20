<!-- .slide: class="exercice small" -->

# Workshop 06

Store & svelte elements

- Créer deux stores dans `people.store.ts`:
    - `people` pour stocker les données des personnes
    - `isLoadingPeople` pour déduire si le tableau est en train de charger

- Changer `App.svelte` pour charger le store `people` à l'affichage

- Modifiez `ListPage` & `CarouselPage` pour consommer le store
    - Ces composants n'ont pas besoin de propriétés

- Utiliser le bon élément spécial de svelte pour gérer le `CurrentView`
