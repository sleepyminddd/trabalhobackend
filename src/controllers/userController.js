const { User } = require('../models');

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, surname, email } = req.body;
    if (!firstname || !surname || !email) {
      return res.status(400).json({ error: 'Todos os campos devem ser preenchidos.' });
    }
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    await user.update({ firstname, surname, email });

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
};