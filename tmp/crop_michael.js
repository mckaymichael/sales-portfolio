const sharp = require('sharp');

sharp('assets/portraits/michael.png')
  .extract({ left: 0, top: 0, width: 1619, height: 847 }) // 1619 / 1.91 ≈ 847
  .toFile('assets/portraits/michael_social.png')
  .then(() => {
    console.log('Successfully created michael_social.png by cropping the original from the top.');
  })
  .catch(err => {
    console.error('Error cropping image:', err);
    process.exit(1);
  });
