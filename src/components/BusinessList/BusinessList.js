import React from "react"
import "./BusinessList.css"
import Business from "../Business/Business"

const BusinessList = (props) => {
  const businesses = props.businesses.map((business) => {
    return <Business key={business.id} business={business} />
  })

  return <div className="BusinessList">{businesses}</div>
}

export default BusinessList
