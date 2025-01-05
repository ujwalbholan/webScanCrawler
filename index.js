import crawl from "./crawl.js";
import generateReport from "./generateReport.js";

const main = async () => {
  const startUrl = "https://books.toscrape.com/"; //add your own link to crawle
  const depth = 5;
  const outputPath = "vulnerability_report.txt";

  const results = await crawl(startUrl, depth);
  generateReport(results, outputPath);
};

main().catch((error) =>
  console.error("Error in main function:", error.message)
);
