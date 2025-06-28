import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  Eye,
  Calendar,
  User,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { fetchPosts } from "@/services/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Posts = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    // Save to localStorage
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  // Mobile Menu component
  const MobileMenu = () => {
    if (!isMobileMenuOpen) return null;

    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${isDark ? "bg-[#121212]" : "bg-white"}`}
        />

        {/* Menu Content */}
        <div className="relative flex flex-col justify-center items-center h-full gap-14 px-5">
          {/* Brand */}
          <div
            className={`text-lg font-semibold ${isDark ? "text-white" : "text-[#1A1A1A]"}`}
          >
            Mohamed Ibrahim
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col items-center gap-5">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={`flex items-start gap-2.5 py-2 px-2 text-lg font-normal transition-opacity hover:opacity-70 ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/posts"
              onClick={toggleMobileMenu}
              className={`flex items-start gap-2.5 py-2 px-2 text-lg font-normal transition-opacity hover:opacity-70 ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              Blog
            </Link>
            <button
              className={`flex items-start gap-2.5 py-2 px-2 text-lg font-normal transition-opacity hover:opacity-70 ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              Projects
            </button>
            <button
              className={`flex items-start gap-2.5 py-2 px-2 text-lg font-normal transition-opacity hover:opacity-70 ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              About
            </button>
            <button
              className={`flex items-start gap-2.5 py-2 px-2 text-lg font-normal transition-opacity hover:opacity-70 ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              Newsletter
            </button>
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center rounded-full px-4 py-2 gap-4 transition-colors mt-4 ${
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

          {/* Close button */}
          <button
            onClick={toggleMobileMenu}
            className={`absolute bottom-20 hover:opacity-70 transition-opacity ${
              isDark ? "text-white" : "text-[#1A1A1A]"
            }`}
            aria-label="Close mobile menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#090D1F] text-white" : "bg-white text-[#1A1A1A]"
      }`}
    >
      {/* Header - Enhanced responsive design */}
      <header
        className={`border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
              <Link
                to="/"
                className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                } whitespace-nowrap`}
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Back to Home</span>
                <span className="xs:hidden">Back</span>
              </Link>
              <div
                className={`h-3 sm:h-4 w-px ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
              />
              <h1
                className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold truncate ${isDark ? "text-white" : "text-[#1A1A1A]"}`}
              >
                All Posts
              </h1>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              {/* Navigation Items - Progressive display */}
              <div className="hidden lg:flex items-center gap-4 2xl:gap-6">
                <Link
                  to="/"
                  className={`text-sm hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isDark ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  Home
                </Link>
                <button
                  className={`text-sm hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isDark ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  Projects
                </button>
                <button
                  className={`text-sm hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isDark ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  About
                </button>
                <button
                  className={`text-sm hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isDark ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  Newsletter
                </button>
              </div>

              {/* Mobile hamburger menu button - Show only on small screens */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 transition-colors ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                }`}
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Dark mode toggle - Hidden on mobile, shown on larger screens */}
              <button
                onClick={toggleDarkMode}
                className={`hidden lg:flex items-center rounded-full transition-colors p-1 gap-2 sm:p-1.5 sm:gap-3 md:p-2 md:gap-4 ${
                  isDark ? "bg-white" : "bg-[#090D1F]"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#090D1F] rounded-full flex items-center justify-center">
                      <Sun className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 text-white" />
                    </div>
                    <Moon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#090D1F]" />
                  </>
                ) : (
                  <>
                    <Sun className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center">
                      <Moon className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 text-[#090D1F]" />
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Page Title - Enhanced responsive typography */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight ${
              isDark ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            Latest Posts
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed ${isDark ? "text-[#C0C5D0]" : "text-[#667085]"}`}
          >
            Discover our latest articles and insights from the JSONPlaceholder
            API
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-3">
              <Loader2
                className={`w-6 h-6 animate-spin ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                }`}
              />
              <span
                className={`text-lg ${isDark ? "text-white" : "text-[#1A1A1A]"}`}
              >
                Loading posts...
              </span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Alert
            className={`mb-8 ${
              isDark
                ? "border-red-800 bg-red-900/20"
                : "border-red-200 bg-red-50"
            }`}
          >
            <AlertCircle className="h-4 w-4" />
            <AlertDescription
              className={isDark ? "text-red-200" : "text-red-800"}
            >
              Failed to load posts. Please try refreshing the page.
            </AlertDescription>
          </Alert>
        )}

        {/* Posts Grid - Enhanced responsive layout */}
        {posts && posts.length > 0 && (
          <>
            <div className="grid gap-4 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className={`group hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border ${
                    isDark
                      ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <CardHeader className="space-y-2 sm:space-y-3 p-3 sm:p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        variant="secondary"
                        className={`text-xs sm:text-sm flex-shrink-0 ${
                          isDark
                            ? "bg-blue-900/30 text-blue-200 border-blue-800"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        #{post.id}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500 min-w-0">
                        <User className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">User {post.userId}</span>
                      </div>
                    </div>

                    <h2
                      className={`text-sm sm:text-base md:text-lg font-semibold leading-tight group-hover:opacity-80 transition-opacity ${
                        isDark ? "text-white" : "text-[#1A1A1A]"
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h2>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {truncateText(post.body, 120)}
                    </p>

                    <div className="flex items-center justify-between pt-1 sm:pt-2 gap-2">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-500">
                        <Eye className="w-3 h-3" />
                        <span className="hidden sm:inline">Read more</span>
                        <span className="sm:hidden">Read</span>
                      </div>

                      <Link to={`/posts/${post.id}`}>
                        <Button
                          size="sm"
                          className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 transition-all duration-300 ${
                            isDark
                              ? "bg-white text-[#090D1F] hover:bg-gray-100"
                              : "bg-[#090D1F] text-white hover:bg-gray-900"
                          }`}
                        >
                          <span className="hidden sm:inline">Read Post</span>
                          <span className="sm:hidden">Read</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div
              className={`mt-12 pt-8 border-t text-center ${
                isDark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <p
                className={`text-sm ${isDark ? "text-[#C0C5D0]" : "text-[#667085]"}`}
              >
                Showing {posts.length} posts from JSONPlaceholder API
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Posts;
