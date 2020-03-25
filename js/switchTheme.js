function darkTheme()
    {
        var checkbox = document.getElementById('changeTheme'),
            newLink = document.createElement('link'),
            head = document.getElementById('head');
        if(checkbox.checked){
            newLink.rel = "stylesheet";
            newLink.href = "css/dark.css";
            newLink.id = "link";
            head.insertBefore(newLink, head.children[7]);
        }else{
            link.remove(newLink);
        }
    }