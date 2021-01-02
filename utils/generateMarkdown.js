// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## ${data.description}

  ## Table of Contents
  This is my README
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [Tests](#Tests)
  * [License](#License)
  * [Contacts](#Contacts)

  Page is live: [HERE](https://${data.username}.github.io/${data.title}/)

  # Installation
  * ${data.installation}

  # Usage
  * ${data.usage}

  # Credits
  * ${data.credits}

  # Tests
  * ${data.tests}

  # License
  * [${data.license}](https://github.com/${data.username}/${data.title}/blob/main/LICENSE)

  # Contacts
  * ${data.contacts}

  `;
}

module.exports = generateMarkdown;