<div {...$$restProps}/>

<style>
	div {
		border: 5px solid transparent;
		border-radius: 50%;
		border-top: 5px solid #485fc7;
		width: 40px;
		height: 40px;
		animation: spin .7s linear infinite;
    margin: auto;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
