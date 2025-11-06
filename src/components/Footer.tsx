const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Al-Madina Constructions</h3>
          <p className="text-white/70 mb-4">
            Building the Future of Peshawar
          </p>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Al-Madina Constructions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
