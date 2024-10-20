---
title: 让chatgpt写一个日语五十音的练习脚本
pubDate: 2024-09-02
categories: ['gpt']
description: '在工作之余还能兼顾学习'
---

### powershell

```
# Create a dictionary mapping kana to romaji
$kanaToRomaji = @{
    # Hiragana
    "あ" = "a"; "い" = "i"; "う" = "u"; "え" = "e"; "お" = "o"
    "か" = "ka"; "き" = "ki"; "く" = "ku"; "け" = "ke"; "こ" = "ko"
    "が" = "ga"; "ぎ" = "gi"; "ぐ" = "gu"; "げ" = "ge"; "ご" = "go"
    "さ" = "sa"; "し" = "shi"; "す" = "su"; "せ" = "se"; "そ" = "so"
    "ざ" = "za"; "じ" = "ji"; "ず" = "zu"; "ぜ" = "ze"; "ぞ" = "zo"
    "た" = "ta"; "ち" = "chi"; "つ" = "tsu"; "て" = "te"; "と" = "to"
    "だ" = "da"; "ぢ" = "ji"; "づ" = "zu"; "で" = "de"; "ど" = "do"
    "な" = "na"; "に" = "ni"; "ぬ" = "nu"; "ね" = "ne"; "の" = "no"
    "は" = "ha"; "ひ" = "hi"; "ふ" = "fu"; "へ" = "he"; "ほ" = "ho"
    "ば" = "ba"; "び" = "bi"; "ぶ" = "bu"; "べ" = "be"; "ぼ" = "bo"
    "ぱ" = "pa"; "ぴ" = "pi"; "ぷ" = "pu"; "ぺ" = "pe"; "ぽ" = "po"
    "ま" = "ma"; "み" = "mi"; "む" = "mu"; "め" = "me"; "も" = "mo"
    "や" = "ya"; "ゆ" = "yu"; "よ" = "yo"
    "ら" = "ra"; "り" = "ri"; "る" = "ru"; "れ" = "re"; "ろ" = "ro"
    "わ" = "wa"; "を" = "wo"
    "ん" = "n"

    # Katakana
    "ア" = "a"; "イ" = "i"; "ウ" = "u"; "エ" = "e"; "オ" = "o"
    "カ" = "ka"; "キ" = "ki"; "ク" = "ku"; "ケ" = "ke"; "コ" = "ko"
    "ガ" = "ga"; "ギ" = "gi"; "グ" = "gu"; "ゲ" = "ge"; "ゴ" = "go"
    "サ" = "sa"; "シ" = "shi"; "ス" = "su"; "セ" = "se"; "ソ" = "so"
    "ザ" = "za"; "ジ" = "ji"; "ズ" = "zu"; "ゼ" = "ze"; "ゾ" = "zo"
    "タ" = "ta"; "チ" = "chi"; "ツ" = "tsu"; "テ" = "te"; "ト" = "to"
    "ダ" = "da"; "ヂ" = "ji"; "ヅ" = "zu"; "デ" = "de"; "ド" = "do"
    "ナ" = "na"; "ニ" = "ni"; "ヌ" = "nu"; "ネ" = "ne"; "ノ" = "no"
    "ハ" = "ha"; "ヒ" = "hi"; "フ" = "fu"; "ヘ" = "he"; "ホ" = "ho"
    "バ" = "ba"; "ビ" = "bi"; "ブ" = "bu"; "ベ" = "be"; "ボ" = "bo"
    "パ" = "pa"; "ピ" = "pi"; "プ" = "pu"; "ペ" = "pe"; "ポ" = "po"
    "マ" = "ma"; "ミ" = "mi"; "ム" = "mu"; "メ" = "me"; "モ" = "mo"
    "ヤ" = "ya"; "ユ" = "yu"; "ヨ" = "yo"
    "ラ" = "ra"; "リ" = "ri"; "ル" = "ru"; "レ" = "re"; "ロ" = "ro"
    "ワ" = "wa"; "ヲ" = "wo"
    "ン" = "n"
}

# Get the list of all kana
$kanaList = $kanaToRomaji.Keys
$usedKana = @()

Write-Output "Japanese Kana Practice Program (Hiragana and Katakana)"
Write-Output "Type 'q' at any time to quit."

# Main loop
while ($true) {
    # Check if all kana have been usedKana
    if ($usedKana.Count -eq $kanaList.Count) {
        Write-Output "You have practiced all kana. Exiting the program. Goodbye!"
        break
    }

    # Randomly select a kana
    $remainingKana = $kanaList | Where-Object { $_ -notin $usedKana }
    if ($remainingKana.Count -eq 0) {
        Write-Output "You have practiced all kana. Exiting the program. Goodbye!"
        break
    }
    $selectedKana = $remainingKana | Get-Random
    $correctRomaji = $kanaToRomaji[$selectedKana]

    Write-Output "Please enter the romaji for this kana: $selectedKana"

    # Get user input
    $userInput = Read-Host "Enter romaji"

    # Check if the user wants to quit
    if ($userInput -eq "q") {
        Write-Output "Exiting the program. Goodbye!"
        break
    }

    # Check user input
    if ($userInput -eq $correctRomaji) {
        Write-Output "Correct!"
        # Add the kana to the used list
        $usedKana += $selectedKana
    } else {
        Write-Output "Incorrect. The correct answer is: $correctRomaji"
    }

}
```

### shell

```
#!/bin/bash

# Create arrays for kana and their corresponding romaji
kanaList=(
    "あ" "い" "う" "え" "お"
    "か" "き" "く" "け" "こ"
    "が" "ぎ" "ぐ" "げ" "ご"
    "さ" "し" "す" "せ" "そ"
    "ざ" "じ" "ず" "ぜ" "ぞ"
    "た" "ち" "つ" "て" "と"
    "だ" "ぢ" "づ" "で" "ど"
    "な" "に" "ぬ" "ね" "の"
    "は" "ひ" "ふ" "へ" "ほ"
    "ば" "び" "ぶ" "べ" "ぼ"
    "ぱ" "ぴ" "ぷ" "ぺ" "ぽ"
    "ま" "み" "む" "め" "も"
    "や" "ゆ" "よ"
    "ら" "り" "る" "れ" "ろ"
    "わ" "を"
    "ん"
    "ア" "イ" "ウ" "エ" "オ"
    "カ" "キ" "ク" "ケ" "コ"
    "ガ" "ギ" "グ" "ゲ" "ゴ"
    "サ" "シ" "ス" "セ" "ソ"
    "ザ" "ジ" "ズ" "ゼ" "ゾ"
    "タ" "チ" "ツ" "テ" "ト"
    "ダ" "ヂ" "ヅ" "デ" "ド"
    "ナ" "ニ" "ヌ" "ネ" "ノ"
    "ハ" "ヒ" "フ" "ヘ" "ホ"
    "バ" "ビ" "ブ" "ベ" "ボ"
    "パ" "ピ" "プ" "ペ" "ポ"
    "マ" "ミ" "ム" "メ" "モ"
    "ヤ" "ユ" "ヨ"
    "ラ" "リ" "ル" "レ" "ロ"
    "ワ" "ヲ"
    "ン"
)

romajiList=(
    "a" "i" "u" "e" "o"
    "ka" "ki" "ku" "ke" "ko"
    "ga" "gi" "gu" "ge" "go"
    "sa" "shi" "su" "se" "so"
    "za" "ji" "zu" "ze" "zo"
    "ta" "chi" "tsu" "te" "to"
    "da" "ji" "zu" "de" "do"
    "na" "ni" "nu" "ne" "no"
    "ha" "hi" "fu" "he" "ho"
    "ba" "bi" "bu" "be" "bo"
    "pa" "pi" "pu" "pe" "po"
    "ma" "mi" "mu" "me" "mo"
    "ya" "yu" "yo"
    "ra" "ri" "ru" "re" "ro"
    "wa" "wo"
    "n"
    "a" "i" "u" "e" "o"
    "ka" "ki" "ku" "ke" "ko"
    "ga" "gi" "gu" "ge" "go"
    "sa" "shi" "su" "se" "so"
    "za" "ji" "zu" "ze" "zo"
    "ta" "chi" "tsu" "te" "to"
    "da" "ji" "zu" "de" "do"
    "na" "ni" "nu" "ne" "no"
    "ha" "hi" "fu" "he" "ho"
    "ba" "bi" "bu" "be" "bo"
    "pa" "pi" "pu" "pe" "po"
    "ma" "mi" "mu" "me" "mo"
    "ya" "yu" "yo"
    "ra" "ri" "ru" "re" "ro"
    "wa" "wo"
    "n"
)

usedKana=()

echo "Japanese Kana Practice Program (Hiragana and Katakana)"
echo "Type 'q' at any time to quit."

# Main loop
while true; do
    # Check if all kana have been used
    if [[ ${#usedKana[@]} -eq ${#kanaList[@]} ]]; then
        echo "You have practiced all kana. Exiting the program. Goodbye!"
        break
    fi

    # Randomly select a kana
    while true; do
        index=$(( RANDOM % ${#kanaList[@]} ))
        selectedKana=${kanaList[$index]}
        if [[ ! " ${usedKana[*]} " =~ " ${selectedKana} " ]]; then
            break
        fi
    done

    correctRomaji=${romajiList[$index]}

    echo "Please enter the romaji for this kana: $selectedKana"

    # Get user input
    read -r userInput

    # Check if the user wants to quit
    if [[ $userInput == "q" ]]; then
        echo "Exiting the program. Goodbye!"
        break
    fi

    # Check user input
    if [[ $userInput == "$correctRomaji" ]]; then
        echo "Correct!"
        # Add the kana to the used list
        usedKana+=("$selectedKana")
    else
        echo "Incorrect. The correct answer is: $correctRomaji"
    fi
done

```
