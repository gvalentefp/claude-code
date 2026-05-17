#!/usr/bin/env node

const { spawn } = require('node:child_process')
const { join } = require('node:path')
const { readFileSync } = require('node:fs')

const bunCmd = process.platform === 'win32' ? 'bun.exe' : 'bun'
const cliEntry = join(__dirname, '..', 'dist', 'cli.js')
const args = process.argv.slice(2)

if (args.length === 1 && ['--version', '-v', '-V'].includes(args[0])) {
  const pkgPath = join(__dirname, '..', 'package.json')
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
  process.stdout.write(`${pkg.version} (Claude Code)\n`)
  process.exit(0)
}

const child = spawn(bunCmd, [cliEntry, ...args], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

child.on('exit', code => {
  process.exit(code ?? 0)
})

child.on('error', err => {
  if (err && err.code === 'ENOENT') {
    console.error('bun was not found in PATH. Install Bun or add it to PATH.')
  } else {
    console.error('Failed to start claude-local:', err && err.message ? err.message : String(err))
  }
  process.exit(1)
})
