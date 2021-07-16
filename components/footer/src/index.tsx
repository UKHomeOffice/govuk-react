import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';
import { FOOTER_BACKGROUND, FOOTER_TEXT, FOOTER_BORDER_TOP } from 'govuk-colours';

import WidthContainer from './atoms/width-container';
import Navigation from './atoms/navigation';
import Link from './atoms/link';
import SectionBreak from './atoms/section-break';
import MetaCustom from './atoms/meta-custom';

import MetaContainer from './molecules/meta-container';
import MetaLinks from './molecules/meta-links';
import NavigationLinks from './molecules/navigation-links';

const FooterContainer = styled('footer')(
  {
    borderTop: `1px solid ${FOOTER_BORDER_TOP}`,
    background: `${FOOTER_BACKGROUND}`,
    color: `${FOOTER_TEXT}`,
  },
  typography.font({ size: 16 }),
  spacing.withWhiteSpace({
    padding: [
      { size: 7, direction: 'top' },
      { size: 5, direction: 'bottom' },
    ],
  })
);

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { Footer } from 'govuk-react'
 *
 * <Footer />
 * ```
 *
 * Footer with Copyright information
 *
 * ```jsx
 * // Import self hosted copyright image
 * import crest from './govuk-crest.png';
 *
 * <Footer
 *   copyright={{
 *     text: 'Crown copyright',
 *     link:
 *       'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
 *     image: {
 *       source: crest,
 *       height: 102,
 *       width: 125,
 *     },
 *   }}
 * />;
 * ```
 *
 * Footer with navigation.  There is also the option to provide footer links with, or without React/Reach Router.
 *
 * ```jsx
 * import { Link } from 'react-router-dom';
 *
 * <Footer>
 *   <Footer.Navigation>
 *     <Footer.NavigationLinks heading="Two column list" listColumns={2}>
 *       <Footer.Link href="/">Navigation item 1</Footer.Link>
 *       <Footer.Link to="/footer-nav-item-2" as={Link}>Navigation item 2 (Router Link)</Footer.Link>
 *       <Footer.Link href="/">Navigation item 3</Footer.Link>
 *       <Footer.Link href="/">Navigation item 4</Footer.Link>
 *       <Footer.Link href="/">Navigation item 5</Footer.Link>
 *       <Footer.Link href="/">Navigation item 6</Footer.Link>
 *     </Footer.NavigationLinks>
 *     <Footer.NavigationLinks heading="Single column list">
 *       <Footer.Link href="/">Navigation item 1</Footer.Link>
 *       <Footer.Link href="/">Navigation item 2</Footer.Link>
 *       <Footer.Link href="/">Navigation item 3</Footer.Link>
 *     </Footer.NavigationLinks>
 *   </Footer.Navigation>
 * </Footer>
 * ```
 *
 * Footer with links in meta area
 *
 * ```jsx
 * <Footer meta={
 *     <Footer.MetaLinks heading="Support links">
 *       <Footer.Link href="/">Item 1</Footer.Link>
 *       <Footer.Link to="/footer-meta-item-2" as={Link}>Item 2 (Router Link)</Footer.Link>
 *       <Footer.Link href="/">Item 3</Footer.Link>
 *     </Footer.MetaLinks>
 *   }
 * />
 * ```
 *
 * Footer with custom content in meta area
 *
 * ```jsx
 * <Footer meta={
 *     <Footer.MetaCustom>
 *       Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
 *     </Footer.MetaCustom>
 *   }
 * />
 * ```
 *
 * NB <Footer.Link /> is styled extention of @govuk-react/link
 *
 * ### References:
 *
 * - https://design-system.service.gov.uk/components/footer/
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/template.njk
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/_footer.scss
 *
 */
const Footer = ({ children, container: Container = WidthContainer, copyright, meta, ...props }) => (
  <FooterContainer role="contentinfo" {...props}>
    <Container>
      {children && (
        <>
          {children}
          <SectionBreak />
        </>
      )}
      <MetaContainer copyright={copyright}>{meta}</MetaContainer>
    </Container>
  </FooterContainer>
);

Footer.propTypes = {
  /**
   * Footer navigation links
   */
  children: PropTypes.node,
  /**
   * Override the default footer container component.
   * `children`, `copyright` and `meta` will be placed inside this component.
   */
  container: PropTypes.elementType,
  /**
   * Copyright information
   */
  copyright: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    link: PropTypes.string,
  }),
  /**
   * Meta text and links
   */
  meta: PropTypes.node,
};

Footer.Link = Link;
Footer.Navigation = Navigation;
Footer.MetaCustom = MetaCustom;
Footer.MetaLinks = MetaLinks;
Footer.NavigationLinks = NavigationLinks;
Footer.WidthContainer = WidthContainer;

export default Footer;
