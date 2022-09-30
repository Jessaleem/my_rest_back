module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/menu/find-by-slug/:slug',
      handler: 'api::menu.menu.findBySlug',
    },
  ]
};
