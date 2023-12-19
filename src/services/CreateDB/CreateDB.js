import SQLite from 'react-native-sqlite-storage';
var db;

class CreateDBFactory {
  constructor() {
    if (db === null || db === 'undefined') {
      this.openConnection();
    }
  }

  createDB() {
    const CREATE = ' CREATE';
    const TABLE = ' TABLE';
    const IF_NOT_EXITS = 'IF NOT EXISTS ';
    const USERS = ' users';
    const dbs = [];

    const create_commands = [
      `${CREATE}${TABLE}${IF_NOT_EXITS}${USERS} (user_id PRIMARY KEY AUTOINCREMENT, name TEXT not null, email TEXT, phone TEXT not null unique, address TEXT not null, auth_type INTEGER not null default 1, created Date)`,
    ];
  }

  openConnection() {
    db = SQLite.openDatabase(
      {
        name: 'ezBill.db',
        location: 'default',
      },
      () => {
        console.log('Database opened successfully');
        return db;
      },
      error => console.error('Error opening database', error),
    );
  }
}
