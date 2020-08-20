<template>
    <div>
        <h2>Kunskaper inom programmering</h2>
        <div class="container">
            <div class="column">
                <h3>Backend</h3>
                <ul>
                    <li>C# & ASP.NET</li>
                    <li>Node.js Express</li>
                    <li>Python</li>
                </ul>
            </div>
            <div class="column">
                <h3>Frontend</h3>
                <ul>
                    <li>Vue.js</li>
                    <li>Bootstrap</li>
                    <li>html, css & vanilla js</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
 .container {
    column-count: 2;
    column-rule: 1px solid black;
    /* padding: 12px; */
    margin-top: 12px;
 }
 .column {
    margin-top: -20px;
 }
</style>