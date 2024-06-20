


const Newsitem = ({title,description,src,url}) => {
  return (
    <div class="card bg-dark text-light mb-3 d-inline-block" style={{maxWidth:"345px"}}>
  <img src={src} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href={url} class="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem
