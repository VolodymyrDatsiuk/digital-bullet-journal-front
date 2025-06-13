import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

const Journal = () => {
  // TODO get pages content from api and render them in the book
  // TODO add page number to the page and update page content based on the page number
  // TODO implement pagination (add arrow buttons)

  return (
    <main className="flex items-center justify-center w-screen h-screen overflow-hidden bg-[#f2bfbf] px-20 py-10">
      <HTMLFlipBook
        disableFlipByClick
        flippingTime={500}
        width={500}
        height={700}
        style={{ backgroundColor: "white" }}
      >
        <Page content="Page 1" number={1} />
        <Page content="Page 2" number={2} />
        <Page content="Page 3" number={3} />
        <Page content="Page 4" number={4} />
      </HTMLFlipBook>
    </main>
  );
};

export default Journal;
