<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import G6 from '@antv/g6';
	import G6Component from 'svelte-g6';

	const options = {
		container: 'mountNode',
		width: 800,
		height: 500,
		workerEnabled: false,
	};

	const data = {
		// 点集
		nodes: [
			{
				id: 'node1',
				x: 100,
				y: 200,
			},
			{
				id: 'node2',
				x: 300,
				y: 200,
			},
		],
		// 边集
		edges: [
			// 表示一条从 node1 节点连接到 node2 节点的边
			{
				source: 'node1',
				target: 'node2',
			},
		],
	};

</script>
<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<G6Component {G6} {options} {data} />