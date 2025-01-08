import React from "react";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  // const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + colourTheme} data-aos="fade-right">
        {/* <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2> */}
        {/* <Githubcalendar
          username="imbickydutta"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        /> */}
      </div>
    </>
  );
};













// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error caught in ErrorBoundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong while loading the GitHub Calendar.</h2>;
//     }
//     return this.props.children;
//   }
// }

// export const Github = () => {
//   const colourTheme = {
//     background: "transparent",
//     text: "#ffffff",
//     grade4: "#8400b8",
//     grade3: "#b22ff4",
//     grade2: "#b265f6",
//     grade1: "#c084f5",
//     grade0: "#ecd9fc",
//   };

//   return (
//     <ErrorBoundary>
//       <div className="section" style={{ background: colourTheme.background }} data-aos="fade-right">
//         <h2 className="section__title different">
//           Days I <span className="different"> Code</span>
//         </h2>
//         <GitHubCalendar
//           username="imbickydutta"
//           blockSize={15}
//           blockMargin={5}
//           theme={colourTheme}
//           fontSize={16}
//         />
//       </div>
//     </ErrorBoundary>
//   );
// };
