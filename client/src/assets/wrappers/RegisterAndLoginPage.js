import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: grid;
  align-items: center;
  padding: 2rem;
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
    width: 80px;
    height: 80px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .form {
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 3rem 2.5rem;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: fadeInUp 0.6s ease-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  h4 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .form-row {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #4a5568;
    letter-spacing: 0.3px;
  }
  
  .form-input {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &::placeholder {
      color: #a0aec0;
    }
  }
  
  .btn {
    margin-top: 1.5rem;
    padding: 0.85rem 2rem;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.95rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    cursor: pointer;
    width: 100%;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  p {
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.5;
    color: #4a5568;
    font-size: 0.95rem;
  }
  
  .member-btn {
    color: #667eea;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-left: 0.4rem;
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    
    .form {
      padding: 2rem 1.5rem;
    }
    
    h4 {
      font-size: 1.5rem;
    }
  }
`;
export default Wrapper;
