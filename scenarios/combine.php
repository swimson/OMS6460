<?php

$scenarios = ['environ1', 'environ2'];

foreach ($scenarios as $scenario) {
    $prefix = __DIR__ . '/' . $scenario . '/';
    $files = scandir($prefix);
    $result = [];
    $epochs = [];
    foreach ($files as $file) {
        if ($file == '.' || $file == '..') {
            continue;
        }
        $parts = explode('_', str_replace('.json', '', $file));
        $epoch = $parts[2];
        $json = file_get_contents($prefix . $file);
        $data = json_decode($json);
        $result[$epoch] = $data;
        $epochs[] = 0+$epoch;
    }
    sort($epochs);
    $output = 'let environEpochs = '.json_encode($epochs).";\n".'let environEpochData = '.json_encode($result, JSON_PRETTY_PRINT);
    file_put_contents($scenario . '.js', $output);
}
