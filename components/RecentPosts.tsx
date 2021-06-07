import styled from "styled-components";

import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import Icon from "./styledComponents/Icon";
import BriefDiv from "./styledComponents/BriefDiv";
import ExternalAnchor from "./styledComponents/ExternalAnchor";

const AboutMeDetails = styled.div`
  min-width: 200px;
  padding: 0.25rem;
  text-align: center;
  text {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

function RecentPosts() {
  return (
    <NavItem label="✍ Recent Posts">
      <DropdownMenu>
        <DropdownMenuItem
          leftIcon={<Icon src="graphql.svg" />}
          rightIcon={<Icon src="arrow.svg" />}
          label="Why GraphQL?">
          <BriefDiv>
            <p>
              GraphQL was developed to cope with the need for more flexibility
              and efficiency! It solves many of the shortcomings that developers
              experience when interacting with REST APIs. With this blog I hope
              to answer the very first question that I asked when I heard of
              GraphQL and the reasons that convinced me to get started with it.
            </p>
            <ExternalAnchor
              href="https://jaygurav.netlify.app/graphql/whyGraphQL/"
              colored={true}>
              Read More{" "}
              <img width="20px" height="20px" src="/externalLink.svg" />
            </ExternalAnchor>
          </BriefDiv>
        </DropdownMenuItem>
        <DropdownMenuItem
          leftIcon={<Icon src="js.svg" />}
          rightIcon={<Icon src="externalLink.svg" />}
          label="Re-Realizing context"
          to="https://jaygurav.netlify.app/chaitime/reRealizingContext/"
        />
        <DropdownMenuItem
          leftIcon={<Icon src="graphql.svg" />}
          rightIcon={<Icon src="externalLink.svg" />}
          label="GraphQL Types system"
          to="https://jaygurav.netlify.app/chaitime/reRealizingContext/"
        />
      </DropdownMenu>
    </NavItem>
  );
}

export default RecentPosts;
