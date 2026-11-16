# makefun-ai-excited-01

[![entry](https://img.shields.io/badge/entry-ai--excited--01-6f42c1)](https://github.com/ricoAf13/makefun-ai-excited-01)
[![make.fun](https://img.shields.io/badge/make.fun-ai--excited--01-ff69b4)](https://make.fun)
[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

## Celestial Leviathan Breaks the Porcelain Sea

A celestial leviathan erupts through a shattered porcelain sea — cracked
glaze spreading like tectonic plates, luminous arcs of light bending around
its body, and shards suspended mid-shatter. The piece plays on the tension
between something impossibly vast and the fragile, ceramic stillness it
destroys.

The artwork ships as `entry.png` and is copied to the build output by
`main.ts`.

## Run

Requires Node.js 18+.

```sh
node --experimental-strip-types main.ts
```

Or with a TypeScript runner such as `tsx`:

```sh
npx tsx main.ts
```

The script copies `entry.png` into the output directory:

- `MAKEFUN_OUTPUT_DIR` — target directory (defaults to `/output`)
- Output file: `<MAKEFUN_OUTPUT_DIR>/entry.png`

```powershell
$env:MAKEFUN_OUTPUT_DIR = "$PWD\dist"; node --experimental-strip-types main.ts
```

## License

MIT
