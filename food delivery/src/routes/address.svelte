<script>
	import { goto } from '$app/navigation';

	import { cart } from '../store/cart'
	import { setDelivery } from '../store/delivery';

	import Button from '../components/button.svelte';
	import Product from '../components/product.svelte';

	let formValues = {
		zipCode: null,
		state: null,
		city: null,
		address: null,
		number: null
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		setDelivery(formValues);
		goto('/checkout');
	};
</script>

<div class="Delivery Container">
	{#each $cart as product}
		<Product product={product} />
	{/each}

	<form class="Form" on:submit={onSubmitForm}>
		<input
			required={true}
			class="Input"
			maxlength={5}
			name="zipCode"
			placeholder="Your zip code"
			bind:value={formValues.zipCode}
		/>
		<input
			required={true}
			class="Input"
			maxlength={20}
			name="state"
			placeholder="Full state"
			bind:value={formValues.state}
		/>
		<input
			required={true}
			class="Input"
			maxlength={20}
			name="city"
			placeholder="Full city"
			bind:value={formValues.city}
		/>
		<input
			required={true}
			class="Input"
			maxlength={20}
			name="address"
			placeholder="Full address"
			bind:value={formValues.address}
		/>
		<input
			required={true}
			class="Input"
			maxlength={10}
			name="number"
			placeholder="house/apt number"
			bind:value={formValues.number}
		/>
		<Button styleType="success" value="Continue" type="submit"/>
	</form>
</div>

<style>
	.Form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.Input {
		border: 1px solid var(--extra-light-gray);
		border-radius: 5px;
		background-color: transparent;
		color: var(--dark-gray);
		font-weight: bolder;
		padding: 10px;
		width: 100%;
	}
</style>
