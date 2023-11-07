
<center>

![Mitsco logo](/out/images/logo.png)

# Mitsco

**Command line tool to manage commit messages**

Mitsco is a command line tool that simplifies the creation of commits following specific and custom conventions, as well as allowing you to define the style of your commit messages. This streamlines the process of keeping track of changes to your project and encourages effective collaboration between team members.

</center>

## Features

-  🔥 **Custom Conventions** : Define your own conventions for commit messages according to the specific needs of your project.

-  🤩 **Configurable Message Styling** : Customize the style of your commit messages with ease, using placeholders such as **%type%** and **%message%**.

-  ⏳ **Easy to Use** : Mitsco command line interface is intuitive and easy to use, streamlining the process of creating conventional commits.

## Installation

To start using Mitsco, install it as a global dependency using npm:

```bash
npm install -g mitsco
```

## Usage

To start using Mitsco, simply run the command mitsco in the root directory of your Git repository:

```bash
mitsco
```

Follow the on-screen instructions to create commits following your custom conventions and message style.

1. Select the type of commit you want to make:

![step one](/out/images/step01.png)

2. Add a custom message to the commit:

![step two](/out/images/step02.png)

3. Commit:

![step three](/out/images/step03.png)

## Customization

You can configure the conventions and style of commit messages by creating a configuration file called **mitsco.config.json** in the root directory of your project.

### Style

Define the style of the commit messages. Use **%type%** for the commit type and **%message%** for your custom message.

```json
{
    "style": "%type% : %message%" // feat : create new component
}
```

### Types

The type convention defines the categories of commits to be used. By default, Mitsco uses the types provided by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```json
{
    "types": [
        {
            "type": "chore",
            "description": "used for maintenance tasks, refactoring, dependency updates, etc."
        },
        {
            "type": "feat",
            "description": "used to add a new feature."
        },
        {
            "type": "fix",
            "description": "used to fix a bug or issue."
        },
        {
            "type": "refactor",
            "description": "used for code changes that do not fix bugs or add new features."
        },
        {
            "type": "style",
            "description": "used for changes that do not affect code functionality (e.g., code formatting or style changes)."
        },
        {
            "type": "docs",
            "description": "used for documentation changes."
        },
        {
            "type": "test",
            "description": "used to add or improve tests."
        }
    ]
}
```

## Contributions

If you want to contribute to Mitsco or report issues, visit the [contribution guide](/out/docs/contributing.md)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENCE.txt) file for more details.
