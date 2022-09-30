'use strict';

/**
 * menu controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::menu.menu', ( {strapi}) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const menu = await strapi.entityService.findMany("api::menu.menu", query);
    // const sanitizedEntity = await this.sanitizeOutput(menu);

    return this.transformResponse(menu[0]);
  },
}));
