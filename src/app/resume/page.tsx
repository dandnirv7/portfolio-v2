import { personalInfo } from "@/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PdfDownloader, PdfViewer } from "@/components/pdf-renderer";

export const metadata = {
  title: `Resume | ${personalInfo.name}`,
  description: `Professional Resume of ${personalInfo.fullname}`,
};

export default function ResumePage() {
  const resumePdfUrl = "/pdf/resume.pdf";

  return (
    <div className="container px-4 py-24 mx-auto max-w-6xl">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <div className="w-full sm:w-auto">
          <Button variant="ghost" asChild className="mb-2 -ml-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            My Resume
          </h1>
          <p className="text-muted-foreground mt-2">
            View or download my professional resume.
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <PdfDownloader
            fileUrl={resumePdfUrl}
            fileName={`${personalInfo.fullname.replace(/\s+/g, "_")}_Resume.pdf`}
          >
            Resume
          </PdfDownloader>
        </div>
      </div>

      <div className="h-[800px] w-full rounded-xl border border-border/50 bg-muted/20 overflow-hidden shadow-sm flex items-center justify-center relative">
        <PdfViewer file={resumePdfUrl} />
      </div>
    </div>
  );
}
