import "./styles.css";

export default function TipPercentage(props) {
  const { percentage, handleTip, selectedTip } = props;

  function handleCss() {
    if (selectedTip === percentage) {
      return "tip-active tipButton";
    } else {
      return "tipButton";
    }
  }

  return (
    <button className={handleCss()} onClick={() => handleTip(percentage)}>
      {percentage}%
    </button>
  );
}
