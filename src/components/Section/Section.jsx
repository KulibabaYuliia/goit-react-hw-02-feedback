import { SectionWrap } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <h2>{title}</h2>
      {children}
    </SectionWrap>
  );
};
