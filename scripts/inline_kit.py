#!/usr/bin/env python3
"""把 references/ink-gold.css 灌進所有 HTML 的 /* ink-gold kit:start */ … /* ink-gold kit:end */ 之間。
改了 CSS 套件之後跑一次：python3 scripts/inline_kit.py
（HTML 是單檔、雙擊就能開，所以 CSS 要內嵌，不用外部連結。）"""
from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
kit = (root / "references" / "ink-gold.css").read_text(encoding="utf-8").strip()
pattern = re.compile(r"/\* ink-gold kit:start \*/.*?/\* ink-gold kit:end \*/", re.S)
for html in [root / "index.html", *sorted((root / "assets").glob("*.html"))]:
    text = html.read_text(encoding="utf-8")
    new, n = pattern.subn(lambda _: kit, text)
    if n:
        html.write_text(new, encoding="utf-8")
        print(f"✓ {html.relative_to(root)}")
