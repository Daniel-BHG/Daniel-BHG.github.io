# Hangyul Bae — robotics portfolio

Static GitHub Pages site with a general page and two tailored pages.

- `/`: general research portfolio
- `/srl/`: scalable robot learning and deployment evaluation
- `/rophi/`: perception, geometry, and reactive manipulation

Tailored pages contain no links to other versions and use `noindex, nofollow`. These are public pages, not access-controlled pages.

Shared content and version-specific introductions are maintained in `tools/build.py`. Rebuild with `python3 tools/build.py`. The script uses the Python standard library and preserves image/video assets. Shared styling is generated into `assets/style.css`.

Image credits and original source URLs are included in each page. `assets/adelie-demo.mp4` is a web-compressed, silent copy of the team demonstration from the supplied presentation.
