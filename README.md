# svelte-g6

A Svelte component for graph visualization framework @antv/g6

## Installation

```
yarn add svelte-g6
# or
npm install --save svelte-g6
```

## Usage

```
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

<G6Component {G6} {options} {data} />
```