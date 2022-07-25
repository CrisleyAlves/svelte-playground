<script>
  import { addTodo } from '../../store/todos';

  import Input from '../../components/input.svelte';
  import Button from '../../components/button.svelte';
  import Textarea from '../../components/textarea.svelte';

  const onSubmitForm = (e) => {
    const title = e.target.elements['title'].value;
    const description = e.target.elements['description'].value;
    addTodo(title, description);
    resetForm(e);
  }

  const resetForm = (e) => {
    e.target.elements['title'].value = '';
    e.target.elements['description'].value = '';
  }

</script>

<form class="Form" on:submit|preventDefault={onSubmitForm}>
  <Input name="title" id="title" placeholder="Title" required={true} />
  <Textarea id="description" name="description" placeholder="Description" />
  <div class="FormActions">
    <Button value="Add" type="submit" styleType="primary" />
  </div>
</form>

<style>
  .Form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
  }

  .FormActions {
    display: flex;
    margin-top: 5px;
    width: 100%;
  }
</style>
