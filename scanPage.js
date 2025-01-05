import axios from "axios";
import { load } from "cheerio";

const scanPage = async (pageUrl) => {
  try {
    const response = await axios.get(pageUrl);
    const { data, headers } = response;
    const $ = load(data);

    const vulnerabilities = [];

    const securityHeaders = [
      "Strict-Transport-Security",
      "X-Content-Type-Options",
      "Content-Security-Policy",
    ];
    securityHeaders.forEach((header) => {
      if (!headers[header.toLowerCase()]) {
        vulnerabilities.push(`MISSING HTTP SECURITY HEADER: ${header}`);
      }
    });

    if (data.includes("Apache/2.4.6")) {
      vulnerabilities.push("OUTDATED SOFTWARE VERSION DETECTED: Apache 2.4.6");
    }

    $("form").each((_, form) => {
      const method = $(form).attr("method") || "GET";
      const action = $(form).attr("action") || "MISSING";
      if (method.toUpperCase() === "GET") {
        vulnerabilities.push(`FORM WITHOUT PROPER METHOD ATTRIBUTE: ${action}`);
      }
    });

    return {
      pageUrl,
      vulnerabilities,
    };
  } catch (error) {
    console.error(`Failed to scan ${pageUrl}:`, error.message);
    return {
      pageUrl,
      vulnerabilities: [`ERROR FETCHING PAGE: ${error.message}`],
    };
  }
};

export default scanPage;
