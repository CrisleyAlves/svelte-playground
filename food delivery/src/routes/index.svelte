<script>
  import Product from '../components/product.svelte';
  import { addProduct } from '../store/cart'
  import { mockedData } from '../store/data'

  const onClickAddButton = (product) => addProduct(product)
</script>

{#each mockedData as product}
  <Product
    onCLickButton={onClickAddButton}
    buttonStyleType="success"
    buttonValue="Add"
    product={product}
  />
{/each}
