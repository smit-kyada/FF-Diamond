"use client";

export default function TestAd() {
  return (
    <div style={{ 
      margin: "10px 0",
      padding: "20px",
      border: "2px solid #007bff",
      backgroundColor: "#e7f3ff",
      textAlign: "center",
      borderRadius: "8px"
    }}>
      <h3 style={{ color: "#007bff", margin: "0 0 10px 0" }}>
        🧪 TEST AD PLACEHOLDER
      </h3>
      <p style={{ color: "#666", margin: "0" }}>
        This is a test ad container. If you can see this, the ad placement is working correctly.
      </p>
      <div style={{ 
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "4px"
      }}>
        <strong>Ad Unit:</strong> /23308471723/bimbgames-one-BANNER-1<br/>
        <strong>Size:</strong> 300x250, 336x280<br/>
        <strong>Status:</strong> Test Mode
      </div>
    </div>
  );
}
