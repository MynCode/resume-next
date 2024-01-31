"use client";
import React, { useState } from "react";
import { downloadPDF } from "@/utils/downloadPdf";

const DownloadButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = async () => {
    setIsLoading(true);
    try {
      await downloadPDF();
    } catch (error) {
      console.error("Failed to download PDF", error);
    }
    setIsLoading(false);
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors disabled:bg-blue-300"
      onClick={handleDownloadClick}
      disabled={isLoading}
    >
      {isLoading ? "Downloading..." : "Download PDF"}
    </button>
  );
};

export default DownloadButton;
