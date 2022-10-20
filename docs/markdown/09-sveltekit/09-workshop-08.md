<!-- .slide: class="exercice small" -->

# Workshop 08

Amusez-vous avec SvelteKit ! 😀<br>

- Utilisez le router de SvelteKit pour créer deux pages : `list ` & `carousel`
    - plus d'indications dans la page existante `routes/+page.svelte`
    - dans le composant `PersonList`, implémentez le filtre

- Vous pouvez gérer les chargements des données côté serveur
    - un fichier `+page.ts` à côté de du fichier svelte vous permet d'executer des traitements seulement côté serveur

- Créez une route `person/{id}` pour afficher une seule personne (grâce à l'id de la route et au composant `PersonCard`)
    - n'oubliez pas d'utilisez le fichier serveur `+page.ts`
 