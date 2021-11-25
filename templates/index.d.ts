interface Component {
  name: string
  render: Function
}

<% icons.forEach((icon) => { %>export const <%- icon.name %>: Component
<% } ) %>