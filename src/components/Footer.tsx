export const Footer = () => {
  return (
    <footer className="text-primary-text text-center flex flex-col justify-between gap-3 py-3">
      <hr className="" />
      <p>
        © {new Date().getFullYear()} README Generator. Открытый исходный код.
      </p>
      <p>
        <a
          href="https://github.com/yourusername/readme-generator"
          className="underline hover:text-primary-hover"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};
