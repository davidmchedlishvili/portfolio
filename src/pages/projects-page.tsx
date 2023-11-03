import './projects-page.css';

function ProjectsPage() {
  return (
    <div className="project-container">
          <h1>Recipe Management Application - Backend API</h1>
          <p>
The Recipe Management Application is designed to help users organize, discover, and share recipes. The application provides a REST API for creating, storing, and managing recipes, as well as exploring a diverse collection of recipes shared by the community. The primary objective of this project is to develop a comprehensive and intuitive recipe management tool that simplifies the cooking and meal planning experience for users.            {/* Include the rest of the introduction text here */}
          </p>
          <p>The Recipe Management Application API project aims at developing the backend API's for the application using REST API using Java, SQL and Javalin technologies. The project aims at developing REST API's which communicates with the database to store and manipulate data stored in the database.</p>

          <h2>Roles / Responsibilities</h2>
          <ol>
              <li>
                  <h2>Project Development:</h2>
                  <ol>
                      <li>Developed Java-based application for chefs.</li>
                      <li>Focused on recipe management.</li>
                      <li>Utilized Java and Javalin.</li>
                      <li>Employed SQL for data management.</li>
                      <li>Focused on backend API development.</li>
                  </ol>
              </li>

              <li>
                  <h2>Technical Implementation:</h2>
                  <ol>
                      <li>Used MVC architectural pattern.</li>
                      <li>Implemented relational database design.</li>
                      <li>Maintained chef/recipe database entities.</li>
                      <li>Employed advanced SQL functionalities.</li>
                      <li>Streamlined backend data structures.</li>
                  </ol>
              </li>

              <li>
                  <h2>Data Access & Service Layers:</h2>
                  <ol>
                      <li>Streamlined data operations focus.</li>
                      <li>Developed DAO interfaces.</li>
                      <li>Created ChefService for business logic.</li>
                      <li>Established RecipeService for data.</li>
                      <li>Emphasized structured data handling.</li>
                  </ol>
              </li>

              <li>
                  <h2>Web Layer & User Interaction:</h2>
                  <ol>
                      <li>Utilized Javalin for routing/controllers.</li>
                      <li>Ensured user-friendly navigation.</li>
                      <li>Integrated authentication measures.</li>
                      <li>Implemented UUIDs for sessions.</li>
                      <li>Prioritized secure user interactions.</li>
                  </ol>
              </li>

              <li>
                  <h2>Team Collaboration:</h2>
                  <ol>
                      <li>Coordinated with other team members.</li>
                      <li>Ensured backend API alignment.</li>
                      <li>Regularly participated in code reviews.</li>
                      <li>Maintained coding best practices.</li>
                      <li>Fostered a collaborative environment.</li>
                  </ol>
              </li>
          </ol>

          <h2>Environment / Technologies</h2>
          <p>Java, SQL, Javalin, Git, REST</p>

         <hr />

          <h1>Recipe Management Application - FrontEnd UI</h1>
              <p>The Recipe Management Application is designed to help users organize, discover, and share recipes. The application provides a user-friendly interface for creating, storing, and managing recipes, as well as exploring a diverse collection of recipes shared by the community. The primary objective of this project is to develop a comprehensive and intuitive recipe management tool that simplifies the cooking and meal planning experience for users.</p>

              <p>The Project aims at developing the front end of the Recipe Management Application using HTML, CSS, and JavaScript. The Recipe Management FrontEnd makes use of HTML, CSS, and JavaScript and provides a user-friendly interface to make calls to the Recipe Management Application API.</p>

              <h2>Roles / Responsibilities</h2>

              <h3>1. UI/UX Design and Structure:</h3>
              <ol>
                  <li>Designed and structured the HTML pages: recipe, login, registration, and ingredients pages.</li>
                  <li>Implemented CSS for consistent styling across all pages, ensuring a smooth user experience.</li>
                  <li>Embedded interactive components like buttons, input fields, and search bars in accordance with user flow.</li>
                  <li>Ensured responsive design for varying screen sizes and devices.</li>
                  <li>Added conditional UI elements such as the admin link, based on user roles.</li>
              </ol>

              <h3>2. Front-end Development and DOM Manipulation:</h3>
              <ol>
                  <li>Implemented JavaScript functionality for DOM interactions, including CRUD operations on recipes and ingredients.</li>
                  <li>Handled form input validations, such as matching password fields during registration.</li>
                  <li>Created dynamic interactions, like displaying search results or updating the recipe list in real-time.</li>
                  <li>Managed session data, such as storing and retrieving the auth-token.</li>
                  <li>Enhanced user feedback mechanisms, including alerts for unsuccessful logins or registrations.</li>
              </ol>

              <h3>3. Backend Integration and API Calls:</h3>
              <ol>
                  <li>Integrated fetch/AJAX request for operations like login, registration, adding recipes, and more.</li>
                  <li>Handled CRUD API calls for recipes and ingredients, updating frontend displays accordingly.</li>
                  <li>Implemented error handling for failed API requests, providing informative feedback to the user.</li>
                  <li>Ensured the correct setting of HTTP headers, such as "Authorization" and "Access-Control-Allow-Origin".</li>
                  <li>Refreshed content dynamically, like reloading recipes after adding a new one, without needing a full page reload.</li>
              </ol>

              <h3>4. Authentication and Role-based Functionality:</h3>
              <ol>
                  <li>Implemented and tested the user login functionality, redirecting successful logins and alerting failed attempts.</li>
                  <li>Designed and developed a user registration flow, including backend integration.</li>
                  <li>Managed user session variables, including auth-tokens and roles (chef or admin).</li>
                  <li>Implemented role-based access controls, such as restricting ingredient CRUD operations to admins only.</li>
                  <li>Enhanced security features, like secure password handling during registration and login.</li>
              </ol>

              <h3>5. Quality Assurance and Testing:</h3>
              <ol>
                  <li>Tested all functionalities in real-time to ensure smooth user flow.</li>
                  <li>Mocked backend behavior in tests to validate frontend operations, especially API integrations.</li>
                  <li>Implemented unit tests for JavaScript functions ensuring reliable DOM manipulations.</li>
                  <li>Checked for consistent UI/UX design across different browsers and devices.</li>
                  <li>Validated security and authentication mechanisms, ensuring role-based restrictions worked accurately.</li>
              </ol>

              <h2>Environment / Technologies</h2>
              <p>HTML, CSS, JavaScript, TypeScript, Angular</p>
    </div>
  );
}

export default ProjectsPage;