const inquirer = require('inquirer');
const { exec } = require('child_process');
const { promisify } = require('util');
const chalk = require('chalk');

const execAsync = promisify(exec);

// ─── Banner ───────────────────────────────────────────────────────────────────
function showBanner() {
  console.clear();
  console.log(chalk.cyan.bold(`
  ██████╗ ███████╗██╗   ██╗███╗   ███╗██╗███╗   ██╗██████╗ 
  ██╔══██╗██╔════╝██║   ██║████╗ ████║██║████╗  ██║██╔══██╗
  ██║  ██║█████╗  ██║   ██║██╔████╔██║██║██╔██╗ ██║██║  ██║
  ██║  ██║██╔══╝  ╚██╗ ██╔╝██║╚██╔╝██║██║██║╚██╗██║██║  ██║
  ██████╔╝███████╗ ╚████╔╝ ██║ ╚═╝ ██║██║██║ ╚████║██████╔╝
  ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝ 
  `));
  console.log(chalk.gray('  Unified developer assistant for database and codebase context\n'));
  console.log(chalk.gray('  ─────────────────────────────────────────────────────────────\n'));
}

// ─── Command Groups ───────────────────────────────────────────────────────────
const COMMAND_GROUPS = [
  {
    label: '⚡ CORE SETUP',
    commands: [
      { name: `${chalk.green('init')}          ${chalk.gray('Initialize DevMind in your project')}`,          value: 'devmind init' },
      { name: `${chalk.green('generate')}      ${chalk.gray('Generate context from database and/or codebase')}`, value: 'devmind generate --sqlite .devmind/database.sqlite' },
      { name: `${chalk.green('scan')}          ${chalk.gray('Scan codebase and generate context')}`,          value: 'devmind scan' },
      { name: `${chalk.green('validate')}      ${chalk.gray('Validate generated context against database')}`, value: 'devmind validate' },
    ],
  },
  {
    label: '🔍 CONTEXT & ANALYSIS',
    commands: [
      { name: `${chalk.blue('status')}        ${chalk.gray('Show context status and recommended next command')}`, value: 'devmind status' },
      { name: `${chalk.blue('show')}          ${chalk.gray('Show current database schema')}`,                  value: 'devmind show' },
      { name: `${chalk.blue('analyze')}       ${chalk.gray('Analyze code-to-database usage')}`,               value: 'devmind analyze' },
      { name: `${chalk.blue('context')}       ${chalk.gray('Get focused context for a specific codebase part')}`, value: 'devmind context' },
      { name: `${chalk.blue('retrieve')}      ${chalk.gray('Retrieve focused context using index metadata')}`, value: 'devmind retrieve' },
      { name: `${chalk.blue('watch')}         ${chalk.gray('Watch for database schema changes')}`,            value: 'devmind watch' },
    ],
  },
  {
    label: '🧠 SESSION & LEARNING',
    commands: [
      { name: `${chalk.magenta('history')}       ${chalk.gray('View session history')}`,                      value: 'devmind history' },
      { name: `${chalk.magenta('learn')}         ${chalk.gray('Add a learning to accumulated knowledge')}`,   value: 'devmind learn' },
      { name: `${chalk.magenta('extract')}       ${chalk.gray('Extract learning candidates from code')}`,     value: 'devmind extract' },
      { name: `${chalk.magenta('audit')}         ${chalk.gray('Audit codebase coverage against learnings')}`, value: 'devmind audit' },
      { name: `${chalk.magenta('checkpoint')}    ${chalk.gray('Save or restore session checkpoint')}`,        value: 'devmind checkpoint' },
      { name: `${chalk.magenta('autosave')}      ${chalk.gray('Persist session journal and auto-apply learnings')}`, value: 'devmind autosave' },
      { name: `${chalk.magenta('handoff')}       ${chalk.gray('Multi-agent handoff management')}`,            value: 'devmind handoff' },
    ],
  },
  {
    label: '🎨 DESIGN & PLUGINS',
    commands: [
      { name: `${chalk.yellow('design-system')} ${chalk.gray('Manage design system profile for UI checks')}`, value: 'devmind design-system' },
      { name: `${chalk.yellow('claude-plugin')} ${chalk.gray('Generate Claude Code plugin for DevMind')}`,    value: 'devmind claude-plugin' },
      { name: `${chalk.yellow('codex-plugin')}  ${chalk.gray('Install DevMind skill for Codex CLI')}`,        value: 'devmind codex-plugin' },
      { name: `${chalk.yellow('openclaw')}      ${chalk.gray('Install DevMind skill for OpenClaw')}`,         value: 'devmind openclaw-plugin' },
    ],
  },
  {
    label: '🚪 EXIT',
    commands: [
      { name: chalk.red('Exit DevMind CLI'), value: null },
    ],
  },
];

// ─── Build Flat Choices with Separators ──────────────────────────────────────
function buildChoices() {
  const choices = [];
  for (const group of COMMAND_GROUPS) {
    choices.push(new inquirer.Separator(chalk.white.bold(`\n  ${group.label}`)));
    choices.push(...group.commands);
  }
  return choices;
}

// ─── Execute Command ──────────────────────────────────────────────────────────
async function executeCommand(command) {
  console.log(chalk.cyan(`\n  ▶ Running: ${chalk.bold(command)}\n`));
  console.log(chalk.gray('  ─────────────────────────────────────\n'));

  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) console.warn(chalk.yellow(`  ⚠  Warning:\n${stderr}`));
    if (stdout) console.log(chalk.green(`${stdout}`));
    console.log(chalk.green('\n  ✔  Done!\n'));
  } catch (err) {
    console.error(chalk.red(`\n  ✖  Error: ${err.message}\n`));
  }

  // Pause before returning to menu
  await inquirer.prompt([{
    type: 'input',
    name: 'continue',
    message: chalk.gray('  Press Enter to return to menu...'),
  }]);
}

// ─── Main Menu Loop ───────────────────────────────────────────────────────────
async function showMenu() {
  while (true) {
    showBanner();

    const { command } = await inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: chalk.white.bold('  What would you like to do?'),
        choices: buildChoices(),
        pageSize: 20,
      },
    ]);

    if (!command) {
      console.log(chalk.cyan('\n  👋 Goodbye! Happy coding, Ashutosh!\n'));
      break;
    }

    await executeCommand(command);
  }
}

// ─── Run ──────────────────────────────────────────────────────────────────────
showMenu().catch((err) => console.error(chalk.red(`\n  Fatal: ${err.message}\n`)));
