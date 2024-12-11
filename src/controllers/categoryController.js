const { Category } = require('../models');

const getCategories = async (req, res) => {
  try {
    const {
      limit = 12,
      page = 1,
      fields,
      use_in_menu,
    } = req.query;

    const where = {};
    const attributes = fields ? fields.split(',') : undefined;
    if (use_in_menu !== undefined) {
      where.use_in_menu = use_in_menu === 'true';
    }
    const pagination = limit != -1 ? {
      limit: parseInt(limit, 10),
      offset: (parseInt(page, 10) - 1) * parseInt(limit, 10),
    } : {};

    const { rows, count } = await Category.findAndCountAll({
      where,
      attributes,
      ...pagination,
    });

    return res.status(200).json({
      data: rows,
      total: count,
      limit: parseInt(limit, 10),
      page: parseInt(page, 10),
    });
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return res.status(400).json({ error: 'Requisição inválida' });
  }
};

module.exports = {
  getCategories,
};