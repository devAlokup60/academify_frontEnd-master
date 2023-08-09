import image1 from "../components/alerts/upcoming exam alert.svg";
import image2 from "../components/alerts/pending homework.svg";
import image3 from "../components/alerts/fee payment reminder.svg";
import image4 from "../components/alerts/study time reminder.svg";
import image5 from "../components/alerts/attendance reminder.svg";
import image6 from "../components/alerts/personallised remider.svg";
import image7 from "../components/alerts/event reminder.svg";
import image8 from "../components/alerts/emergency alerts.svg";

const notificationData = [
  {
    id: 1,
    title: "Upcoming Exams Reminders",
    info: "Students can receive notifications about upcoming exams, including the date, time, and location of each exam. These reminders help students stay organized and prepared for their assessments.",
    tag: "Notification Alert",
    url: image1,
  },
  {
    id: 2,
    title: "Pending Homework Alerts",
    info: "The tool can send alerts to students about pending homework and assignments. This ensures that students do not miss deadlines and stay on top of their academic responsibilities.",
    tag: "Notification Alert",
    url: image2,
  },
  {
    id: 3,
    title: "Fee Payment Reminders",
    info: "Parents can receive timely alerts regarding pending fee payments. These reminders can help parents avoid late fees and keep track of their financial obligations to the educational institution.",
    tag: "Notification Alert",
    url: image3,
  },
  {
    id: 4,
    title: "Study Time Notifications",
    info: "Students can set study time reminders or create a study schedule within the tool. The system can then send notifications to remind them of their study sessions, fostering good study habits.",
    tag: "Notification Alert",
    url: image4,
  },
  {
    id: 5,
    title: "Attendance Alerts",
    info: "Parents and teachers can receive alerts if a student's attendance falls below a certain threshold. This helps in identifying and addressing attendance issues promptly.",
    tag: "Notification Alert",
    url: image5,
  },
  {
    id: 6,
    title: "Personalized Reminders",
    info: "The tool can provide personalized reminders based on individual student or parent preferences. For example, a parent may want to receive alerts about their child's academic performance, while a student may prefer reminders about extracurricular activities.",
    tag: "Notification Alert",
    url: image6,
  },
  {
    id: 7,
    title: "Event Reminders",
    info: "The notification system can send reminders about school events, parent-teacher meetings, workshops, and other important gatherings, encouraging participation and engagement.",
    tag: "Notification Alert",
    url: image7,
  },
  {
    id: 8,
    title: "Emergency Alerts",
    info: "In case of emergencies or critical situations, the tool can be equipped to send urgent alerts to all relevant parties, ensuring swift and effective communication.",
    tag: "Notification Alert",
    url: image8,
  },
];

export default notificationData;
