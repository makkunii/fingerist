import React, { useEffect } from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Content = () => {
    
    const [number, setnumber] = useState(null)
    const [ROUND, setRound] = useState(null)

    const generateGuessWord = async () => {
        try {
            
            const response = await fetch('../src/api/words.json');
            const results = await response.json();
            const data = results.data;

            const randomIndex = Math.floor(Math.random() * data.length);
            const randomObject = data[randomIndex];
            
            setRound(randomObject);

            const letterIndexes = {}
            randomObject.sentence.split('').map((el, index) => {
                letterIndexes[el] = index + 1
            })

            setnumber(letterIndexes)

        }   
        catch (error) {
            console.error(error);
            return error
          }
    }
   

    console.log(number)

    useEffect(() => {
        if(!ROUND) {
            generateGuessWord()
        }
    }, [ROUND])


  
    return (
        <Flex justifyContent="center">
            <Box>   
                <Text textAlign="center">Guess The Sentence</Text>
                <Grid
                    gap="20px"
                    gridTemplateColumns="repeat(auto-fit, minmax(30px, 1fr))"
                    maxWidth="340px"
                    width="100%"
                    mt="1.3rem"
                    mx="auto"
                >
                    {(ROUND?.sentence)?.split('')?.map((el, index) => {
                        return el === ' ' ? (
                            <Box p="10px"/>
                        ) : (
                            <Input
                                defaultValue=""
                                placeholder={el}
                                number={number[el]}
                                height="40px"
                                fontSize="10px"
                                numberSize="10px"
                                key={index}
                            />
            
                        )
                    })}
                </Grid>

                <Flex flexDirection="column">
                    <Flex justifyContent="center" gap="15px" mt="1rem" flexDirection="column">
                            
                        {
                            ROUND?.words_list?.map( (e, i) => {
                                return (
                                    <Flex gap="1rem" justifyContent="space-between" width="100%">
                                        <Text mt="1rem" key={i}>
                                            {e.description}
                                        </Text>

                                        {e?.word?.split('').map((el, index) => {
                                            return (
                                                <Input
                                                    placeholder={el}
                                                    number={number[el]}
                                                    height="40px"
                                                    fontSize="10px"
                                                    numberSize="10px"
                                                    key={`hint-field-${index}`}
                                                />
                                            )
                                        })}
                                    </Flex>
                                )
                            })
                        }
                            
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Content
