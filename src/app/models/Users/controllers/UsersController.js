import Users from '../entities/Users';

class UsersController {
  async index(_, res) {
    const users = await Users.findAll({
      attributes: [
        'name',
        'email',
        'phone',
        'type_company',
        'document',
        'date_of_birth',
      ],
    });

    return res.json(users);
  }

  async store(req, res) {
    const {
      name,
      password,
      phone,
      email,
      document,
      type_company,
      date_of_birth,
    } = req.body;

    const user = await Users.create({
      name,
      password,
      phone,
      email,
      document,
      type_company,
      date_of_birth,
    });

    return res.json(user);
  }
}

export default new UsersController();
