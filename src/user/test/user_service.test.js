const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async (id, passsword) => 'success');
  UserClient.mockImplementation(() => {
    return {
      login
    }
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('cho', '123');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login("cho", "123");
    await userService.login("cho", "123");
    expect(login).toHaveBeenCalledTimes(1);
  });
});