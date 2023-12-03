import styles from "./SuggestionList.module.css";

function SuggestionsListComponent({
  filteredSuggestions,
  activeSuggestionIndex,
  onClick,
}) {
  return filteredSuggestions.length ? (
    <ul className={styles.suggestions}>
      {filteredSuggestions.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = "suggestion-active";
        }
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li className={className} key={suggestion} onClick={onClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={styles.noSuggestions}>
      <em>No suggestions</em>
    </div>
  );
}

export default SuggestionsListComponent;
