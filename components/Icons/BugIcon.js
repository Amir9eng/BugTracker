import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BugIcon(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.167 14.918a4.168 4.168 0 003.333-4.083v-2.5a4.15 4.15 0 00-.346-1.667H4.513a4.15 4.15 0 00-.346 1.667v2.5A4.169 4.169 0 007.5 14.918v-4.916h1.667v4.916zm-6.22-1.841a5.816 5.816 0 01-.447-2.242H0V9.168h2.5v-.833c0-.536.072-1.054.208-1.547L.863 5.723l.834-1.443 1.683.972a5.85 5.85 0 01.166-.25h9.575c.057.081.112.166.166.25l1.683-.972.833 1.443-1.844 1.065c.135.492.208 1.011.208 1.547v.833h2.5v1.667h-2.5c0 .794-.159 1.552-.447 2.242l2.083 1.203-.833 1.443-2.105-1.215a5.82 5.82 0 01-4.532 2.16 5.82 5.82 0 01-4.531-2.16l-2.105 1.215-.834-1.443 2.084-1.203zM5 3.335a3.333 3.333 0 016.667 0H5z"
        fill="#95A4A6"
      />
    </Svg>
  )
}

export default BugIcon
