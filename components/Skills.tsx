import styled from "styled-components";

import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import { SkillsIcon } from "./styledComponents/Icon";
import { motion } from "framer-motion";

import ExternalAnchor from "./styledComponents/ExternalAnchor";

const SkillBox = styled(motion.div)`
  width: 200px;
  padding: 1rem 0.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2ch;
`;

function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <NavItem label="🤩 Skills">
      <DropdownMenu>
        <SkillBox variants={container} initial="hidden" animate="show">
          <ExternalAnchor colored={false} href="https://www.javascript.com/">
            <SkillsIcon
              src="/js.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://reactjs.org/">
            <SkillsIcon
              src="/react.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://nodejs.org/en/">
            <SkillsIcon
              src="/nodejs.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://graphql.org/">
            <SkillsIcon
              src="/graphql.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://www.mongodb.com/">
            <SkillsIcon
              src="/mongodb.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://nextjs.org/">
            <SkillsIcon
              src="/nextjs.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://www.gatsbyjs.com/">
            <SkillsIcon
              src="/gatsby.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor
            colored={false}
            href="https://html.spec.whatwg.org/multipage/">
            <SkillsIcon
              src="/html.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor
            colored={false}
            href="https://www.w3.org/Style/CSS/Overview.en.html">
            <SkillsIcon
              src="/css.svg"
              variants={item}
              whileHover={{ scale: 1.15 }}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://webpack.js.org/">
            <SkillsIcon
              src="/webpack.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor
            colored={false}
            href="https://www.typescriptlang.org/">
            <SkillsIcon
              src="/ts.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://redis.io/">
            <SkillsIcon
              src="/redis.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://git-scm.com/">
            <SkillsIcon
              src="/git.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
          <ExternalAnchor colored={false} href="https://www.electronjs.org/">
            <SkillsIcon
              src="/electron.svg"
              whileHover={{ scale: 1.15 }}
              variants={item}
            />
          </ExternalAnchor>
        </SkillBox>
      </DropdownMenu>
    </NavItem>
  );
}

export default Skills;
