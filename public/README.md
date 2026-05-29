# public/

Anything in this folder is served from the site root. To swap the dashed "Photo placeholder — Anna" circle in the Trust section for the real photo:

1. Drop the image here as **`anna.jpg`** (square, 400×400 px or larger recommended).
2. That's it — refresh the page. The component checks for `/anna.jpg` on mount and replaces the placeholder if it loads.

The placeholder stays visible if the file is missing or fails to load, so you can deploy without the photo and add it later without breaking anything.

Other assets (favicon, OG image, etc.) can also live here and be referenced as `/<filename>`.
