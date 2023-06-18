import BlurredImage from "./BlurredImage";

function App() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        padding: "2rem",
        margin: "2rem",
        gap: "1rem",
      }}
    >
      <BlurredImage
        imageUrl="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c3RhcnN8fHx8fHwxNjg3MDkwMjI2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
        blurhash="L24eKFsl0KNIIpRk%1xZ0LbI~Bs,"
        width={800}
        height={600}
      />
      <BlurredImage
        imageUrl="https://images.unsplash.com/photo-1536152470836-b943b246224c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c3RhcnN8fHx8fHwxNjg3MDkxMzg3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
        blurhash="L86v.9%LD4XApMj]V?WB00M|.5n$"
        width={800}
        height={600}
      />
    </div>
  );
}

export default App;
