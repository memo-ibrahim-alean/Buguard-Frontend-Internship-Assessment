import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  Calendar,
  User,
  Hash,
  Eye,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { fetchPost, fetchUser } from "@/services/api";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
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
    data: post,
    isLoading: postLoading,
    error: postError,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id!),
    enabled: !!id,
  });

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["user", post?.userId],
    queryFn: () => fetchUser(post!.userId),
    enabled: !!post?.userId,
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

  const isLoading = postLoading || userLoading;

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
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
              <Link
                to="/posts"
                className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                } whitespace-nowrap`}
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Back to Posts</span>
                <span className="xs:hidden">Back</span>
              </Link>
              {post && (
                <>
                  <div
                    className={`h-3 sm:h-4 w-px ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
                  />
                  <span
                    className={`text-xs sm:text-sm truncate ${isDark ? "text-[#C0C5D0]" : "text-[#667085]"}`}
                  >
                    <span className="hidden sm:inline">Post </span>#{post.id}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              {/* Navigation Items - Progressive display */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-6">
                <Link
                  to="/posts"
                  className={`text-sm hover:opacity-70 transition-opacity whitespace-nowrap ${
                    isDark ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  All Posts
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

              {/* Mobile hamburger menu button */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 transition-colors ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                }`}
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>

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

      <main className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Loading State - Enhanced responsive */}
        {isLoading && (
          <div className="flex items-center justify-center py-8 sm:py-12 md:py-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <Loader2
                className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 animate-spin ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                }`}
              />
              <span
                className={`text-sm sm:text-base md:text-lg ${isDark ? "text-white" : "text-[#1A1A1A]"}`}
              >
                Loading post...
              </span>
            </div>
          </div>
        )}

        {/* Error State */}
        {postError && (
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
              Failed to load post. Please try again or go back to the posts
              list.
            </AlertDescription>
          </Alert>
        )}

        {/* Post Content - Enhanced responsive layout */}
        {post && (
          <article className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {/* Post Header */}
            <header className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                <Badge
                  variant="secondary"
                  className={`text-xs sm:text-sm ${
                    isDark
                      ? "bg-blue-900/30 text-blue-200 border-blue-800"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  <Hash className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">Post </span>
                  {post.id}
                </Badge>

                {user && (
                  <Badge
                    variant="outline"
                    className={`text-xs sm:text-sm ${
                      isDark
                        ? "border-gray-700 text-gray-300"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    <User className="w-3 h-3 mr-1" />
                    <span className="truncate max-w-[120px] sm:max-w-none">
                      {user.name}
                    </span>
                  </Badge>
                )}

                <div
                  className={`flex items-center gap-1 text-xs sm:text-sm ${
                    isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                  }`}
                >
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">
                    From JSONPlaceholder API
                  </span>
                  <span className="sm:hidden">API Data</span>
                </div>
              </div>

              {/* Title - Enhanced responsive typography */}
              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight ${
                  isDark ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {post.title}
              </h1>
            </header>

            {/* Author Info */}
            {user && (
              <Card
                className={`${
                  isDark
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${
                        isDark
                          ? "bg-blue-900/30 text-blue-200"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-[#1A1A1A]"
                        }`}
                      >
                        {user.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                        }`}
                      >
                        @{user.username} • {user.email}
                      </p>
                      {user.company && (
                        <p
                          className={`text-sm ${
                            isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                          }`}
                        >
                          {user.company.name} - {user.company.catchPhrase}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Post Body */}
            <div className="prose prose-lg max-w-none">
              <div
                className={`${
                  isDark ? "text-[#C0C5D0]" : "text-[#667085]"
                } leading-relaxed text-lg space-y-6`}
              >
                {post.body.split("\n").map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      <p key={index} className="mb-6">
                        {paragraph.trim()}
                      </p>
                    ),
                )}

                {/* Additional content to make it more realistic */}
                <div className="mt-8 space-y-6">
                  <h2
                    className={`text-2xl font-semibold ${
                      isDark ? "text-white" : "text-[#1A1A1A]"
                    }`}
                  >
                    About This Post
                  </h2>
                  <p>
                    This post was fetched from the JSONPlaceholder API, which
                    provides fake JSON data for testing and prototyping.
                    JSONPlaceholder is a free online REST API that you can use
                    whenever you need some fake data for your applications.
                  </p>
                  <p>
                    The content above represents the original post body from the
                    API, which is typically used for demonstration purposes. In
                    a real-world application, this would contain the actual
                    article content written by the author.
                  </p>
                </div>
              </div>
            </div>

            {/* Post Footer */}
            <footer
              className={`pt-8 mt-12 border-t ${
                isDark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Badge
                    className={`${
                      isDark
                        ? "bg-green-900/30 text-green-200 border-green-800"
                        : "bg-green-50 text-green-700 border-green-200"
                    }`}
                  >
                    API Data
                  </Badge>
                  <Badge
                    className={`${
                      isDark
                        ? "bg-purple-900/30 text-purple-200 border-purple-800"
                        : "bg-purple-50 text-purple-700 border-purple-200"
                    }`}
                  >
                    JSONPlaceholder
                  </Badge>
                </div>

                <Link
                  to="/posts"
                  className={`text-sm hover:opacity-70 transition-opacity flex items-center gap-2 ${
                    isDark ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  View All Posts
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </footer>
          </article>
        )}
      </main>
    </div>
  );
};

export default PostDetail;
