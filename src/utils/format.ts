import type { User, UserApi } from "@/models/User";

export function formatUserFields(users: UserApi[]): User[] {
  return users.map((user) => ({
    id: user.id,
    name: user.first_name,
    photo: user.avatar,
    favorite: false,
  }));
}
