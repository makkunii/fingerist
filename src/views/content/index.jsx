import React, { useEffect } from 'react'
import { Box, Flex, Grid, Text } from '../../components'
import InputWords from './components/InputWords'
import GuessSentence from './components/GuessSentence'
import useGame from '../../hooks/useGame'

const Content = () => {
    const {
        gameSentence,
        gameWordLists,
        gameLetterNumbers,
        resetGame,
        isLoading,
        startGame,
    } = useGame()

    useEffect(() => {
        if (!gameWordLists || !gameWordLists) startGame()
    }, [gameSentence, gameWordLists])

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
                    <GuessSentence
                        sentence={gameSentence}
                        roundsNumbers={gameLetterNumbers}
                    />
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
                                            roundsNumbers={gameLetterNumbers}
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
