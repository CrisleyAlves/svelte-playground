<script>
  import {
    todos,
    completeTodo,
    removeTodo
  } from '../../store/todos'

  import Button from '../../components/button.svelte';
</script>

<ul class="TodoList">
  {#each $todos as todo}
    <li class="TodoListItem">
      <div class="TodoListItemContent">
        <span class="Id">{todo.id}</span>
        <h2 class="Title">{todo.title}</h2>
        <p class="Description">{todo.description}</p>
      </div>
      <div class="TodoListActionsItem">
        {#if !todo.isCompleted }
          <Button type="button" styleType="danger" iconType="trash" onClick={() => removeTodo(todo.id)} />
          <Button type="button" styleType="success" iconType="check" onClick={() => completeTodo(todo.id)} />
        {:else}
          <Button type="button" styleType="disabled" iconType="check" />
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  .TodoList {
    justify-content: space-between;
    width: 400px;
    list-style: none;
  }

  .TodoListItem {
    border: 1px solid var(--extra-light-gray);
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    padding: 5px;
  }

  .TodoListItemContent {
    width: 70%;
    overflow: hidden;
  }

  .Id {
    font-size: 13px;
    color: var(--black);
  }

  .Title {
    color: var(--black);
    text-align: left;
    font-size: 17px;
    font-weight: 600;
  }

  .Description {
    font-size: 14px;
    font-weight: 500;
    color: var(--dark-gray);
  }

  .TodoListActionsItem {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 80px;
  }
</style>