import {
  ArrowUpRight,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

// Blog post data type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: Array<{
    name: string;
    color: string;
    bgColor: string;
  }>;
  featured?: boolean;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: "grid-system",
    title: "Grid system for better Design User Interface",
    excerpt:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points.",
    author: "Mohamed Ibrahim",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Interface", color: "#C11574", bgColor: "#FDF2FA" },
    ],
    featured: true,
  },
  {
    id: "1",
    title: "UX review presentations",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Research", color: "#3538CD", bgColor: "#EEF4FF" },
      { name: "Presentation", color: "#C11574", bgColor: "#FDF2FA" },
    ],
  },
  {
    id: "2",
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    author: "Phoenix Baker",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#026AA2", bgColor: "#F0F9FF" },
      { name: "Research", color: "#C11574", bgColor: "#FDF2FA" },
    ],
  },
  {
    id: "3",
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    author: "Lana Steiner",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#027A48", bgColor: "#ECFDF3" },
      { name: "Research", color: "#C11574", bgColor: "#FDF2FA" },
    ],
  },
  {
    id: "4",
    title: "Grid system for better Design User Interface",
    excerpt:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Interface", color: "#C11574", bgColor: "#FDF2FA" },
    ],
    featured: true,
  },
  {
    id: "5",
    title: "Bill Walsh leadership lessons",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Leadership", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Management", color: "#363F72", bgColor: "#F8F9FC" },
    ],
  },
  {
    id: "6",
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wilkinson",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Product", color: "#026AA2", bgColor: "#F0F9FF" },
      { name: "Research", color: "#3538CD", bgColor: "#EEF4FF" },
      { name: "Frameworks", color: "#C4320A", bgColor: "#FFF6ED" },
    ],
  },
  {
    id: "7",
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Research", color: "#3538CD", bgColor: "#EEF4FF" },
    ],
  },
  {
    id: "8",
    title: "How collaboration makes us better designers",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Design", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Research", color: "#3538CD", bgColor: "#EEF4FF" },
    ],
  },
  {
    id: "9",
    title: "Our top 10 Javascript frameworks to use",
    excerpt:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Software Development", color: "#027A48", bgColor: "#ECFDF3" },
      { name: "Tools", color: "#C11574", bgColor: "#FDF2FA" },
      { name: "SaaS", color: "#C01048", bgColor: "#FFF1F3" },
    ],
  },
  {
    id: "10",
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    date: "1 Jan 2023",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categories: [
      { name: "Podcasts", color: "#6941C6", bgColor: "#F9F5FF" },
      { name: "Customer Success", color: "#363F72", bgColor: "#F8F9FC" },
    ],
  },
];

// Mobile Menu component matching Figma design
const MobileMenu = ({
  isOpen,
  isDark,
  onClose,
  onToggleDarkMode,
}: {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
  onToggleDarkMode: () => void;
}) => {
  if (!isOpen) return null;

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
            to="/posts"
            onClick={onClose}
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
            onClick={onToggleDarkMode}
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
          onClick={onClose}
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

// Header component
const Header = ({
  isDark,
  onToggle,
  onMobileMenuToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
  onMobileMenuToggle: () => void;
}) => {
  return (
    <header className={cn("", isDark ? "bg-[#090D1F]" : "bg-white")}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-3 sm:py-4 md:py-5">
          <div
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl font-bold",
              isDark ? "text-white" : "text-[#1A1A1A]",
            )}
          >
            Mohamed Ibrahim
          </div>

          {/* Navigation Menu and Dark mode toggle */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            {/* Navigation Items - Hidden on mobile/small tablet, shown on larger screens */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6">
              <Link
                to="/posts"
                className={cn(
                  "px-1 xl:px-2 py-1 xl:py-2 text-sm xl:text-base 2xl:text-lg font-normal transition-colors whitespace-nowrap",
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-[#1A1A1A] hover:text-gray-600",
                )}
              >
                Posts
              </Link>
              <button
                className={cn(
                  "px-1 xl:px-2 py-1 xl:py-2 text-sm xl:text-base 2xl:text-lg font-normal transition-colors whitespace-nowrap",
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-[#1A1A1A] hover:text-gray-600",
                )}
              >
                Projects
              </button>
              <button
                className={cn(
                  "px-1 xl:px-2 py-1 xl:py-2 text-sm xl:text-base 2xl:text-lg font-normal transition-colors whitespace-nowrap",
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-[#1A1A1A] hover:text-gray-600",
                )}
              >
                About
              </button>
              <button
                className={cn(
                  "px-1 xl:px-2 py-1 xl:py-2 text-sm xl:text-base 2xl:text-lg font-normal transition-colors whitespace-nowrap",
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-[#1A1A1A] hover:text-gray-600",
                )}
              >
                Newsletter
              </button>
            </div>

            {/* Mobile hamburger menu button - Show only on small screens */}
            <button
              onClick={onMobileMenuToggle}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Dark mode toggle - Hidden on mobile, shown on larger screens */}
            <button
              onClick={onToggle}
              className={cn(
                "hidden lg:flex items-center rounded-full transition-colors",
                "p-1 gap-2 sm:p-1.5 sm:gap-3 md:p-2 md:gap-4 lg:p-2.5 lg:gap-4", // Progressive sizing
                isDark ? "bg-white" : "bg-[#090D1F]",
              )}
            >
              {isDark ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-[#090D1F] rounded-full flex items-center justify-center">
                    <Sun className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 text-white" />
                  </div>
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#090D1F]" />
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-white rounded-full flex items-center justify-center">
                    <Moon className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 text-[#090D1F]" />
                  </div>
                </>
              )}
            </button>
          </div>
        </nav>

        {/* Hero section - Enhanced responsive design */}
        <div className="py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 2xl:py-20">
          <div
            className={cn(
              "border-t border-b py-3 sm:py-4 md:py-6 lg:py-10 xl:py-12 2xl:py-16",
              isDark ? "border-white" : "border-black/20",
            )}
          >
            <h1
              className={cn(
                "text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[200px] 3xl:text-[244px] font-bold leading-[0.9] text-center tracking-tight",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
            >
              THE BLOG
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

// Blog Card Components
const FeaturedBlogCard = ({
  post,
  isDark,
}: {
  post: BlogPost;
  isDark: boolean;
}) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <article className="flex flex-col gap-8 cursor-pointer transition-opacity hover:opacity-80">
        {/* Image - Full width as per Figma */}
        <div className="w-full">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Heading and text */}
          <div className="space-y-3">
            {/* Author and date */}
            <p className="text-sm font-semibold text-[#6941C6] leading-5">
              {post.author} • {post.date}
            </p>

            {/* Heading and icon */}
            <div className="flex items-start gap-4">
              <h2
                className={cn(
                  "flex-1 text-2xl font-semibold leading-8",
                  isDark ? "text-white" : "text-[#1A1A1A]",
                )}
              >
                {post.title}
              </h2>
              <div className="pt-1">
                <ArrowUpRight
                  className={cn(
                    "w-6 h-6",
                    isDark ? "text-white" : "text-[#1A1A1A]",
                  )}
                />
              </div>
            </div>

            {/* Supporting text */}
            <p
              className={cn(
                "text-base leading-6",
                isDark ? "text-[#C0C5D0]" : "text-[#667085]",
              )}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-[10px] py-[2px] rounded-2xl"
                style={{
                  backgroundColor: category.bgColor,
                }}
              >
                <span
                  className="text-sm font-medium leading-5"
                  style={{
                    color: category.color,
                  }}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
const CompactBlogCard = ({
  post,
  isDark,
}: {
  post: BlogPost;
  isDark: boolean;
}) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <article className="flex flex-col sm:flex-row gap-6 items-start cursor-pointer transition-opacity hover:opacity-80">
        {/* Image - 320px width, 200px height as per Figma */}
        <div className="w-full sm:w-80 h-48 sm:h-[200px] flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Author and date */}
          <p className="text-sm font-semibold text-[#6941C6] leading-5">
            {post.author} • {post.date}
          </p>

          {/* Heading and text */}
          <div className="space-y-2">
            <h3
              className={cn(
                "text-lg font-semibold leading-7",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
            >
              {post.title}
            </h3>
            <p
              className={cn(
                "text-base leading-6",
                isDark ? "text-[#C0C5D0]" : "text-[#667085]",
              )}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-[10px] py-[2px] rounded-2xl"
                style={{
                  backgroundColor: category.bgColor,
                }}
              >
                <span
                  className="text-sm font-medium leading-5"
                  style={{
                    color: category.color,
                  }}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

const HorizontalFeaturedCard = ({
  post,
  isDark,
}: {
  post: BlogPost;
  isDark: boolean;
}) => {
  return (
    <Link to="/blog/grid-system">
      <article className="flex flex-col lg:flex-row gap-8 cursor-pointer transition-opacity hover:opacity-80">
        <div className="lg:flex-1 aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:flex-1 space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#6941C6]">
              Sunday, {post.date}
            </p>

            <div className="flex items-start gap-4">
              <h2
                className={cn(
                  "flex-1 text-2xl font-bold leading-8",
                  isDark ? "text-white" : "text-[#1A1A1A]",
                )}
              >
                {post.title}
              </h2>
              <ArrowUpRight
                className={cn(
                  "w-6 h-6 mt-1 flex-shrink-0",
                  isDark ? "text-white" : "text-[#1A1A1A]",
                )}
              />
            </div>

            <p
              className={cn(
                "text-base leading-6",
                isDark ? "text-[#C0C5D0]" : "text-[#667085]",
              )}
            >
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <Badge
                key={index}
                className="px-2.5 py-0.5 text-sm font-medium rounded-2xl border-0"
                style={{
                  backgroundColor: category.bgColor,
                  color: category.color,
                }}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

const GridBlogCard = ({
  post,
  isDark,
}: {
  post: BlogPost;
  isDark: boolean;
}) => {
  return (
    <article className="flex flex-col space-y-8">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#6941C6]">
            Sunday, {post.date}
          </p>

          <div className="flex items-start gap-4">
            <h3
              className={cn(
                "flex-1 text-2xl font-bold leading-8",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
            >
              {post.title}
            </h3>
            <ArrowUpRight
              className={cn(
                "w-6 h-6 mt-1 flex-shrink-0",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
            />
          </div>

          <p
            className={cn(
              "text-base leading-6",
              isDark ? "text-[#C0C5D0]" : "text-[#667085]",
            )}
          >
            {post.excerpt}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.categories.map((category, index) => (
            <Badge
              key={index}
              className="px-2.5 py-0.5 text-sm font-medium rounded-2xl border-0"
              style={{
                backgroundColor: category.bgColor,
                color: category.color,
              }}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
};

// Pagination component
const BlogPagination = ({ isDark }: { isDark: boolean }) => {
  const pages = [1, 2, 3, "...", 8, 9, 10];

  return (
    <div
      className={cn(
        "flex justify-between items-center pt-5 border-t",
        isDark ? "border-white/20" : "border-[#EAECF0]",
      )}
    >
      <button
        className={cn(
          "flex items-center gap-2 text-sm",
          isDark ? "text-[#EFEFEF]" : "text-[#667085]",
        )}
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </button>

      <div className="flex items-center gap-0.5">
        {pages.map((page, index) => (
          <button
            key={index}
            className={cn(
              "w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg",
              page === 1
                ? "bg-[#F9F5FF] text-[#121121]"
                : isDark
                  ? "text-[#EFEFEF] hover:bg-white/10"
                  : "text-[#667085] hover:bg-gray-50",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={cn(
          "flex items-center gap-2 text-sm",
          isDark ? "text-[#EFEFEF]" : "text-[#667085]",
        )}
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// Main Index component
const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const featuredPost = blogPosts.find((post) => post.id === "grid-system");
  const recentPosts = blogPosts.slice(1, 3);
  const horizontalFeatured = blogPosts.find((post) => post.id === "4");
  const gridPosts = blogPosts.slice(4, 10);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    // Save to localStorage
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn("min-h-screen", isDark ? "bg-[#090D1F]" : "bg-white")}>
      <Header
        isDark={isDark}
        onToggle={toggleDarkMode}
        onMobileMenuToggle={toggleMobileMenu}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isDark={isDark}
        onClose={toggleMobileMenu}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recent blog posts section - Matching Figma design */}
        <section
          className={cn(
            "py-7 sm:py-8 lg:py-16",
            isDark ? "bg-[#090D1F]" : "bg-white",
          )}
        >
          <div className="max-w-[1280px] mx-auto px-8 space-y-8">
            {/* Section heading */}
            <h2
              className={cn(
                "text-2xl font-semibold",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
            >
              Recent blog posts
            </h2>

            {/* Content layout - Featured post left, Recent posts right */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Featured blog post - Left side */}
              <div className="flex-1">
                {featuredPost && (
                  <FeaturedBlogCard post={featuredPost} isDark={isDark} />
                )}
              </div>

              {/* Recent posts column - Right side */}
              <div className="flex-1 flex flex-col gap-8">
                {recentPosts.slice(0, 2).map((post) => (
                  <CompactBlogCard key={post.id} post={post} isDark={isDark} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal featured post */}
        <section
          className={cn(
            "py-6 sm:py-8 lg:py-16",
            isDark ? "bg-[#090D1F]" : "bg-white",
          )}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {horizontalFeatured && (
              <HorizontalFeaturedCard
                post={horizontalFeatured}
                isDark={isDark}
              />
            )}
          </div>
        </section>

        {/* All blog posts grid */}
        <section
          className={cn(
            "py-6 sm:py-8 lg:py-16",
            isDark ? "bg-[#090D1F]" : "bg-white",
          )}
        >
          <div className="max-w-[1280px] mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
            <h2
              className={cn(
                "text-xl sm:text-2xl font-bold",
                isDark ? "text-white" : "text-[#1A1A1A]",
              )}
            >
              All blog posts
            </h2>

            <div className="space-y-8 sm:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
                {gridPosts.map((post) => (
                  <GridBlogCard key={post.id} post={post} isDark={isDark} />
                ))}
              </div>

              <BlogPagination isDark={isDark} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
