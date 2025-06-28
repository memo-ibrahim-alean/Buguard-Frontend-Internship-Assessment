import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const GridSystemBlog = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    // Save to localStorage
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#090D1F] text-white" : "bg-white text-[#1A1A1A]"
      }`}
    >
      {/* Header matching Figma design */}
      <header className={`${isDark ? "bg-[#090D1F]" : "bg-white"} py-7 px-28`}>
        <nav className="max-w-[1216px] mx-auto flex justify-between items-center py-2.5">
          <Link
            to="/"
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            Mohamed Ibrahim
          </Link>

          {/* Dark mode toggle matching Figma design */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={toggleDarkMode}
              className={`flex items-center rounded-full px-4 py-2 gap-4 transition-colors ${
                isDark ? "bg-white" : "bg-[#090D1F]"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <>
                  <div className="w-6 h-6 bg-[#090D1F] rounded-full flex items-center justify-center">
                    <Sun className="w-3 h-3 text-white" />
                  </div>
                  <Moon className="w-6 h-6 text-[#090D1F]" />
                </>
              ) : (
                <>
                  <Sun className="w-6 h-6 text-white" />
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Moon className="w-3 h-3 text-[#090D1F]" />
                  </div>
                </>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Main content section */}
      <section className="py-7 px-0">
        <div className="max-w-[1216px] mx-auto px-8">
          {/* Blog post content */}
          <article className="flex flex-col gap-8">
            {/* Author and date */}
            <p className="text-sm font-semibold text-[#6941C6] leading-5">
              Sunday, 1 Jan 2023
            </p>

            {/* Title */}
            <div className="flex items-start gap-4">
              <h1
                className={`flex-1 text-4xl font-bold leading-8 ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                Grid system for better Design User Interface
              </h1>
            </div>

            {/* Hero image */}
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Grid system illustration"
                className="w-full h-[426px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Introduction paragraphs */}
              <div className="space-y-3">
                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  A grid system is a design tool used to arrange content on a
                  webpage. It is a series of vertical and horizontal lines that
                  create a matrix of intersecting points, which can be used to
                  align and organize page elements. Grid systems are used to
                  create a consistent look and feel across a website, and can
                  help to make the layout more visually appealing and easier to
                  navigate.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  If you've been to New York City and have walked the streets,
                  it is easy to figure out how to get from one place to another
                  because of the grid system that the city is built on. Just as
                  the predictability of a city grid helps locals and tourists
                  get around easily, so do webpage grids provide a structure
                  that guides users and designers alike. Because of their
                  consistent reference point, grids improve page readability and
                  scannability and allow people to quickly get where they need
                  to go.
                </p>

                <p
                  className={`text-base font-bold leading-6 text-center w-[567px] mx-auto ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Definition: A grid is made up of columns, gutters, and margins
                  that provide a structure for the layout of elements on a page.
                </p>
              </div>

              {/* Grid definition image */}
              <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Grid definition illustration"
                  className="w-full h-[498px] object-cover"
                />
                <p
                  className={`text-base leading-6 text-center w-[567px] ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Definition: A grid is made up of columns, gutters, and margins
                  that provide a structure for the layout of elements on a page.
                </p>
              </div>

              {/* Grid types content */}
              <div className="space-y-6">
                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  There are three common grid types used in websites and
                  interfaces: column grid, modular grid, and hierarchical grid.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Column grid involves dividing a page into vertical columns. UI
                  elements and content are then aligned to these columns.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Modular grid extends the column grid further by adding rows to
                  it. This intersection of columns and rows make up modules to
                  which elements and content are aligned. Modular grids are
                  great for ecommerce and listing pages, as rows are repeatable
                  to accommodate browsing.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Hierarchical grid: Content is organized by importance using
                  columns, rows, and modules. The most important elements and
                  pieces of content take up the biggest pieces of the grid.
                </p>

                {/* Breaking Down the Grid section */}
                <h3
                  className={`text-lg font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Breaking Down the Grid
                </h3>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Regardless of the type of grid you are using, the grid is made
                  up of three elements: columns, gutters, and margins.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <span className="font-bold">Columns:</span> Columns take up
                  most of the real estate in a grid. Elements and content are
                  placed in columns. To adapt to any screen size, column widths
                  are generally defined with percentages rather than fixed
                  values and the number of columns will vary. For example, a
                  grid on a mobile device might have 4 columns and a grid on a
                  desktop might have 12 columns.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <span className="font-bold">Gutters:</span> The gutter is the
                  space between columns that separates elements and content from
                  different columns. Gutter widths are fixed values but can
                  change based on different breakpoints. For example, wider
                  gutters are appropriate for larger screens, whereas smaller
                  gutters are appropriate for smaller screens like mobile.
                </p>

                {/* Grid elements image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1586281380177-8ff2c0d01b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Grid elements breakdown"
                    className="w-full h-[498px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    An example of the elements that make up a grid: 1) Columns,
                    2) Gutters, 3) Margins.
                  </p>
                </div>

                {/* Examples section */}
                <h3
                  className={`text-lg font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Examples of Grids in Use
                </h3>

                <h4
                  className={`text-base font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Example 1: Hierarchical Grid
                </h4>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Our first example is from{" "}
                  <span className="underline">The New York Times</span>. This
                  screen utilizes a hierarchical grid to create a newspaper-like
                  reading experience. At desktop screen size, two main columns
                  make up the hierarchical grid. The most important news story
                  takes up the most space in the grid, the left column, followed
                  by secondary and tertiary stories, which take up the smaller
                  column and modules on the right.
                </p>

                {/* NY Times example image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="New York Times grid example"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    The New York Times uses a hierarchical grid to achieve its
                    newspaper-like reading experience. (We highlighted the
                    columns in yellow, the gutters in blue, and the margins in
                    purple.)
                  </p>
                </div>

                <h4
                  className={`text-base font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Example 2: Column Grid
                </h4>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Our second example is from{" "}
                  <span className="underline">Ritual.com</span>, a vitamin
                  company. This design uses a column grid to create an
                  attractive visual experience. At this screen size, four
                  consistently sized columns make up the grid structure and
                  elements are aligned to and within these columns. The gutters,
                  the spaces in between the columns, are also consistently sized
                  and help the user visually separate the different products.
                  The margins are independently sized and are the same between
                  the left and right sides.
                </p>

                {/* Ritual example image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Ritual grid example"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    Ritual's four-column grid makes scanning products easy. (We
                    highlighted the columns in yellow, the gutters in blue, and
                    the margins in purple.)
                  </p>
                </div>

                <h4
                  className={`text-base font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Example 3: Modular Grid
                </h4>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Our third example is from{" "}
                  <span className="underline">Behance</span>, a design library.
                  The site's design uses a modular grid to create a pleasant
                  browsing experience. At desktop size, rows are made up of 4
                  consistently sized modules. Horizontal gutters are slightly
                  thicker than vertical gutters and the margins are consistently
                  sized on the left and right of the design. Like in previous
                  example, the gutters visually separate each element.
                </p>

                {/* Behance example image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Behance grid example"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    Behance's design uses a modular grid, which allows users to
                    easily browse. (We highlighted the columns in yellow, the
                    gutters in blue, and the margins in purple.)
                  </p>
                </div>

                <h4
                  className={`text-base font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Example 4: Breaking the Grid
                </h4>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Our last example is{" "}
                  <span className="underline">
                    Shrine from Google's Material Studies
                  </span>
                  . This design uses a column grid, as we can see based on the
                  left navigation, which is 2 columns wide. Look closely and you
                  will see that some product images settle to the margins, while
                  others do not. Breaking the grid like this makes it
                  challenging to focus or quickly scan product images and calls
                  more attention to some products over others. It is okay to
                  break the grid every so often, as long as you have a valid
                  reason for it.
                </p>

                {/* Shrine example image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Shrine breaking grid example"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    Breaking the grid produces a chaotic browsing experience for
                    users. (We highlighted the columns in yellow, the gutters in
                    blue, and the margins in purple.)
                  </p>
                </div>

                {/* Benefits section */}
                <h4
                  className={`text-base font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Benefits of the Grid
                </h4>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Using a grid benefits both end users and the designers alike:
                  Designers can quickly put together well-aligned interfaces.
                  Users can easily scan predictable grid-based interfaces. A
                  good grid is easy to adapt to various screen sizes and
                  orientations. In fact, grid layouts are an essential component
                  of <span className="underline">responsive web design</span>.
                  Responsive design uses breakpoints to determine the screen
                  size threshold at which the layout should change. For example,
                  a desktop screen may have 12 grid columns, which may be
                  stacked on mobile so that the resulting layout has only 4
                  columns.
                </p>

                {/* Responsive grid image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Responsive grid example"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    At the mobile size, Behance's one-column grid (left) was
                    reflowed into a four-column grid structure (right).
                  </p>
                </div>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Even more importantly, the grid is not a throw-away concept.
                  It is used by both designers and developers alike. Be sure to
                  communicate with your developers the grid structure used when
                  creating the design, so they can implement it accordingly.
                </p>

                {/* Choosing and Setting Up section */}
                <h3
                  className={`text-lg font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Choosing and Setting Up Your Grid
                </h3>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  How you use and set up a grid is fundamental to creating well
                  thought out layouts and experiences for your user.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <span className="font-bold">
                    Choose the right grid for your needs.
                  </span>{" "}
                  Take time to think through what type of grid ­— column,
                  modular, or hierarchical — best suits your needs. A
                  hierarchical grid may be the best fit if one item on your page
                  will always be more important than the surrounding elements.
                  For example, hierarchical grids are great for online news
                  platforms. If the content you need to display is highly
                  variable, consider using a basic column or modular grid, as
                  these provide lots of flexibility when designing. For example,
                  elements and content can span across multiple columns or
                  modules or just one to fit design needs.
                </p>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <span className="font-bold">
                    Spend time setting up your grid.
                  </span>{" "}
                  Once you have figured out what type of grid will work well for
                  your needs, start setting it up. Determine the number of
                  columns and the margin and gutter sizes relative to your
                  screen sizes. You will most likely want to prepare for mobile,
                  tablet, and desktop screens. A 12-column grid at laptop or
                  desktop size is generally flexible enough for most design
                  needs. The number of columns will decrease as your device size
                  decreases. Wireframing tools like Sketch and Figma have quick
                  and easy ways to set up and edit your grid, even after you
                  have started designing.
                </p>

                {/* Figma grid setup image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Figma grid setup"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    Easily set the number of columns, the gutter size, and
                    margin size in Figma.
                  </p>
                </div>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <span className="font-bold">
                    Always place content within columns, not gutters.
                  </span>{" "}
                  The gutters should remain empty as you place elements on the
                  grid in order to clearly separate and align content and
                  elements.
                </p>

                {/* Content placement image */}
                <div className="flex flex-col items-center gap-3 w-[778px] mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Content placement in grid"
                    className="w-full h-[426px] object-cover"
                  />
                  <p
                    className={`text-base leading-6 text-center w-[567px] ${
                      isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                    }`}
                  >
                    Content or elements should be placed within and across
                    columns, not gutters.
                  </p>
                </div>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <span className="font-bold">
                    Consider using an 8px grid system.
                  </span>{" "}
                  For most common devices, the screen size in pixels is a
                  multiple of 8. Keeping grid-component values at a multiple of
                  8 will generally make it easier to scale and implement a grid.
                </p>

                {/* Conclusion */}
                <h3
                  className={`text-lg font-bold leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Conclusion
                </h3>

                <p
                  className={`text-base leading-6 ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  Grids not only provide designers a structure on which to base
                  layouts, but they also improve readability and scannability
                  for end users. Use a good grid system that easily adapts to
                  various screen sizes.
                </p>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 pt-6">
                <div className="flex items-center justify-center px-[10px] py-[2px] rounded-2xl bg-[#F9F5FF]">
                  <span className="text-sm font-medium leading-5 text-[#6941C6]">
                    Design
                  </span>
                </div>
                <div className="flex items-center justify-center px-[10px] py-[2px] rounded-2xl bg-[#FDF2FA]">
                  <span className="text-sm font-medium leading-5 text-[#C11574]">
                    Interface
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default GridSystemBlog;
