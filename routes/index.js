const axios = require('axios');
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  var payload = {
    "contents": [
      {
        "parts": [
          {
            "text": req.body.message
          }
        ]
      }
    ]
  };

  var googleAiUrl = process.env.GOOGLE_AI_URL  + process.env.GOOGLE_AI_KEY;
  var response = await axios.post(googleAiUrl, payload);

  return res.json({
    message: response.data.candidates[0].content.parts[0].text.trim()
  });
});

module.exports = router;
