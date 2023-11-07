import { Box, Button, Dialog, Typography } from "@mui/material"

const ConfirmModal = ({ open, onClose, text, onSuccess }: { open: boolean, onClose: () => void, text: string, onSuccess: () => void }): JSX.Element => {
  return (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
      >
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding={4} gap={4}>
          <Typography variant='h4' >
            ¿Estas seguro?
          </Typography>
          <Typography variant='subtitle1' >
            {text}
          </Typography>
          <Box display='flex' width='100%' justifyContent='center' gap={2} >
            <Button variant='outlined' onClick={onClose} >Cancelar</Button>
            <Button variant='contained' onClick={onSuccess}>Confirmar</Button>
          </Box>
        </Box>
      </Dialog>
  )
}

export default ConfirmModal;
