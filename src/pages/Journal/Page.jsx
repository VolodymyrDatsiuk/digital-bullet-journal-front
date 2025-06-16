import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Page = React.forwardRef(({ content }, ref) => {
  const [value, setValue] = useState(content ?? "");

  // TODO implement react-quill for editing page content and try to enable only for selected page
  // TODO display page number on the page as fixed in the bottom
  // TODO define whether page is on left side or right side
  // TODO add shadow to the page based on side to replicate real book

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video", "formula"],
      ["clean"], // remove formatting
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <div className="w-full h-full demoPage" ref={ref}>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
      {/* <p>Page number: {number}</p> */}
    </div>
  );
});

export default Page;
