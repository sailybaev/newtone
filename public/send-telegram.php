<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name'] ?? '');
    $phone = htmlspecialchars($_POST['tell'] ?? '');
    $theme = htmlspecialchars($_POST['thema'] ?? '');
    $url = $_SERVER['HTTP_REFERER'] ?? '';

    // Construct the message to send to Telegram
    $message = "Тема: $theme\n";
    $message .= "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Ссылка: $url";

    // Your Telegram bot token and chat ID
    $botToken = "7421938319:AAG5SV1R0RlbeIOHkkTDATjR7a0NUIopipY"; // Replace with your bot token
    $chatId = "-1002339052151";     // Replace with your chat ID

    // Send data to Telegram
    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message
    ];

    // Initialize cURL session
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL session and close
    $response = curl_exec($ch);
    curl_close($ch);

    // Check response (optional)
    if ($response) {
        echo('Сообщение отправлено в Telegram успешно!');
    } else {
        echo('Не удалось отправить сообщение в Telegram.');
    }
}

























