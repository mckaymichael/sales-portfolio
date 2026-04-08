const sharp = require('sharp');
sharp('assets/portraits/michael.png')
  .metadata()
  .then(metadata => {
    console.log(JSON.stringify(metadata, null, 2));
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
