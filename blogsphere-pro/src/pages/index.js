import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS = [
    {
        title: 'DSA for go to Microsoft',
        slug: 'dsa-to-microsoft',
        image: 'dsa-to-microsoft.png',
        excerpt: 'DSA is a must for any software engineer',
        date: '2024-11-04'
    },
    {
        title: 'ML.NET for beginners',
        slug: 'mlnet-for-beginners',
        image: 'mlnet-for-beginners.png',
        excerpt: 'ML.NET is a free, cross-platform, and open-source framework for .NET to create custom machine learning solutions.',
        date: '2024-11-04'
    }
]

function HomePage() {
    return (<>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
    </>);
}

export default HomePage;