<script>
  import { goto }  from '$app/navigation'
  import { createAccount } from '../routes/api/authentication'
  import { setUser } from "../store/user";
  import { generateRandomNumber } from '../utils'
  
  import Button from "../components/button.svelte";
  import Input from "../components/input.svelte";
  import Loader from "../components/loader.svelte";

  let showLoader = false;

  const onSubmitForm = async (e) => {
    const id = generateRandomNumber()
    const name = e.target.elements['name'].value;
		const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;

    try {
      showLoader = true;
      await createAccount({ name, email, password })
      setUser(id, name, email)
      goto('/about')
    } catch (error) {
      console.error(error);
      showLoader = false;
    }
  }
</script>

<div class="Authentication">
  <form class="Form" on:submit|preventDefault={onSubmitForm}>
    <Input placeholder="Full name" type="text" name="name" id="name" required={true} />
    <Input placeholder="your email" type="email" name="email" id="email" required={true} />
    <Input placeholder="your password" type="password" name="password" id="password" required={true} />

    {#if showLoader}
      <Loader />
    {:else}
      <Button value="Login" styleType="primary" type="submit" />
    {/if}
  </form>
</div>

<style>
  .Authentication {
    width: 500px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Form {
    border: 1px solid var(--extra-light-gray);
    padding: 30px;
  }
</style>
