import { Sequelize, DataTypes } from 'sequelize'; 
import dbConfig from '../config/db.config.js';
import StudentModel from './student.model.js';
import CourseModel from './course.model.js';
import TeacherModel from './teacher.model.js';
import defineUser from './user.js'; 

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define models
db.Student = StudentModel(sequelize, Sequelize);
db.Course = CourseModel(sequelize, Sequelize);
db.Teacher = TeacherModel(sequelize, Sequelize);
db.User = defineUser(sequelize, DataTypes); // ✅ attach to db

// Associations
db.Teacher.hasMany(db.Course);
db.Course.belongsTo(db.Teacher);

db.Course.belongsToMany(db.Student, { through: "CourseStudent" });
db.Student.belongsToMany(db.Course, { through: "CourseStudent" });

// Sync models to DB
await sequelize.sync(); // Basic sync without altering or forcing

export default db;
