import { ImageResponse } from "next/og";

export const alt = "Prima di Dormire — Storie per bambini";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #10242c 0%, #173640 58%, #264951 100%)",
          color: "#f8f1df",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "700px",
            gap: "22px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "28px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#d8c69a",
            }}
          >
            Una storia alla volta
          </div>
          <div
            style={{
              fontSize: "82px",
              lineHeight: 1.03,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Prima di Dormire
          </div>
          <div
            style={{
              fontSize: "34px",
              lineHeight: 1.35,
              color: "#e8ddc5",
              maxWidth: "670px",
            }}
          >
            Racconti per bambini e per gli adulti che li ascoltano con loro.
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "24px",
              color: "#b9cbc5",
            }}
          >
            primadidormire.eu
          </div>
        </div>

        <div
          style={{
            width: "330px",
            height: "330px",
            position: "relative",
            marginRight: "28px",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "#f4d99b",
              position: "absolute",
              left: "22px",
              top: "48px",
              boxShadow: "0 0 70px rgba(244, 217, 155, 0.22)",
            }}
          />
          <div
            style={{
              width: "225px",
              height: "225px",
              borderRadius: "50%",
              background: "#173640",
              position: "absolute",
              left: "110px",
              top: "8px",
            }}
          />
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#f4d99b",
              position: "absolute",
              left: "18px",
              top: "24px",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#f4d99b",
              position: "absolute",
              left: "72px",
              top: "2px",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#f4d99b",
              position: "absolute",
              right: "2px",
              bottom: "55px",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "118px",
            background: "rgba(10, 27, 33, 0.42)",
            borderTopLeftRadius: "58% 100%",
            borderTopRightRadius: "42% 100%",
          }}
        />
      </div>
    ),
    size,
  );
}
