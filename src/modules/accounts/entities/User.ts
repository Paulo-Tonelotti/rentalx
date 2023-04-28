import { v4 as uuidv4 } from "uuid";

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  driver_license: string;

  admin: boolean;

  avatar?: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
