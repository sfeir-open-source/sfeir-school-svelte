<!-- .slide: class="with-code-bg-dark two-column" -->

## Le symbole "$"

Pas OK

```svelte
let count = 0; 
let doubledCount = count * 2;
```

Variables réactives

```svelte
let count = 0;
$: doubledCount = count * 2;
```

##--##

Fonctions réactives

<!-- .element: class="fragment" data-fragment-index="1" style="margin-top: 200px;"-->

```svelte
$: console.log('Count: ' + count);
```

<!-- .element: class="fragment" data-fragment-index="1" -->

```svelte
$: if (count > 10) count = 0;
```

<!-- .element: class="fragment" data-fragment-index="1"-->

```svelte
$: {
  if (count > 10) count = 0;
  console.log('Count: ' + count);
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->

Notes:

Livecoding pour présenter le rôle du "$" :

- Implémentation du compteur
- Ajout du "double" sans $
- Ajout du $
- Démo avec fonction réactive (ajouter un max au count)
