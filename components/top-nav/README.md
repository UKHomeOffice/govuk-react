TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->

### Usage

TopNav with logo, service title and navigation items
```jsx
import CrownIcon from '@govuk-react/icon-crown';
import SearchBox from '@govuk-react/search-box';
import Header from '@govuk-react/header';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asLogoAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

const link = 'https://example.com?=1';

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavAnchor href={link} target="new">
    <Header mb="0" level={3}>Service Title</Header>
  </NavAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
  <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
</TopNav>
```

```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import Header from '@govuk-react/header';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asLogoAnchor(Link);
const NavLink= asNavLinkAnchor(Link);

const reactRouterLink = '/section';
const CompanyLink = (
  <LogoLink to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoLink>
);

const ServiceTitleLink = (
  <NavLink to={reactRouterLink}>
    <Header mb="0" level={3}>Service Title</Header>
  </NavLink>
);

<BrowserRouter>
  <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
</BrowserRouter>
```

### References:
- http://alphagov.github.io/govuk_template/example-proposition-menu.html

### TODO:
- TODO: this component is a work in progress and needs to more closely match existing examples
- TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
- TODO: (The name Header is ambiguous)
- TODO: Fix the position and design of this button
- TODO: #205 Use context api and/or render props for `active` navigation items
- TODO: Vertical alignment here needs some work, perhaps should be its own component
- TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | BLACK | string | Top nav background color
 `children` |  | undefined | node | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | WHITE | string | Top nav text color
 `company` |  | undefined | node | Company component e.g. GOV UK
 `search` |  | false | node | Search component
 `serviceTitle` |  | undefined | node | Service title component e.g. Food Standards Authority


