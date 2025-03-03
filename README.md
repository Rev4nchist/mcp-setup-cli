# MCP Setup CLI

A command-line tool to set up the Model Context Protocol (MCP) Memory Server for Cursor IDE.

## Features

- ✨ **Local Installation**: Installs MCP Memory Server as a project dependency
- 🔍 **Smart Project Detection**: Automatically detects project type, frameworks, and patterns
- 📝 **Project Rules**: Generates tailored rules based on your codebase
- 💾 **Memory Management**: Creates a local memory file and backup utilities
- ⚙️ **Auto Configuration**: Sets up Cursor IDE with optimal settings
- 🚀 **Interactive UI**: User-friendly command line interface with progress indicators

## Installation

You can install the package globally:

```bash
npm install -g mcp-setup-cli
```

Or use it directly with npx:

```bash
npx mcp-setup-cli
```

## Usage

### Basic Usage

Navigate to your project directory and run:

```bash
mcp-setup
```

This will:
1. Install MCP Memory Server locally in your project
2. Analyze your project structure
3. Configure Cursor IDE
4. Generate project-specific rules
5. Set up a memory file and utilities

### Options

```bash
mcp-setup --help
```

Available options:
- `-v, --verbose`: Show detailed output
- `-y, --yes`: Skip confirmation prompts
- `--version`: Show version information

## What Gets Installed

The setup process creates:

### In Your Project

- `.mcp/`: Directory for memory storage and utilities
  - `ai_memory.json`: The memory file
  - `backups/`: Directory for memory backups
  - `backup-memory.js`: Utility for creating backups
  - `memory-explorer.js`: Simple web viewer for memory entries

- `.cursor/rules/`: Directory for Cursor rules
  - `project-rules.mdc`: Main project rules
  - Additional rules based on detected patterns

### In Your package.json

New npm scripts:
- `mcp`: Start the MCP Memory Server
- `mcp:backup`: Create a backup of the memory file
- `mcp:explore`: Start the memory explorer web interface

### In Cursor IDE

- Configuration to use the local MCP Memory Server
- Optimized AI settings

## After Installation

1. Restart Cursor IDE
2. Run `npm run mcp` to start the MCP Memory Server
3. Start coding with enhanced AI assistance!

## Supported Project Types

Automatically detects and configures for:

- React / Next.js
- Vue / Nuxt.js
- Angular
- Node.js (Express, Koa, etc.)
- Python (Django, Flask, FastAPI)
- And more!

## How It Works

1. **Project Analysis**: Scans your project to identify frameworks, patterns, and structures
2. **Local Installation**: Installs the MCP Memory Server as a dev dependency
3. **Configuration**: Sets up Cursor IDE to use the local server
4. **Rule Generation**: Creates tailored rules based on detected patterns
5. **Memory Setup**: Initializes a memory file with project context
6. **Utilities**: Creates backup and exploration tools

## License

MIT

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details. 