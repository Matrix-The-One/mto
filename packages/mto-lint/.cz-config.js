/**
 * @link https://github.com/leoforfree/cz-customizable
 * @type {import('cz-customizable').Options}
 */
module.exports = {
  types: [
    { value: 'feat', name: '✨feat         新增功能' },
    { value: 'fix', name: '🐛fix          修复缺陷' },
    { value: 'docs', name: '📚docs         文档更新' },
    { value: 'style', name: '💎style        代码格式' },
    { value: 'refactor', name: '🔄refactor     代码重构' },
    { value: 'perf', name: '🚀perf         性能优化' },
    { value: 'test', name: '✅test         测试相关' },
    { value: 'build', name: '📦build        构建相关' },
    { value: 'ci', name: '⚓ci           持续集成' },
    { value: 'chore', name: '🔨chore        其他更改' },
    { value: 'revert', name: '⏪revert       回滚代码' },
  ],
  messages: {
    type: '选择你要进行提交的类型',
    scope: '表示此更改的范围，如：组件或文件名（可选）',
    customScope: '表示此更改的范围，如：组件或文件名（可选）',
    subject: '用简短的话语描述此变更',
    body: '提供更详细的变更说明，使用“|”进行换行（可选）',
    breaking: '列出任何重大变化（可选）',
    footer: '列出此更改关闭的任何问题，如：#31, #34（可选）',
    confirmCommit: '您确定要继续执行上述提交操作吗？',
  },
  skipQuestions: ['body', 'footer'],
}
