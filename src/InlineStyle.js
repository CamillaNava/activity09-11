const InlineStyle = () => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ padding: "10px 20px", textAlign: "center", color: "#000" }}>
              Inline Style in React
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label
                style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}
              >
                What needs to be done?
              </label>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form>
                <input
                  type="text"
                  style={{
                    padding: "10px 20px",
                    textAlign: "center",
                    color: "blue",
                    marginRight: "10px",
                  }}
                />
                <button
                  style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}
                >
                  Add{" "}
                </button>
              </form>
            </div>
          </div>
        );
      };
      
      export default InlineStyle;
      