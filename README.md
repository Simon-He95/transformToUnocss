<p align="center">
<img height="200" src="./assets/kv.png" alt="to unocss">
</p>

This library is to convert css in vue to unocss. [unocss](https://github.com/unocss/unocss) can reuse styles better to reduce the packaging volume, which can be converted as a performance optimization method, and it can also make it easier for old projects to upgrade to unocss

# π¦ Install

```
  npm i -g transform-to-unocss
```

# π¦ cli

```
  ## command: tounocss + directory
  tounocss playground

  ## revoke: tounocss + directory + --revert
  tounocss payground --revert
```

# π vite

```
  import { vitePluginTransformToUnocss } from 'transform-to-unocss'
  plugins: [ vitePluginTransformToUnocss() ]
```

# β­ Feature

- support css in '.html' | '.tsx' | '.vue' | '.astro' | '.svelte' to unocss

## Before

![before](/assets/before.png)

## After

![after](/assets/after.png)

## :coffee:
[θ―·ζεδΈζ―εε‘](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)
