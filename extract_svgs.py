import re

file_path = r"c:\Users\I762844\Documents\Vikram Verito ev conversion\verito-ev-blueprint.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

svg_blocks = re.findall(r'<svg.*?</svg>', content, flags=re.DOTALL)

filenames = [
    "verito-ev-conversion-hero.svg",
    "verito-powertrain-layout.svg",
    "verito-hv-wiring-overview.svg",
    "jeep-ev-conversion.svg",
    "splendour-ev-conversion.svg"
]

for idx, svg in enumerate(svg_blocks):
    if idx < len(filenames):
        out_path = rf"c:\Users\I762844\Documents\Vikram Verito ev conversion\{filenames[idx]}"
        with open(out_path, "w", encoding="utf-8") as out:
            # prepend xml declaration and make sure it's valid XML if needed, but not strictly necessary for viewing SVG
            out.write('<?xml version="1.0" encoding="UTF-8"?>\n')
            out.write(svg)
        print(f"✅ Extracted {filenames[idx]}")

print(f"Total SVGs found: {len(svg_blocks)}")
