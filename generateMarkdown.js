import makeBadge from "badge-maker";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const link = renderLicenseLink(license);
  const format = {
    label: 'build',
    message: `${license}`,
    color: 'brightgreen',
    link: `${link}`,
  }

  const badge = makeBadge(format);

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link;

  if (license === "GNU GPLv3") {
    link = "https://www.gnu.org/licenses/agpl-3.0";
  } else if (license === "Mozilla public License 2.0") {
    link = "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "Apache License 2.0") {
    link = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "MIT License") {
    link = "https://opensource.org/licenses/MIT";
  } else if (license === "The Unlicense") {
    link = "http://unlicense.org/";
  } else if (license === "None" || "") {
    link = "";
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section;
  const badge = renderLicenseBadge(license);
  if(license === "None" || "") {
    section = "";
  } else {
    section = `## License:  
    ${license}  
    ##Badge:  
    ${badge}`;
  }

  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {
   const back = renderLicenseSection(license)

  return back;
}

export { generateMarkdown };
