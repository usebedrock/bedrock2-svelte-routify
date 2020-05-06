<script>
  import { layout, isActive, url, goto, page } from "@sveltech/routify";
  export let node = $layout;

  function prettyTitle(title) {
    title = title.replace(/\d+ +/, "");
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
  }

</script>

<div class="br-styleguide-columns">
  <div class="br-styleguide-columns__column">
    <div class="u-m-2">
      <nav>
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
      </nav>
    </div>
  </div>
  <div class="br-styleguide-columns__column">
    <div class="u-m-2">
      <div class="c-content">
          <slot />
      </div>
    </div>
  </div>
</div>

