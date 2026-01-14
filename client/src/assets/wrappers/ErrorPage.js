import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  > div {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 3rem 2rem;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    max-width: 600px;
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
  
  .error-icon {
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: shake 0.5s ease-in-out;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
  
  img {
    width: 90vw;
    max-width: 500px;
    display: block;
    margin: 0 auto 2rem;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    line-height: 1.8;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    color: #4a5568;
    font-size: 1.1rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .btn {
    padding: 0.75rem 2rem;
    font-weight: 600;
    border-radius: 50px;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    display: inline-block;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    
    &:active {
      transform: translateY(-1px);
    }
  }
`;

export default Wrapper;
