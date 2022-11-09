import React from 'react';

const Blog = () => {
  return (
    <section className="dark:text-green-600 mt-10">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">Blog</h2>
        <p className="mt-4 mb-8 dark:text-white">Here some answer of frequently asked question.</p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Difference between SQL and NoSQL?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              When it comes to choosing a database the biggest decisions is picking a relational
              (SQL) or non-relational (NoSQL) data structure. While both the databases are viable
              options still there are certain key differences between the two that users must keep
              in mind when making a decision. The Main Differences:
              <ul>
                <li>
                  <b>1. Type –</b>
                  SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL
                  database are primarily called as non-relational or distributed database.{' '}
                </li>
                <li>
                  <b> 2 .Language – SQL</b>
                  databases defines and manipulates data based structured query language (SQL).
                  Seeing from a side this language is extremely powerful. SQL is one of the most
                  versatile and widely-used options available which makes it a safe choice
                  especially for great complex queries. But from other side it can be restrictive.
                  SQL requires you to use predefined schemas to determine the structure of your data
                  before you work with it. Also all of your data must follow the same structure.
                  This can require significant up-front preparation which means that a change in the
                  structure would be both difficult and disruptive to your whole system. A NoSQL
                  database has dynamic schema for unstructured data. Data is stored in many ways
                  which means it can be document-oriented, column-oriented, graph-based or organized
                  as a KeyValue store. This flexibility means that documents can be created without
                  having defined structure first. Also each document can have its own unique
                  structure. The syntax varies from database to database, and you can add fields as
                  you go.
                </li>
                <li>
                  <b>3. Scalability – </b>
                  In almost all situations SQL databases are vertically scalable. This means that
                  you can increase the load on a single server by increasing things like RAM, CPU or
                  SSD. But on the other hand NoSQL databases are horizontally scalable. This means
                  that you handle more traffic by sharding, or adding more servers in your NoSQL
                  database. It is similar to adding more floors to the same building versus adding
                  more buildings to the neighborhood. Thus NoSQL can ultimately become larger and
                  more powerful, making these databases the preferred choice for large or
                  ever-changing data sets.{' '}
                </li>
                <li>
                  {' '}
                  <b>4.Structure – </b>
                  SQL databases are table-based on the other hand NoSQL databases are either
                  key-value pairs, document-based, graph databases or wide-column stores. This makes
                  relational SQL databases a better option for applications that require multi-row
                  transactions such as an accounting system or for legacy systems that were built
                  for a relational structure.
                </li>
                <li>
                  <b>5. Property followed –</b>
                  SQL databases follow ACID properties (Atomicity, Consistency, Isolation and
                  Durability) whereas the NoSQL database follows the Brewers CAP theorem
                  (Consistency, Availability and Partition tolerance). Support – Great support is
                  available for all SQL database from their vendors. Also a lot of independent
                  consultations are there who can help you with SQL database for a very large scale
                  deployments but for some NoSQL database you still have to rely on community
                  support and only limited outside experts are available for setting up and
                  deploying your large scale NoSQL deployments.{' '}
                </li>
              </ul>
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is JWT, and how does it work??
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              <b>What Is JWT?</b> JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT contains encoded
              JSON objects, including a set of claims. JWTs are signed using a cryptographic
              algorithm to ensure that the claims cannot be altered after the token is issued.
              <br></br>
              <b> How JWT Works</b> JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two parties. What these claims
              are depends on the use case at hand. For example, a claim may assert who issued the
              token, how long it is valid for, or what permissions the client has been granted. A
              JWT is a string made up of three parts, separated by dots (.), and serialized using
              base64. In the most common serialization format, compact serialization, the JWT looks
              something like this: xxxxx.yyyyy.zzzzz.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the difference between javascript and NodeJS?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              <b>1.</b> JavaScript is a client-side scripting language that is lightweight,
              cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other
              hand, is a V8-based server-side programming language. As a result, it is used to
              create network-centric applications. It's a networked system made for data-intensive
              real-time applications. If we compare node js vs. python, it is clear that node js
              will always be the preferred option.<br></br> <b>2.</b>JavaScript is a simple
              programming language that can be used with any browser that has the JavaScript Engine
              installed. Node.js, on the other hand, is an interpreter or execution environment for
              the JavaScript programming language. It requires libraries that can be conveniently
              accessed from JavaScript programming to be more helpful. <br></br> <b>3.</b> Any
              engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any
              working environment is similar to a complete browser. Node.js, on the other hand, only
              enables the V8 engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
              <br></br> <b>4.</b> A specific non-blocking operation is required to access any
              operating system. There are a few essential objects in JavaScript, but they are
              entirely OS-specific. Node.js, on the other hand, can now operate non-blocking
              software tasks out of any JavaScript programming. It contains no OS-specific
              constants. Node.js establishes a strong relationship with the system files, allowing
              companies to read and write to the hard drive. <br></br> <b>5.</b> The critical
              benefits of JavaScript include a wide choice of interfaces and interactions and just
              the proper amount of server contact and direct visitor input. Node.js, on the other
              hand, offers node package management with over 500 modules and the capacity to handle
              many requests at the same time. It also offers the unique ability to enable
              microservice architecture and the Internet of Things. Even when comparing node js vs.
              react js, node js always wins.{' '}
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does NodeJS handle multiple requests at the same time?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              We know NodeJS application is single-threaded. Say, if processing involves request A
              that takes 10 seconds, it does not mean that a request which comes after this request
              needs to wait 10 seconds to start processing because NodeJS event loops are only
              single-threaded. The entire NodeJS architecture is not single-threaded. How NodeJS
              handle multiple client requests? NodeJS receives multiple client requests and places
              them into EventQueue. NodeJS is built with the concept of event-driven architecture.
              NodeJS has its own EventLoop which is an infinite loop that receives requests and
              processes them. EventLoop is the listener for the EventQueue. If NodeJS can process
              the request without I/O blocking then the event loop would itself process the request
              and sends the response back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or worker_threads module.{' '}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
