import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const TechSkills: FunctionComponent = () => {
  return (
    <>
      <h2>Technical Skills</h2>
      <ul>
        <li>
          <p>
            <Link href="https://react.dev/" target="_blank">React</Link> - Developed reusable UI components and
            state management solutions using hooks and context API.
          </p>
        </li>
        <li>
          <p>
            <Link href="https://nextjs.org/" target="_blank">Next.js</Link> - Built server-rendered applications
            with static site generation and API routes for improved performance and SEO.
          </p>
        </li>
        <li>
          <p>
            <Link href="https://redux.js.org/" target="_blank">Redux</Link> - Managed global state with actions and
            reducers for predictable state updates across complex applications.
          </p>
        </li>
        <li>
          <p>
            <Link href="https://sass-lang.com/" target="_blank">SASS</Link> - Authored modular stylesheets and used
            mixins and functions to enhance maintainability and scalability of CSS.
          </p>
        </li>
      </ul>
    </>
  );
};

export default TechSkills;