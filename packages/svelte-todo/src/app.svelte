<script>
  import store from "store/store";

  let todos = store.getStoreTodos;
  store.subscribe(() => {
    todos = store.getStoreTodos;
  });
</script>

<style>
  .todos-list-container {
    margin-top: 10px;
    border: 1px solid orange;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    margin-right: 50px;
  }

  li {
    font-size: 20px;
    margin: 10px;
    width: fit-content;
  }

  li:hover {
    cursor: pointer;
    color: orange;
    transition: all 0.5s ease;
  }
</style>

<div class="todos-list-container">
  {#if todos.length}
    <ul>
      {#each todos as todo}
        <li><span>Todo-ID: {todo.id}</span> Todo-Value: {todo.label}</li>
      {/each}
    </ul>
  {:else}
    <p>No todo items</p>
  {/if}
</div>
