<script lang="ts" >
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let G6: any;

  export let options = {};

  export let data = {};

  export let events = {};

  export let className = '';

  export let style = '';

  let wrapper: HTMLElement;
  let container: HTMLElement;
  let graph: any;
  let prevEvents = {};
  let prevData = {};
  let isDataEmpty: Boolean;


  $: isDataEmpty = !!data;

  function resizeGraph() {
    if (graph && container) {
      const width = Number(window.getComputedStyle(wrapper).width.replace('px', ''));
      const height = Number(window.getComputedStyle(wrapper).height.replace('px', ''));
      graph.changeSize(width, height);
      dispatch('graphChangeSize', `w: ${width}, h: ${height}`);
      const { fitView, fitViewPadding = [], } = options as any;
      if (fitView) {
        graph.fitView(fitViewPadding);
        dispatch('graphFitView');
      }
    }
  }

  onMount(() => {
    if (graph) {
      graph.destroy();
    }

    graph = new G6.Graph({
      ...options,
      container,
    });
    dispatch('graphCreated', graph);

    if (!isDataEmpty) {
      graph.data(data);
      graph.render();
      dispatch('graphRendered', graph);
    }

    return () => {
      graph.destroy();
      dispatch('graphDestroyed');
    };
	});


  $: {
    if (graph && (prevData !== data)) {
      graph.changeData(data);
      prevData = data;
    }
  }

  $: {
    if (graph) {
      Object.entries(prevEvents).forEach(([name, cb]) => {
        graph.off(name, cb);
      });
      Object.entries(events).forEach(([name, cb]) => {
        graph.on(name, cb);
      });
      prevEvents = events;
    }
  }

</script>

<div
  bind:this={wrapper}
  class="g6-wrapper"
  class:className
  {style}
  on:resize={resizeGraph}
>
  <div bind:this={container} class="g6-container"></div>
</div>

<style>
  .g6-container {
    height: 500px;
  }
</style>
