# osobotu.github.io

Stephen Oduh's personal academic website, built with Hugo.

## Write

```sh
make post slug=my-post
make dev
```

Set `draft: false` in the post front matter when it is ready to publish. A push to `main` deploys the site through GitHub Pages.

## Academic content

The homepage automatically shows the three newest published posts. Optional publications and news are read from `data/publications.yaml` and `data/news.yaml`; their sections stay hidden until those files exist.

```yaml
# data/publications.yaml
- title: "Paper title"
  authors: "Stephen Oduh and Collaborators"
  venue: "Conference or Journal"
  year: 2026
  status: "Accepted; proceedings forthcoming"
  selected: true
  draft: true
  image: "/images/paper-preview.png"
  links:
    - label: "Paper"
      url: "https://example.com/paper"
    - label: "Code"
      url: "https://github.com/example/repository"
```

Draft publications appear with `make dev` but are excluded from production. Set `draft: false` when the entry is ready to publish. For an accepted paper whose proceedings are not public, set `status` and omit `links`; add the DOI or paper URL after the proceedings are released.

```yaml
# data/news.yaml
- date: 2026-10-01
  text: "A short academic or professional update."
```
