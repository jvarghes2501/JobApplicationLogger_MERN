import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
  
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  
  .toggle-btn {
    background: transparent;
    border: none;
    font-size: 1.75rem;
    color: #667eea;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    
    &:hover {
      color: #764ba2;
      transform: scale(1.1);
    }
  }
  
  .logo-text {
    display: none;
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .logo {
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .btn-container {
    position: relative;
  }
  
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    svg {
      font-size: 1.2rem;
    }
    
    &:hover {
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
  }
  
  .dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 0.5rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
  
  .show-dropdown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
  
  .dropdown-btn {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    text-align: left;
    color: #e53e3e;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: #fee;
    }
  }
  
  @media (min-width: 992px) {
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
