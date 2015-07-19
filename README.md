# Web Workers Demo
Migrate Long Running JS onto a Web Worker

# Description

This app allows the user to upload an image in a canvas, and apply a few transformations on it :

 - Invert colors
 - Chroma
 - Greyscale
 - Vibrant
 - Revert to original
 
# Optimizations

Two optimizations have been applied so as to eliminate the jank.

 - the processing of the image has been deported into a web worker
 - the code of the web worker has been optimized, by getting the algorithm function to apply on the image only once
   
# Potential optimizations

Depending on the size of the loaded image, the function getting the image data from the canvas can be quite heavy, thus freezing the UI.

### [Udacity course on Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)
