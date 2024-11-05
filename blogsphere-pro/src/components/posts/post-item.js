import Link from 'next/link';
import classes from './post-item.module.css';
import Image from 'next/image';

function PostItem(props){
    const { title, image, excerpt, date, slug } = props;
    console.log('asfd', props);
    const formattedDate = new Date(date).toLocaleDateString('en-US', {  
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }); 
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div>
                    <Image src={imagePath} 
                    alt={title} 
                    width={300} 
                    height={200} 
                    className={classes.image}/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem;