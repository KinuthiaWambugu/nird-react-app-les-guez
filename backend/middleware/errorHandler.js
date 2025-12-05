export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    error: "Une erreur serveur est survenue. Réessaie plus tard.",
    details: err.message,
  });
};
