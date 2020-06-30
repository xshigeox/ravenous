const apiKey =
  "Gz2SqnSRkwV1tiNOIUHRZEM3zNl_oGyBkiGl8qHcaWWl6L3SKxL5-f6z2QIpCNF5n7SNUgzJcB6kqgQhZSH5fh6oCXyRIGShunkGswWONzhDaGnj3_nU4a5cHnH7XnYx"

const Yelp = {}

Yelp.search = (term, location, sortBy) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )
    .then((response) => {
      return response.json()
    })
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        })
      }
    })
}

export default Yelp
