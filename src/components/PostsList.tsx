import SearchInput from "@/components/SearchInput";
import PostItem from "@/components/PostItem";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {PostSearchModel, PostType} from "@/domain/post";
import axios from "axios";
import {SearchResponse} from "@/pages/api/searchposts";
import {debounce} from "lodash";

export type Props = {
    postType: PostType;
    showSearch: boolean;
}

function postTypeSlug(postType: PostType): string {
    switch (postType) {
        case PostType.Blog:
            return "blog";
        case PostType.Guide:
            return "guides";
    }
}

export default function PostsList({postType, showSearch}: Props) {
    const router = useRouter();

    const [posts, setPosts] = useState<PostSearchModel[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [initialQuery, setInitialQuery] = useState<string>("");

    const abortController = new AbortController();
    const search = debounce(async (query: string) => {

        setIsFetching(true);

        await axios.get<SearchResponse>(
            `./api/searchposts?postType=${postType}&query=${query}`,
            {signal: abortController.signal})
            .then(async result => {
                setPosts(result.data.results);
                setIsFetching(false);
                await router.push(`/${postTypeSlug(postType)}?query=${encodeURIComponent(query)}`, undefined, {shallow: true});
            })
            .catch(() => {
            });
    }, 300);

    useEffect(() => {
        if (router.isReady) {
            const query = router.query.query as string || "";
            setInitialQuery(query);
            search(query);
        }

        return () => {
            abortController.abort();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady]);

    return (
        <>
            {
                router.isReady &&
                <>
                    {
                        showSearch &&
                        <div className={"flex justify-center mt-4"}>
                            <SearchInput onChange={search} initialValue={initialQuery}/>
                        </div>
                    }
                    {
                        !isFetching && posts.length > 0 &&
                        <>
                            <div className={"space-y-5 mt-4"}>
                                {
                                    posts.map((post) => (
                                        <PostItem key={post.id} post={post}/>
                                    ))
                                }
                            </div>
                        </>
                    }
                    {
                        isFetching &&
                        <div className={"flex justify-center mt-4"}>
                            <p className={"body-large on-surface-text"}>Fetching</p>
                        </div>
                    }
                </>
            }
        </>
    )
}