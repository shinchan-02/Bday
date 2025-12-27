# 🎉 Amazing Birthday Surprise Website

A stunning, interactive birthday website with animations, games, and personalized messages!

## ✨ Features

- **Countdown Animation** - Exciting 3-2-1 countdown
- **Real Cake Image** - Beautiful cake with candles
- **Floating Decorations** - Emojis and shapes floating around
- **Balloon Game** - Pop balloons to reveal sweet messages
- **Photo Carousel** - Beautiful image slideshow
- **Greeting Card** - Tap-to-open 3D flip animation
- **Grand Finale** - Cute GIF with confetti
- **Fully Responsive** - Works perfectly on mobile and desktop

## 🎨 Customization Guide

Edit `config.js` to personalize the experience:

### Basic Info
```javascript
name: "Cutiepie",        // Birthday person's name
dob: "2007-12-27",       // Date of birth
age: 18,                 // Their age
```

### Balloon Messages
```javascript
balloonMessages: [
  "You are absolutely amazing! 🌟",
  "Your smile lights up the world! 😊",
  "You make every day better! 💫",
  "You're one in a million! 🎉"
]
```

### 📸 Adding Your Own Photos

**IMPORTANT:** Put your photos in the `images` folder!

#### Step 1: Prepare Your Photos
1. Create 4 photos (or more)
2. Rename them to: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
3. Recommended size: 800x1000px or similar portrait ratio

#### Step 2: Place in Images Folder
```
Customized-Website/
├── images/
│   ├── photo1.jpg  ← Your first photo
│   ├── photo2.jpg  ← Your second photo
│   ├── photo3.jpg  ← Your third photo
│   └── photo4.jpg  ← Your fourth photo
├── index.html
├── styles.css
└── config.js
```

#### Step 3: Update Captions (Optional)
Edit `config.js` if you want to change the captions:

```javascript
photoMoments: [
  {
    url: "images/photo1.jpg",
    caption: "Your custom caption here! 💕"
  },
  // ... add more photos
]
```

#### 💡 Tips:
- **Current Setup**: The website already has placeholder images in `images/` folder
- **Replace**: Just replace `photo1.jpg`, `photo2.jpg`, etc. with your own photos
- **Add More**: You can add `photo5.jpg`, `photo6.jpg`, etc. and update config.js
- **File Format**: Use `.jpg`, `.jpeg`, or `.png` files
- **Keep Names**: Use the exact filenames: `photo1.jpg`, `photo2.jpg`, etc.

### Special Message
```javascript
specialMessage: `Your personal message here...`
```

### Final Message
```javascript
finalMessage: "Your final surprise message!"
```

## 🚀 How to Use

1. **Add Photos** - Put your images in the `images` folder (photo1.jpg, photo2.jpg, etc.)
2. **Customize** - Edit `config.js` with name, age, messages
3. **Open** - Double-click `index.html` to open in browser
4. **Share** - Host it online or share the folder directly

## 🌐 Hosting Options

### Free Hosting Services:
- **Netlify** - Drag & drop the entire folder
- **Vercel** - Connect your GitHub repo
- **GitHub Pages** - Push to GitHub and enable Pages
- **Surge** - Simple command-line deployment

### Quick Deploy to Netlify:
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag your entire project folder (including `images/`)
3. Get your unique URL instantly!

## 📁 Project Structure

```
Customized-Website/
├── images/              ← PUT YOUR PHOTOS HERE!
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── photo4.jpg
├── index.html          ← Main website file
├── styles.css          ← All the beautiful styling
├── script.js           ← All the interactive magic
├── config.js           ← CUSTOMIZE THIS!
└── README.md           ← This file
```

## 🎁 Perfect For

- Birthdays
- Anniversaries
- Special celebrations
- Romantic surprises
- Friendship appreciation

## 🎂 What's New

- ✅ Real cake image (not CSS blocks)
- ✅ Decorations float around the environment
- ✅ Balloon messages display longer (3.5 seconds)
- ✅ Cute animated GIF in finale
- ✅ Local image support with `images/` folder
- ✅ All message lines show correctly in card
- ✅ Premium fonts (Pacifico, Fredoka, Poppins, Dancing Script)

---

Made with 💝 using HTML, CSS, and JavaScript
