export const BASE_COMPONENT_REGEX = /J[A-Z]\w+\.(vue|js)$/

export const getComponentName = (fileName) => fileName
  // Remove the "./" from the beginning
  .replace(/^\.\//, '')
  // Remove the file extension from the end
  .replace(/\.\w+$/, '')
  // Split up kebabs
  .split('-')
  // Upper case
  .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
  .join('')

export const globalyRegisterBaseComponents = (app) => {
  // https://webpack.js.org/guides/dependency-management/#require-context
  const requireComponent = require.context(
    // Look for files in components directory
    './components',
    // Do not look in subdirectories
    false,
    // Only include "V" prefixed .vue or .js files using PascalCase e.g. "JInput" NOT "Jiew"
    // Keep in sync with BASE_COMPONENT_REGEX. Can't use a variable here will cause webpack error :(
    /J[A-Z]\w+\.(vue|js)$/
  )

  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = getComponentName(fileName)

    // Globally register the component
    app.component(componentName, componentConfig.default || componentConfig)
  })
}
