import Link from "next/link";
const AboutPage = () => {
    return (<div>
      <h1 className="text-7xl">About page</h1>
      <Link rel="stylesheet" href="/" className='text-2xl'>Home page</Link>
      <br />
      <Link rel="stylesheet" href="about/info" className='text-2xl'>Info Page</Link>

    </div>
    );
  };
  export default AboutPage;