import { HStack, Spinner } from '@chakra-ui/react'
 export default function LoadingIndicator(){
    return(
        <>
        <HStack>
        <Spinner size='xl' />
        </HStack>
        
        </>
    )
}