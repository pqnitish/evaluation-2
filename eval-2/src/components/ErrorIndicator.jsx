import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
 export default function ErrorIndicator(){
    return(
        <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>deta no found...</AlertDescription>
      </Alert>
    )
}