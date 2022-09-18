import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import {getPhotos, getPosts, getUsers} from "../api/api";

const {width} = Dimensions.get("window")

const PostsScreen = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getPosts()
            .then(response => response.json())
            .then(json => setPosts(json))
        getUsers()
            .then(response => response.json())
            .then(json => setUsers(json))
        if(width>720){
            getPhotos()
                .then(response => response.json())
                .then(json => setPhotos(json))
        }
    }, [])

    //Item for FlatList
    const Item =({post}) => {
        return <View style={width> 720 ? styles.postsTablet : styles.posts}>
            {
                width > 720 ? (
                    photos.length>0 ? (
                        <Image
                            style={{
                                width: width*0.2,
                                height: width*0.2,
                                margin: '2%'
                            }}
                            source={{
                                uri: photos[0]?.thumbnailUrl
                            }}/>
                    ) : (
                        <ActivityIndicator
                            size="small"
                            color="#00ff00"
                        />
                    )

                ) : (
                    null
                )
            }
            <Text style={styles.postText}>Author: {users[post.userId - 1]?.name}</Text>
            <Text style={styles.postText}>Company: {users[post.userId - 1]?.company.name}</Text>
            <Text style={styles.postText}>Title: {post.title}</Text>
            <Text style={styles.postText}>{post.body}</Text>
        </View>

    }

    const MemoizedItem = React.memo(Item)

    return (
        <View style={styles.container}>
            {
                posts.length>0 ? (
                    <FlatList
                        data={posts}
                        key={width> 720 ? '_' : ''}
                        keyExtractor={item => item.id}
                        numColumns={width> 720 ? 2 : 1}
                        renderItem={(post) => {
                            post = post.item
                            return <MemoizedItem post={post}/>
                        }}
                    />
                ) : (
                    <ActivityIndicator size="large"/>
                )
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
        margin: width*0.02
    },
    posts: {
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 2,
        margin: 10,
    },
    postsTablet: {
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 5,
        margin: width*0.01,
        width: width*0.45,
        padding: width*0.02
    },
    postText: {
        margin: '2%',
        fontWeight: 'bold',
        fontSize: width*0.03
    }
});

export default PostsScreen;
