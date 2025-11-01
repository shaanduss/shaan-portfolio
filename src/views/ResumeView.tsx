import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React from "react";

export const ResumeView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 mt-7 gap-10">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl="/Resume.pdf" />
      </Worker>
    </div>
  );
};
