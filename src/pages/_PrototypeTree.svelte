<script>
  import NavTree from './_NavTree.svelte';
  
  let visible = true;
  
  function toggleVisibility() {
    visible = !visible;
  }


  let trigger = '§';
  function handleKeydown(e) {
    if (e.key == trigger) {
      visible = !visible;
    }
  }

</script>

<svelte:window on:keydown={handleKeydown}/>

{#if visible}
<div class="br-prototype-wrapper__nav">
  <div class="u-m-2">
    <div class="c-content">
      <p><button class="c-button c-button--secondary" on:click={toggleVisibility}>Close page tree</button></p>
      <h4 class="c-h6">Page index</h4>
      <p>Press § to show the page index.</p>
      <p>View the <a href="/styleguide">style guide</a>.</p>
    </div>
    <NavTree />
  </div>
</div>
{/if}

