import React, { useEffect } from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Content = () => {
    
    const [number, setnumber] = useState()
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

            // Makkuniii was here
            const splitSentence = randomObject.sentence.split(''); 

            //remove spaces
            const filtered = splitSentence.filter((el) => {
                return el !== ' ';
              });
            //return unique value only remove duplicate letters
            const unique = filtered.filter((value, index, array) => array.indexOf(value) === index);
            
            //map the unique letters
            unique.map((el, index) => {
                letterIndexes[el] = index + 1
            })

            setnumber(letterIndexes)

        }   
        catch (error) {
            console.error(error);
            return error
          }
    }
   

    // console.log(number)

    useEffect(() => {
        if(!ROUND) {
            generateGuessWord()
        }
    }, [ROUND])


  
    return (
        <Flex justifyContent="center">
            <Box>   
                <Text textAlign="center">GUESS THE SENTENCE</Text>
                <Grid
                    gap="20px"
                    gridTemplateColumns="repeat(auto-fit, minmax(20px, 1fr))"
                    maxWidth="530px"
                    width="100%"
                    mt="1.3rem"
                    mx="auto"
                >
                    {(ROUND?.sentence)?.split('')?.map((el, index) => {
                        return el === ' ' ? (
                            <Box/>
                        ) : (
                            <Input
                                defaultValue=""
                                placeholder="?"
                                number={number[el]}
                                height="40px"
                                fontSize="10px"
                                numberSize="10px"
                                width="40px"
                                key={index}
                            />
            
                        )
                    })}
                </Grid>

                <Flex flexDirection="column">
                    <Flex justifyContent="center" gap="px" mt="1rem" flexDirection="column">
                            
                        {
                            ROUND?.words_list?.map( (e, i) => {
                                return (
                                    <Grid 
                                    gap="5px"
                                    gridTemplateColumns="repeat(auto-fit, minmax(40px, 1fr))"
                                    width="500px">
                                       <Flex justifyContent="end">
                                       <Text mt="1rem" key={i}>
                                            {e.description}
                                        </Text>
                                       </Flex>
                                      
                                      <Flex  gap="5px"
                                      justifyContent="start"
                                    width="100px">
                                      {e?.word?.split('').map((el, index) => {
                                            return (
                                                <Input
                                                    placeholder="?"
                                                    number={number[el]}
                                                    height="40px"
                                                    fontSize="10px"
                                                    numberSize="10px"
                                                    key={`hint-field-${index}`}
                                                />
                                            )
                                        })}
                                      </Flex>
                                       

                                    </Grid>
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
