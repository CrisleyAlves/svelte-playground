<script>
  import { goto }  from '$app/navigation'

  import { getNumberOfProducts, cart } from '../store/cart'
  import Logo from '../images/logo.png'

  let numberOfProducts = getNumberOfProducts();

  $: $cart, numberOfProducts = getNumberOfProducts();

  const onClickCart = () => goto('/cart')

  const onClickLogo = () => goto('/')
</script>

<div class="NavbarWrapper">
  <div class="Navbar Container">
    <img class="Logo" src={Logo} alt="Logo" title="Logo" on:click={onClickLogo} />
    <div class="User">
      <h3 class="UserName">Olá, <span class="u-strong">Carol</span></h3>

      <div class="Cart">
        <i class="fa-solid fa-cart-arrow-down" on:click={onClickCart} >
          {#if numberOfProducts > 0}
            <i class="CartStatus"></i>
          {/if}
        </i>
      </div>
    </div>
  </div>
</div>

<style>
  .NavbarWrapper {
    background-color: #e6e6e6;
    padding: 5px 0;
  }

  .Navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Logo {
    width: 70px;
  }

  .User {
    display: flex;
    align-items: center;
  }

  .UserName, .Cart {
    font-size: 15px;
  }

  .Cart {
    color: black;
    font-size: 15px;
    margin-left: 15px;
    position: relative;
  }

  .CartStatus {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: var(--yellow);
    top: -3px;
    left: 15px;
  }
</style>