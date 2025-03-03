#!/usr/bin/env node

/**
 * MCP Setup CLI
 * A command line tool to set up Model Context Protocol for Cursor IDE
 */

const { program } = require('commander');
const chalk = require('chalk');
const { setupMCP } = require('./src/setup-mcp');
const packageJson = require('./package.json');

// Setup Commander
program
  .name('mcp-setup')
  .description('Setup Model Context Protocol for Cursor IDE')
  .version(packageJson.version)
  .option('-v, --verbose', 'Enable verbose output')
  .option('-y, --yes', 'Skip all confirmation prompts')
  .parse(process.argv);

// Get the options
const options = program.opts();

// Show header
console.log(chalk.bold.cyan('\n🚀 MCP Setup CLI\n'));
console.log(chalk.gray(`Version: ${packageJson.version}\n`));

// Start the setup process
setupMCP(options)
  .then(() => {
    console.log(chalk.green('\n✅ MCP setup completed successfully!'));
    console.log(chalk.cyan('\nNext steps:'));
    console.log('  1. Restart Cursor IDE');
    console.log('  2. Start the MCP server with: npm run mcp');
    console.log('  3. Begin working with AI assistance');
    console.log('\nEnjoy enhanced AI-assisted development!\n');
  })
  .catch((error) => {
    console.error(chalk.red('\n❌ Error:'), error.message);
    if (options.verbose) {
      console.error(chalk.gray('\nStack trace:'), error.stack);
    }
    console.log(chalk.yellow('\nTry running with --verbose flag for more details.\n'));
    process.exit(1);
  }); 