export function FiltresProjectes({
  refsArray,
  arrayTags,
  canviarFiltresProjectes,
}) {
  return (
    <div className="div-filtres-projectes tarjeta sombra">
      {arrayTags.map((ObjecteTag, i) => {
        return (
          <>
            <input
              key={"input-" + i}
              type="checkbox"
              checked={Object.values(ObjecteTag)[0]}
              id={Object.keys(ObjecteTag)[0].toLowerCase()}
              value={Object.keys(ObjecteTag)[0].toLowerCase()}
              ref={(el) => (refsArray.current[i] = el)}
              onChange={() => canviarFiltresProjectes()}
              className="toggle"
            />
            <label
              key={"label-" + i}
              htmlFor={Object.keys(ObjecteTag)[0].toLowerCase()}
            >
              {Object.keys(ObjecteTag)[0].toLowerCase()}
            </label>
          </>
        );
      })}
    </div>
  );
}
