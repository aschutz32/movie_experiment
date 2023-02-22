
  // // NOTE: Full Movie 1
  // function Experiment_Start_Engagement(){
  //   var trial = {
  //     type: jsPsychVideoSliderResponse,
  //     stimulus: ['../movies/7T_MOVIE1_CC1.mp4'],
  //     button_label: '',
  //     labels: SLIDE_LABELS_ENGAGEMENT,
  //     trial_ends_after_video: true,
  //     // prompt: '<p>Please continuously move the slider to match how engaging you find each part of the videos.</p>',
  //     track_slider_history: true,
  //     on_load: function() {
  //       document.getElementById("jspsych-video-slider-response-response").focus()
  //     },
  //     data: {TASK: 'Experiment_Start_Engagement_M1' },
  //     on_finish: function(data){
  //       console.log(data);
  //     }
  //   }
  //   return trial;
  // }
  
  // see if way to make variable an input!

  // NOTE: M1_Clips: 'movies/Movie_1/M1Clip1.mp4', 'movies/Movie_1/M1Clip2.mp4', 'movies/Movie_1/M1Clip3.mp4', 'movies/Movie_1/M1Clip4.mp4', 'movies/Movie_1/M1Clip5.mp4'
  function Experiment_Start_M1Clip1_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_1/M1Clip1.mp4'], 
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M1Clip1_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M1Clip2_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_1/M1Clip2.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the clip.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M1Clip2_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M1Clip3_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_1/M1Clip3.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M1Clip3_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M1Clip4_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_1/M1Clip4.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M1Clip4_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
  function Experiment_Start_M1Clip5_Eng(){
    var trial = {
      type: jsPsychVideoSliderResponse,
      stimulus: ['../movies/Movie_1/M1Clip5.mp4'],
      button_label: '',
      labels: SLIDE_LABELS_ENGAGEMENT,
      trial_ends_after_video: true,
      // prompt: 'Please continuously move the slider to match how engaging you find each part of the videos.',
      track_slider_history: true,
      on_load: function() {
        document.getElementById("jspsych-video-slider-response-response").focus()
      },
      data: {TASK: 'Experiment_Start_M1Clip5_Eng' },
      on_finish: function(data){
        console.log(data);
      }
    }
    return trial;
  }
