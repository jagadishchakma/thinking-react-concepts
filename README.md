# Thinking React Higher Order Component
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="300" height="300"/>

- Function that Returns a Component: A Higher-Order Component is a function that takes a component as input and returns a new component with enhanced behavior.

- Reusability: HOCs promote code reuse by encapsulating logic that can be shared across multiple components.

- Behavior Injection: HOCs inject additional props or behavior into the wrapped component. This can include state, methods, or context.

- Wrapper Component: The HOC creates a - new component that wraps the original component. It can manipulate props, manage state, or alter rendering.

- No Direct Mutation: HOCs don't modify the input component. Instead, they create a new component that wraps the original one.

- Example Use Cases: HOCs are useful for tasks like handling authentication, providing data from an API, managing state, or adding logging.

- Usage: To use an HOC, you apply it to a component using JSX syntax. The HOC function call surrounds the component, adding functionality.

- Props Proxy: Some HOCs may pass all received props down to the wrapped component, allowing seamless integration.

- Composition: You can chain multiple HOCs together to create more complex components with combined behaviors.

- Higher-Level Logic: HOCs abstract away complex logic, improving the readability and maintainability of components.

- Limitations: Can lead to a deep component nesting, potentially affecting performance and debugging.

- Common HOCs: Libraries like Redux use HOCs for connecting components to the store. React Router also employs HOCs for route protection.

- Hooks Alternative: React Hooks offer an alternative to HOCs for managing state and logic within functional components.

- Avoid Overuse: While powerful, using too many HOCs can complicate the component hierarchy. Choose judiciously.

- Community Resources: The React community provides many pre-built HOCs that you can integrate into your projects.

