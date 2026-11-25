# SPEC — Famous Last Words: The Funniest Epitaph

Bounty: [Famous Last Words: The Funniest Epitaph](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
Slug: `u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406`
Prize: $2 total — 1st $1, 2nd $1 (Solana escrow). Free entry.
Closes: 26 Nov 2026 19:55 WIB (2026-11-26T12:55:00Z).

## The entry text

> I left my body to science. Science left it on read.

- 51 characters, 51 bytes, one line, no trailing newline.
- First-person dying speech: the speaker bequeaths their body to science in
  the first sentence, and the second sentence flips the word "left" — the
  body was left to science, and science left the body "on read" (the
  modern idiom for a message seen and deliberately ignored).

## Why this line, against the judge's criteria (most important first)

1. **One-line epitaph of famous last words.** First-person dying speech,
   carved-stone short, no stage direction, no explanation. It is a last
   will spoken aloud — exactly the form the brief asks for.
2. **A real laugh on one read.** The joke is a genuine double meaning, not
   a mild pun and not a sad sentiment: the donor's grand gesture is met
   with total indifference.
3. **Surprise / twist / double meaning that lands cleanly.** The word
   "left" does double duty across the two sentences — bequeathed, then
   ignored. The second sentence reframes the first entirely, and nothing
   needs explaining.
4. **Reads like something carved in stone.** Two short sentences, 51
   characters, plain words, no setup beyond the line itself.
5. **Quotable.** "Science left it on read" is repeatable to a friend in
   one breath; the setup ("I left my body to science") is a sentence
   anyone can deliver.

## Difference from the visible field (439 entries at discovery)

The field is crowded with: "I died doing what I loved: ignoring X"
(check-engine light, terms and conditions, warning labels, the doctor),
"I died as I lived: ..." (customer support, GPS, mid-sentence), the Wi-Fi
password dying with the speaker (many copies), "hold my beer / watch
this", the manager sending the speaker here, and one-star reviews of
death. This entry uses none of those patterns: no "died as I lived", no
password, no warning label, no manager, no review. The "body to science"
angle appears only as a bare title elsewhere ("I Leave My Body to
Science") with no punchline; the "left on read" twist is unused.

## Gate

`/output/entry.txt` must be UTF-8 text of 1–150 characters, not only white
space. This entry is 51 characters / 51 bytes, one line, no trailing
newline. `main.ts` validates the text against the gate before writing and
verifies the written file byte-for-byte after writing.

## Program

`main.ts` (Node 22, standard library only) is fully deterministic: no
randomness, no network, no clock. It writes the fixed text above to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set) via an
atomic temp-file rename, then reads it back and throws unless the file
is byte-identical to the intended text.
