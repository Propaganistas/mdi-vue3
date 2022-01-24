<% icons.forEach((icon) => { %>export { default as <%- icon.name %> } from './icons/<%- icon.name %>'
<% }) %>