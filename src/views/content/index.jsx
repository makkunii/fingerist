import React, { useEffect } from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from "react"



const Content = () => {

    const [number, setnumber] = useState('')
    const [userInput, setUserInput] = useState('')

    const GUESS_WORD = 'Hello World'
    const WORD_LIST = "Hold"
    const WORD_HINT = "Another term for grab"

    const inputs = []

    const settingIndex = () => {
        const words = {}
        {GUESS_WORD?.split('').map((el, index) => 
         {
            words[el] = index + 1
             
         })}
         setnumber(words) 
     }

     //you get the idea
    // const WordListChecker = () => {
        
    //     inputs.push(userInput)
    
    //     console.log(inputs);
    // } 
     useEffect (()=> { settingIndex() },[GUESS_WORD])
    //  useEffect (()=> { WordListChecker() } ,[inputs])


    return (
        <Flex justifyContent="center">    
            <Box>
            <Text textAlign="center">Guess The Sentence</Text>
            <Grid
                        gap="19px"
                        gridTemplateColumns="repeat(auto-fit, minmax(20px, 100fr))"
                        width="300px"
                        mt="1.3rem"
                    >
                        {GUESS_WORD?.split('').map((el, index) => 
                        {
                            return el === " " ? <Box p="20px"/> :  
                                <Input
                                defaultValue=""
                                placeholder="?"
                                number={index + 1}
                                height="40px"
                                fontSize="10px"
                                numberSize="10px"
                                />
                            
                        })}

                       
                    </Grid>
            
            
                <Flex flexDirection="column">
                    <Flex justifyContent="center" gap="15px" mt="5rem">
                           <Text>Hint</Text>
                           <Text>Words</Text>
                    </Flex> 
                    <Flex justifyContent="center" gap="15px" mt="1rem">
                           <Text  mt="1rem">{WORD_HINT}</Text>
                           <Grid
                        gap="10px"
                        gridTemplateColumns="repeat(auto-fit, minmax(1px, 5fr))"
                        width="200px"
                    >
                        {WORD_LIST?.split('').map((el, index) => {
                            return (
                                <Input
                                defaultValue=""
                                placeholder="?"
                                number={number[el]}
                                height="40px"
                                fontSize="10px"
                                numberSize='10px'

                                //get user input 
                                // onChange={(evt) => setUserInput(evt.target.value)}
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
