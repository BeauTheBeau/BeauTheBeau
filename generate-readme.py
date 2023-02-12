import json

readme = open('README.md', 'w')


def generate_projects():
    with open('projects.json') as project_file:
        projects = json.load(project_file)

    readme.write('\n------------------\n')
    readme.write('# Projects\n')

    for project in projects:
        project = projects[project]

        readme.write(f"## {project['title']} | [Website]({project['url']})")

        # If there is a GitHub repo, add it
        if 'github' in project:
            readme.write(f" | [GitHub]({project['github']})")

        readme.write(f"\n{project['description']}\n")


# Get first.txt and write it to README2.md
with open('first.txt') as f:
    readme.write(f.read())

    generate_projects()
