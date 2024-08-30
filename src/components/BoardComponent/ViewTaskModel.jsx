import { Dialog } from '@mui/material'
// import React from 'react'
// import ModalHeader from '../ModalComponents/ModalHeader'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

export default function ViewTaskModel(props) {
    return (
        <Dialog open={props.open} fullWidth maxWidth="xs">
            {/* <Stack p={2} >
                <ModalHeader title={"Mobile APP extension"} onClose={props.onClose} />
                <hr style={{width:"100%"}} />
                <Stack>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate asperiores, dolorum repellendus pariatur quasi amet nemo! Corporis harum distinctio quasi aperiam, consequatur provident facilis!
                </Typography>
                </Stack>
            </Stack> */}
            <Box sx={{ flexGrow: 1 }}>
                <Item>
                    <Grid container spacing={2} alignItems={"center"} justifyContent={"flex-start"}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Mobile App Exploration
                            </Typography>
                            <Grid container spacing={2} direction={"column"}>
                                <Grid item xs={6} sm={3}>
                                    <Typography variant="body2">Date</Typography>
                                    <Typography variant="body2">12 Sep 2022</Typography>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Typography variant="body2">Status</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Chip label="Pending" color="primary" variant="outlined" />
                                        <Chip label="Moodboard" color="secondary" variant="outlined" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Description"
                                    defaultValue="Hello, let's meet together"
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2 }}>
                                    <IconButton aria-label="emoji" size="small">
                                        <EmojiEmotionsIcon />
                                    </IconButton>
                                    <IconButton aria-label="edit" size="small">
                                        <EditIcon />
                                    </IconButton>
                                    <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                                        Publish
                                    </Button>
                                </Box>
                            </>
                        </Grid>
                        <Grid item xs={12}>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Button variant="contained" color="secondary">
                                    Thanks for sharing
                                </Button>
                                <Button variant="contained" color="success">
                                    Perfect!
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Item>
            </Box>
        </Dialog>
    )
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Divider from '@mui/material/Divider';
// import Chip from '@mui/material/Chip';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CommentIcon from '@mui/icons-material/Comment';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// export default function ProjectCard() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                     <Item>
//                         <Typography variant="h5" gutterBottom>
//                             Mobile App Exploration
//                         </Typography>
//                         <Grid container spacing={2}>
//                             <Grid item xs={6} sm={3}>
//                                 <Typography variant="body2">Assignee</Typography>
//                                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                                     <Typography variant="body2" marginLeft={1}>
//                                         Roxana Johnsson
//                                     </Typography>
//                                 </Box>
//                             </Grid>
//                             <Grid item xs={6} sm={3}>
//                                 <Typography variant="body2">Date</Typography>
//                                 <Typography variant="body2">12 Sep 2022</Typography>
//                             </Grid>
//                             <Grid item xs={6} sm={3}>
//                                 <Typography variant="body2">Status</Typography>
//                                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                     <Chip label="Pending" color="primary" variant="outlined" />
//                                     <Chip label="Moodboard" color="secondary" variant="outlined" />
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                     </Item>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Item>
//                         <Grid container spacing={2}>
//                             <Grid item xs={6} sm={3}>
//                                 <Typography variant="body2">Comments</Typography>
//                                 <Typography variant="body2">12</Typography>
//                             </Grid>
//                             <Grid item xs={6} sm={3}>
//                                 <Typography variant="body2">Description</Typography>
//                             </Grid>
//                             <Grid item xs={6} sm={3}>
//                                 <Typography variant="body2">Settings</Typography>
//                             </Grid>
//                         </Grid>
//                     </Item>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Item>
//                         <TextField
//                             fullWidth
//                             multiline
//                             rows={4}
//                             label="Comments"
//                             defaultValue="Hello, let's meet together"
//                         />
//                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2 }}>
//                             <IconButton aria-label="emoji" size="small">
//                                 <EmojiEmotionsIcon />
//                             </IconButton>
//                             <IconButton aria-label="edit" size="small">
//                                 <EditIcon />
//                             </IconButton>
//                             <Button variant="contained" color="primary" sx={{ ml: 2 }}>
//                                 Publish
//                             </Button>
//                         </Box>
//                     </Item>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Item>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <Button variant="contained" color="secondary">
//                                 Thanks for sharing
//                             </Button>
//                             <Button variant="contained" color="success">
//                                 Perfect!
//                             </Button>
//                         </Box>
//                     </Item>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }
