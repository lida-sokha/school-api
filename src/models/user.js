export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'Users',        // Explicitly specify table name (optional)
      timestamps: true,          // Adds createdAt and updatedAt automatically (default true)
      freezeTableName: false,    // If true, Sequelize won't pluralize table name
    }
  );

  return User;
};
