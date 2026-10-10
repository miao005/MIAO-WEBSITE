import './ResetButton.css';

function ResetButton({ themeName, isDefault, onReset }) {
  return (
    <div className="theme-bar">
      <span className="theme-name">Theme: {themeName}</span>
      <button className="reset-btn" onClick={onReset} disabled={isDefault}>
        Back to normal
      </button>
    </div>
  );
}

export default ResetButton;
