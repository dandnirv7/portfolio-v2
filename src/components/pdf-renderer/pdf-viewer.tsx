"use client";

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  file: string;
}

const PdfViewer = ({ file }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-full w-full border border-dashed border-border/60 rounded-lg p-8">
        <div className="text-center flex flex-col items-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Loading PDF viewer...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-full bg-background rounded-b-xl overflow-hidden py-4">
      <div className="flex-1 overflow-auto w-full custom-scrollbar flex justify-center px-2 sm:px-4">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-[500px]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          }
          error={
            <div className="flex items-center justify-center h-[500px] text-destructive">
              Failed to load PDF file.
            </div>
          }
          className="flex flex-col items-center max-w-full"
        >
          <Page
            pageNumber={pageNumber}
            className="shadow-xl rounded-sm border border-border/50 bg-white max-w-full"
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={
              typeof window !== "undefined"
                ? Math.min(window.innerWidth - 64, 800)
                : 800
            }
          />
        </Document>
      </div>

      {numPages && numPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6 p-4 bg-muted/30 w-full border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <span className="text-sm font-medium">
            Page {pageNumber} of {numPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={pageNumber >= numPages}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
