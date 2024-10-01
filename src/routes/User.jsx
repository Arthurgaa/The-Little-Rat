import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111;
  color: #dfa54b;
  padding: 2rem;
  min-height: 80vh;
  font-family: "Orbitron", sans-serif;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileCard = styled.div`
  background-color: #222;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileImageContainer = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #dfa54b;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileInfo = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const InfoWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const EditButton = styled.button`
  background-color: #dfa54b;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #fff;
    color: #dfa54b;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dfa54b;
  margin-bottom: 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #fff;
    outline: none;
  }
`;

const SaveButton = styled.button`
  background-color: #dfa54b;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #fff;
    color: #dfa54b;
  }
`;

const LogoutButton = styled.button`
  background-color: #FF4C4C;
  color: #fff;
  padding: 12px 25px;
  border: 2px solid #FF0000;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 10%;

  &:hover {
    background-color: #FF0000;
    color: #fff;
    border-color: #FF4C4C;
    transform: scale(1.05);
  }

  &:active {
    background-color: #D40000;
    transform: scale(0.98);
  }
`;

const User = () => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Verificação do status de login
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      const storedProfilePicture = localStorage.getItem('profilePicture');
      setUser({ ...storedUser, profilePicture: storedProfilePicture || '/default-avatar.png' });
    } else {
      navigate('/login'); // Se o usuário não estiver logado, redireciona para o login
    }
  }, [navigate]);

  const handleSaveChanges = () => {
    localStorage.setItem('user', JSON.stringify(user));
    alert('Profile updated successfully!');
    setIsEditing(false); // Salva as mudanças e sai do modo de edição
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profilePicture');
    alert('Logged out successfully!');
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <UserContainer>
      {user ? (
        <ProfileCard>
          <ProfileWrapper>
            <ProfileImageContainer>
              <ProfileImage src={user.profilePicture} alt="Profile" />
            </ProfileImageContainer>
          </ProfileWrapper>

          {!isEditing ? (
            <>
              <InfoWrapper>
                <ProfileInfo>Name: {user.name}</ProfileInfo>
                <ProfileInfo>Email: {user.email}</ProfileInfo>
              </InfoWrapper>
              <EditButton onClick={() => setIsEditing(true)}>Edit Profile</EditButton>
            </>
          ) : (
            <>
              <form>
                <label>
                  <InputField
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </label>
                <label>
                  <InputField
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </label>
                <label>
                  <InputField
                    type="password"
                    placeholder="New Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                </label>
              </form>
              <SaveButton type="button" onClick={handleSaveChanges}>
                Save Changes
              </SaveButton>
            </>
          )}
        </ProfileCard>
      ) : (
        <p>Loading...</p>
      )}
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </UserContainer>
  );
};

export default User;

