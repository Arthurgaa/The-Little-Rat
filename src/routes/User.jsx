// src/components/User.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { FaTrash, FaEdit, FaSave, FaSignOutAlt } from 'react-icons/fa';

// Paleta de Cores
const COLORS = {
  primary: '#dfa54b',
  secondary: '#ffffff',
  background: '#1a1a1a',
  cardBackground: '#2a2a2a',
  inputBackground: '#3a3a3a',
  border: '#dfa54b',
  buttonHover: '#ffdf7e',
  logoutBackground: '#ff4c4c',
  logoutHover: '#ff0000',
};

// Estilização dos componentes
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${COLORS.background} 0%, #141414 100%);
  color: ${COLORS.primary};
  padding: 3rem 2rem;
  min-height: 80vh;
  font-family: "Orbitron", sans-serif;
  transition: background 0.5s ease;
`;

const ProfileCard = styled.div`
  background-color: ${COLORS.cardBackground};
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 2.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #333333;
  }
`;

const ProfileImageContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${COLORS.primary};
  margin: 0 auto 1.8rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444444;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileInfo = styled.p`
  font-size: 1.2rem;
  color: ${COLORS.secondary};
  margin-bottom: 1rem;

  strong {
    color: ${COLORS.primary};
  }
`;

const InfoWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: left;
`;

const EditButton = styled.button`
  background-color: ${COLORS.primary};
  color: ${COLORS.background};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${COLORS.buttonHover};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${COLORS.secondary};
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  background-color: ${COLORS.inputBackground};
  color: ${COLORS.secondary};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${COLORS.secondary};
    box-shadow: 0 0 5px rgba(223, 165, 75, 0.5);
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;

const SaveButton = styled.button`
  background-color: #28a745;
  color: ${COLORS.secondary};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${COLORS.secondary};
  }
`;

const LogoutButton = styled.button`
  background-color: ${COLORS.logoutBackground};
  color: ${COLORS.secondary};
  padding: 12px 24px;
  border: 2px solid #ff0000;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  width: auto;
  max-width: 180px;

  &:hover {
    background-color: ${COLORS.logoutHover};
    border-color: ${COLORS.logoutBackground};
    transform: scale(1.05);
  }

  &:active {
    background-color: #d40000;
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid ${COLORS.secondary};
  }
`;

/* Componentes para o campo de upload personalizado */
const FileInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const FileInputLabel = styled.label`
  background-color: ${COLORS.inputBackground};
  color: ${COLORS.primary};
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #555555;
    color: ${COLORS.buttonHover};
  }

  &:focus {
    outline: 2px solid ${COLORS.secondary};
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileName = styled.span`
  margin-top: 0.6rem;
  color: #ccc;
  font-size: 0.95rem;
  text-align: center;
`;

const User = () => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado
  const [isEditing, setIsEditing] = useState(false);
  const [fileName, setFileName] = useState('No file selected'); // Estado para o nome do arquivo
  const navigate = useNavigate();

  // Verificação do status de login
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({ ...storedUser });
    } else {
      navigate('/login'); // Se o usuário não estiver logado, redireciona para o login
    }
  }, [navigate]);

  // Função para salvar as alterações
  const handleSaveChanges = () => {
    localStorage.setItem('user', JSON.stringify(user));

    // Dispara o evento 'userUpdated' para notificar o Nav
    window.dispatchEvent(new Event('userUpdated'));

    alert('Profile updated successfully!');
    setIsEditing(false); // Salva as mudanças e sai do modo de edição
  };

  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem('user');

    // Dispara o evento 'userUpdated' para notificar o Nav
    window.dispatchEvent(new Event('userUpdated'));

    alert('Logged out successfully!');
    navigate('/login'); // Redireciona para a página de login
  };

  // Função para lidar com a mudança da foto de perfil
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Verifica se o arquivo é uma imagem
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUser((prevUser) => ({
            ...prevUser,
            profilePicture: reader.result,
          }));
        };
        reader.readAsDataURL(file);
        setFileName(file.name); // Atualiza o nome do arquivo
      } else {
        alert('Please select a valid image file.');
        setFileName('No file selected');
      }
    } else {
      setFileName('No file selected');
    }
  };

  return (
    <UserContainer>
      {user ? (
        <ProfileCard>
          <ProfileImageContainer>
            <ProfileImage
              src={user.profilePicture || '/default-profile.png'}
              alt="Profile"
            />
          </ProfileImageContainer>

          {!isEditing ? (
            <>
              <InfoWrapper>
                <ProfileInfo>
                  <strong>Name:</strong> {user.name}
                </ProfileInfo>
                <ProfileInfo>
                  <strong>Email:</strong> {user.email}
                </ProfileInfo>
              </InfoWrapper>
              <EditButton onClick={() => setIsEditing(true)}>
                <FaEdit />
                Edit Profile
              </EditButton>
            </>
          ) : (
            <>
              <form style={{ width: '100%', marginBottom: '1.5rem' }}>
                <InputField
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) =>
                    setUser((prevUser) => ({ ...prevUser, name: e.target.value }))
                  }
                  aria-label="Name"
                />
                <InputField
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
                  }
                  aria-label="Email"
                />
                <InputField
                  type="password"
                  placeholder="New Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((prevUser) => ({ ...prevUser, password: e.target.value }))
                  }
                  aria-label="New Password"
                />
                <FileInputWrapper>
                  <FileInputLabel htmlFor="fileInput">
                    Choose Profile Picture
                  </FileInputLabel>
                  <HiddenFileInput
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                  />
                  <FileName>{fileName}</FileName>
                </FileInputWrapper>
              </form>
              <SaveButton type="button" onClick={handleSaveChanges}>
                <FaSave />
                Save Changes
              </SaveButton>
            </>
          )}
        </ProfileCard>
      ) : (
        <p>Loading...</p>
      )}
      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </LogoutButton>
    </UserContainer>
  );
};

export default User;
