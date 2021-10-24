const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async deleteOneBrand(req, res) {
    try {
      const { id } = req.query;
      console.log(id);
      if (!id) {
        return res.status(400).json({ message: "brand not found" });
      }
      const brand = await Brand.findOne({
        where: { id },
      });
      await brand.destroy();
      return res.json({ message: "Brand was deleted" });
    } catch (e) {
      return res.status(400).json({ message: "Delete brand error" });
    }
  }
}

module.exports = new BrandController();
