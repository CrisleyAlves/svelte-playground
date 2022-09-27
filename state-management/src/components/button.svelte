<script>
  export let value;
  export let styleType = '';
  export let type = 'button';
  export let onClick = () => {};

  const StyleTypes = {
    primary: 'Button--primary',
    secondary: 'Button--secondary',
    danger: 'Button--danger',
    dots: 'Button--dots',
    success: 'Button--success',
    clean: 'Button--clean',
    '': ''
  };
</script>

<button on:click={onClick} type={type} class={`Button ${StyleTypes[styleType]}`}>{value}</button>
