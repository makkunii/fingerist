import React from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '../../components'
import { Link } from 'react-router-dom'

const Content = () => {
    const GUESS_WORD = 'Hello World'
    const WORD_LIST = "Hold"

    return (
        <Flex justifyContent="center">    
            <Box>
            <Text textAlign="center">Guess The Sentence</Text>
            <Grid
                        gap="12px"
                        gridTemplateColumns="repeat(auto-fit, minmax(40px, 5fr))"
                        width="400px"
                        mt="1.3rem"
                    >
                        {GUESS_WORD?.split('').map((el, index) => {
                            return (
                                <Input
                                defaultValue={el}
                                number={index + 1}
                                height="40px"
                                fontSize="15px"
                                />
                            )
                        })}
                    </Grid>
            
            
                <Flex flexDirection="column">
                    <Flex justifyContent="center" gap="15px" mt="5rem">
                           <Text>Hint</Text>
                           <Text>Words</Text>
                    </Flex> 
                    <Flex justifyContent="center" gap="15px" mt="1rem">
                           <Text  mt="1rem">Pakyu ginagamit sayo</Text>
                           <Grid
                        gap="10px"
                        gridTemplateColumns="repeat(auto-fit, minmax(1px, 5fr))"
                        width="200px"
                    >
                        {WORD_LIST?.split('').map((el, index) => {
                            return (
                                <Input
                                defaultValue={el}
                                number=""
                                height="40px"
                                fontSize="10px"
                                />
                            )
                        })}
                    </Grid>
                    </Flex>       
                </Flex>
            </Box>
        </Flex>
    )
}

export default Content
