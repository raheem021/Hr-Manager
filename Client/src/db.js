import dashBoardimg from "./assets/dashboard.svg"
import employeeImg from "./assets/Employees.svg"
import taskBoardImg from "./assets/Taskboard.svg"
import leaveBoardImg from "./assets/Leaveboard.svg"
import payrollImg from "./assets/Payroll.svg"
import settingsImg from "./assets/settings.svg"
import  employeFrame from "./assets/Frame 1000003286.svg"
import taskFrame from "./assets/tasks frame.svg"
import leaveFrame from "./assets/leaves frame.svg"
import task1img from "./assets/taskboard1img.svg"
import task2img from "./assets/taskboard2img.svg"
import task3img from "./assets/task3img.svg"
import task4img from "./assets/task4img.svg"
import task5img from "./assets/task5img.svg"
import task6img from "./assets/task6img.svg"
import task7img from "./assets/task7img.svg"




export const sideBarLinks = [
    {
        id:1,
        Icon: dashBoardimg,
        name:"Dashboard",
        path:""
    } ,
    {
        id:2,
        Icon:employeeImg,
        name:"Employees",
        path:"/admin-dashboard/employees"
    } ,
    {
        id:3,
        Icon:taskBoardImg,
        name:"TaskBoard",
        path:"/admin-dashboard/taskboard"
    } ,
    {
        id:4,
        Icon:leaveBoardImg,
        name:"LeaveBoard",
        path:"/admin-dashboard/leaveboard"
    } ,
    {
        id:5,
        Icon:payrollImg,
        name:"Payroll",
        path:"/admin-dashboard/payroll"
    } ,
    {
        id:6,
        Icon:settingsImg,
        name:"Settings",
        path:"/admin-dashboard/settings"
    } 
]
export const employee = [
    {
        id: 1,
        name: "Total Employees",
        number: 24,
        Image: employeFrame
    },
    {
        id:2,
        name: "Total Tasks",
        number: 107,
        Image: taskFrame
    },
    {
        id:3,
        name: "Current Leaves",
        number: 15,
        Image: leaveFrame
    }
]

export const adminTables = [
    {
        id:1,
        Task: "Website Project Update On Slack",
        Team: task1img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action: "Planned",
    },
    {
        id:2,
        Task: "Productize Beta Testing",
        Team: task2img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action: "Completed",
    },
    {
        id:3,
        Task: "Website Project Update On Slack",
        Team: task3img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action: "In Progress",
    },
    {
        id:4,
        Task: "Website Project Update On Slack",
        Team: task4img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action: "Planned",
    },
    {
        id:5,
        Task: "Productize Beta Testing",
        Team: task5img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action:"Completed",
    },
    {
        id:6,
        Task: "Website Project Update On Slack",
        Team: task6img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action:"In Progress",
    },
    {
        id:7,
        Task: "Website Project Update On Slack",
        Team: task7img,
        Start: " Start: 03 Mar 2023",
        End: "End: 10 Mar 2023",
        Action: "Planned"
    },
]