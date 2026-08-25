describe("Website - Automatic Broken Link Scanner", () => {

  const visitedPages = new Set();
  const checkedLinks = new Set();
  const brokenLinks = [];

  const MAX_PAGES = 100;

  function normalizeUrl(url) {
    return url.split("#")[0].replace(/\/$/, "");
  }

  function isValidInternalUrl(url) {
    try {
      const parsedUrl = new URL(url);

      return (
        parsedUrl.origin === window.location.origin &&
        !url.startsWith("mailto:") &&
        !url.startsWith("tel:") &&
        !url.startsWith("javascript:")
      );
    } catch {
      return false;
    }
  }

  function scanPage(url) {

    if (visitedPages.has(url)) {
      return;
    }

    if (visitedPages.size >= MAX_PAGES) {
      return;
    }

    visitedPages.add(url);

    cy.log(`🔍 Scanning page: ${url}`);

    cy.visit(url, {
      failOnStatusCode: false,
    });

    cy.get("a[href]").each(($link) => {

      const href = $link.prop("href");

      if (!href) {
        return;
      }

      const cleanUrl = normalizeUrl(href);

      // Only scan internal links
      if (!isValidInternalUrl(cleanUrl)) {
        return;
      }

      // Don't check duplicate links
      if (checkedLinks.has(cleanUrl)) {
        return;
      }

      checkedLinks.add(cleanUrl);

      cy.request({
        url: cleanUrl,
        failOnStatusCode: false,
      }).then((response) => {

        if (response.status >= 400) {

          brokenLinks.push({
            url: cleanUrl,
            status: response.status,
            page: url,
          });

          cy.log(
            `❌ BROKEN LINK: ${cleanUrl} | Status: ${response.status}`
          );

        } else {

          cy.log(
            `✅ ${cleanUrl} | Status: ${response.status}`
          );

          // Crawl the working internal page
          if (visitedPages.size < MAX_PAGES) {
            scanPage(cleanUrl);
          }

        }

      });

    });

  }

  it("Automatically scans website for broken links", () => {

    const startPage = "/";

    scanPage(startPage);

    cy.then(() => {

      cy.log("====================================");
      cy.log("       BROKEN LINK SCAN REPORT");
      cy.log("====================================");

      cy.log(`Pages Scanned: ${visitedPages.size}`);
      cy.log(`Links Checked: ${checkedLinks.size}`);
      cy.log(`Broken Links: ${brokenLinks.length}`);

      if (brokenLinks.length > 0) {

        brokenLinks.forEach((link) => {

          cy.log(
            `❌ ${link.url} | ${link.status} | Found on: ${link.page}`
          );

        });

      } else {

        cy.log("🎉 No broken links found!");

      }

      cy.log("====================================");

      expect(
        brokenLinks,
        "Website should not contain broken links"
      ).to.have.length(0);

    });

  });

});