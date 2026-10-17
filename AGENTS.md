<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the Vite base URL as the router basepath; only GitHub Pages builds opt into the repository subfolder via GITHUB_PAGES, so Lovable root URLs and GitHub subfolder URLs both work.
- Use router Links for cross-page application anchors so navigation honors the active deployment basepath.
- Keep palettes in global semantic tokens and preserve the original override in src/styles/palette-original.css; setting data-palette="original" on html restores it without changing page content or imagery.
- The production build outputs to dist/client (not .output/public); the build script copies dist/client/_shell.html to index.html and 404.html — keep those paths in sync when the build tooling changes.
