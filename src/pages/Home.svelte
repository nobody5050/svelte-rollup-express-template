<script>
    import Image from "../Components/image.svelte";
    let src = 'https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80';
</script>
<h1>My Svelte App</h1>
<hr>
<p>This is an empty svelte app. Edit it to your heart's content!</p>
<p>Here, enjoy a picture of a <a href={src}>dog</a>.</p>
<Image {src}/>