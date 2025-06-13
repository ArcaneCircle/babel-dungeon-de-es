const container = {
  display: "flex",
  flexDirection: "row" as "row",
  flexWrap: "nowrap" as "nowrap",
  overflowY: "hidden" as "hidden",
  height: "20px",
  border: "2px solid #464646",
  borderRadius: "5px",
};
const row = {
  height: "5px",
};
const square = {
  height: "5px",
  width: "5px",
  float: "left" as "left",
};

interface Props {
  progress: number;
  total: number;
  color: string;
  colorDiag1: string;
  colorDiag2: string;
  colorDiag3: string;
}

export default function PixelatedProgressBar({
  progress,
  total,
  color,
  colorDiag1,
  colorDiag2,
  colorDiag3,
}: Props) {
  const percentage = Math.round((progress / total) * 100);
  const progressStyle = {
    width: `${percentage}%`,
    height: "20px",
    background: color,
  };
  const d0 = { ...square, background: color };
  const d1 = { ...square, background: colorDiag1 };
  const d2 = { ...square, background: colorDiag2 };
  const d3 = { ...square, background: colorDiag3 };
  const hide = percentage === 100 || progress === 0;
  const pixels = { minWidth: "15px", display: hide ? "none" : "inline-block" };

  return (
    <div style={container}>
      <div style={progressStyle}></div>
      <div style={pixels}>
        <div style={row}>
          <span style={d2}></span>
          <span style={d3}></span>
          <span style={square}></span>
        </div>
        <div style={row}>
          <span style={d1}></span>
          <span style={d2}></span>
          <span style={d3}></span>
        </div>
        <div style={row}>
          <span style={d0}></span>
          <span style={d1}></span>
          <span style={d2}></span>
        </div>
        <div style={row}>
          <span style={d0}></span>
          <span style={d0}></span>
          <span style={d1}></span>
        </div>
      </div>
    </div>
  );
}
