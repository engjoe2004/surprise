# Birthday Website (Arabic, RTL)

## Files
- `index.html`  the page structure (Arabic text of headings/buttons is here)
- `style.css`   the design (colors are variables at the top)
- `config.js`   **the file you edit**: names, date, letter, captions, photo/video/song paths
- `script.js`   behavior (animations, gallery, videos, letter, cake, music) — no need to edit
- `images/`  your photos   `videos/`  your videos   `music/`  your song

## Run it on your computer
Double-click `index.html`. Fonts need internet; everything else works offline.

## Personalize (everything is in `config.js`)
- **Names / date:** `herName`, `yourName`, `birthdayDate`.
- **Letter:** replace the text in `letter` (use `\n` for a new paragraph). Change `signOff` for the closing words.
- **Secret heart / wish messages:** `secretMessage`, `wishMessage`.
- **Photos (12 slots):** copy your pictures into `images/`. Either rename them to `YOUR_PHOTO_1.jpg` … `YOUR_PHOTO_12.jpg`, or change the `src` of each line to your file name, e.g. `src: "images/us-beach.jpg"`. Edit `caption` and `date` on the same line. Until a file exists, a placeholder with its expected name is shown.
- **Videos (4 slots):** copy MP4 files (H.264) into `videos/`, then edit `src`, `title`, `caption`. Optional thumbnail: put an image in `images/` and set `poster: "images/thumb1.jpg"`.
- **Music:** put an MP3 in `music/` and set `song: "music/your-song.mp3"`. It only plays after she taps the play button.
- **Add / remove:** copy a whole `{ ... },` line to add; delete the line to remove. Keep the commas between lines (no comma after the last one).
- **Timeline:** same idea, in `timeline`.
- **Headings / button text:** edit the Arabic in `index.html`.

## Tips
- Resize photos to about 1600 px wide (under ~500 KB each) and keep videos short and compressed, so it loads fast on phones.
- Use `.jpg`, `.png` or `.webp` for photos, `.mp4` (H.264 + AAC) for videos, `.mp3` for music.

## Publish for free (gets you an https link)
1. Finish editing, then open https://app.netlify.com/drop
2. Drag the **whole project folder** onto the page. Netlify gives you a public link right away; send it to her.
   (GitHub Pages or Vercel also work.)
3. Changed something later? Drag the folder again.
