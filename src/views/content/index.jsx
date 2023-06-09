import React, { useEffect } from 'react'
import { Box, Flex, Grid, Text } from '../../components'
import InputWords from './components/InputWords'
import GuessSentence from './components/GuessSentence'
import useGame from '../../hooks/useGame'

const Content = () => {
    const {
        gameWordLists,
        restartGame,
        isLoading,
        gameUserInputs,
        gameSentence,
        startGame,
    } = useGame()

    useEffect(() => {
        if (!gameWordLists || !gameWordLists) startGame()
    }, [gameSentence, gameWordLists])

    return (
        <Flex justifyContent="center">
            <Box>
                <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="1.3rem"
                    mt="1.5rem"
                >
                    GUESS THE SENTENCE
                </Text>
                <Grid
                    gap="20px"
                    gridTemplateColumns="repeat(auto-fit, minmax(20px, 1fr))"
                    maxWidth="530px"
                    width="100%"
                    mt="1.3rem"
                    mx="1rem"
                >
                    <GuessSentence />
                </Grid>

                <Flex flexDirection="column">
                    <Flex
                        justifyContent="center"
                        gap="px"
                        mt="1rem"
                        flexDirection="column"
                    >
                        {gameWordLists?.map((e, i) => {
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
                                            HintIndex={i}
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
