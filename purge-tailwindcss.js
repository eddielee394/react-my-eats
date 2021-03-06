const Purgecss = require("purgecss");
const fs = require("fs");
const path = require("path");

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const purgecss = new Purgecss({
  content: ["./src/**/*.js"],
  css: ["./src/assets/styles/utils/tailwind.css"],
  rejected: true,
  whitelist: ["pl-24", "pl-40", "pl-56", "pl-72", "pl-80", "w-1/5", "sm:w-1/5"],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["html", "js"]
    }
  ]
});

const result = purgecss.purge();

result.forEach(out => {
  fs.writeFileSync(path.resolve(__dirname, out.file), out.css, "utf-8");
});

console.log("src/assets/styles/utils/tailwind.css successfully purged.");
