(function () {
  const sources = [];

  function captureSources(root) {
    root.querySelectorAll("pre.mermaid").forEach((block, index) => {
      const source = block.textContent.trim();
      if (source && !sources[index]) {
        sources[index] = source;
      }
    });
  }

  async function renderEmptyDiagrams(root) {
    if (!window.mermaid) {
      return;
    }

    const diagrams = root.querySelectorAll(".mermaid");

    for (const [index, diagram] of diagrams.entries()) {
      if (diagram.querySelector("svg")) {
        continue;
      }

      const source = diagram.textContent.trim() || sources[index];

      if (!source) {
        continue;
      }

      try {
        const id = `mermaid-fallback-${Date.now()}-${index}`;
        const { svg } = await window.mermaid.render(id, source);
        diagram.innerHTML = svg;
      } catch (error) {
        console.error("Unable to render Mermaid diagram", error);
      }
    }
  }

  function processDiagrams(root) {
    captureSources(root);
    setTimeout(() => renderEmptyDiagrams(root), 0);
    setTimeout(() => renderEmptyDiagrams(root), 250);
  }

  processDiagrams(document);

  document$.subscribe(({ body }) => {
    processDiagrams(body);
  });
})();
