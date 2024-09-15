// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Get playlist container
    const playlistDiv = document.getElementById('playlists');

    for (let i = 0; i < Object.keys(guardians).length; i++){
        const playlist = songs.filter(song => song.genre === Object.values(guardians)[i]).map(song => `${song.title} by ${song.artist}`);
        

        const guardianDiv = document.createElement('div');
        playlistDiv.appendChild(guardianDiv);
        const att = document.createAttribute("class");
        att.value = "playlist";
        guardianDiv.setAttributeNode(att);
        
        const guardianTitle = document.createElement('h3');
        guardianTitle.textContent = `${Object.keys(guardians)[i]}'s Playlist`;  
        guardianDiv.appendChild(guardianTitle);

        const guardianPlaylist = document.createElement('ul');
        guardianDiv.appendChild(guardianPlaylist);
        playlist.forEach(song => {
            const songList = document.createElement('li');
            const att = document.createAttribute("class");
            att.value = "song";
            songList.setAttributeNode(att);
            const attr = document.createAttribute("class");
            attr.value = "playlist";
            songList.setAttributeNode(attr);
            songList.textContent = song;
            guardianPlaylist.appendChild(songList);
        });
    }
  
    /*

    
    
    starLordDiv.appendChild(starLordPlaylist);
    starLordList.forEach(song => {
        const songList = document.createElement('li');
        songList.textContent = song;
        starLordPlaylist.appendChild(songList);
    });

    */
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


