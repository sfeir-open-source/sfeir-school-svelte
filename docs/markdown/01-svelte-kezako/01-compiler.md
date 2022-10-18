<!-- .slide: class="with-code-bg-dark two-column"  -->

## Le fameux compilateur

<p>On écrit du Svelte</p>

```svelte
<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>

<style>
	h1 {
		color: red;
	}
</style>
```

<br>

[REPL Hello Wold](https://svelte.dev/repl/hello-world)

##--##

<p>On déploie du javascript !</p>

```javascript
function add_css(target) {
	append_styles(target, "svelte-bt9zrl", "h1.svelte-bt9zrl{color:red}");
}
function create_fragment(ctx) {
	let h1;
	return {
		c() {
			h1 = element("h1");
			h1.textContent = `Hello ${name}!`;
		}
    // ...
	};
}
let name = 'world';
class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, /*...*/, add_css);
	}
}
```

<style>
  .code-wrapper > code {
    max-height: initial !important;
  }
</style>

