



// // const { SitemapStream, streamToPromise } = require('sitemap')
// //   const { Readable } = require( 'stream' )

// //   // An array with your links
// // const links = [
// //        { url: '/index/',  changefreq: 'daily', priority: 0.3 },
// //   { url: '/packages/',  changefreq: 'daily',  priority: 0.7 },
// //     { url: '/advertises/', changefreq: 'daily',  priority: 0.5}
// //   ]

// //   // Create a stream to write to
// //   const stream = new SitemapStream( { hostname: 'http://localhost:3000/' } )

// //   // Return a promise that resolves with your XML string
// //   return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
// //     data.toString()
// //   )


// const express = require('express')
// const { SitemapStream, streamToPromise } = require('sitemap')
// const { createGzip } = require('zlib')
// const { Readable } = require('stream')

// const app = express()
// let sitemap

// app.get('/sitemap.xml', function(req, res) {
//   res.header('Content-Type', 'application/xml');
//   res.header('Content-Encoding', 'gzip');
//   // if we have a cached entry send it
//   if (sitemap) {
//     res.send(sitemap)
//     return
//   }

//   try {
//     const smStream = new SitemapStream({ hostname: 'http://localhost:3000' })
//     const pipeline = smStream.pipe(createGzip())

//     // pipe your entries or directly write them.
//     smStream.write({ url: '/index/',  changefreq: 'daily', priority: 0.3 })
//     smStream.write({ url: '/packages/',  changefreq: 'daily',  priority: 0.7 })
//     smStream.write({ url: '/advertises/', changefreq: 'daily',  priority: 0.5})
//     /* or use
//     Readable.from([{url: '/page-1'}...]).pipe(smStream)
//     if you are looking to avoid writing your own loop.
//     */

//     // cache the response
//     streamToPromise(pipeline).then(sm => sitemap = sm)
//     // make sure to attach a write stream such as streamToPromise before ending
//     smStream.end()
//     // stream write the response
//     pipeline.pipe(res).on('error', (e) => {throw e})
//   } catch (e) {
//     console.error(e)
//     res.status(500).end()
//   }
// })

// app.listen(3000, () => {
// });