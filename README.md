# Welcome

This hosts my code for my personal site, ryancgibson.com.
The project is built with [Next.js](https://nextjs.org) and [Payload CMS](https://payloadcms.com).

## Development

You are going to need a few environment variables:

```txt
DATABASE_URI=postgres://<SERVER>:<PASSWORD>@<HOST>/<DATABASE_NAME>

<!-- This secret is for any encryption workflows. -->
<!-- For a dev environment, this can be almost anything. -->
PAYLOAD_SECRET=

NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Once you have everything configured, run the development server:

```bash
npm run dev
```

Before loading up the homepage, go to [https://localhost:3000/admin](https://localhost:3000/admin) to open up the Payload admin panel.

Create a page, and title it home. If you noticed that the `slug` for the page says "home", that is okay.

Once you publish the home page, open [http://localhost:3000](http://localhost:3000) with your browser to see the results.
