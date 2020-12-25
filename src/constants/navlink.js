import React from "react";

export const links =  [
  {
    id: 1,
    link: "關於肯恩象醫生",
  },
  {
    id: 2,
    link: "兒童顏值管理",
  },
  {
    id: 3,
    link: "我們的團隊",
  },
  {
    id: 4,
    link: "自主檢測",
  },
  {
    id: 5,
    link: "立即預約",
  },
];

const Navlink = links.map(link => {
  return (
    <div key={link.id}>
      {link.link}
    </div>
  )
})

export default Navlink;

