const cv = require('opencv')

/**
 * @description 对比图片相异性
 * @param {*} img1 path or buffer
 * @param {*} img2 path or buffer
 * @returns 
 */
const dissimilarity = async (img1, img2) => {
  return new Promise((resovle, reject) => {
    cv.readImage(img1, function (err, car1) {
      if (err) reject(err);

      cv.readImage(img2, function (err, car2) {
        if (err) reject(err);

        cv.ImageSimilarity(car1, car2, function (err, dissimilarity) {
          if (err) reject(err);

          resovle(dissimilarity.toFixed(2))
        });

      });
    })
  })
}

module.exports = {
  dissimilarity
}