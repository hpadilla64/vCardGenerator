# vCard Generator

Generate a vCard (`.vcf`) and a matching QR code from a JSON config, and publish them with a small React contact page.

The project has two parts:

- **Generator** (`index.js`): a Node script that reads a JSON config and writes a vCard and a QR code into `output/`.
- **Viewer** (`html_viewer/`): a React app that shows a profile banner with buttons to download the vCard, call, or message on WhatsApp, followed by social media links.

## Requirements

- Node.js 18 or later
- npm (the viewer also has a `yarn.lock` if you prefer Yarn)

## Generator

### Setup

```sh
npm install
cp config.example.json config.json
```

Edit `config.json` with your contact details. Git ignores this file, so your personal data stays local.

### Run

```sh
node index.js config.json
```

You can pass any config path, so one checkout can generate vCards for several people.

### Output

| File | Contents |
| --- | --- |
| `output/test.vcf` | The vCard, with the photo embedded as base64 (when `photoURL` can be downloaded) |
| `output/test.txt` | The same vCard with the photo as a URL, as plain text |
| `output/test.png` | A QR code encoding the vCard |

Create the `output/` folder first if it doesn't exist (`mkdir output`). Git ignores it.

### Config reference

| Field | Description |
| --- | --- |
| `firstName`, `additionalName`, `lastName`, `namePrefix` | Name parts |
| `email` | Email address |
| `job`, `role` | Job title and role |
| `photoURL` | Public URL of the profile photo |
| `phones[]` | `{ "number", "type" }` (types: `WORK`, `HOME`, `CELL`, …) |
| `address[]` | `{ "street", "city", "region", "zip", "country", "type" }` |
| `social[]` | `{ "url", "type", "user" }`; `type` is the network name (`Instagram`, `Facebook`, `Twitter`) |
| `qr` | Options passed to [`qrcode`](https://github.com/soldair/node-qrcode#options), e.g. `type` and `color.dark` / `color.light` |

See [`config.example.json`](config.example.json) for a full example.

## Viewer

### Setup

```sh
cd html_viewer
npm install
cp .env.example .env
```

Then add your data:

1. `src/data/vcard.json`: contact data in the same format as the generator config. `npm start` and `npm run build` create it from [`vcard.example.json`](html_viewer/src/data/vcard.example.json) if it's missing. Set `photoURL` to a path under `public/`, e.g. `/img/profiles/profile.jpg`.
2. `public/img/profiles/profile.jpg`: the profile photo.
3. `public/vcards/test.vcf`: the vCard from the generator (`output/test.vcf`), offered by the "add contact" button.

Git ignores all three, along with `.env`.

### Environment

| Variable | Description |
| --- | --- |
| `PUBLIC_URL` | Base path the site is served from, e.g. `/vcard/janedoe`. Leave it empty to serve from the root. |

### Run and build

```sh
npm start        # dev server at http://localhost:3000
npm run build    # production build in build/
```

Deploy the contents of `build/` to the path set in `PUBLIC_URL`.

## License

ISC
