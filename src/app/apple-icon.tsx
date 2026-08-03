import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#172d35",
          borderRadius: "38px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "86px",
            height: "86px",
            borderRadius: "50%",
            background: "#f4d99b",
            position: "absolute",
            left: "50px",
            top: "42px",
          }}
        />
        <div
          style={{
            width: "78px",
            height: "78px",
            borderRadius: "50%",
            background: "#172d35",
            position: "absolute",
            left: "76px",
            top: "30px",
          }}
        />
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#f4d99b",
            position: "absolute",
            left: "43px",
            top: "46px",
          }}
        />
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#f4d99b",
            position: "absolute",
            left: "64px",
            top: "27px",
          }}
        />
      </div>
    ),
    size,
  );
}
