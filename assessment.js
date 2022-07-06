"use stric";
const userNameInput = document.getElementById("user-name");
const assessmentButton = document.getElementById("assessment");
const resultDivided = document.getElementById("result-area");
const tweetDivided = document.getElementById("tweet-area");
function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () =>{
    const userName = userNameInput.value;
    if(userName.length ===0){
        return;
    }
    //診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

//TODOツイートエリアの作成
removeAllChildren(tweetDivided);
const anchor = document.createElement("a");
const hrefValue = 
"https://twitter.com/intent/tweet?button_hashtag=" +
encodeURIComponent("あなたのいいところ") +
"&ref_src=twsrc%5Etfw";

anchor.setAttribute("href",hrefValue);
anchor.className = "twitter-hastag-button";
anchor.setAttribute("data-text",result);
anchor.innerText = "Tweet #あなたのいいところ";
tweetDivided.appendChild(anchor);
//Widgets.jsの設定//
const script = document.createElement("script");
script.setAttribute("src","https://platform.twitter.com/widgets.js");
tweetDivided.appendChild(script);
};
const answers = [
    "{userName}のいい所は声です。{userName}の特徴的な声は皆を　きつけ、心に残ります。",
    "{userName}のいい所はまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。",
    "{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。",
    "{userName}のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。",
    "{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。",
    "{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。",
    "{userName}のいいところは用心深さです。{userName}の洞察力に、多くの人が助けられます。",
    "{userName}のいいところは見た目です。内面からあふれ出る{userName}のよさに皆が気を　かれます",
    "{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。",
    "{userName}のいいところは思いやりです。{userName}に気にかけてももらった多くの人が感謝しています。",
    "{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し分かりあうことが出来ます",
    "{userName}のいいところは節度です。強引すぎない{userName}の」考えに皆が共感し、分かりあうことが出来ます。",
    "{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。",
    "{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。",
    "{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。",
    "{userName}のいいところは自制心です。やばいと思った時にしっかりと衝動を抑えられる{userName}が皆から評価されています。",

];
function assessment(userName) {
    let sum0fCharCode = 0;
    for(let i = 0; i < userName.length; i++){
        sum0fCharCode = sum0fCharCode + userName.charCodeAt(i);
    }
    const index = sum0fCharCode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    return result;
}

