import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  
  @media (min-width: 992px) {
    display: block;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
    
    .sidebar-container {
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    
    .content {
      position: sticky;
      top: 0;
    }
    
    .show-sidebar {
      margin-left: 0;
    }
    
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      
      .logo {
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 12px;
        padding: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    
    .nav-links {
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.8);
      padding: 1rem 0;
      padding-left: 2rem;
      text-transform: capitalize;
      transition: all 0.3s ease;
      font-weight: 500;
      text-decoration: none;
      border-left: 4px solid transparent;
      
      &:hover {
        padding-left: 2.5rem;
        color: white;
        background: rgba(255, 255, 255, 0.1);
        border-left-color: #ffd700;
      }
    }
    
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    
    .active {
      color: white;
      background: rgba(255, 255, 255, 0.15);
      border-left-color: #ffd700;
      font-weight: 600;
      
      .icon {
        color: #ffd700;
      }
    }
  }
`;
export default Wrapper;
