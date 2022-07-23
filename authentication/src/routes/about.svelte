<script>
  import { goto }  from '$app/navigation'
  import { removeUser, user } from '../store/user'
  
  import Button from '../components/button.svelte';

  const onClickLogout = () => {
    removeUser()
    goto('/')
  }
</script>

<div class="About">
  {#if $user.isAuthenticated}
    <h1>Authenticated :D</h1>
    <p>Your id: {$user.id}</p>
    <p>Your name: {$user.name}</p>
    <p>Your email: {$user.email}</p>

    <Button styleType="danger" value="Logout" onClick={onClickLogout} />
  {/if}
</div>

<style>
  .About {
    width: 500px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>