
const express = require('express');
const router = express.Router();

// Beispielprodukte
const plans = [
  { id: "plan_basic", name: "1 Monat", price: 9.99, currency: "EUR" },
  { id: "plan_standard", name: "3 Monate", price: 24.99, currency: "EUR" },
  { id: "plan_premium", name: "12 Monate", price: 79.99, currency: "EUR" }
];

// Abonnementpläne abrufen
router.get('/plans', (req, res) => {
  res.json(plans);
});

// Neue Zahlung starten (Dummy / Stripe-kompatibel vorbereitbar)
router.post('/checkout', (req, res) => {
  const { planId, userId } = req.body;
  const plan = plans.find(p => p.id === planId);
  if (!plan) return res.status(400).json({ error: "Ungültiger Plan" });

  res.json({
    message: "Zahlung vorbereitet",
    sessionId: "dummy-session-123",
    amount: plan.price,
    currency: plan.currency,
    plan: plan.name
  });
});

module.exports = router;
