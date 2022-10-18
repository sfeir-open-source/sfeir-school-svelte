<!-- .slide: class="with-code-bg-dark" -->

## Le symbole "$"

En plus du DOM, Svelte permet de synchroniser les variables entre elles, grâce au "$"

```svelte
$: doubledCount = count * 2;
```

<br/>Fonctions réactives

<!-- .element: class="fragment" data-fragment-index="1"-->

```svelte
$: console.log('Count: ' + count);
```

<!-- .element: class="fragment" data-fragment-index="1"-->

```svelte
$: {
  if (count > 10) count = 0;
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->

Notes:

Livecoding pour présenter le rôle du "$" :

- Implémentation du compteur
- Ajout du "double" sans $
- Ajout du $
- Démo avec fonction réactive (ajouter un max au count)
