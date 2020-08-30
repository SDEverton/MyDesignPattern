import { Router } from 'express';
import UsersControllers from '../controllers/UsersController';

const usersRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Routes about users and services
 * # schemes:
 * # - http
 * paths:
 *  /users/list:
 *    get:
 *      tags:
 *      - Users
 *      description: List all users
 *      responses:
 *        '200':
 *          description: A successful response
 */
usersRouter.get('/list', UsersControllers.index);
/**
 * @swagger
 *  /users/create:
 *    post:
 *      tags:
 *      - Users
 *      description: create user
 *      parameters:
 *        - name: body
 *          in: body
 *          description: seu email e senha
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string,
 *                example: Everton Oliveira
 *              phone:
 *                type: string,
 *                example: '981501208'
 *              document:
 *                type: string,
 *                example: '4565456465444'
 *              type_company:
 *                type: string,
 *                example: Dentista
 *              date_of_birth:
 *                type: string,
 *                example: '1987-11-25'
 *              email:
 *                type: string
 *                example: e@gmail.com
 *              password:
 *                type: string
 *                example: '12345'
 *      responses:
 *        '200':
 *          description: A successful response
 */
usersRouter.post('/create', UsersControllers.store);

export default usersRouter;
