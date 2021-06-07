import styled from "styled-components";

import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import { SkillsIcon } from "./styledComponents/Icon";

import ExternalAnchor from "./styledComponents/ExternalAnchor";

const SkillBox = styled.div`
  width: 200px;
  padding: 1rem 0.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2ch;
`;

function Skills() {
  return (
    <NavItem label="🤩 Skills">
      <DropdownMenu>
        <SkillBox>
          <ExternalAnchor colored={false} href="https://www.javascript.com/">
            <SkillsIcon src="/js.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://reactjs.org/">
            <SkillsIcon src="/react.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://nodejs.org/en/">
            <SkillsIcon src="/nodejs.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://graphql.org/">
            <SkillsIcon src="/graphql.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://www.mongodb.com/">
            <SkillsIcon src="/mongodb.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://nextjs.org/">
            <SkillsIcon src="/nextjs.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://www.gatsbyjs.com/">
            <SkillsIcon src="/gatsby.svg" />
          </ExternalAnchor>
          <ExternalAnchor
            colored={false}
            href="https://html.spec.whatwg.org/multipage/">
            <SkillsIcon src="/html.svg" />
          </ExternalAnchor>
          <ExternalAnchor
            colored={false}
            href="https://www.w3.org/Style/CSS/Overview.en.html">
            <SkillsIcon src="/css.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://webpack.js.org/">
            <SkillsIcon src="/webpack.svg" />
          </ExternalAnchor>
          <ExternalAnchor
            colored={false}
            href="https://www.typescriptlang.org/">
            <SkillsIcon src="/ts.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://redis.io/">
            <SkillsIcon src="/redis.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://git-scm.com/">
            <SkillsIcon src="/git.svg" />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://www.electronjs.org/">
            <SkillsIcon src="/electron.svg" />
          </ExternalAnchor>
        </SkillBox>
      </DropdownMenu>
    </NavItem>
  );
}

export default Skills;
