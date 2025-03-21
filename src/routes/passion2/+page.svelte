<script lang="ts">
  import { onMount } from 'svelte';

  type Photo = {
        src: string;
        alt: string;
        width: string;
        height: string;
        top: string;
        left: string;
        rotate: string;
        offsetX: string; // Horizontal offset
        offsetY: string; // Vertical offset
    };
  // Import your photos or define them here
  let photos: Photo[] = [
    { src: 'Screenshot2023-11-10at19.32.42.png', alt: 'Description of the first photo', width: '300px', height: '400px', top: '0px', left: '0px', rotate: '2deg', offsetX: '-300px', offsetY: '0px'  },
    { src: 'Screenshot2023-11-02at20.55.50.png', alt: 'Description of the first photo', width: '300px', height: '375px', top: '0px', left: '0px', rotate: '-5deg', offsetX: '330px', offsetY: '300px'  },
    { src: 'IMG_3736copy.jpg', alt: 'Description of the first photo', width: '300px', height: '387px', top: '0px', left: '0px', rotate: '-10deg', offsetX: '-300px', offsetY: '250px'  },
    { src: 'Screenshot2023-11-02at20.52.25.png', alt: 'Description of the first photo', width: '300px', height: '400px', top: '0px', left: '0px', rotate: '5deg', offsetX: '300px', offsetY: '0px'  },
    { src: '0000808500252copy.jpg', alt: 'Description of the first photo', width: '300px', height: '370px', top: '0px', left: '0px', rotate: '1deg', offsetX: '0px', offsetY: '100px'  }
    
  ];

  let displayedPhotos: Photo[];

// Responsive adjustment
onMount(() => {
    const updatePhotos = () => {
        const width = window.innerWidth;
        displayedPhotos = width > 768 ? photos : photos.slice(0, 3); // Show 3 photos for mobile, 5 for desktop
    };

    window.addEventListener('resize', updatePhotos);
    updatePhotos();

    return () => {
        window.removeEventListener('resize', updatePhotos);
    };
});

let teamName = ''; // Initialize a variable to store the team name entered by the user
  let scoreResult = ''; // Initialize a variable to store the score result

  async function getFootballScore() {
    try {
      // Make a POST request to your Flask backend to get the football score
      const flaskURL = 'https://flask-web-port.vercel.app'; // Change to your Flask app's URL
      const endpoint = '/get_football_score';
      const response = await fetch(flaskURL + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team_name: teamName }),
      });

      if (response.ok) {
        const data = await response.json();
        if ('noresult' in data) {
        scoreResult = data.noresult;
      } else if ('result' in data) {
        scoreResult = data.result;
      }
    } else {
      scoreResult = 'Unable to retrieve score';
      }
    } catch (error) {
      scoreResult = 'An error occurred';
      console.error(error);
    }
  }
</script>


<style>
  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh; /* Full viewport height */
    position: relative;
    
  }

  .photos-group {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 40%;
        top: 5%;
  }

  .photo-frame {
    border: 2px solid #373384;
        background-color: #373384;
        position: absolute;
        padding: 10px 5px;
        box-sizing: border-box;
        width: var(--image-width);
        height: var(--image-height);
        transform: translate(var(--offsetX), var(--offsetY)) rotate(var(--rotate));
  }

  .photo-frame img {
      width: 100%;
      height: auto;
      object-fit: cover;
  }
</style>

<div class="photo-container">
    <div class="photos-group">
    {#each photos as photo}
        <div class="photo-frame" style="--image-width: {photo.width};
        --image-height: {photo.height}; --rotate: {photo.rotate};
        --offsetX: {photo.offsetX}; --offsetY: {photo.offsetY};">
            <img src={photo.src} alt={photo.alt} />
        </div>
    {/each}
  </div>
</div>

<div class="container mx-auto p-8 space-y-16 max-w-4xl md:p-24">
  <h1 class="h1 text-center">Passion</h1>
  <p>Would you like to know about your favourite football team's recent match against mine?</p>
  <div class="flex">
    <input class="input" title="Input (text)" type="text" placeholder="Enter team..." bind:value={teamName}/>
    <button class="btn variant-filled-primary px-2 md:px-4" on:click={getFootballScore}>Check the score</button>
  </div>
  {#if scoreResult}
    <p class="font-bold text-purple-700">The last game between our teams: {scoreResult}</p>
  {/if}
</div>