import { SettingContext } from '@/context/SettingsContext'
// import {
//     useGetUsersQuery,
//     useSubscriptionSubscription,
// } from '@/services/graphql/generated'
import { Box, Button, Container, Typography } from '@mui/material'
import { Linkedin, Github } from 'lucide-react'
import { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'

function Home() {
    const { settings } = useContext(SettingContext)
    // const { data } = useGetUsersQuery()
    // const { data: subscriptionData } = useSubscriptionSubscription()
    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    // useEffect(() => {
    //     console.log(subscriptionData)
    // }, [subscriptionData])
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100dvh',
                background:
                    'linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)',
            }}
        >
            <Container
                sx={{
                    minHeight: '100dvh',
                    display: settings.screen == 'mobile' ? 'flex' : 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <div>
                    <Typography variant="h4">
                        <TypeAnimation
                            sequence={[
                                'I am SHIVKUMAR CHAUHAN',
                                1000,
                                'Full Stack Developer',
                                1000,
                                'Javascript Developer',
                                1000,
                                'Python Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={5}
                            style={{
                                fontSize: '1.5em',
                                display: 'inline-block',
                            }}
                            repeat={Infinity}
                        />
                    </Typography>
                    <Typography variant="subtitle1">
                        As a ReactJS Developer, I wrote the frontend code of
                        websites from Figma designs using ReactJS, SASS, and
                        Material UI. I have two years of web development
                        experience, working with various technologies and
                        frameworks, such as HTML, CSS, JavaScript, PHP, MySQL,
                        MERN Stack, and Flask.
                        <br />
                        I am also passionate about machine learning and deep
                        learning, and have done some projects using Python,
                        sklearn, and TensorFlow. I have participated in several
                        online competitions and hackathons, and secured multiple
                        ranks and certificates. I am gratuated in Bachelor of
                        Engineering in Computer Science from Pillai College of
                        Engineering.
                        <br />I am interested in working on challenging and
                        innovative projects that can enhance my skills and
                        knowledge. I am eager to learn new technologies and
                        tools, and collaborate with diverse and talented teams.
                        I am motivated by creating user-friendly and dynamic web
                        applications that can solve real-world problems.
                    </Typography>
                    <div>
                        <Button color="inherit">
                            <Linkedin />
                        </Button>

                        <Button color="inherit">
                            <Github />
                        </Button>
                    </div>
                </div>
                <div>
                    <img src="/images/background.png" alt="" />
                </div>
            </Container>
        </Box>
    )
}

export default Home
