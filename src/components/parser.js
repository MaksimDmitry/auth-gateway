import { Request, Response } from 'express';
import { User } from '../models/User';

interface ParserData {
  username: string;
  password: string;
  email: string;
}

class Parser {
  parseData(req: Request): ParserData {
    const { username, password, email } = req.body;
    return { username, password, email };
  }

  parseUser(data: ParserData): User {
    const user = new User();
    user.username = data.username;
    user.password = data.password;
    user.email = data.email;
    return user;
  }
}

export default Parser;