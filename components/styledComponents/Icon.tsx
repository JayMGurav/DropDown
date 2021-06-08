import styled from "styled-components";
import { motion } from "framer-motion";

const Icon = styled(motion.img)`
  padding: 0.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const IconSm = styled(Icon)`
  height: 20px;
  width: 20px;
`;

export const IconMd = styled(Icon)`
  height: 26px;
  width: 26px;
`;

export const SkillsIcon = styled(IconMd)`
  background: var(--foreground);
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
`;

export default Icon;
