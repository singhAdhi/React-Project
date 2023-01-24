const Services = ({ name, img }) => {
  return (
    <div className="col-md-6 col-12 category-img">
      <a href="#0">
        <div class="phovv">
          <img class="w-100 hovv" src={img} />
          <h3 class="img-text">{name}</h3>
          <p class="img-desc sec-section-text"></p>
        </div>
      </a>
    </div>
  );
};
export default Services;
