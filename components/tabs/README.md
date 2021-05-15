Tabs
====

### Import
```js
  import Tabs from '@govuk-react/tabs';
```
<!-- STORY -->

### Import
```js
import Tabs from '@govuk-react/tabs';
```

##### Simple Example
```js
class App extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setTabIndex(newTabIndex) {
    this.setState({
      tabIndex: newTabIndex,
    }));
  }

  handleClick(e, index) {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return this.setTabIndex(index);
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title>Content</Tabs.Title>
        <Tabs.List>
          <Tabs.Tab
            onClick={(event) => this.handleClick(event, 0)}
            selected={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tabs.Tab>
          <Tabs.Tab
            onClick={(event) => this.handleClick(event, 1)}
            selected={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel selected={tabIndex === 0} id="first-panel">Panel content 1</Panel>
        <Tabs.Panel selected={tabIndex === 1} id="second-panel" >Panel content 2</Panel>
      </Tabs>
    );
  }
}
```

##### Hooks Example
```js
const App = ({ defaultIndex }) => {
  const [tabIndex, setTabIndex] = React.useState(defaultIndex);

  const handleTabChange = newTabIndex => setTabIndex(newTabIndex);

  function handleClick({ event: e, index }) {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return handleTabChange(index);
  }

  return (
    <Tabs>
      <Tabs.Title>Content</Tabs.Title>
      <Tabs.List>
       {[
          {
            content: 'Title 1',
            href: '#first-panel',
          },
          {
            content: 'Title 2',
            href: '#second-panel',
          },
        ].map(({ content, href }, index) => (
          <Tabs.Tab
            onClick={(event) => handleClick({ event, index })}
            selected={tabIndex === index}
            href={href}
          >
           {content}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {[
        {
          content: 'Panel content 1',
          id: 'first-panel',
        },
        {
          content: 'Panel content 2',
          id: 'second-panel',
        },
      ].map(({ content, id }, index) => (
        <Tabs.Panel
          selected={tabIndex === index}
          id={id}
        >
         {content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

```


### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/tabs
- https://design-system.service.gov.uk/components/tabs/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | child components that will appear in the Tabs section


