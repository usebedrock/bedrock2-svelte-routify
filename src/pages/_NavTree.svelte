<script>
  import { layout, isActive, url, goto, page } from "@sveltech/routify";
  export let node = $layout;

  function prettyTitle(title) {
    title = title.replace(/\d+ +/, "");
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
  }

</script>

{#if !node.title.includes("styleguide")}
<ul class="br-bordered-list">
  {#each node.children as node}
    <li>
        <a href={$url(node.path)} class:active={$isActive(node.path)}>
          {prettyTitle(node.title)}
        </a>
    {#if node.children.length}
      <svelte:self {node} />
    {/if}
    </li>
  {/each}
</ul>
{/if}