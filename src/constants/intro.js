import React from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import GroupIcon from "@material-ui/icons/Group";
import ScheduleIcon from "@material-ui/icons/Schedule";

export default [
  {
    id: 1,
    icon: <InsertEmoticonIcon className="intro-icon" fontSize="inherit" />,
    title: "兒童顏值管理",
    text: "每10個小朋友就有7.5個顎骨發育不良，這將影響孩子的一生。肯恩象醫生團隊堅持顏值管理五部曲，全方位守護in孩子健康。",
    button: "顏值管理",
  },
  {
    id: 2,
    icon: <GroupIcon className="intro-icon" fontSize="inherit" />,
    title: "關於肯恩象",
    text: "為什麼兒童顏值管理選擇肯恩象醫生？了解肯恩象醫生團隊的三大堅持，放心將您的孩子交給肯恩象醫生。",
    button: "了解更多",
  },
  {
    id: 3,
    icon: <ScheduleIcon className="intro-icon" fontSize="inherit" />,
    title: "預約諮詢",
    text: "您有孩子顏值管理相關問題嗎？歡迎與我們聯繫，預約肯恩象醫生團隊的一對一治療諮詢。",
    button: "立即預約",
  },
];
