# Lexical Text Style Plugin Challenge

This is the challenge for the second round of our front-end developer recruitment process. In this challenge, you will create a plugin using the Lexical framework that applies a red line style to the selected text node and displays a modal to approve or cancel the suggested text replacement. The technologies you will use are React, Next.js, and Typescript.

## Requirements

1. **Create a plugin:** The plugin should be able to apply a red line style to the selected text node.
2. **Design a custom node:** You need to create a custom node that supports applying the style and text replacement.
3. **Add a new style to "themes":** The red line style should be added to the application's theme.
4. **Create a "Modal" component:** This component will interact with the node to approve or cancel the suggested text replacement.
5. **Integration with Lexical:** The plugin should be fully integrated with the Lexical editor.

## Steps to Complete the Challenge

1. **Fork the Repository:** Make a fork of the provided repository.
2. **Install Dependencies:** The repository is already configured with `pnpm`. Run `pnpm install` to install all the necessary dependencies.
3. **Develop the Plugin:**
   - **Custom Node:**
     - Create a custom node in Lexical that can hold the red line style.
     - Implement the logic to toggle the red line style on the selected text node.
   - **Theme Integration:**
     - Define the red line style in the theme file of the Lexical editor.
     - Ensure the style is correctly applied to the text node when activated.
   - **Modal Component:**
     - Design a modal component that appears when the red line style is applied.
     - The modal should have options to approve or cancel the text replacement.
     - On approval, replace the text with the suggested text and remove the red line style.
     - On cancellation, remove the red line style from the text node.
4. **Implementation:**
   - Implement the functionality to select a text node and apply the red line style.
   - Show the modal with the approval and cancellation options.
   - Handle the approval to replace the text and the cancellation to remove the style.
5. **Testing and Validation:**
   - Test the plugin thoroughly to ensure it works as expected.
   - Validate that the text replacement and style removal are functioning correctly.
6. **Submission:**
   - Once completed, push your changes to your forked repository.
   - Provide the link to your repository for review.

## Useful Resources

- [Lexical Documentation](https://lexical.dev/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs/getting-started)
- [Typescript Documentation](https://www.typescriptlang.org/docs/)

## Example Images

Here are some reference images to guide you in developing the plugin:

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://github.com/SemillasCo/Test/assets/125382662/24764876-2688-404d-ab9f-801b287dd972" alt="Example Image 1" width="300">
  <img src="https://github.com/SemillasCo/Test/assets/125382662/18478b96-ffd2-47be-9b07-5e56bd2357b4" alt="Example Image 2" width="300">
  <img src="https://github.com/SemillasCo/Test/assets/125382662/b6642941-db84-4d12-8b5a-5d588039c957" alt="Example Image 3" width="300">
</div>

---

### Detailed Steps

1. **Fork the Repository:**
   - Navigate to the provided repository link.
   - Click on the "Fork" button to create a copy of the repository in your GitHub account.

2. **Clone Your Forked Repository:**
   - Clone the forked repository to your local machine using the command:
     ```sh
     git clone https://github.com/your-username/lexical-plugin-challenge.git
     ```
   - Navigate to the project directory:
     ```sh
     cd lexical-plugin-challenge
     ```

3. **Install Dependencies:**
   - Install all necessary dependencies using pnpm:
     ```sh
     pnpm install
     ```

4. **Develop the Plugin:**
   - **Custom Node:**
     - Create a new file for your custom node, e.g., `RedLineNode.ts`.
     - Define the structure and behavior of the custom node, ensuring it can toggle the red line style.
   - **Theme Integration:**
     - Modify the theme file to include the new red line style.
     - Ensure the style is applied correctly to the text nodes.
   - **Modal Component:**
     - Create a new component for the modal, e.g., `RedLineModal.tsx`.
     - Design the modal UI with options to approve or cancel.
     - Implement the logic to handle approval and cancellation actions.

5. **Testing and Validation:**
   - Test the plugin within the Lexical editor environment.
   - Verify that applying the red line style and replacing text works as expected.
   - Ensure that cancelling the action removes the red line style without changes to the text.

6. **Submission:**
   - Push your changes to your forked repository.
   - Provide the link to your repository for review.

---

Good luck and happy coding!

---
