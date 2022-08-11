<script>
  export let onChangeInput = () => {};
  export let value = "";
  export let id = "";
  export let name = "";
  export let type = 'text';
  export let placeholder = '';
  export let required = false;
  export let maxCharacters = 20;
</script>

<div class="InputGroup">
  <input
    required={required}
    autocomplete="on"
    placeholder={placeholder}
    class="Input"
    type={type}
    on:change={onChangeInput}
    value={value}
    id={id}
    name={name}
    maxlength={maxCharacters}
  />
</div>

<style>
  .InputGroup {
    margin: 10px 0;
  }

  .Input {
    border: 1px solid var(--extra-light-gray);
    border-radius: 5px;
    background-color: transparent;
    color: var(--dark-gray);
    font-weight: bolder;
    padding: 10px;
  }
</style>