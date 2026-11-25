# Famous Last Words: The Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![Rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Zallan03/famous-last-words-epitaph/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![Reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Zallan03/famous-last-words-epitaph/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for the [Famous Last Words: The Funniest Epitaph bounty](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) on make.fun.

One line of famous last words, carved in stone:

> I left my body to science. Science left it on read.

## How it works

`main.ts` (Node 22, standard library only) writes the entry text to
`/output/entry.txt` — 51 characters, one line, no trailing newline — and
fails loudly if the text is outside the gate. It writes atomically
(temp file + rename) and verifies the written file byte-for-byte.
Run locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
