import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Page = React.forwardRef(({ content }, ref) => {
  const [value, setValue] = useState(content ?? "");

  // TODO implement react-quill for editing page content and try to enable only for selected page
  // TODO display page number on the page as fixed in the bottom
  // TODO define whether page is on left side or right side
  // TODO add shadow to the page based on side to replicate real book

  return (
    <div className="w-full h-full demoPage" ref={ref}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      {/* <p>Page number: {number}</p> */}
    </div>
  );
});

export default Page;
