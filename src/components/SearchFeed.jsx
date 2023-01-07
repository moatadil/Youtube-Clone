import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Videos } from './index'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then(data => {
                setVideos(data.items)
            })
    }, [searchTerm])
    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                Search Results For: <span style={{ color: '#F31503' }}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed