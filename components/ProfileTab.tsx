import styled from 'styled-components';
import Image from 'next/image';

const ProfileTabDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
  margin: 0.75rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--foreground);
  width: 250px;
  h2,
  small {
    margin: 0;
    line-height: 0.9;
  }
`;
const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

function ProfileTab() {
  return (
    <ProfileTabDiv>
      <ProfileImage
        src="/jaygurav.jpg"
        width={60}
        height={60}
        alt="Jay Gurav profile image"
      />
      <small>@JayMGurav</small>
      <h2>Jay Gurav</h2>
      <p>Software Engineer. Learning, building, blogging</p>
      <span role="image" aria-label="Jay Gurav's interests">
        👨‍💻 • 📖• 🚀 • ✍
      </span>
    </ProfileTabDiv>
  );
}

export default ProfileTab;
