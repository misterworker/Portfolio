import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import FixedControls from "@/components/FixedControls";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <main>{children}</main>
      
      <FixedControls hideLock={true} />
    </ThemeProvider>
  );
}
