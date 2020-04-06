import React from "react";

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <h2>About</h2>
        <p>This app was made following a course on Pluralsight using React.</p>
        <a
          href="https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to course
        </a>
      </>
    );
  }
}

export default AboutPage;
