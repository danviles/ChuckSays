import React from 'react'
import { CSVLink } from 'react-csv'

const Export = ({data}) => {

    console.log(data);

    const headers = [ 
        {label: 'Phrase', key: 'value'},
        {label: 'Categorie', key: 'categories'}
    ]
    
    const csvReport = {
        filename: 'Chuck-Says.csv',
        headers: headers,
        data: data
    }

    return (
        <CSVLink {...csvReport} className="btn btn-primary">Export</CSVLink>
    )
}

export default Export