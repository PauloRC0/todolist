module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'todo_list',
    define: {
        timestamps: true,
        underscored: true,
    }
}