<!-- <script lang="ts">
    export let date: string;
    export let jobTitle: string;
    export let description: string;
    export let skills: string;
  </script>
  
  <div class="job-block">
    <div class="job-dates">
      {date}
    </div>
    <div class="job-info">
      <p>{jobTitle}</p>
      <p>{description}</p>
      <p>{skills}</p>
    </div>
  </div>
  
  <style>
    /* Add your CSS styles for job block here */
    .job-block {
      display: flex;
      margin-bottom: 16px;
    }
    .job-dates {
      min-width: 150px;
      text-align: left;
      margin-right: 16px;
    }
    .job-info {
      flex-grow: 1;
    }
  </style> -->

<script lang="ts">
    export let date: string;
    export let jobTitle: string;
    export let description: string;
    export let skills: string;
  </script>
  
  <div class="flex flex-wrap gap-5 p-2">

    <div class="job-dates">
      {date}
    </div>

    <div class="flex flex-col gap-5 max-w-lg">
      <p class="variant-filled-primary">{jobTitle}</p>
      <p>{description}</p>
      <p>{skills}</p>
    </div>
  </div>
  
