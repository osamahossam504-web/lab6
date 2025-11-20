import React from "react";

const DATA = {
  nav: {
    logo: "Udemy Clone",
    links: ["Categories", "Udemy Business", "Teach on Udemy", "Help"],
  },
  hero: {
    title: "Learn anything — online",
    subtitle:
      "Build in-demand skills with courses taught by real-world instructors.",
    placeholder: "Search for anything...",
  },
  categories: [
    "Development",
    "Business",
    "Finance",
    "IT & Software",
    "Personal Development",
  ],
  courses: [
    {
      id: 1,
      title: "React - The Complete Guide",
      author: "Jane Doe",
      rating: 4.7,
      price: "$12.99",
    },
    {
      id: 2,
      title: "Python Bootcamp",
      author: "Ali Hassan",
      rating: 4.6,
      price: "$9.99",
    },
    {
      id: 3,
      title: "Excel for Beginners",
      author: "Sara Ahmed",
      rating: 4.5,
      price: "$7.99",
    },
    {
      id: 4,
      title: "Graphic Design Masterclass",
      author: "Omar Ali",
      rating: 4.8,
      price: "$14.99",
    },
  ],
  companies: ["Google", "Amazon", "Microsoft", "Spotify"],
};

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* NAVBAR */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          {DATA.nav.logo}
        </div>

        <nav style={{ display: "flex", gap: "15px" }}>
          {DATA.nav.links.map((link) => (
            <a key={link} href="#" style={{ color: "#555", fontSize: "14px" }}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: "50px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          {DATA.hero.title}
        </h1>
        <p style={{ fontSize: "18px", color: "#444" }}>{DATA.hero.subtitle}</p>

        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder={DATA.hero.placeholder}
            style={{
              padding: "12px",
              fontSize: "16px",
              width: "60%",
              marginRight: "10px",
            }}
          />
          <button
            style={{
              padding: "12px 20px",
              background: "black",
              color: "white",
              border: "none",
            }}
          >
            Search
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Categories</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {DATA.categories.map((c) => (
            <div
              key={c}
              style={{
                padding: "10px 15px",
                background: "#eee",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
          Popular Courses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {DATA.courses.map((course) => (
            <div
              key={course.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <div
                style={{
                  background: "#f2f2f2",
                  height: "120px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ fontSize: "16px" }}>{course.title}</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>{course.author}</p>
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                {course.price}
              </p>
              <p style={{ fontSize: "12px", color: "#777" }}>
                Rating: {course.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTED BY */}
      <section style={{ padding: "30px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Trusted by</h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {DATA.companies.map((c) => (
            <div
              key={c}
              style={{
                padding: "15px 25px",
                background: "#eee",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          borderTop: "1px solid #ddd",
          marginTop: "40px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
        }}
      >
        © 2025 Udemy Clone — Assignment
      </footer>
    </div>
  );
}
