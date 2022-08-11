<script>
  import { goto }  from '$app/navigation'
	import Button from '../components/button.svelte';
	import Product from '../components/product.svelte';

	import { cart, removeProduct, getTotalPrice } from '../store/cart';

	let totalPrice = getTotalPrice();

	const onClickRemoveButton = (product) => {
		removeProduct(product);
	};

  const onClickContinue = () => goto('/address')

	$: $cart, totalPrice = getTotalPrice();
</script>

<div class="Cart Container">
  {#if $cart.length === 0}
    <h2 class="Message">No products added to the cart</h2>
  {:else}
    {#each $cart as product}
      <Product
        buttonStyleType="primary"
        buttonValue="remove"
        {product}
        onCLickButton={onClickRemoveButton}
      />
    {/each}

    <div class="CartTotal Container">
      <p class="CartTotalPrice u-strong">Total: ${totalPrice}</p>
      <Button styleType="success" value="Continue" onClick={onClickContinue} />
    </div>
  {/if}
</div>

<style>
	.Cart {
		width: auto;
	}

  .Message {
    text-align: center;
    padding-top: 35px;
  }

	.CartTotal {
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		justify-content: end;
		margin: 10px;
		width: auto;
	}

	.CartTotalPrice {
		margin-bottom: 10px;
	}

	@media (min-width: 415px) {
		.CartTotal {
			margin: 0 auto;
			width: 1000px;
		}
	}
</style>
