#!/bin/bash

# Project Information
PROJECT_NAME="devops-scripts"
PROJECT_DESCRIPTION="A collection of helpful DevOps scripts"
AUTHOR="Your Name"

# Git Information
REPOSITORY_URL="https://github.com/your-username/devops-scripts.git"
REPOSITORY_BRANCH="main"

# Build and Deployment Information
BUILD_SCRIPT="build.sh"
DEPLOY_SCRIPT="deploy.sh"
```

```bash
#!/bin/bash

# Set environment variables from file
. env.sh

# Build and deploy the project
bash $BUILD_SCRIPT
bash $DEPLOY_SCRIPT