import { Typography } from "antd"
import React from "react"

export default function Paragraph({className, title}){
    return(
        <Typography className={className}>
            {title}
        </Typography>
    )
}