import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
            <h1>About me</h1>
              <p>
                {/* My default route is named <code>home</code>, link to me with `
                <Link to={routes.home()}>Home</Link>` */}
                Myself Sarthak Tyagi, Developer
              </p>
    </>
  )
}

export default AboutPage
