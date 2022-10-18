<!-- .slide: class="with-code-bg-dark two-column" -->

## Les mutations

Les mutations de tableau ou d'objet ne sont pas considérées comme assignation : <br /> <br/>
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

Version ES6

<!-- .element: class="fragment" data-fragment-index="1"-->

```javascript
function addPerson(person) {
	people = [...people, person];
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->
