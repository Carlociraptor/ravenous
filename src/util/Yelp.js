const apiKey = 'baNWmeHUELiI_e9kFleyHwVyqOXCqrW794mr4-KrIQzEzE46x14O3zwlHS5KyqzeJrA8nh5IiHHZMuRl3Np7zxLqxhUFReU85TphPPimX4gXA0In8OStSQO_mUiYXnYx'

const yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map((business) => {
                       return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            });
    }
}

export default yelp