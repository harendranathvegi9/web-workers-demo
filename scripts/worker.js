importScripts('imageManips.js');

self.onmessage = function (e) {
    var imageData = e.data.imageData;
    var type = e.data.type;

    var a, b, g, i, j, length, pixel, r, ref;

    // Determine the processing function to apply to the image
    // corresponding to the action triggered by the user
    // This is better placed here than in the loop iterating over
    // all the pixels of the image
    var manipulate = getProcessingFunction(type);

    try {
        length = imageData.data.length / 4;
        for (i = j = 0, ref = length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            r = imageData.data[i * 4 + 0];
            g = imageData.data[i * 4 + 1];
            b = imageData.data[i * 4 + 2];
            a = imageData.data[i * 4 + 3];
            pixel = manipulate(r, g, b, a);
            imageData.data[i * 4 + 0] = pixel[0];
            imageData.data[i * 4 + 1] = pixel[1];
            imageData.data[i * 4 + 2] = pixel[2];
            imageData.data[i * 4 + 3] = pixel[3];
        }
        self.postMessage(imageData);
    } catch (e) {
        function ManipulatorException(message) {
            this.name = "ManipulationException";
            this.message = message;
        }

        self.postMessage(undefined);
        throw new ManipulatorException('Image manipulation error');
    }
};