document.addEventListener("DOMContentLoaded", () => {
    const greetingText = document.getElementById("greetingText");
    const giftContainer = document.getElementById("giftContainer");
    const openBtn = document.getElementById("openBtn");
    const giftBox = document.getElementById("giftBox");
    const petalsContainer = document.getElementById("petalsContainer");
    const bgElementsContainer = document.getElementById("bgElementsContainer");
    const giftBurst = document.getElementById("giftBurst");
    const envelopesContainer = document.getElementById("envelopesContainer");

    // Lock Modal references
    const lockModal = document.getElementById("lockModal");
    const pinDigits = document.querySelectorAll(".pin-digit");
    const unlockBtn = document.getElementById("unlockBtn");
    const errorMsg = document.getElementById("errorMsg");
    const lockBox = document.querySelector(".lock-box");

    // Letter Modal references
    const letterModal = document.getElementById("letterModal");
    const letterTitle = document.getElementById("letterTitle");
    const letterContent = document.getElementById("letterContent");
    const closeLetterBtn = document.getElementById("closeLetterBtn");
    const envelope1 = document.getElementById("envelope1");

    const CORRECT_PIN = "0612";

    // ✏️ Tera poora letter aur shayari yahan daal di hai:
    const myLetterText = `Hy ✌️
Sabse pehle advance mein Happy Birthday! 🎂
Kaisi hai? I hope you're doing well. 🤞
Ghar mein sab kaise hain? Aur teri tabiyat??
It's so weird ki main tujhe ye bhej raha hoon tab bhi sawal pooch raha hoon, ye jaante hue ki answer nahi milega... Khairr...
Jo peechle kuch dino mein hua, kafi zyada complicated aur kafi zyada ajeeb & unbelievable tha mere liye.. aur shayad tere liye bhi, haina??? Who knows...
Btw main ye tujhe likh raha hoon aur zyada kuch nahi boloonga...... Bas apna perspective rakhunga. You can't believe ye likhte hue main metro mein hoon, mera open mic ka show hai agle 30 mins mein present day ke according aur mere earbuds mein song chal raha hai........
Tum hi ho...... Ab tum hi ho...... Zindagi ab tum hi ho..........
Forget it, you cannot feel what I'm feeling right now. Not means you never understand, but how can a person feel what another feels, right? I guess 👌
Dekh, mere kabhi koi intentions rahe nahi ki tujhe koi cheez hurt kare. But the thing is, main bad luck hoon sabke liye 👽 Koi mere saath reh hi nahi sakta as a friend, as a partner, as any relation..... Main phir topic se bhatak gaya..
Woh dekh, jis cheez ka tujhe darr hai ki baat phail jayegi, aisa nahi hai. Ye tere bf wali baat jo tune batayi real nahi hai, woh bas kuch dosto jaise Vishal, Arun, Avishek, Deepak ko pata thi. Par yaad hai jab 1 saal pehle tune bola tha "mat bola kar mere bare mein", tabse main sabke dimaag se nikal raha hoon. Ye jo humare beech kuch time baat hui thi, ye kisi ko nahi pata thi. Maine unko bola ki bhool jao sab, uska koi nahi hai aur na tu meri koi hai...
Ab jo ye sab kuch hai, woh bas tere, mere aur Vishal ke beech hai. Aur Vishal aisa nahi hai ki sabko bata dega...
Mujhpe bharosa nahi hai, manta hoon main bharose layak hoon bhi nahi, par Vishal par bharosa rakh...
Then zyada kuch nahi boloonga ki still how much I love....... Skip it.
Bas ye kahunga, tujhe itna sab bolne ke baad aisa koi din nahi gaya jis din tujhe na dekha ho teri ID se. Khair, ab sab itna bigad chuka hai, kuch thik nahi hone wala... Hamesha expectations mujhe le doobti hain.
Waise Hunny, tera bohot shukriya ki tu meri life mein aayi. Teri wajah se aaj main apni feelings ko poetry mein likh pata hoon. Tu na hoti toh... Waise bhi saari kavitayein, shayari, tujhpar hi likhi hain. Umm... kuch chhod kar, jhooth nahi boloonga, kuch kuch alag topics bhi hain. 😅
Par teri aankhein, teri zulfen, aur most importantly tere hothon ke upar woh til..... How could I explain.... ✨
Jab 19 September 2024 ko 2:34 PM par maine tujhe apni feelings batayi thi, ya 3 January 2021 ko jab tujhe pehli baar dekha tha, tabse tera ye til hi toh ghayal karta hai mujhe..
Sun sach kahoon, mujhe nahi lagta tu samjhegi mujhe. Maine kai baar koshish ki tujhe samajhne ki. Aur jo ye sab tune bataya hai ki tune mujhse chhutkara paane ke liye bf wali story banayi, I understand. Mujhe toh khushi hai ki jisko maine pasand kiya hai woh kam se kam aisi toh nahi ki bohot bf hain ya relation hain. I don't know ye sentence tu kaise adopt karegi, shayad tu galat samajh jayegi...
Aur abhi ye likhte hue (matlab ye line) 6:55 PM ho rahe hain. Main show karke aa gaya. Result kya raha—jeeta ya hara—ye nahi bataunga, but again, thank you tujhe... 🎭
Apna khayal rakh rahi haina tu? Bas rakhti rahio. Mere jaise kai chutiye aayenge, just ignore them 😉
Tujhe kya lagta hai humare beech sab thik ho payega? Shayad haan? Aur shayad na? Kafi complicated hai haina? Ye sab bhi main tujhe Vishal ke through hi bhej raha hoon kyunki umm... maine kuch aisa bol diya tujhe jo nahi bolna chahiye tha... But still, whom I blame for is circumstances....
Dekh, jo tujhe darr lag raha tha ki sab spread ho jayega, aisa nahi hua aur na hi hoga, don't worry.
How fucking dumb I am, peechle 4 saal se ek hi galti kar raha hoon, tujhe pyar. Tujhe karna galat hai? Ya sirf ek ko pyar karna galat hai? Maybe shayad main bhi hota agar rich, stylish, flirt karne wala, maybe tu haan bol deti. Main tere character ko gold digger waisa nahi bol raha hoon, bas shayad yahi sach hai agar koi sacha pyar kare toh usko woh nahi milta, haina?
Shayad tu in sab ko bhi galat way mein le jayegi, but...
How can I explain how much I have feelings for you? How can I explain the weight of my every tear? How can I explain the feelings I feel whenever I see your pic? How... how fucking how... You'll never understand. Never, never understand.
Maybe we'll be friends again, and maybe we forget jo bhi past mein hua hai. Main bhi ban jaaoon tera dost, par jo feelings hain mere andar, unka kya? Usko maar doon toh hatyara hoonga na main?
Aaj main tujhe ek cheez clear karta hoon—kabhi bhi frustrated hoke main tujhe kuch bhi bol doon, ya tu mujhe suna de, jo sabse worst cheez hoga uske baad bhi aaunga main tere paas hi. Kyunki pyar hai tujhse. Main kabhi bhool hi nahi sakta tujhe. Pata hai chutiyeon wali baatein lag rahi hain, but it's true..
Aur kuch hai bhi nahi kehne ko. So apna khayal rakhiyo, aur Happy Birthday again! Tujhe duniya ki saari khushi mile yaar, ab bhi prarthna kar raha hoon aur hamesha karta rahoonga.
Waise meri kuch shayari ya feelings hain tere liye niche, so I hope tujhe achhi lagengi....... Aur haan, jahan par bhi "woh", "usko" istemal hua hai, toh woh tu hai, thik?

जबसे तुमसे इश्क़ हुआ है, ये दिल है कि संभलता नहीं,
ये दिल भी दिल ठहरा जो अपने चेहरे बदलता नहीं।
ये शराब, ख़्वाब, पैसे का नशा तो उतर जाता है अगली सुबह,
मगर कैसा है तेरी आँखों का नशा जो बरसों से उतरा ही नहीं।
— Yours Rahul

वो कुछ इस कदर अपने हुस्न से तारों को तोलती है,
उसकी बोली भी है मानो जैसे मेरी माँ बोलती है।

मुझे लगता है मैं सावन में पेड़ो पर झूल रहा हूँ,
वो जब भी मेरे सामने अपनी जुल्फे खोलती है।
— Yours Rahul

निभाना हो तो रिश्ता कुछ यूँ कमाल करना,
हो शिकायत कोई तो मुझसे सवाल करना।

निभाई तुमने दोस्ती वफ़ा परस्ती से मगर,
अगर इश्क़ करना हो तो मुझसा बे-मिसाल करना।
— Yours Rahul

मुझे दिल में अपने उतर जाने दो,
मुझे ज़ुल्फ़ में यूँ बिखर जाने दो।

बस आँखों में तेरी ही देखा करूँ,
ये सालो महीनों गुज़र जाने दो।
— Yours Rahul

ना किसी खंजर के ना हथियार के हैं,
ये मेरे सारे ज़ख़्म सिर्फ मेरे यार के हैं।

न टूटा मैं दुनियाँ की कई कोशिशों से,
जो हालत हैं मेरी उसके एक वार के है
— Yours Rahul

लोग सभी दूर हुए मै रुक के जहां बैठा
मेरी औकात ने बताया मुझे मैं कहां बैठा।

उसके साथ दोस्ती अजब चल रही थी मेरी,
फिर इश्क़ हुआ मुझे मैं दोनों गवां बैठा।
— Yours Rahul

उसकी मोहब्बत में अब बर्बाद हो चुका हूं मैं,
कतरा - कतरा करके आबाद हो चुका हूँ मैं।

मेरे यार अब मुझको मुबारक़ बाद दे रहे है,
उसकी जंजीर से जो आजाद हो चुका हूँ मैं।
— Yours Rahul

With lots of love and lots of sorry, yours and only yours Rahul... ❤️❤️
Lots of love,
I Love You ❤️`;

    // 1. Generate Floating Petals Background
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = `${Math.random() * 100}vw`;
        const pSize = Math.random() * 10 + 6;
        petal.style.width = `${pSize}px`;
        petal.style.height = `${pSize * 1.5}px`;
        petal.style.animationDuration = `${Math.random() * 8 + 8}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petalsContainer.appendChild(petal);
    }

    // 2. Generate Background Screen Fillers
    const bgSymbols = ['🤍', '🌸', '🌷', '🌹', '🌺', '🌼', '🌻', '🪷', '💐', '✨', '🧸', '🍫'];
    for (let i = 0; i < 1050; i++) {
        const bgItem = document.createElement("div");
        bgItem.classList.add("bg-item");
        bgItem.innerText = bgSymbols[Math.floor(Math.random() * bgSymbols.length)];
        bgItem.style.left = `${Math.random() * 98}vw`;
        bgItem.style.top = `${Math.random() * 98}vh`;
        bgItem.style.fontSize = `${Math.random() * 1.4 + 1}rem`;
        bgItem.style.animationDuration = `${Math.random() * 4 + 4}s`;
        bgItem.style.animationDelay = `${Math.random() * 6}s`;
        bgElementsContainer.appendChild(bgItem);
    }

    // Entry Animations Timing
    setTimeout(() => {
        greetingText.classList.add("show");
    }, 400);

    setTimeout(() => {
        giftContainer.classList.add("show");
    }, 1200);

    // Open Button -> Opens Lock Modal First
    openBtn.addEventListener("click", () => {
        lockModal.classList.add("active");
        pinDigits[0].focus();
    });

    // Auto-advance PIN inputs
    pinDigits.forEach((digit, index) => {
        digit.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < pinDigits.length - 1) {
                pinDigits[index + 1].focus();
            }
        });

        digit.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
                pinDigits[index - 1].focus();
            }
        });
    });

    // Unlock Button Click
    unlockBtn.addEventListener("click", validatePin);

    function validatePin() {
        let enteredPin = "";
        pinDigits.forEach(input => enteredPin += input.value);

        if (enteredPin === CORRECT_PIN) {
            errorMsg.style.display = "none";
            lockModal.classList.remove("active");

            // Open gift box logic
            openBtn.classList.add("fade-out");
            setTimeout(() => {
                giftBox.classList.add("opening");
                triggerGiftBurst();
            }, 300);

            // Show Envelope after gift opens
            setTimeout(() => {
                envelopesContainer.classList.add("show");
            }, 1800);

        } else {
            errorMsg.style.display = "block";
            lockBox.classList.add("shake");
            setTimeout(() => {
                lockBox.classList.remove("shake");
            }, 400);
            pinDigits.forEach(input => input.value = "");
            pinDigits[0].focus();
        }
    }

    // Slow-Motion Burst
    function triggerGiftBurst() {
        const giftEmojis = ['🤍', '🌸', '🌷', '🌹', '🌺', '🌼', '🌻', '🪷', '💐', '🍫', '✨', '💖', '🎁'];
        
        for (let i = 0; i < 270; i++) {
            const item = document.createElement("div");
            item.classList.add("burst-item");
            item.innerText = giftEmojis[Math.floor(Math.random() * giftEmojis.length)];
            
            item.style.fontSize = "3rem";
            
            const tx = (Math.random() - 0.5) * 650 + "px";
            const ty = -(Math.random() * 250 + 120) + "px";
            const finalX = (Math.random() - 0.5) * 750 + "px";
            const rot = (Math.random() - 0.5) * 720 + "deg";

            item.style.setProperty('--tx', tx);
            item.style.setProperty('--ty', ty);
            item.style.setProperty('--final-x', finalX);
            item.style.setProperty('--rot', rot);
            item.style.left = "45%";
            item.style.top = "30%";
            
            item.style.animationDelay = `${Math.random() * 1.2}s`;
            item.style.animationDuration = `${Math.random() * 1.5 + 3.2}s`;

            giftBurst.appendChild(item);
        }
    }

    // Envelope Click Handler
    envelope1.addEventListener("click", () => {
        letterTitle.innerText = "Letter 💌";
        letterContent.innerText = myLetterText;
        letterModal.classList.add("active");
    });

    closeLetterBtn.addEventListener("click", () => {
        letterModal.classList.remove("active");
    });
});