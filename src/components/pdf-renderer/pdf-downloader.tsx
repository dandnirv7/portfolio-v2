"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React, { ReactNode } from "react";

interface PdfDownloaderProps {
  fileUrl: string;
  fileName?: string;
  children?: ReactNode;
}

const PdfDownloader = ({
  fileUrl,
  fileName = "resume.pdf",
  children,
}: PdfDownloaderProps) => {
  return (
    <Button asChild>
      <a href={fileUrl} download={fileName} target="_blank" rel="noreferrer">
        <Download className="mr-2 h-4 w-4" />
        {children || "Download PDF"}
      </a>
    </Button>
  );
};

export default PdfDownloader;
