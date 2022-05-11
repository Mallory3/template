import React, { useState, useEffect } from "react"
import sanityClient from "../client"

function fetchContact() {

  return sanityClient.fetch(`
    *[_type == "contact"] {
      mapEmbedded,
      email
    }
  `)
}

export default fetchContact
