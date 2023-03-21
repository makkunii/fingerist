import React, { useEffect, useMemo } from 'react'
import { Box, Flex, Grid, Input, Text } from '../../components'
import { useState } from 'react'
import { generateGuessWord, generateLetterNumbers } from '../../api'
import InputWords from './components/InputWords'

const Content = () => {
    const [rounds, setRound] = useState({
        numbers: null,
        words_list: null,
        sentence: null,
    })

    useEffect(() => {
        const _ = async () => {
            const apiResult = await generateGuessWord()
            const letterIndexes = generateLetterNumbers(apiResult)

            setRound({
                numbers: letterIndexes,
                sentence: apiResult.sentence,
                words_list: apiResult.words_list,
            })
        }

        if (!rounds?.sentence || !rounds?.words_list) _()
    }, [rounds])

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
                    {rounds?.sentence?.split('')?.map((el, index) => {
                        return el === ' ' ? (
                            <Box />
                        ) : (
                            <Input
                                defaultValue=""
                                placeholder="?"
                                number={rounds?.numbers[el]}
                                height="40px"
                                fontSize="10px"
                                numberSize="10px"
                                width="40px"
                                key={`sentence-${index}`}
                            />
                        )
                    })}
                </Grid>

                <Flex flexDirection="column">
                    <Flex
                        justifyContent="center"
                        gap="px"
                        mt="1rem"
                        flexDirection="column"
                    >
                        {rounds?.words_list?.map((e, i) => {
                            return (
                                <Grid
                                    gap="5px"
                                    gridTemplateColumns="repeat(auto-fit, minmax(40px, 1fr))"
                                    width="500px"
                                    key={i}
                                >
                                    <Flex justifyContent="end">
                                        <Text mt="1rem">{e.description}</Text>
                                    </Flex>

                                    <Flex
                                        gap="5px"
                                        justifyContent="start"
                                        width="100px"
                                    >
                                        <InputWords
                                            word={e.word}
                                            roundsNumbers={rounds.numbers}
                                        />
                                    </Flex>
                                </Grid>
                            )
                        })}
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Content
