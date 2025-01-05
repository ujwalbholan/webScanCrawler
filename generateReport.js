import { writeFileSync } from "fs";

const generateReport = (results, outputPath) => {
  const report = results
    .map(({ pageUrl, vulnerabilities }) => {
      const header = `\nSCAN REPORT FOR: ${pageUrl}\n${"-".repeat(50)}`;
      const body =
        vulnerabilities.length > 0
          ? vulnerabilities.map((v) => `- ${v}`).join("\n")
          : "No vulnerabilities found.";
      return `${header}\n${body}`;
    })
    .join("\n");

  console.log("\nVULNERABILITY SCAN COMPLETE");
  console.log(report);

  writeFileSync(outputPath, report, "utf-8");
  console.log(`\nReport saved to ${outputPath}`);
};

export default generateReport;
