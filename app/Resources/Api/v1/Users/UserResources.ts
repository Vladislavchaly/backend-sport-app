'use strict'
import BaseResources from "App/Resources/BaseResources";

export default class UserResources extends BaseResources{

  static async index(request) {

    return {
      "id": request.id,
      "name": request.name,
      "email": request.email,
      "created_at": request.createdAt,
      "updated_at": request.updatedAt
    }
  }
}
