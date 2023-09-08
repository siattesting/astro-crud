<script>
    import { isLoggedIn } from '../lib/stores/users.ts'

</script>
<nav class="nav-links ">
    <a href="/">Home</a>
    <a href="/shops">Shops</a>
    <a href="/about">About</a>
    <a href="/auth/register">Register</a>
    <a href="/auth/login">Login</a>
    <a href="/auth/logout">Logout</a>
    {#if $isLoggedIn}
    <button>You are logged in</button>
    {/if}
    
</nav>

<style>
    .nav-links {
        width: 100%;
        display: flex;
        background-color: #333;
    }
    .nav-links  a {
        color: white;
        padding: 14px 20px;
        text-align: center;
        text-decoration: none;


    }
    .nav-links  a:hover, .nav-links  a:focus {
        background-color: #ddd;
        color: black;
    }
</style>