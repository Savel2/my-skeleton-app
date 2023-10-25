<script>
    let teamName = ''; // Initialize a variable to store the team name entered by the user
    let scoreResult = ''; // Initialize a variable to store the score result
  
    async function getFootballScore() {
      try {
        // Make a POST request to your Flask backend to get the football score
        const flaskURL = 'http://127.0.0.1:5001'; // Change to your Flask app's URL
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
  
  <div class="container mx-auto p-8 space-y-8">
    <h1 class="h1">Passion</h1>
    <p>Would you like to know about your favourite football team's recent match against mine?</p>
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] max-w-4xl">
      <div class="input-group-shim"><img src="/323-football_102392.png" alt="Football" style="width: 40px; height: 40px;"/></div>
      <input type="search" placeholder="Enter your team name..." bind:value={teamName} />
      <button class="variant-filled-primary" on:click={getFootballScore}>Check the score</button>
    </div>
    {#if scoreResult}
      <p class="font-bold text-purple-700">The last game between our teams: {scoreResult}</p>
    {/if}
  </div>
