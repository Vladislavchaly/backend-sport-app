'use strict'
import User from 'App/Models/User';
import ISignUp from 'App/Interfaces/Auth/ISignUp';
import IUpdate from "App/Interfaces/User/IUpdate";


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
   * @param user
   * @param data
   */
  static async updateUser(user: User, data: IUpdate): Promise<User> {
    return await user.merge(data).save()
  }
}
