const User = require('../models/User');

// Stub: Este controlador se conecta a Stripe cuando se active pagos
const upgradeToPremium = async (req, res) => {
  try {
    // TODO: Validate payment with Stripe before upgrading
    // const { paymentMethodId } = req.body;
    // await stripeService.createSubscription(req.user.email, paymentMethodId);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { plan: 'premium' },
      { new: true }
    );

    res.json({
      message: 'Plan actualizado a Premium.',
      plan: user.plan
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar plan.' });
  }
};

const downgradToFree = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { plan: 'free' },
      { new: true }
    );

    res.json({
      message: 'Plan cambiado a Free.',
      plan: user.plan
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar plan.' });
  }
};

const getPlans = (req, res) => {
  res.json({
    plans: [
      {
        id: 'free',
        name: 'Free',
        price: 0,
        currency: 'USD',
        interval: null,
        features: [
          '3 lecciones disponibles',
          '5 practicas por dia',
          'Con anuncios',
          'Sin videos',
          'Sin certificado'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 7,
        currency: 'USD',
        interval: 'month',
        features: [
          '50+ lecciones completas',
          'Practica ilimitada',
          'Sin anuncios',
          'Videos de cada seña',
          'Certificado al terminar',
          'Estadisticas detalladas',
          'Acceso sin internet',
          'Comunidad premium'
        ]
      }
    ],
    currentPlan: req.user.plan
  });
};

module.exports = { upgradeToPremium, downgradToFree, getPlans };
