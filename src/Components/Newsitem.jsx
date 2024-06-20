


const Newsitem = ({title,description,src,url}) => {
  return (
    <div class="card" style="width: 18rem;">
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
