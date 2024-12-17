import { Box, Button, Container, Typography } from '@mui/material'
import { Linkedin, Github } from 'lucide-react'

function Home() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100dvh',
                background:
                    'url(https://scriptsender.com/wp-content/uploads/impossible-landing-page-background.jpg) no-repeat',
            }}
        >
            <Container
                sx={{
                    minHeight: '100dvh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h3">Hello Everyone</Typography>
                <Typography variant="subtitle1">
                    As a ReactJS Developer, I wrote the frontend code of
                    websites from Figma designs using ReactJS, SASS, and
                    Material UI. I have two years of web development experience,
                    working with various technologies and frameworks, such as
                    HTML, CSS, JavaScript, PHP, MySQL, MERN Stack, and Flask.
                    <br />
                    I am also passionate about machine learning and deep
                    learning, and have done some projects using Python, sklearn,
                    and TensorFlow. I have participated in several online
                    competitions and hackathons, and secured multiple ranks and
                    certificates. I am gratuated in Bachelor of Engineering in
                    Computer Science from Pillai College of Engineering.
                    <br />I am interested in working on challenging and
                    innovative projects that can enhance my skills and
                    knowledge. I am eager to learn new technologies and tools,
                    and collaborate with diverse and talented teams. I am
                    motivated by creating user-friendly and dynamic web
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
            </Container>
        </Box>
    )
}

export default Home
