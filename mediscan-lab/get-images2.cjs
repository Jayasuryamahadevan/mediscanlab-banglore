const https = require('https');

const getImages = (title) => {
  return new Promise((resolve) => {
    https.get(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${title}`, {
      headers: { 'User-Agent': 'MediscanScript/1.0 (test@example.com)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const pages = JSON.parse(data).query.pages;
          const img = Object.values(pages)[0].original.source;
          resolve({ title, img });
        } catch(e) { resolve({ title, img: null }); }
      });
    });
  });
};

Promise.all([
  getImages('Surgeon'),
  getImages('Microscope'),
  getImages('Laboratory'),
  getImages('Computed_tomography'),
  getImages('Blood_pressure'),
  getImages('Clinic')
]).then(results => console.log(JSON.stringify(results, null, 2)));
