/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

const apiGroup = (version, prefix, group) => {
  group.prefix('api/' + version + '/' + prefix)
  group.namespace('App/Controllers/Http/Api/' + version + '/')
  return group
}


apiGroup('v1', 'auth', Route.group(async () => {
  Route.post('sign-in', 'Auth/SignIn/SignInController.index');
  Route.post('sign-up', 'Auth/SignUp/SignUpController.index');
}))

apiGroup('v1', 'user', Route.group(async () => {
  Route.get('me', 'Users/GetMeController.index');
  Route.delete('delete', 'Users/DeleteController.index');
}))

Route.get('/', async () => {
  return {hello: 'world'}
})

