'use client'

import { ArticleItem } from './Component'
import Link from 'next/link';

import './styles.css'

interface ArticleListClientProps {
    articles: ArticleItem[],
    showImages?: boolean | null
}

export default function ArticleListClient(props: ArticleListClientProps) {
    const { articles } = props;

    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {
            articles.map((article, index) => {
                return (
                    <div className="article-item flex flex-col" key={`article-${index}`}>
                        {article.title && <h3>{article.title}</h3>}
                        {article.publishedAt && (
                            <p className="article-date">{new Date(article.publishedAt).toLocaleDateString("en-US", dateOptions)}</p>
                        )}
                        {article.meta && article.meta.description && (
                            <p>{article.meta.description}</p>
                        )}
                        {article.slug && <Link className='button button-primary w-fit' href={article.slug!}>Read More</Link>}
                    </div>
                );
            })
        }
        </div>
    )
}
