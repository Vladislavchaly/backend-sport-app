'use strict'
import User from 'App/Models/User';
import ISignUp from 'App/Interfaces/Auth/ISignUp';


export default class UsersRepositories {

  /**
   * @constructor
   * @param data
   */
  static async createUser(data: ISignUp): Promise<User> {
    return await User.create(data);
  }

  /**
   * @param user
   */
  static async deleteUser(user: User): Promise<void> {
    return await user.delete();
  }

  /**
   * @constructor
   * @param data
   * @param id
   */
  static async updateUser(data: User, id: number): Promise<User> {

      return await User.query().where('id', id).update(data).firstOrFail();

  }
}
