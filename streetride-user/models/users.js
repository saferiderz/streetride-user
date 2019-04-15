function Users (sequelize, DataTypes) {
	let Users = sequelize.define("Users", {
		// Giving the users model a name of type STRING
		username: {
			type: DataTypes.STRING,
            allowNull: false,
            // hard coding in 'anonymousUser' for folks who want to continue on as a guest without creating an account
            defaultValue: 'anonymousUser',
			validate: {
				len: [1]
			}
		},
		password: {
			type: DataTypes.STRING,
            allowNull: false,
            // hard coding anonymousUserPassword for folks who want to coninue on as a guest without creating an account
            defaultValue: 'anonymousUserPassword',
			validate: {
				len: [8]
			}
		}
        
	});

	Users.associate = function (models) {
		// Associating issues with users
		// When an user is deleted, also delete any associated issues
		Users.hasMany(models.Issues, {
			onDelete: "cascade"
		});
	};

	return Users;
};

export default Users;
