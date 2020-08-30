import jwt from 'jsonwebtoken';

import authConfig from '../../../../config/auth';
import Users from '../entities/Users';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      name,
      email,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
