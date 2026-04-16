// 1. Tere Games ka Data (Files ke naam check kar lena vai)
const gamesData = [
    { name: "GTA 6", url: "GTA6-blog.html" },
    { name: "Resident Evil 9", url: "Resident.html" },
    { name: "Indiana Jones", url: "Indiana.html" },
    { name: "Marvel's Wolverine", url: "marvel.html" },  // Agar page nahi hai toh # rehne dena
    { name: "StarRupture", url: "star.html"},
    { name: "007 First Light", url: "007.html"},
    { name: "Crimson Desert", url: "crimson.html"}
];

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');

// 2. Typing start hote hi suggestions dikhao
searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = ''; // Pehle wala saaf karo
    
    if (input.length > 0) {
        // Filter karke match dhoondo
        const results = gamesData.filter(item => 
            item.name.toLowerCase().includes(input)
        );

        if (results.length > 0) {
            suggestionsBox.style.display = 'block'; // Box dikhao
            results.forEach(result => {
                const div = document.createElement('div');
                div.innerHTML = result.name;
                div.classList.add('suggestion-item');
                
                // Click karne pe direct page pe le jao
                div.onclick = () => {
                    window.location.href = result.url;
                };
                suggestionsBox.appendChild(div);
            });
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// 3. Enter key dabane pe pehla result open karo
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = searchInput.value.toLowerCase();
        const firstMatch = gamesData.find(game => game.name.toLowerCase().includes(input));
        if (firstMatch) {
            window.location.href = firstMatch.url;
        }
    }
});

// 4. Bahar click karne pe suggestions band ho jayein
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box-container')) {
        suggestionsBox.style.display = 'none';
    }
});
