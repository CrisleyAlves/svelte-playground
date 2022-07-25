<script>
  export let placeholder = '';
  export let name = '';
  export let id = '';
</script>

<textarea
  id={id}
  name={name}
  class="Textarea"
  placeholder={placeholder}
></textarea>

<style>
  .Textarea {
    border: 1px solid var(--extra-light-gray);
    font-weight: 500;
    width: 100%;
    height: 100px;
    padding: 5px;
    resize: none;
  }
</style>