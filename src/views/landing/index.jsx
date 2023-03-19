import React from 'react'
import { Box, Button, Flex, Grid, Input, Text } from '../../components'
import BouncingInputBox from './components/animatingBox'
import { Link } from 'react-router-dom'

const Landing = () => {
    const APP_TITLE = 'FINGERRIST'

    return (
        <Flex justifyContent="center" height="100vh">
            <Box mt="6rem">
                <Flex flexDirection="column" gap="10px">
                    <Grid
                        gap="5px"
                        gridTemplateColumns="repeat(auto-fit, minmax(50px, 1fr))"
                        width="300px"
                    >
                        {APP_TITLE?.split('').map((el, index) => {
                            const randomBool =
                                Math.random() > 0.5 ? true : false

                            return (
                                <BouncingInputBox
                                    delay={0.2 * index}
                                    key={index}
                                    height="99px"
                                >
                                    <Input
                                        defaultValue={el}
                                        number={index + 1}
                                        disabled
                                        isSuccess={randomBool}
                                    />
                                </BouncingInputBox>
                            )
                        })}
                    </Grid>
                    <Flex justifyContent="center">
                        <Link to="/content">
                            <Button
                                backgroundColor="#18287F"
                                color="white"
                                mt="5rem"
                            >
                                Start Game
                            </Button>
                        </Link>
                    </Flex>

                    <Text fontSize=".8rem" textAlign="center">
                        version 0.0.1
                    </Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Landing
