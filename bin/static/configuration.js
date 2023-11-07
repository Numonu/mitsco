export default {
    style: "%type%:%message%",
    types: [
        {
            type: "chore",
            description: "used for maintenance tasks, refactoring, dependency updates, etc.",
        },
        {
            type: "feat",
            description: "used to add a new feature.",
        },
        {
            type: "fix",
            description: "used to fix a bug or issue.",
        },
        {
            type: "refactor",
            description: "used for code changes that do not fix bugs or add new features.",
        },
        {
            type: "style",
            description: "used for changes that do not affect code functionality (e.g., code formatting or style changes).",
        },
        {
            type: "docs",
            description: "used for documentation changes.",
        },
        {
            type: "test",
            description: "used to add or improve tests.",
        }
    ],
};
