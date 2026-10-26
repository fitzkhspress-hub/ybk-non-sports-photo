# In the Spotlight: Non-Sports Photo — GitHub Pages

This course is ready for GitHub Pages. All original course files and behavior
are preserved. No build step, package installation or Cloudflare account is needed.

## Publish

1. Create or open a GitHub repository for this course.
2. Unzip `nonsports-photo-course-github-pages.zip` on your computer.
3. Upload the extracted **contents** to the repository's top level.
   `index.html`, `styles.css` and `app.js` must sit directly at the top level,
   not inside an extra folder. Upload the files, not the ZIP itself.
   Include `.nojekyll` if your upload method shows hidden files. The course
   also works without it because it has no Jekyll-specific content.
4. Commit the files to `main` (or your chosen publishing branch).
5. Open **Settings → Pages**. Under **Build and deployment**, choose
   **Deploy from a branch**, select **main** and **/(root)**, then click **Save**.
6. Wait for publishing to finish. Your site link appears in the Pages settings.
   A typical URL is `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

Use a separate repository for each course when following these instructions.
Relative asset links support any repository name without editing the files.
Existing version query strings on assets are preserved.

Official instructions: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview locally

With Python 3 installed, double-click **Preview Course.command** on a Mac,
or run `python3 preview.py` from this folder. Keep its Terminal window open
while using the course; press Control+C to stop.

Alternatively, run `python3 -m http.server 8787` from this folder and open
http://localhost:8787 in your browser.

## Files

- `index.html`: course entry point.
- `styles.css`: appearance and responsive layout.
- `app.js`: course content, interactions, saved progress and completion features.
- `.nojekyll`: tells GitHub Pages to serve this as a plain static site.
- `preview.py` and `Preview Course.command`: optional local preview helpers.

## Saved progress

Progress uses the browser's localStorage. Moving to a different website address
may start a new progress record. Completion and certificate features retain the
original course behavior.

## Verification

The original three website files match the supplied ZIP byte for byte.
JavaScript syntax and relative asset paths were checked. The ZIP includes
`index.html` at its root. Interactive browser behavior has not been retested.
No live GitHub deployment has been performed.
