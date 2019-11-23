import Unsplash from 'unsplash-js';

// Инициализация
export const unsplash = new Unsplash({
    applicationId:"711d5fa98592f3057ed538ca1ac6134ad6d8684023a8d56d71b57ec7577658bc",
    secret:"bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f",
    //callbackUrl:"http://service.kvt.su/auth"
    //callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
    callbackUrl: 'http://localhost:8080'
});

export const authenticationUnsplash = (unsplash) => {
// Генерирует ссылку для авторизации с указанными правами
  debugger
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);

    location.assign(authenticationUrl); // Перенапревление на авторизацию в unsplash

    const code = location.search.split( 'code=' )[1];

    if (code) {
        return unsplash.auth.userAuthentication(code)
            .then(res => res.json())
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);
                //unsplash.photos.likePhoto​(​ "kBJEJqWNtNY"​ );
        });
    }
}

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
])

export const code = location.search.split( 'code=' )[1]; 

