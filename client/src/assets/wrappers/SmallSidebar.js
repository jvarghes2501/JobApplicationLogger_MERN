import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s ease;
    visibility: hidden;
    backdrop-filter: blur(4px);
  }
  
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  
  .content {
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    width: 90vw;
    max-width: 400px;
    height: 95vh;
    border-radius: 20px;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(90deg);
    }
  }
  
  header {
    margin-bottom: 2rem;
    
    .logo {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 16px;
      padding: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    padding: 1.2rem 1.5rem;
    text-transform: capitalize;
    transition: all 0.3s ease;
    text-decoration: none;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      transform: translateX(5px);
    }
  }
  
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  
  .active {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-weight: 600;
    
    .icon {
      color: #ffd700;
    }
  }
`;
export default Wrapper;
