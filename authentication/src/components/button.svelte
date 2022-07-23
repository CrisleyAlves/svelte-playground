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

<style>
  .Button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    padding: 10px 30px;
    position: relative;
  }

  .Button--primary {
    border: 1px solid var(--blue);
    background-color: var(--blue);
    color: #fff;
  }

  .Button--primary:hover {
    background-color: #fff;
    color: var(--blue);
  }

  .Button--secondary {
    border: 1px solid var(--blue);
    background-color: transparent;
    color: var(--blue);
  }

  .Button--secondary:hover {
    background-color: var(--blue);
    color: white;
  }

  .Button--danger {
    background-color: var(--red);
    border: 1px solid var(--red);
    color: #fff;
  }

  .Button--danger:hover {
    background-color: transparent;
    color: var(--red);
  }

  .Button--success {
    background-color: #376e37;
    color: white;
  }

  .Button--success:hover {
    background-color: white;
    border: 1px solid #376e37;
    color: #376e37;
  }
</style>
