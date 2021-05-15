Paragraph
=========

### Import
```js
  import Paragraph from '@govuk-react/paragraph';
```
<!-- STORY -->

Supports bold, italic, links, inline code and block code in Markdown ONLY.
This is to ensure we follow GDS as closely as possible.
It is worth noting that GDS recommends avoiding bold and italics.

Bold should be avoided in general as not only can it dilute the message, it will also
cause Screenreaders to increase the volume of any bold text to reflect the increase in
font-weight.

### Usage

Simple
```jsx
<Paragraph>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```jsx
<Paragraph supportingText>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

With a block of code
````jsx
<Paragraph>
  Some other text...
  ```
  Some Code Block
  ```
  Some more text.
</Paragraph>
````

With React router

```jsx
const ReactRouterLinkRenderer = ({ href, children }) => (
  href.match(/^\//)
    ? <Link to={href}>{children}</Link>
    : <a href={href}>{children}</a>
);

<Paragraph linkRenderer={ReactRouterLinkRenderer}>
  ...
</Paragraph>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-body-copy

### TODO
- Add test for supporting text
- Review code snippet styling
- Remove magic numbers from inline code styling blocks

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```''``` | node | Text content supporting markdown
 `linkRenderer` |  | ```props => <Link {...props} />``` | func | 
 `supportingText` |  | ```false``` | bool | Is this paragraph supporting text for another element?


