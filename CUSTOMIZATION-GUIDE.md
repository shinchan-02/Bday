# 🎉 SIMPLE CUSTOMIZATION GUIDE

All content is now directly in `index.html` - no config file needed!

---

## 📝 HOW TO CUSTOMIZE

**File to Edit:** `index.html`

Just open `index.html` in a text editor (like Notepad, VS Code, or any editor) and search for the text you want to change!

---

## 🎯 WHAT TO EDIT & WHERE TO FIND IT

### 1️⃣ **NAME** (Appears everywhere)

**Search for:** `Cutiepie`

**Lines to edit:**
- Line 34: `<span class="highlight">cutiepie</span>` ← Change "cutiepie"
- Line 46: `<span class="name-highlight">Cutiepie</span>` ← Change "Cutiepie"
- Line 118: `Dear Cutiepie,` ← Change "Cutiepie"

---

### 2️⃣ **AGE**

**Search for:** `18`

**Line to edit:**
- Line 34: `<span class="age-number">18</span>` ← Change the number

---

### 3️⃣ **BALLOON MESSAGES** (4 messages)

**Search for:** `data-message=`

**Lines to edit:**
- Line 49: `data-message="You are absolutely amazing! 🌟"`
- Line 52: `data-message="Your smile lights up the world! 😊"`
- Line 55: `data-message="You make every day better! 💫"`
- Line 58: `data-message="You're one in a million! 🎉"`

---

### 4️⃣ **PHOTO CAPTIONS** (4 captions)

**Search for:** `photo-caption`

**Lines to edit:**
- Line 78: `<p class="photo-caption">Remember this day? 💕</p>`
- Line 82: `<p class="photo-caption">Best times together! 🎈</p>`
- Line 86: `<p class="photo-caption">Unforgettable memories! ✨</p>`
- Line 90: `<p class="photo-caption">You're the best! 🌸</p>`

---

### 5️⃣ **GREETING CARD MESSAGE** (Main birthday message)

**Search for:** `Dear Cutiepie,`

**Lines 118-133:** Edit the entire message between `<p>` and `</p>`

```html
<p>Dear Cutiepie,

On this special day, I want you to know how incredibly 
amazing you are! 🎂

Every moment with you is a treasure, and watching you 
grow into the wonderful person you are today has been 
an absolute joy.

May this year bring you endless happiness, exciting 
adventures, and all the success you deserve!

Keep shining bright like you always do! ✨

With all my love,
Your Special Someone 💝</p>
```

---

### 6️⃣ **FINAL MESSAGE** (Grand finale)

**Search for:** `Lots of love`

**Line 172:** `<p class="final-message">Lots of love for you! Hope you loved this surprise! 🎁💕</p>`

---

### 7️⃣ **PHOTOS** (Your own images)

**Search for:** `images/photo`

**Lines to edit:**
- Line 77: `<img src="images/photo1.jpg" alt="Memory 1">`
- Line 81: `<img src="images/photo2.jpg" alt="Memory 2">`
- Line 85: `<img src="images/photo3.jpg" alt="Memory 3">`
- Line 89: `<img src="images/photo4.jpg" alt="Memory 4">`

**To use your photos:**
1. Put your photos in the `images/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
3. That's it! They'll show up automatically

---

## ✏️ EXAMPLE EDIT

**Want to change the name from "Cutiepie" to "Sarah"?**

1. Open `index.html` in text editor
2. Press `Ctrl+F` (or `Cmd+F` on Mac)
3. Search for: `Cutiepie`
4. Replace all with: `Sarah`
5. Save file
6. Open `index.html` in browser - Done! 🎉

---

## 🎨 PAGE TITLES (Optional - if you want to change headings)

**Search for these to change page titles:**

- Line 22: `Crafting Your Special Moment` ← Intro loading text
- Line 33: `A <span class="highlight">cutiepie</span> was born today,` ← Birthday intro
- Line 46: `Happy Birthday` ← Balloon page title
- Line 47: `Let's make this day EXTRA special! 🌟` ← Balloon subtitle
- Line 71: `Some Sweet Moments 📸` ← Photo carousel title
- Line 72: `Swipe through our beautiful memories ✨` ← Photo subtitle
- Line 109: `A Special Message For You 💝` ← Card page title
- Line 110: `Open your heart to read this... 💌` ← Card subtitle
- Line 146: `The Grand Finale! 🎁` ← Final page title
- Line 147: `Something special is waiting for you... 🌟` ← Final subtitle

---

## 🚀 QUICK CHECKLIST

- [ ] Open `index.html` in text editor
- [ ] Search and replace `Cutiepie` with the person's name
- [ ] Change `18` to their age
- [ ] Edit all 4 balloon messages (search `data-message=`)
- [ ] Edit greeting card message (search `Dear Cutiepie,`)
- [ ] Edit final message (search `Lots of love`)
- [ ] Put your photos in `images/` folder (photo1.jpg - photo4.jpg)
- [ ] Edit photo captions if needed (search `photo-caption`)
- [ ] Save and open in browser!

---

## 📂 PROJECT FILES

```
Customized-Website/
├── index.html     ← EDIT THIS! All content is here ⭐
├── script.js      ← Don't touch (handles animations)
├── styles.css     ← Don't touch (handles styling)
├── images/        ← PUT YOUR PHOTOS HERE 📸
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   └── celebration.gif
└── CUSTOMIZATION-GUIDE.md ← This guide
```

---

## 💡 PRO TIPS

1. **Use Find & Replace** - Much faster than manually editing
2. **Save often** - Save after each change
3. **Test frequently** - Open in browser to see changes
4. **Keep emojis** - They make it fun! 🎉💕✨
5. **Backup original** - Copy `index.html` before editing

---

## 🎉 THAT'S IT!

Everything is now in ONE file (`index.html`). No config files, no variables - just simple HTML you can edit directly!

Made with 💝 - Happy customizing!
