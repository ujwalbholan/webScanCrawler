import scanPage from "./scanPage.js";
import axios from "axios";

const visitedUrls = new Set();

const crawl = async (startUrl, depth = 5) => {
  if (depth === 0 || visitedUrls.has(startUrl)) return [];
  visitedUrls.add(startUrl);

  console.log(`Crawling: ${startUrl}`);
  const result = await scanPage(startUrl);

  const $ = await axios
    .get(startUrl)
    .then((response) => load(response.data))
    .catch(() => null);

  if (!$) return [result];

  const links = $("a[href]")
    .map((_, link) => resolve(startUrl, $(link).attr("href")))
    .get()
    .filter((link) => link.startsWith("http") && !visitedUrls.has(link));

  let allResults = [result];
  for (const link of links) {
    const childResults = await crawl(link, depth - 1);
    allResults = allResults.concat(childResults);
  }
  return allResults;
};

export default crawl;
