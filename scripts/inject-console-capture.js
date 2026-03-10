const fs = require('fs')
const path = require('path')

const outDir = path.join(process.cwd(), '.next')
const scriptTag = '<script src="/dashboard-console-capture.js"></script>'

function injectScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  if (content.includes(scriptTag)) return

  const updated = content.replace('</head>', `${scriptTag}</head>`)
  fs.writeFileSync(filePath, updated, 'utf8')
}

function walkDir(directory) {
  if (!fs.existsSync(directory)) return
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  entries.forEach((entry) => {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      walkDir(fullPath)
    } else if (entry.isFile() && fullPath.endsWith('.html')) {
      injectScript(fullPath)
    }
  })
}

walkDir(outDir)