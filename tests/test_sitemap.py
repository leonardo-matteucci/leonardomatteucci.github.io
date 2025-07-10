import os
from pathlib import Path
import xml.etree.ElementTree as ET
from urllib.parse import urlparse

def test_sitemap_paths_exist():
    repo_root = Path(__file__).resolve().parents[1]
    tree = ET.parse(repo_root / "sitemap.xml")
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    missing = []
    for loc in root.findall("sm:url/sm:loc", ns):
        url = loc.text.strip()
        path = urlparse(url).path
        if path.startswith("/"):
            path = path[1:]
        if path == "":
            target = repo_root / "index.html"
        else:
            if path.endswith("/"):
                path = path[:-1]
            target = repo_root / path
        if not target.exists():
            missing.append(path or "index.html")
    assert not missing, f"Missing paths referenced in sitemap: {missing}"
