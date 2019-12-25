import Unsplash from 'unsplash-js';

// Инициализация, создаем экземпляр unplush
const unsplash = new Unsplash({
    applicationId:"711d5fa98592f3057ed538ca1ac6134ad6d8684023a8d56d71b57ec7577658bc",
    secret:"bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f",
    callbackUrl: 'http://localhost:8080'
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes",        
    ]);

const code = location.search.split( 'code=' )[1]; 

if (code ){
        //авторизируемся
        unsplash.auth.userAuthentication(code)
        .then(response => response.json())
        .then((json) => {
        // Сохраняем полученный токен для того, чтоб можно было выполнять какие-либо действия от имени пользователя
        unsplash.auth.setBearerToken(json.access_token)});
        //показываем первый экран
        alert('первый экран');
    }
else {
        //нет кода - перенаправляем на страницу авторизации
        location.assign(authenticationUrl);
    }



