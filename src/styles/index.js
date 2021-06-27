const EDITOR_STYLES = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  topbar: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  topbarLeft: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  topbarTitle: {
    fontWeight: 700,
    userSelect: "none",
  },
  link: {
    marginLeft: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
    userSelect: "none",
  },
};

const OUTPUT_STYLES = {
  wrapper: {
    height: "100vh",
    backgroundColor: "#f3f3f3",
    padding: 10,
  },
};

export { EDITOR_STYLES, OUTPUT_STYLES };
