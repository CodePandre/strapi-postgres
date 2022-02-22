module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e14f8f0e1944b5c54d8e0d13e0a94f14'),
  },
});
