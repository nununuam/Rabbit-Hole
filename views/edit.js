<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Rajdhani&display=swap" rel="stylesheet">
</head>
<body>
    <div class="navbar">
        <a class="active" href="/home">Home</a>
        <%if (user){ %>
            <a href="/upload">Upload</a>
         <% }%>
        <a href="/browse">Browse</a>
        <a href="/login">Login</a>
    </div>
    <section>
        <ul>
            <% videos.forEach ( video => { %>
                <tr>
                <td>
                    <form action="/upload" method="POST"></form>
                    </td>
                       <td> <input type="text" value="<%= video.title %>" name="categories">
                       </td>
                       <td>
                        <input type="text" value="<a href='<%= video.links %>''>youtube link</a>"" name="links">
                       </td>
                       <td>
                        <input type="text" value="<%= video.categories%>" name="title">
                       </td>
                       <td>
                        <input type="text" value="<%= video.views %> " name="title">
                       </td>
                       <td>
                        <input type="submit" value="Edit" >
                       </td>
            </tr>
            <% }) %>
         </ul>
    </section>
</body>
</html>