import express from 'express';

const router = express.Router();

const faqs = [
  {
    "question": "What is included in the travel package?",
    "answer": "The package typically includes accommodation, transportation, and sightseeing. Meals, entry fees, and personal expenses may not be included."
  },
  {
    "question": "Can I customize my travel package?",
    "answer": "Yes, most packages offer customization options, allowing you to adjust destinations, duration, and hotel preferences."
  },
  {
    "question": "What types of vehicles are available for travel packages?",
    "answer": "Depending on the package, options may include sedans, SUVs, luxury cars, buses, and tempo travellers."
  },
  {
    "question": "Are meals included in package?",
    "answer": "Some packages include meals, while others may only provide breakfast. It’s best to check the package details before booking."
  },
];

router.get('/faqs', (req, res) => {
  res.json(faqs);
});

export default router;
