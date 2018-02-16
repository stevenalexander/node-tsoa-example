import {Get, Post, Route, Body, SuccessResponse, Controller } from 'tsoa'
import {UserService} from '../services/userService'
import {User, UserCreationRequest} from '../models/user'

@Route('Users')
export class UsersController extends Controller {
  @Get('{id}')
  public async getUser(id: number): Promise<User> {
    return await new UserService().get(id)
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserCreationRequest): Promise<void> {
    new UserService().create(requestBody)
    this.setStatus(201) // set return status 201
    return Promise.resolve()
  }
}
