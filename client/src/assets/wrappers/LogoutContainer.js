import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

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
    padding: 0.65rem 1.25rem;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);

    svg {
      font-size: 1.3rem;
    }

    &:hover {
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .dropdown {
    position: absolute;
    top: 60px;
    right: 0;
    min-width: 180px;
    background: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    padding: 0.5rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-15px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(102, 126, 234, 0.1);

    &::before {
      content: "";
      position: absolute;
      top: -8px;
      right: 20px;
      width: 16px;
      height: 16px;
      background: white;
      transform: rotate(45deg);
      border-left: 1px solid rgba(102, 126, 234, 0.1);
      border-top: 1px solid rgba(102, 126, 234, 0.1);
    }
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
    padding: 0.85rem 1rem;
    text-align: left;
    color: #e53e3e;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: linear-gradient(135deg, #fee 0%, #fdd 100%);
      transform: translateX(4px);
      color: #c53030;
    }

    &::before {
      content: "→";
      font-size: 1.2rem;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover::before {
      opacity: 1;
    }
  }
`;

export default Wrapper;
