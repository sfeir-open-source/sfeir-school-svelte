<!-- .slide: class="with-code-bg-dark" -->

## L'affectation

### Cas particulier : les mutations

Pas OK

```javascript
function addPerson(person) {
	people.push(person);
}
```

OK

```javascript
function addPerson(person) {
	people.push(person);
	people = people;
}
```

ES6

<!-- .element: class="fragment" data-fragment-index="1"-->

```javascript
function addPerson(person) {
	people = [...people, person];
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->
