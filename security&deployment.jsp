<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Security and Deployment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .section {
            margin: 20px 0;
            padding: 15px;
            border-left: 5px solid #28a745;
            background-color: #e9f7ef;
        }
        .section h2 {
            margin-top: 0;
            color: #28a745;
        }
        .section p {
            margin: 0;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Security and Deployment</h1>

        <div class="section">
            <h2>Security</h2>
            <h3>User Authentication</h3>
            <p>Implement secure authentication mechanisms to protect user accounts and personal information.</p>
            <h3>Data Encryption</h3>
            <p>Encrypt sensitive data such as passwords and payment details to ensure privacy and security.</p>
        </div>

        <div class="section">
            <h2>Deployment</h2>
            <h3>Frontend Application</h3>
            <p>Frontend application (user interface) can be deployed on <a href="https://vercel.com" target="_blank">Vercel</a>, a cloud platform for static sites and serverless functions.</p>
            <h3>Backend Services</h3>
            <p>Backend services (server-side logic, database interaction, etc.) can be deployed on <a href="https://render.com" target="_blank">Render</a>, a cloud platform for hosting web applications and databases.</p>
        </div>
    </div>
</body>
</html>