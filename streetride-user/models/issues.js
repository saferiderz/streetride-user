function Issues(sequelize, DataTypes) {
    let Issues = sequelize.defin('Issues', {
        issueType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
        },
        longitude: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
        },
    }, {
            validate: {
                bothCoordsOrNone() {
                    if ((this.latitude === null) !== (this.longitude === null)) {
                        throw new Error('Require either both latitude and longitude or neither')
                    }
                }
            }
        });

    Issues.associate = function (models) {
        Issues.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Issues
};
export default Issues;
