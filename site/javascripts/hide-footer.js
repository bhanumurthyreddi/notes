function removeZensicalBranding() {
  document.querySelectorAll(".md-footer-meta a[href='https://zensical.org/']").forEach((link) => {
    const copyright = link.closest(".md-copyright");

    if (link.textContent.trim() === "Zensical" && copyright?.textContent.includes("Made with")) {
      link.remove();

      copyright.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("Made with")) {
          node.remove();
        }
      });
    }
  });
}

document$.subscribe(removeZensicalBranding);
