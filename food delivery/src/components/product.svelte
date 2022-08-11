<script>
  import Food from '../images/food.jpg'
  import Button from './button.svelte';

  export let onCLickButton = () => {};
  export let product = {};
  
  export let buttonValue = '';
  export let buttonStyleType = '';
</script>

<div class="ProductList Container">
  <div class="Product">
    <img class="ProductImage" src={Food} alt="Product">
    <div class="ProductContent">
      <h2 class="ProductTitle">{product.title}</h2>
      <p class="ProductDescription">{product.description}</p>
      <span class="ProductPrice u-strong">$ {product.price.toFixed(2)}</span>
    </div>
    {#if buttonValue != ''}
      <Button
        value={buttonValue}
        styleType={buttonStyleType}
        onClick={() => onCLickButton(product)}
      />
    {/if}
  </div>
</div>

<style>
  .ProductList {
    margin: 10px;
    width: auto;
  }

  .Product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e6e6e6;
    padding: 10px;
    width: 100%;
    margin:15px 0;
  }

  .ProductImage {
    width: 100px;
  }

  .ProductContent {
    font-size: 12px;
    width: 75%;
    padding: 0 15px;
  }

  .ProductPrice {
    color: green;
    font-size: 15px;
  }

  .ProductTitle {
    color: var(--secondary);
    font-weight: 600;
  }

  .ProductDescription {
    font-size: 12px;
    font-weight: 400;
  }

  @media (min-width: 415px) {
    .ProductList {
      margin: 0 auto;
      width: 1000px;
    }

    .ProductDescription {
      font-size: 15px;
    } 
  }
</style>