var cosmos = require('@azure/cosmos');
require('dotenv').config();

const client = new cosmos.CosmosClient(process.env.COSMOS);

const databaseid = process.env.COSMOS_DB;
const containerid = process.env.COSMOS_CONTAINER;
const containerref = client.database(databaseid).container(containerid);
const containerdata = containerref.items;

var studentData = {
    id: "S104",
    StudentNumber: "104",
    AcademicYear: "2019",
    Name: {
        Forename: "Sit",
        Lastname: "Amet"
    },
    CourseGrades: [
        {
          "Course": "Computer Science",
          "Grade": "A"
        },
        {
          "Course": "Applied Mathematics",
          "Grade": "A"
        }
      ]
};

async function addStudent(student){
    const result = await containerdata.create(student);
    (result)? console.log('Student added') : console.log('Error adding student');
}

addStudent(studentData);