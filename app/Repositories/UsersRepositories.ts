'use strict'
import User from 'App/Models/User';
import IUser from 'App/Interfaces/User/IUser';


export default class UsersRepositories {

  /**
   * @constructor
   * @param data
   */
  static async createUser(data: IUser): Promise<User> {
    return await User.create(data);
  }

  /**
   * @param id
   */
  static async deleteUser(id: number): Promise<void> {
    const user: User = await User.query().where('id', id).firstOrFail();
    return user.delete();
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
