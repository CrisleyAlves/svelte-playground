<!--
    this layout will always be loaded before rendering the page.
-->

<script>
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { goto }  from '$app/navigation'
  import '../app.css'

  import { user } from '../store/user'

  const checkAuthentication = () => {
    
    if(!$user.isAuthenticated && $page.routeId === 'about') {
      goto('/')
      return;
    }

    if($user.isAuthenticated && $page.routeId === '') {
      goto('/about')
    }
  }

  onMount(checkAuthentication)

</script>

<!--
  Since this layout will always be loaded, this slot is similar props.children -- which in this case will be the page
-->
<slot />