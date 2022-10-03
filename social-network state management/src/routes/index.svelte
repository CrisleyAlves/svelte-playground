<script>
	import { userStore } from '../state/reducers/authReducer';
	import { authenticate, logout } from '../state/actions/authActions'
	import Button from '../components/button.svelte';

	$:userStore, console.log($userStore)
</script>

{#if $userStore.user}
	<h1>{$userStore.user?.firstName}</h1>
	<Button value="logout" onClick={logout} />
{/if}

{#if $userStore.isLoading}
	<h1>loading...</h1>
{/if}

{#if $userStore.mainError}
	<h1>error: {$userStore.mainError}</h1>
{/if}

{#if !$userStore.isLoading && !$userStore.user}
	<Button value="authenticate" onClick={authenticate} />
{/if}


