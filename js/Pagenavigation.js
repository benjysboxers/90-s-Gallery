const handleClick = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  console.log(target);
  const element = document.querySelector(target);
  element.scrollIntoView({ behavior: "smooth" });
}