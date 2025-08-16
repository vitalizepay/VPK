# வி. பி. கந்தவேல் - அதிகாரப்பூர்வ இணையதளம் 🌿

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green)](https://vpkandavel.github.io/VPK/)
[![ADMK](https://img.shields.io/badge/அ.தி.மு.க-பொதுச்செயலாளர்-brightgreen)](https://github.com/vpkandavel/VPK)
[![Tamil](https://img.shields.io/badge/Language-Tamil-orange)](https://ta.wikipedia.org/)

**வி. பி. கந்தவேல் அவர்களின் அதிகாரப்பூர்வ இணையதளம் - அ.தி.மு.க பொதுச்செயலாளர், சூலூர்**

> *"மக்களின் நம்பிக்கை. உண்மையான சேவை."*

## 🌟 விஷயங்கள் (Features)

### 🏛️ முக்கிய பிரிவுகள்
- **முகப்பு (Home)** - வரவேற்பு மற்றும் சேவை புள்ளிவிவரங்கள்
- **எங்களைப் பற்றி (About)** - வாழ்க்கை வரலாறு மற்றும் அ.தி.மு.க கொள்கைகள்
- **முயற்சிகள் (Initiatives)** - சமூக சேவை திட்டங்கள்
- **செய்திகள் (News)** - சமீபத்திய புதுப்பிப்புகள் மற்றும் நிகழ்வுகள்
- **புகைப்பட தொகுப்பு (Gallery)** - சேவை மற்றும் நிகழ்வுகளின் படங்கள்
- **தொடர்பு (Contact)** - பிரச்சினை தெரிவிப்பு மற்றும் தன்னார்வலர் பதிவு

### 🎨 அ.தி.மு.க தீம் அம்சங்கள்
- **🍃 அனிமேஷன்கள்**: மிதக்கும் இரண்டிலை சின்னங்கள்
- **🎨 வண்ணத் தீம்**: அ.தி.மு.க பச்சை, சிவப்பு, மற்றும் தங்க வண்ணங்கள்
- **🖼️ உண்மையான படங்கள்**: வி.பி.கந்தவேல் மற்றும் அ.தி.மு.க தலைவர்களின் படங்கள்
- **📱 Responsive**: மொபைல், டேப்லெட் மற்றும் டெஸ்க்டாப்பில் சிறந்த அனுபவம்

### 🚀 தொழில்நுட்ப அம்சங்கள்
- **⚡ வேகமான Loading**: CSS மற்றும் JavaScript தேர்ச்சி பெற்று
- **🔍 SEO Optimized**: தேடுபொறிகளுக்கு உகந்த மேல்ப்பொறி
- **♿ Accessibility**: ARIA லேபல்கள் மற்றும் கீபோர்டு வழிசெலுத்தல்
- **💾 Local Storage**: படிவ தகவல்கள் உள்ளூர் சேமிப்பு
- **📧 WhatsApp Integration**: WhatsApp வழியாக நேரடி தொடர்பு

## 🛠️ நிறுவல் (Installation)

### முன்நிபந்தனைகள் (Prerequisites)
- Git
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)

### படிகள் (Steps)

1. **Repository Clone செய்யவும்:**
   ```bash
   git clone https://github.com/vpkandavel/VPK.git
   cd VPK
   ```

2. **Local Server துவக்கவும்:**
   ```bash
   # Python வைத் தாக்கவும் (Python 3)
   python -m http.server 8000
   
   # அல்லது Python 2
   python -m SimpleHTTPServer 8000
   
   # அல்லது Node.js serve
   npx serve .
   
   # அல்லது PHP
   php -S localhost:8000
   ```

3. **இணையதளத்தைத் திறக்கவும்:**
   ```
   http://localhost:8000
   ```

## 📁 கோப்பு அமைப்பு (File Structure)

```
VPK/
├── index.html              # முகப்புப் பக்கம்
├── about.html             # எங்களைப் பற்றிப் பக்கம்
├── contact.html           # தொடர்புப் பக்கம்
├── gallery.html           # புகைப்பட தொகுப்பு
├── initiatives.html       # முயற்சிகள் பக்கம்
├── news.html              # செய்திகள் பக்கம்
├── favicon.svg            # Website Icon
├── README.md              # இந்த கோப்பு
├── assets/
│   ├── css/
│   │   └── style.css      # முக்கிய Stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript செயல்பாடுகள்
│   └── img/
│       ├── vpkandavel_*.jpg    # VP Kandavel படங்கள்
│       ├── admk_*.jpg          # ADMK சின்னங்கள்
│       └── ...                 # மற்ற படங்கள்
```

## 🚀 GitHub Pages Deployment

### உடனடி Deployment வழிமுறை:
1. **Repository Setup:**
   ```bash
   git clone https://github.com/vpkandavel/VPK.git
   cd VPK
   ```

2. **GitHub Pages செயல்படுத்துதல்:**
   - Repository settings → Pages சென்று
   - Source: "Deploy from a branch" 
   - Branch: "main" தேர்வு செய்து Save

3. **Live Website:**
   🌐 **https://vpkandavel.github.io/VPK/**

### புதிய மாற்றங்களை Upload செய்ய:
```bash
git add .
git commit -m "Website updates"
git push origin main
```
*5 நிமிடங்களில் live website update ஆகிவிடும்!*

### உள்ளூர் Development
```bash
# Changes செய்து test செய்யவும்
git add .
git commit -m "Update: describe your changes"
git push origin main
```

## 🎨 Customization

### வண்ணங்களை மாற்ற (Color Customization):
`assets/css/style.css` கோப்பில் `:root` பிரிவில்:
```css
:root {
  --admk-green: #228B22;       /* முக்கிய பச்சை */
  --admk-red: #DC143C;         /* செகண்டரி சிவப்பு */
  --admk-gold: #FFD700;        /* Accent தங்கம் */
}
```

### புதிய படங்கள் சேர்க்க:
1. படங்களை `assets/img/` கோப்புறையில் சேர்க்கவும்
2. HTML கோப்புகளில் src paths update செய்யவும்

### WhatsApp எண் மாற்ற:
`assets/js/main.js` கோப்பில்:
```javascript
const waNum = '919841373309'; // புதிய எண் இங்கே மாற்றவும்
```

## 📱 மொபைல் Optimization

இந்த இணையதளம் mobile-first அணுகுமுறையுடன் உருவாக்கப்பட்டுள்ளது:

- **Responsive Grid**: அனைத்து screen sizesக்கும் ஏற்றவாறு
- **Touch-friendly**: பொத்தான்கள் மற்றும் இணைப்புகள் touch-க்கு எளிது
- **Fast Loading**: படங்கள் lazy loading மற்றும் optimized assets

## 🔧 Development Commands

```bash
# புதிய feature branch
git checkout -b feature-name

# Changes commit செய்ய
git add .
git commit -m "Add: new feature description"

# Branch push செய்ய
git push origin feature-name

# Main branch merge
git checkout main
git merge feature-name
```

## 📈 Analytics & SEO

### Built-in SEO Features:
- Meta tags மற்றும் Open Graph
- Structured data (JSON-LD)
- Canonical URLs
- Alt texts for images
- Semantic HTML5

### Analytics setup:
Google Analytics code சேர்க்க, `</head>` tag-க்கு முன் சேர்க்கவும்.

## 🤝 Contributing

இந்த project-க்கு contribute செய்ய விரும்பினால்:

1. Repository-யை fork செய்யவும்
2. Feature branch உருவாக்கவும் (`git checkout -b feature/AmazingFeature`)
3. Changes commit செய்யவும் (`git commit -m 'Add some AmazingFeature'`)
4. Branch-ஐ push செய்யவும் (`git push origin feature/AmazingFeature`)
5. Pull Request திறக்கவும்

## 📞 ஆதரவு (Support)

### Technical Support:
- **GitHub Issues**: [Create an issue](https://github.com/vpkandavel/VPK/issues)
- **Email**: webmaster@example.com

### Official Contact:
- **Phone**: [+91 98413 73309](tel:+919841373309)
- **Facebook**: [VpkKandavel](https://www.facebook.com/VpkKandavel/)
- **WhatsApp**: [Message](https://wa.me/919841373309)

## 📜 License

இந்த project MIT License கீழ் உரிமம் பெற்றது. முழு விவரங்களுக்கு [LICENSE](LICENSE) கோப்பைப் பார்க்கவும்.

## 🙏 நன்றி (Acknowledgments)

- **Font Awesome**: Icons-க்கு நன்றி
- **Google Fonts**: Tamil மற்றும் English fonts-க்கு நன்றி
- **Unsplash**: Placeholder images-க்கு நன்றி
- **அ.தி.மு.க**: கட்சி ஆதரவு மற்றும் வழிகாட்டுதலுக்கு நன்றி

---

## 🏷️ Tags
`tamil` `admk` `politics` `social-service` `government` `community` `responsive` `github-pages` `html5` `css3` `javascript`

---

**Made with ❤️ for the people of Sulur by V. P. Kandavel**

© 2024 வி. பி. கந்தவேல். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
