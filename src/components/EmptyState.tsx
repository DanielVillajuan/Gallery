import { Box, Button, Typography } from "@mui/material"

const EmptyState = ({ buttonAction, buttonText, text }: { buttonAction?: () => void, buttonText?: string, text: string }): JSX.Element => {
  return (
    <Box display='flex' flexDirection='column' gap={4} width='100%' height='70vh' alignItems='center' justifyContent='center'>
      <Typography variant='h1'>😫🖼️</Typography>
      <Typography variant='h4'>
        {text}
      </Typography>
      {buttonText && <Button variant="outlined" onClick={buttonAction}>{buttonText}</Button>}
    </Box>
  )
}

export default EmptyState;
