const connection = require('../database/connection');

module.exports = {
  async index(req, res){
    const patients = await connection('patients').select('*');
    return res.json(patients);
  },

  async patient(req,res){
    const { id } = req.params;
    const patient = await connection('patients').where('id', id).select('*').first();
    return res.json(patient);
  },

  async create (req, res){
    const { name, age, email, phone_number, address } = req.body;
    await connection('patients').insert({
      name,
      age,
      email,
      phone_number,
      address
    });
    return res.json( { name, age, email, phone_number, address });
  },

  async delete (req, res){
    const { id } = req.params;
    await connection('patients').where('id', id).delete();
    return res.status(204).send();
  },

  async update(req, res){
    const { id } = req.params
    const { name, age, email, phone_number, address } = req.body;
    await connection('patients')
      .where('id', id)
      .update({
        name,
        age,
        email,
        phone_number,
        address
      });
    return res.json( { name, age, email, phone_number, address });
  }
};