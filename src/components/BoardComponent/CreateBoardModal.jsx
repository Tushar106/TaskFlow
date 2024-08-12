import React, { useContext, useState } from 'react'
import { Dialog, Stack, TextField, Button, Box, Typography } from '@mui/material'
import ModalHeader from '../ModalComponents/ModalHeader';
import { colors } from '../../theme';
import toast, { Toaster } from 'react-hot-toast';
import services from '../../services/services';
import { StoreContext } from '../../context/StoreContext';

export default function CreateBoardModal({ open, setOpen }) {
    const {  refetch } = useContext(StoreContext);
    const onClose = () => {
        setOpen(false);
        setTitle("");
        setSelectedColor(colors[0]);
    }
    const [title, setTitle] = useState("");
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const { createBoard } = services();
    const handleSubmit = async () => {
        if (title.length == 0) {
            return toast.error("Enter the title")
        }
        try {
            setOpen(false);
            setTitle("");
            setSelectedColor(colors[0]);
            const response = createBoard(title, selectedColor).then((res) => {
                refetch();
            });
            toast.promise(response, {
                loading: 'Loading',
                success: 'Board Created Successfully',
                error: (err) => `${err}`,
            })
        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <Dialog open={open} fullWidth maxWidth="xs">
            <Stack p={2} gap={2}>
                <ModalHeader title={"Create Board"} onClose={onClose} />
                <TextField value={title} fullWidth name='Board Name' label="Board Name" onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <Stack direction="row" gap={1} alignItems={"center"}>
                    <Typography>Color-</Typography>
                    {colors.map((color, index) => {
                        return (
                            <Box key={index} sx={{ cursor: "pointer" }} padding={selectedColor == color ? .4 : 0} borderRadius={100} border={2} borderColor={color}>
                                <Box height={25} key={index} width={25} bgcolor={color} borderRadius={100} onClick={() => { setSelectedColor(color) }} />
                            </Box>
                        )
                    })}
                </Stack>
                <Button variant='contained' sx={{ background: "#9689cb" }} onClick={handleSubmit}>
                    Create
                </Button>
            </Stack>
        </Dialog>
    )
}
