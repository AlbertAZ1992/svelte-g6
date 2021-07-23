# svelte-g6

A Svelte component for [@antv/g6](https://github.com/antvis/g6)

Inspired by [g6-in-react](https://github.com/baizn/g6-in-react)

[![minified + gzip](https://badgen.net/bundlephobia/minzip/svelte-g6)](https://bundlephobia.com/result?p=svelte-g6)
[![tree-shakeable](https://badgen.net/bundlephobia/tree-shaking/svelte-g6)](https://bundlephobia.com/result?p=svelte-g6)
[![no dependencies](https://badgen.net/bundlephobia/dependency-count/svelte-g6)](https://bundlephobia.com/result?p=svelte-g6)


<div>
  <img height="32" src="https://gw.alipayobjects.com/zos/antfincdn/zS1wZZJVcJ/G6%252520tukeshihuayinqing.svg">
  <img height="40" src="https://www.sveltejs.cn/svelte-logo-horizontal.svg">
</div>

## Installation

```
yarn add svelte-g6
# or
npm install --save svelte-g6
```

## Usage

```html
<!-- App.svelte -->
<script lang="ts">
  import G6 from '@antv/g6';
  import G6Component from 'svelte-g6';
  const options = {
    container: 'mountNode',
    width: 400,
    height: 400,
    workerEnabled: false,
  };
  const data = {
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
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
    ],
  };
</script>
<G6Component {G6} {options} {data} />
```



[![Edit compassionate-lalande-5lxm7](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cocky-dust-xz09t?file=/App.svelte)
